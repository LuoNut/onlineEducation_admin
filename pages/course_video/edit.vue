<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validateTrigger="bind">
      <uni-forms-item name="user_id" label="" required>
        <uni-easyinput placeholder="课程作者ID， 参考`uni-id-users` 表" v-model="formData.user_id"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="course_name" label="课程名称" required>
        <uni-easyinput placeholder="课程名称" v-model="formData.course_name" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="courseCover" label="课程封面">
        <uni-easyinput placeholder="课程封面" v-model="formData.courseCover"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="subject_type_one" label="课程大类型" required>
        <uni-easyinput placeholder="课程大类型" v-model="formData.subject_type_one"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="subject_type_two" label="课程小类型" required>
        <uni-easyinput placeholder="课程小类型" v-model="formData.subject_type_two"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="course_intro" label="课程简介">
        <uni-easyinput placeholder="课程简介" v-model="formData.course_intro"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="courseware" label="课程课件">
        <uni-data-checkbox :multiple="true" v-model="formData.courseware"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="course_video" label="课程视频">
        <uni-data-checkbox :multiple="true" v-model="formData.course_video"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="view_count" label="阅读数量">
        <uni-easyinput placeholder="阅读数量" type="number" v-model="formData.view_count"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="like_count" label="">
        <uni-easyinput placeholder="喜欢数、点赞数" type="number" v-model="formData.like_count"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="comment_count" label="">
        <uni-easyinput placeholder="评论数量" type="number" v-model="formData.comment_count"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="picurls" label="封面大图">
        <uni-easyinput placeholder="缩略图地址" v-model="formData.picurls"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="publish_date" label="发表时间">
        <uni-datetime-picker return-type="timestamp" v-model="formData.publish_date"></uni-datetime-picker>
      </uni-forms-item>
      <uni-forms-item name="course_video_num" label="课程视频数量">
        <uni-easyinput placeholder="课程视频数量" type="number" v-model="formData.course_video_num"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="course_time" label="课程总时间">
        <uni-easyinput placeholder="课程总时间" type="number" v-model="formData.course_time"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="last_modify_date" label="最后修改时间">
        <uni-datetime-picker return-type="timestamp" v-model="formData.last_modify_date"></uni-datetime-picker>
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
  import { validator } from '../../js_sdk/validator/course_video.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'course_video';

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
        "course_name": "",
        "courseCover": "",
        "subject_type_one": "",
        "subject_type_two": "",
        "course_intro": "",
        "courseware": [],
        "course_video": [],
        "view_count": 55,
        "like_count": 0,
        "comment_count": 0,
        "picurls": "",
        "publish_date": null,
        "course_video_num": null,
        "course_time": null,
        "last_modify_date": null
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
        db.collection(dbCollectionName).doc(id).field("user_id,course_name,courseCover,subject_type_one,subject_type_two,course_intro,courseware,course_video,view_count,like_count,comment_count,picurls,publish_date,course_video_num,course_time,last_modify_date").get().then((res) => {
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
