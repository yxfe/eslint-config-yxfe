# eslint-config-yxfe
检查前端代码规范

## 规范

### vue
  
* html-end-tags   enforce end tag style.
* no-confusing-v-for-v-if disallow confusing v-for and v-if on the same element.
* no-duplicate-attributes disallow duplicate arguments.
* no-textarea-mustache    disallow mustaches in <textarea>.
* html-quotes enforce quotes style of HTML attributes.
* v-bind-style    enforce v-bind directive style.
* v-on-style  enforce v-on directive style.
* no-invalid-template-root    disallow invalid template root.
* no-invalid-v-bind   disallow invalid v-bind directives.
* no-invalid-v-else-if    disallow invalid v-else-if directives.
* no-invalid-v-else   disallow invalid v-else directives.
* no-invalid-v-for    disallow invalid v-for directives.
* no-invalid-v-html   disallow invalid v-html directives.
* no-invalid-v-if disallow invalid v-if directives.
* no-invalid-v-model  disallow invalid v-model directives.
* no-invalid-v-on disallow invalid v-on directives.
* no-invalid-v-once   disallow invalid v-once directives.
* no-invalid-v-pre    disallow invalid v-pre directives.
* no-invalid-v-show   disallow invalid v-show directives.
* no-invalid-v-text   disallow invalid v-text directives.
* no-parsing-error    disallow parsing errors in <template>.

### js

* for-direction   enforce “for” loop update clause moving the counter in the right direction.
* no-cond-assign  禁止条件表达式中出现赋值操作符
* no-console  禁用 console
* no-constant-condition   禁止在条件中使用常量表达式
* no-debugger 禁用 debugger
* no-dupe-keys    禁止对象字面量中出现重复的 key
* no-duplicate-case   禁止出现重复的 case 标签
* no-empty    禁止出现空语句块
* no-empty-character-class    禁止在正则表达式中使用空字符集
* no-ex-assign    禁止对 catch 子句的参数重新赋值
* no-extra-boolean-cast   禁止不必要的布尔转换
* no-extra-parens 禁止不必要的括号
* no-func-assign  禁止对 function 声明重新赋值
* no-inner-declarations   禁止在嵌套的块中出现变量声明或 function 声明
* no-irregular-whitespace 禁止在字符串和注释之外不规则的空白
* no-unexpected-multiline 禁止出现令人困惑的多行表达式
* no-unreachable  禁止在return、throw、continue 和 break 语句之后出现不可达代码
* use-isnan   要求使用 isNaN() 检查 NaN
* valid-typeof    强制 typeof 表达式与有效的字符串进行比较
* curly   强制所有控制语句使用一致的括号风格
* dot-location    强制在点号之前和之后一致的换行
* eqeqeq  要求使用 === 和 !==
* no-alert    禁用 alert、confirm 和 prompt
* no-empty-function   禁止出现空函数
* no-eval 禁用 eval()
* no-floating-decimal 禁止数字字面量中使用前导和末尾小数点
* no-implied-eval 禁止使用类似 eval() 的方法
* no-loop-func    禁止在循环中出现 function 声明和表达式
* no-new-wrappers 禁止对 String，Number 和 Boolean 使用 new 操作符
* no-redeclare    禁止多次声明同一变量
* no-return-assign    禁止在 return 语句中使用赋值语句
* no-self-compare 禁止自身比较
* no-delete-var   禁止删除变量
* no-shadow   禁止变量声明与外层作用域的变量同名
* no-shadow-restricted-names  禁止将标识符定义为受限的名字
* no-undef-init   disallow initializing variables to undefined
* no-use-before-define    禁止在变量定义之前使用它们
* brace-style 强制在代码块中使用一致的大括号风格
* comma-dangle    要求或禁止末尾逗号
* no-multiple-empty-lines 禁止出现多行空行
* no-class-assign 禁止修改类声明的变量
* no-const-assign 禁止修改 const 声明的变量
* semi  要求在语句末尾使用分号

## 使用

```
npm install eslint eslint-config-yxfe eslint-plugin-html eslint-plugin-vue@beta  -g
```

eslint-config-yxfe
```
cd projectPath
eslint -c yxfe --ext .vue,.js --no-eslintrc [--ignore-pattern ignorePath] src [-o file.html] [-f html]
```

eslint-config-yxfe/jsp

```
cd projectPath
eslint -c yxfe/jsp --ext .jsp,.js --no-eslintrc [--ignore-pattern ignorePath] src [-o file.html] [-f html]
```