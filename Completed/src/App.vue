<template>
  <div id="app">
    <router-view />
  </div>
</template>
<!-- 写在入口处，方便后来加入的前段师傅康康 这个项目用的是Vue+element组件 使用的是vue-element-admin框架 -->
<!-- 若是新增界面记得在Views和Router中都做更改 测试用的是Mock 纯前端交互 每次都会生成新的数据 和后端交互时记得更改 -->
<!-- Views中的组件没有删除 做了保留 其中 charts、clipboard components-demo example guide nested pdf permission qiniu tab table theme zip 未使用-->
<!-- 未使用的组件为后来的师傅提供参考，基础不好的也可以照着代码和教程很快上手 -->
<!-- 教程地址：https://juejin.im/post/59097cd7a22b9d0065fb61d2 Vue-element-admin -->
<!-- element组件官方教程：https://element.eleme.cn/#/zh-CN/component/quickstart -->
<!-- Mock地址：https://easy-mock.com/ -->
<script>
export default {
  name: 'App'
}
</script>
