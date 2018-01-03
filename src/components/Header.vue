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
<style lang="stylus">
  header_image = 'https://images.unsplash.com/photo-1440613905118-99b921706b5c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=255b304482a2f50d0917f3de7b06251e'
  base_color = #ff3c41
  .todo-header
    border-radius 6px 6px 0 0
    background url(header_image) no-repeat
    background-size cover
    padding 55px 20px
    position relative

    .overlay
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      background rgba(0,0,0,0.2) 
      border-radius 6px 6px 0 0
    
    time 
      color white
      display block
      position relative

      .day
        font-size 4em
        float left
        margin-right 10px

      .dayofweek
        display block
        margin-top 13px
        font-size 1.4em
        font-weight 700
    
    .add-circle
      position absolute
      background base_color
      color white
      border-radius 50%
      width 40px
      height 40px
      line-height 40px
      text-align center
      right 20px
      bottom -20px
      box-shadow 0 0 13px rgb(255, 60, 65)
      cursor pointer

</style>
