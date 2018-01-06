<template>
  <div id="app" class="container">
    <div class="todo-wrapper">
      <todo-header></todo-header>
      <div class="todo-content">
        <todo-report></todo-report>
        <todo-list :collection="listState.items"></todo-list>
      </div>
    </div>
  </div>
</template>

<script>
import ListStore  from '../data/store.js'
import Header from './components/Header.vue';
import TodoReport from './components/TodoReport.vue';
import TodoList from './components/TodoList.vue'
export default {
  name: 'app',
  data() {
    return {
      listState: ListStore.state
    }
  },

  created() {
    ListStore.load();
  },
  components: {
    'todo-header': Header,
    'todo-report': TodoReport,
    'todo-list': TodoList
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
