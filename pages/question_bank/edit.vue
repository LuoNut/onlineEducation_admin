<template>
	<view class="uni-container">
		<uni-forms ref="form" :model="formData" validateTrigger="bind">
			<view class="questionsType">
				<uni-forms-item name="subject_type_one" label="题目大类" required>
					<uni-data-select v-model="formData.subject_type_one" :localdata="columns"
						@change="oneTypeFun"></uni-data-select>

				</uni-forms-item>
				<uni-forms-item name="subject_type_two" label="题目小类" required>
					<uni-data-select v-model="formData.subject_type_two" :localdata="columnData[twoQuestionsTypeData]"
					 ></uni-data-select>
				</uni-forms-item>
			</view>


			<uni-forms-item name="isimg" label="题目标题类型" required >
				<radio-group @change="onQuestionsTitleType">
					<label>
						<radio value="1" :checked="formData.isimg == 1 ? true : false " /><text>文字</text>
					</label>
					<label>
						<radio value="2" :checked="formData.isimg == 2 ? true : false " /><text>图片</text>
					</label>
				</radio-group>
			</uni-forms-item>

			<uni-forms-item v-if="formData.isimg ==  1" name="title" label="标题" required>
				<uni-easyinput placeholder="标题" v-model="formData.title" trim="both"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item v-else name="src_title" label="标题" required >
				<uni-file-picker file-mediatype="image" return-type="object"
					v-model="formData.src_title"></uni-file-picker>
			</uni-forms-item>

			<uni-forms-item name="code" label="题目类型" required>
				<radio-group @change="onQuestionsSelectType">
					<label>
						<radio value="1" :checked="formData.code == 1 ? true : false " /><text>单选</text>
					</label>
					<label>
						<radio value="2" :checked="formData.code == 2 ? true : false " /><text>多选</text>
					</label>
				</radio-group>
			</uni-forms-item>
			<uni-forms-item name="option" label="选项" required >
				<uni-easyinput class="optionStyle" placeholder="A:" v-model="formData.testList[0].name"></uni-easyinput>
				<uni-easyinput class="optionStyle" placeholder="B:" v-model="formData.testList[1].name"></uni-easyinput>
				<uni-easyinput class="optionStyle" placeholder="C:" v-model="formData.testList[2].name"></uni-easyinput>
				<uni-easyinput class="optionStyle" placeholder="D:" v-model="formData.testList[3].name"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="true_option" label="正确选项" required>

				<radio-group v-if="formData.code == 1" @change="onCorrectAnswer">
					<label class="trueOptionStyle">
						<radio value="A" :checked="formData.true_option[0] == 'A' ? true : false " /><text>A</text>
					</label>
					<label class="trueOptionStyle">
						<radio value="B" :checked="formData.true_option[0] == 'B' ? true : false " /><text>B</text>
					</label>
					<label class="trueOptionStyle">
						<radio value="C" :checked="formData.true_option[0] == 'C' ? true : false " /><text>C</text>
					</label>
					<label class="trueOptionStyle">
						<radio value="D" :checked="formData.true_option[0] == 'D' ? true : false " /><text>D</text>
					</label>
				</radio-group>
				<checkbox-group v-model="formData.true_option" v-else  @change="onCorrectAnswer">
					<label class="trueOptionStyle">
						<checkbox value="A" :checked="formData.true_option.includes('A') ? true : false " />
						A
					</label>
					<label class="trueOptionStyle">
						<checkbox value="B" :checked="formData.true_option.includes('B') ? true : false " />
						B
					</label>
					<label class="trueOptionStyle">
						
						<checkbox value="C" :checked="formData.true_option.includes('C') ? true : false " />
						C
					</label>
					<label class="trueOptionStyle">
						
						<checkbox value="D" :checked="formData.true_option.includes('D') ? true : false " />
						D
					</label>
				</checkbox-group>
			</uni-forms-item>
			


			<uni-forms-item name="alt" label="本题答案解析">
				<uni-easyinput placeholder="答案解析:" v-model="formData.alt"></uni-easyinput>
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
     	"subject_type_one": "",
     	"subject_type_two": "",
     	"title": "",
     	"src_title": null,
     	"isimg": null,
     	"code": null,
     	"true_option": [],
     	"alt": "",
     	"testList": [{
     					name:'',//选项
     					code:false,//是否为正确答案
     					click_index:false,//选项是否选中
     				},{
     				
     					name:'',//选项
     					code:false,//是否为正确答案
     					click_index:false,//选项是否选中
     				},{
     				
     					name:'',//选项
     					code:false,//是否为正确答案
     					click_index:false,//选项是否选中
     				},{
     				
     					name:'',//选项
     					code:false,//是否为正确答案
     					click_index:false,//选项是否选中
     				}
     	]
     }
      return {
        formData,
        formOptions: {},
        rules: {
          ...getValidator(Object.keys(formData))
        },
		twoQuestionsTypeData: 0,
		columns: [{
				value: "计算机",
				text: "计算机"
			},
			{
				value: "理学，工学，农学",
				text: "理学，工学，农学"
			},
			{
				value: "外语",
				text: "外语"
			},
			{
				value: "心理学",
				text: "心理学"
			},
			{
				value: "音乐与艺术",
				text: "音乐与艺术"
			},
			{
				value: "文史哲学",
				text: "文史哲学"
			},
			{
				value: "医学与保健",
				text: "医学与保健"
			},
			{
				value: "教育教学",
				text: "教育教学"
			},
		],
		columnData: [
			[{
					value: "计算机基础",
					text: "计算机基础"
				},
				{
					value: "软件工程",
					text: "软件工程"
				},
				{
					value: "网络与安全技术",
					text: "网络与安全技术"
				},
				{
					value: "硬件系统及应用",
					text: "硬件系统及应用"
				},
				{
					value: "前端开发",
					text: "前端开发"
				},
			],
			[{
					value: "力学",
					text: "力学"
				},
				{
					value: "机械",
					text: "机械"
				},
				{
					value: "材料",
					text: "材料"
				},
				{
					value: "电气信息",
					text: "电气信息"
				},
				{
					value: "土木",
					text: "土木"
				},
				{
					value: "工学",
					text: "工学"
				},
				{
					value: "化学",
					text: "化学"
				},
				{
					value: "数学",
					text: "数学"
				},
			],
			[
		
				{
					value: "听力口语",
					text: "听力口语"
				},
				{
					value: "语法阅读",
					text: "语法阅读"
				},
				{
					value: "写作翻译",
					text: "写作翻译"
				},
				{
					value: "四六级",
					text: "四六级"
				},
				{
					value: "雅思",
					text: "雅思"
				},
				{
					value: "其它语言",
					text: "其它语言"
				},
			],
			[{
				value: "心理学",
				text: "心理学"
			}, ],
			[{
					value: "文学文化",
					text: "文学文化"
				},
				{
					value: "新闻传播",
					text: "新闻传播"
				},
				{
					value: "哲学",
					text: "哲学"
				},
				{
					value: "历史",
					text: "历史"
				},
				{
					value: "政治",
					text: "政治"
				},
			],
			[{
					value: "设计，创作",
					text: "设计，创作"
				},
				{
					value: "艺术学",
					text: "艺术学"
				},
				{
					value: "美术学",
					text: "美术学"
				},
				{
					value: "戏剧与影视",
					text: "戏剧与影视"
				},
				{
					value: "设计学",
					text: "设计学"
				},
				{
					value: "音乐与舞蹈",
					text: "音乐与舞蹈"
				},
			],
			[{
					value: "体育教育",
					text: "体育教育"
				},
				{
					value: "基础医学",
					text: "基础医学"
				},
				{
					value: "临床医学",
					text: "临床医学"
				},
				{
					value: "公共卫生",
					text: "公共卫生"
				},
				{
					value: "口腔医学",
					text: "口腔医学"
				},
				{
					value: "中医药医学",
					text: "中医药医学"
				},
				{
					value: "药学",
					text: "药学"
				},
				{
					value: "护理学",
					text: "护理学"
				},
				{
					value: "老年医学",
					text: "老年医学"
				},
				{
					value: "儿医学",
					text: "儿医学"
				},
				{
					value: "妇产科学",
					text: "妇产科学"
				},
				{
					value: "急诊与灾难医学",
					text: "急诊与灾难医学"
				},
			],
			[{
					value: "教学方法",
					text: "教学方法"
				},
				{
					value: "教学能力",
					text: "教学能力"
				},
				{
					value: "信息化教学",
					text: "信息化教学"
				},
				{
					value: "职业素养",
					text: "职业素养"
				},
				{
					value: "学科教学",
					text: "学科教学"
				},
				{
					value: "素质教育",
					text: "素质教育"
				},
				{
					value: "体育教学",
					text: "体育教学"
				},
				{
					value: "学前教育",
					text: "学前教育"
				},
			],
		],
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
		
		//题目的正确答案
		onCorrectAnswer(e) {
			console.log(e);
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
			this.formData.isimg = e.detail.value
		},
		
		//选择题目大类型后触发
		oneTypeFun(e) {
			
			this.columns.forEach((item, index) => {
				if(item.value == e) {
					this.twoQuestionsTypeData = index
				}
			})
			
		},
		
		//格式化选项的功能函数
		formatOptionFun() {
			if(Array.isArray(this.true_option)) {
				this.true_option.forEach(item => {
					if(item == A) {
						this.testList[0].code = true
					}
					if(item == B) {
						this.testList[1].code = true
					}
					if(item == C) {
						this.testList[2].code = true
					}
					if(item == D) {
						this.testList[3].code = true
					}
				})
			}else {
				if(this.true_option == A) {
					this.testList[0].code = true
				}
				if(this.true_option == B) {
					this.testList[1].code = true
				}
				if(this.true_option == C) {
					this.testList[2].code = true
				}
				if(this.true_option == D) {
					this.testList[3].code = true
				}
			}
		},
      
      /**
       * 验证表单并提交
       */
      submit() {
		this.formatOptionFun()
		  
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
            console.log(this.formData);
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
	.uni-label-pointer {
	    cursor: pointer;
	    margin-right: 20px;
	}
</style>