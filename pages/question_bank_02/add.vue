<template>
	<view class="uni-container">
		<uni-forms ref="form" :model="formData" validateTrigger="bind">
			<view class="questionsType">
				<uni-forms-item name="subject_type_one" label="题目大类型">
					<uni-data-select v-model="formData.subject_type_one" :localdata="columns"
						@change="oneTypeFun"></uni-data-select>

				</uni-forms-item>
				<uni-forms-item name="subject_type_two" label="题目小类型">
					<uni-data-select v-model="formData.subject_type_two" :localdata="columnData[twoQuestionsTypeData]"
						@change="twoTypeData"></uni-data-select>
				</uni-forms-item>
			</view>


			<uni-forms-item name="isimg" label="1为文字 2为图片 选项">
				<radio-group @change="onQuestionsTitleType">
					<label>
						<radio value="1" checked /><text>文字</text>
					</label>
					<label>
						<radio value="2" /><text>图片</text>
					</label>
				</radio-group>
			</uni-forms-item>

			<uni-forms-item v-if="formData.isimg ==  1" name="title" label="标题" required>
				<uni-easyinput placeholder="标题" v-model="formData.title" trim="both"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item v-else name="src_title" label="题目是否有图片">
				<uni-file-picker file-mediatype="image" return-type="object"
					v-model="formData.src_title"></uni-file-picker>
			</uni-forms-item>

			<uni-forms-item name="code" label="1为单选 2为多选" required>
				<radio-group @change="onQuestionsSelectType">
					<label>
						<radio value="1" checked /><text>单选</text>
					</label>
					<label>
						<radio value="2" /><text>多选</text>
					</label>
				</radio-group>
			</uni-forms-item>
			<uni-forms-item name="option" label="选项">
				<uni-easyinput class="optionStyle" placeholder="A:" v-model="formData.alt"></uni-easyinput>
				<uni-easyinput class="optionStyle" placeholder="B:" v-model="formData.alt"></uni-easyinput>
				<uni-easyinput class="optionStyle" placeholder="C:" v-model="formData.alt"></uni-easyinput>
				<uni-easyinput class="optionStyle" placeholder="D:" v-model="formData.alt"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="true_option" label="正确选项" required>

				<radio-group v-if="formData.code == 1" @change="onCorrectAnswer">
					<label class="trueOptionStyle">
						<radio value="A" /><text>A</text>
					</label>
					<label class="trueOptionStyle">
						<radio value="B" /><text>B</text>
					</label>
					<label class="trueOptionStyle">
						<radio value="C" /><text>C</text>
					</label>
					<label class="trueOptionStyle">
						<radio value="D" /><text>D</text>
					</label>
				</radio-group>
				<checkbox-group v-else  @change="onCorrectAnswer">
					<label class="trueOptionStyle">
						<checkbox value="A" />
						A
					</label>
					<label class="trueOptionStyle">
						<checkbox value="B" />
						B
					</label>
					<label class="trueOptionStyle">
						
						<checkbox value="C" />
						C
					</label>
					<label class="trueOptionStyle">
						
						<checkbox value="D" />
						D
					</label>
				</checkbox-group>
			</uni-forms-item>
			


			<uni-forms-item name="alt" label="本题描述">
				<uni-easyinput placeholder="本题描述" v-model="formData.alt"></uni-easyinput>
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
	import {
		validator
	} from '../../js_sdk/validator/question_bank.js';

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
				},
				twoQuestionsTypeData: 0,
				columns: [{
						value: 0,
						text: "计算机"
					},
					{
						value: 1,
						text: "理学，工学，农学"
					},
					{
						value: 2,
						text: "外语"
					},
					{
						value: 3,
						text: "心理学"
					},
					{
						value: 4,
						text: "音乐与艺术"
					},
					{
						value: 5,
						text: "文史哲学"
					},
					{
						value: 6,
						text: "医学与保健"
					},
					{
						value: 7,
						text: "教育教学"
					},
				],
				columnData: [
					[{
							value: 0,
							text: "计算机基础"
						},
						{
							value: 1,
							text: "软件工程"
						},
						{
							value: 2,
							text: "网络与安全技术"
						},
						{
							value: 3,
							text: "硬件系统及应用"
						},
						{
							value: 4,
							text: "前端开发"
						},
					],
					[{
							value: 0,
							text: "力学"
						},
						{
							value: 1,
							text: "机械"
						},
						{
							value: 2,
							text: "材料"
						},
						{
							value: 3,
							text: "电气信息"
						},
						{
							value: 4,
							text: "土木"
						},
						{
							value: 5,
							text: "工学"
						},
						{
							value: 6,
							text: "化学"
						},
						{
							value: 7,
							text: "数学"
						},
					],
					[

						{
							value: 0,
							text: "听力口语"
						},
						{
							value: 1,
							text: "语法阅读"
						},
						{
							value: 2,
							text: "写作翻译"
						},
						{
							value: 3,
							text: "四六级"
						},
						{
							value: 4,
							text: "雅思"
						},
						{
							value: 5,
							text: "其它语言"
						},
					],
					[{
						value: 5,
						text: "心理学"
					}, ],
					[{
							value: 0,
							text: "文学文化"
						},
						{
							value: 1,
							text: "新闻传播"
						},
						{
							value: 2,
							text: "哲学"
						},
						{
							value: 3,
							text: "历史"
						},
						{
							value: 4,
							text: "政治"
						},
					],
					[{
							value: 0,
							text: "设计，创作"
						},
						{
							value: 1,
							text: "艺术学"
						},
						{
							value: 2,
							text: "美术学"
						},
						{
							value: 3,
							text: "戏剧与影视"
						},
						{
							value: 4,
							text: "设计学"
						},
						{
							value: 5,
							text: "音乐与舞蹈"
						},
					],
					[{
							value: 0,
							text: "体育教育"
						},
						{
							value: 1,
							text: "基础医学"
						},
						{
							value: 2,
							text: "临床医学"
						},
						{
							value: 3,
							text: "公共卫生"
						},
						{
							value: 4,
							text: "口腔医学"
						},
						{
							value: 5,
							text: "中医药医学"
						},
						{
							value: 6,
							text: "药学"
						},
						{
							value: 7,
							text: "护理学"
						},
						{
							value: 8,
							text: "老年医学"
						},
						{
							value: 9,
							text: "儿医学"
						},
						{
							value: 10,
							text: "妇产科学"
						},
						{
							value: 11,
							text: "急诊与灾难医学"
						},
					],
					[{
							value: 0,
							text: "教学方法"
						},
						{
							value: 1,
							text: "教学能力"
						},
						{
							value: 2,
							text: "信息化教学"
						},
						{
							value: 3,
							text: "职业素养"
						},
						{
							value: 4,
							text: "学科教学"
						},
						{
							value: 5,
							text: "素质教育"
						},
						{
							value: 6,
							text: "体育教学"
						},
						{
							value: 7,
							text: "学前教育"
						},
					],
				],
			}
		},
		onReady() {
			this.$refs.form.setRules(this.rules)
		},
		methods: {
			
			//题目的正确答案
			onCorrectAnswer(e) {
				console.log(e.detail.value);
				if(Array.isArray(e.detail.value)) {
					this.formData.true_option = []
					this.formData.true_option = e.detail.value
				}else {
					this.formData.true_option = []
					this.formData.true_option.push(e.detail.value)
				}
				
				console.log(this.formData.true_option);
			},
			
			//题目的题型 单/双选
			onQuestionsSelectType(e) {
				this.formData.code = e.detail.value
			},

			//选择题目标题类型
			onQuestionsTitleType(e) {
				console.log(e.detail.value);
				this.formData.isimg = e.detail.value
			},

			//选择题目大类型后触发
			oneTypeFun(e) {
				console.log(e);
				this.twoQuestionsTypeData = e
			},

			/**
			 * 验证表单并提交
			 */
			submit() {
				uni.showLoading({
					mask: true
				})
				this.$refs.form.validate().then((res) => {
					return this.submitForm(res)
				}).catch(() => {}).finally(() => {
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
<style lang="scss" scoped>
	.questionsType {
		display: flex;
		justify-content: space-between;
	}

	/deep/ .uni-forms-item__content[data-v-61dfc0d0] {
		width: 244px;
	}

	.optionStyle {
		margin-top: 20rpx;
	}
	.trueOptionStyle {
		margin-right: 20px;
	}
</style>




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
      <uni-forms-item name="title" label="题目" required>
        <uni-easyinput placeholder="题目" v-model="formData.title" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="src_title" label="题目类型">
        <uni-file-picker file-mediatype="image" return-type="object" v-model="formData.src_title"></uni-file-picker>
      </uni-forms-item>
      <uni-forms-item name="isimg" label="题目类型">
        <uni-easyinput placeholder="1为文字 2为图片 选项  默认文字" type="number" v-model="formData.isimg"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="code" label="题型" required>
        <uni-easyinput placeholder="1为单选 2为多选  默认单选" type="number" v-model="formData.code"></uni-easyinput>
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
      <uni-forms-item name="alt" label="本题描述">
        <uni-easyinput placeholder="本题描述" v-model="formData.alt"></uni-easyinput>
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
        "isimg": 1,
        "code": 1,
        "option": [],
        "true_option": [],
        "current": [],
        "topic": null,
        "code2": true,
        "alt": ""
      }
      return {
        formData,
        formOptions: {},
        rules: {
          ...getValidator(Object.keys(formData))
        }
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
