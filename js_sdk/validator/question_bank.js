// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema


const validator = {
  "user_id": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "defaultValue": {
      "$env": "uid"
    }
  },
  "subject_type_one": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": " ",
    "label": " "
  },
  "subject_type_two": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "题目小类型",
    "label": "题目小类型"
  },
  "title": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "label": "题目",
    "title": "题目"
  },
  "src_title": {
    "rules": [
      {
        "format": "file"
      }
    ],
    "title": "题目类型",
    "label": "题目类型"
  },
  "isimg": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "题目类型",
    "defaultValue": 1,
    "label": "题目类型"
  },
  "code": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "int"
      }
    ],
    "title": "题型",
    "defaultValue": 1,
    "label": "题型"
  },
  "option": {
    "rules": [
      {
        "format": "array"
      }
    ],
    "title": "选项",
    "label": "选项"
  },
  "true_option": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "array"
      }
    ],
    "title": "正确选项",
    "label": "正确选项"
  },
  "current": {
    "rules": [
      {
        "format": "array"
      }
    ],
    "title": "当前所选",
    "label": "当前所选"
  },
  "topic": {
    "rules": [
      {
        "format": "bool"
      }
    ],
    "title": "所选是否正确 默认为'' true为正确 控制选项高亮",
    "label": "所选是否正确 默认为'' true为正确 控制选项高亮"
  },
  "code2": {
    "rules": [
      {
        "format": "bool"
      }
    ],
    "title": "选项选择状态 默认为true false为选择",
    "defaultValue": true,
    "label": "选项选择状态 默认为true false为选择"
  },
  "alt": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "本题描述",
    "label": "本题描述"
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
