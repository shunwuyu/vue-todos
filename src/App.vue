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
base_font = 'Open Sans', sans-serif;
*  
  margin 0
  padding 0

html, body
  min-height 100%
  height 100%

body
  background #f5f5f5
  font-family base_font
  font-size 14px

.clearfix
  overflow auto
  zoom 1

.container
  height 100%
  display flex
  justify-content center
  align-items center
  flex-flow row wrap

.todo-wrapper
  background #fff
  border-radius 6px
  box-shadow 0 0 40px rgba(0,0,0,.1)
  width 350px
</style>
