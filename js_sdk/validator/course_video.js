// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema


const validator = {
  "user_id": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "defaultValue": {
      "$env": "uid"
    }
  },
  "course_name": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "label": "课程名称",
    "title": "课程名称"
  },
  "courseCover": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "课程封面",
    "title": "课程封面"
  },
  "subject_type_one": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "title": "课程大类型",
    "label": "课程大类型"
  },
  "subject_type_two": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "title": "课程小类型",
    "label": "课程小类型"
  },
  "course_intro": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "课程简介",
    "title": "课程简介"
  },
  "courseware": {
    "rules": [
      {
        "format": "array"
      }
    ],
    "label": "课程课件",
    "title": "课程课件"
  },
  "course_video": {
    "rules": [
      {
        "format": "array"
      }
    ],
    "label": "课程视频",
    "title": "课程视频"
  },
  "view_count": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "阅读数量",
    "defaultValue": 55,
    "label": "阅读数量"
  },
  "like_count": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "defaultValue": 0
  },
  "comment_count": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "defaultValue": 0
  },
  "picurls": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "封面大图",
    "title": "封面大图"
  },
  "publish_date": {
    "rules": [
      {
        "format": "timestamp"
      }
    ],
    "title": "发表时间",
    "defaultValue": {
      "$env": "now"
    },
    "label": "发表时间"
  },
  "course_video_num": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "课程视频数量",
    "label": "课程视频数量"
  },
  "course_time": {
    "rules": [
      {
        "format": "double"
      }
    ],
    "title": "课程总时间",
    "label": "课程总时间"
  },
  "last_modify_date": {
    "rules": [
      {
        "format": "timestamp"
      }
    ],
    "title": "最后修改时间",
    "defaultValue": {
      "$env": "now"
    },
    "label": "最后修改时间"
  }
}

const enumConverter = {}

function filterToWhere(filter, command) {
  let where = {}
  for (let field in filter) {
    let { type, value } = filter[field]
    switch (type) {
      case "search":
        if (typeof value === 'string' && value.length) {
          where[field] = new RegExp(value)
        }
        break;
      case "select":
        if (value.length) {
          let selectValue = []
          for (let s of value) {
            selectValue.push(command.eq(s))
          }
          where[field] = command.or(selectValue)
        }
        break;
      case "range":
        if (value.length) {
          let gt = value[0]
          let lt = value[1]
          where[field] = command.and([command.gte(gt), command.lte(lt)])
        }
        break;
      case "date":
        if (value.length) {
          let [s, e] = value
          let startDate = new Date(s)
          let endDate = new Date(e)
          where[field] = command.and([command.gte(startDate), command.lte(endDate)])
        }
        break;
      case "timestamp":
        if (value.length) {
          let [startDate, endDate] = value
          where[field] = command.and([command.gte(startDate), command.lte(endDate)])
        }
        break;
    }
  }
  return where
}

export { validator, enumConverter, filterToWhere }
