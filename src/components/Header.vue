<template>
  <div class="todo-header">
    <div class="overlay"></div>
    <time class="clearfix">
      <span class="day">{{ date }}</span>
      <span class="dayofweek">{{ weekDay }}</span>
      <span class="month">{{ month }}, {{ year }}</span>
    </time>
    <div class="add-circle" @click="add">
      <i class="fa fa-plus"></i>
    </div>
</div>
</template>
<script>
  export default {
    data () {
      return {
        date: '3',
        weekDay: '星期三',
        month: '一月',
        year: '2018'
      }
    },
    methods: {
      add () {

      }
    }
  }
</script>
<style>
</style>
