<template>
  <div class="errPage-container">
    <ErrorA />
    <ErrorB />
    <h3>项目出错啦</h3>
    <aside>
		错误信息放的是后台跑的错误信息吧，或者可以考虑把这个做在扫描过程的那个界面里
    </aside>

  </div>
</template>

<script>
import ErrorA from './components/ErrorTestA'
import ErrorB from './components/ErrorTestB'

export default {
  name: '错误日志',
  components: { ErrorA, ErrorB }
}
</script>

<style scoped>
  .errPage-container {
    padding: 30px;
  }
</style>
