<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validateTrigger="bind">
      <uni-forms-item name="user_id" label="">
        <uni-easyinput placeholder="题库ID， 参考`uni-id-users` 表" v-model="formData.user_id"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="subject_type_one" label=" ">
        <uni-easyinput placeholder="题目大类型" v-model="formData.subject_type_one"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="subject_type_two" label="题目小类型">
        <uni-easyinput placeholder="题目小类型" v-model="formData.subject_type_two"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="title" label="标题" required>
        <uni-easyinput placeholder="标题" v-model="formData.title" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="src_title" label="题目是否有图片">
        <uni-file-picker file-mediatype="image" return-type="object" v-model="formData.src_title"></uni-file-picker>
      </uni-forms-item>
      <uni-forms-item name="isimg" label="1为文字 2为图片 选项">
        <uni-easyinput placeholder="1为文字 2为图片 选项" type="number" v-model="formData.isimg"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="code" label="1为单选 2为多选" required>
        <uni-easyinput placeholder="1为单选 2为多选" type="number" v-model="formData.code"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="option" label="选项">
        <uni-data-checkbox :multiple="true" v-model="formData.option"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="true_option" label="正确选项" required>
        <uni-data-checkbox :multiple="true" v-model="formData.true_option"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="current" label="当前所选">
        <uni-data-checkbox :multiple="true" v-model="formData.current"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="topic" label="所选是否正确 默认为'' true为正确 控制选项高亮">
        <switch @change="binddata('topic', $event.detail.value)" :checked="formData.topic"></switch>
      </uni-forms-item>
      <uni-forms-item name="code2" label="选项选择状态 默认为true false为选择">
        <switch @change="binddata('code2', $event.detail.value)" :checked="formData.code2"></switch>
      </uni-forms-item>
      <uni-forms-item name="alt" label="正确答案">
        <uni-easyinput placeholder="正确答案" v-model="formData.alt"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="testList" label="选项" required>
        <uni-data-checkbox :multiple="true" v-model="formData.testList"></uni-data-checkbox>
      </uni-forms-item>
      <view class="uni-button-group">
        <button type="primary" class="uni-button" style="width: 100px;" @click="submit">提交</button>
        <navigator open-type="navigateBack" style="margin-left: 15px;">
          <button class="uni-button" style="width: 100px;">返回</button>
        </navigator>
      </view>
    </uni-forms>
  </view>
</template>

<script>
  import { validator } from '../../js_sdk/validator/question_bank.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'question_bank';

  function getValidator(fields) {
    let result = {}
    for (let key in validator) {
      if (fields.includes(key)) {
        result[key] = validator[key]
      }
    }
    return result
  }

  

  export default {
    data() {
      let formData = {
        "user_id": "",
        "subject_type_one": "",
        "subject_type_two": "",
        "title": "",
        "src_title": null,
        "isimg": null,
        "code": null,
        "option": [],
        "true_option": [],
        "current": [],
        "topic": null,
        "code2": true,
        "alt": "",
        "testList": []
      }
      return {
        formData,
        formOptions: {},
        rules: {
          ...getValidator(Object.keys(formData))
        }
      }
    },
    onLoad(e) {
      if (e.id) {
        const id = e.id
        this.formDataId = id
        this.getDetail(id)
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      
      /**
       * 验证表单并提交
       */
      submit() {
        uni.showLoading({
          mask: true
        })
        this.$refs.form.validate().then((res) => {
          return this.submitForm(res)
        }).catch(() => {
        }).finally(() => {
          uni.hideLoading()
        })
      },

      /**
       * 提交表单
       */
      submitForm(value) {
        // 使用 clientDB 提交数据
        return db.collection(dbCollectionName).doc(this.formDataId).update(value).then((res) => {
          uni.showToast({
            title: '修改成功'
          })
          this.getOpenerEventChannel().emit('refreshData')
          setTimeout(() => uni.navigateBack(), 500)
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        })
      },

      /**
       * 获取表单数据
       * @param {Object} id
       */
      getDetail(id) {
        uni.showLoading({
          mask: true
        })
        db.collection(dbCollectionName).doc(id).field("user_id,subject_type_one,subject_type_two,title,src_title,isimg,code,option,true_option,current,topic,code2,alt,testList").get().then((res) => {
          const data = res.result.data[0]
          if (data) {
            this.formData = data
            
          }
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        }).finally(() => {
          uni.hideLoading()
        })
      }
    }
  }
</script>
