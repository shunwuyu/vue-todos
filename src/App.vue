<template>
  <div id="app" class="container">
    <div class="todo-wrapper">
      <todo-header></todo-header>
      <div class="todo-content">
        <todo-report></todo-report>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import TodoReport from './components/TodoReport.vue';

export default {
  name: 'app',
  components: {
    'todo-header': Header,
    'todo-report': TodoReport
  }
}
</script>

<style lang="stylus">
@import "../styl/style.styl"
</style>
