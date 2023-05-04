<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validateTrigger="bind">
      <uni-forms-item name="title" label="标题" required>
        <uni-easyinput placeholder="标题" v-model="formData.title" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="content" label="内容" required>
		   <webEdit v-model="formData.content" ids="content"></webEdit>
        <!-- <uni-easyinput placeholder="文章内容" v-model="formData.content" trim="right"></uni-easyinput> -->
      </uni-forms-item>
<!--      <uni-forms-item name="avatar" label="封面">
        <uni-easyinput placeholder="缩略图地址" v-model="formData.avatar" trim="both"></uni-easyinput>
      </uni-forms-item> -->
	  
<!-- 	  <uni-forms-item name="avatar" label="标题封面">
	    <uni-file-picker file-mediatype="image" return-type="object" v-model="formData.avatar"></uni-file-picker>
	  </uni-forms-item> -->
	  <uni-forms-item name="avatar" label="封面大图">
	    <uni-file-picker :image-styles="imageStyles" file-mediatype="image" return-type="object" v-model="formData.avatar"></uni-file-picker>
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
  import { validator } from '../../js_sdk/validator/inform.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'inform';

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
        "title": "",
        "content": "",
        "avatar": null,
      }
      return {
        formData,
        formOptions: {},
        rules: {
          ...getValidator(Object.keys(formData))
        },
		
		imageStyles:{                          //图片上传框的样式
						width:200,
						height:200,
					},
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
        return db.collection(dbCollectionName).add(value).then((res) => {
          uni.showToast({
            title: '新增成功'
          })
          this.getOpenerEventChannel().emit('refreshData')
          setTimeout(() => uni.navigateBack(), 500)
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        })
      }
    }
  }
</script>

<style lang="scss" scoped >
	.uni-app--showleftwindow .uni-container .uni-forms {
	    padding: 15px;
	    max-width: 100%;
	}
	/deep/ .uni-forms-item__label {
		width: 160rpx;
	}
	/deep/ .file-picker__box {
		width: 300px;
	}
</style>
