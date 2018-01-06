<template>
  <li class="todo-item" :class="{'editing': model.isEditing, 'task-done': isDone}">
    <span @click="showLabel" class="label" :class="model.label">
      <ul class="action-pick-label action-popup">
        <li @click="saveLabel('urgent')" class="important">Important</li>
        <li @click="saveLabel('normal')" class="normal">Normal</li>
        <li @click="saveLabel('other')" class="other">Whatever</li>
      </ul>
    </span>
    <p class="text" v-if="model.isEditing">
      <input type="text" v-model="tempText" placeholder="Type a new task and hit enter" @keyup.enter="save">
    </p>
    <p class="text" v-if="model.isEditing == false">{{ model.text }}</p>
    <div class="todo-action" @click="showAction" v-if="model.isEditing == false || model.isEditing == null">
      <span class="more">
        <span></span><span></span><span></span>
      </span>

      <ul class="action-list action-popup">
          <li @click="markDone" v-if="!isDone">Mark done</li>
          <li @click="edit" v-if="!isDone">Edit</li>
          <li @click="remove">Delete</li>
      </ul>
    </div>
  </li>
</template>
<script>
  import $ from 'jquery';
  import ListStore from '../../data/store.js';
  export default {
    props: ['model', 'removeItem'],
    data() {
      return {
        tempText: ''
      }
    },
    computed: {
      isDone() {
        return this.model.status == 'done' ? true : false; 
      }
    },
    methods: {
      showLabel(event) {
        event.stopPropagation();
        const target = $(event.currentTarget);
        const actionList = target.find('.action-popup');

        if(actionList.hasClass('show')) {
            actionList.removeClass('show');
        } else {
            $('.action-popup').removeClass('show');
            actionList.addClass('show');
        }   
      },
      saveLabel(type) {
        this.model.label = type;
        ListStore.push();
      },
      save() {
        if(this.tempText != '') {
            this.model.text = this.tempText;
            this.model.isEditing = false;
            // local storage
            ListStore.push();
        }
      },
      remove() {
        this.$emit('removeItem', this.model);
        
      },
      markDone() {
        this.model.status = "done"
        ListStore.push();
      },
      edit() {
        this.model.isEditing = true;
        this.$nextTick(function() {
            $(this.$el).find('input').focus();
        });
        this.tempText = this.model.text;
      },
      showAction() {
        event.stopPropagation();
        var target = $(event.currentTarget);
        var actionList = target.find('.action-list');

        if(actionList.hasClass('show')) {
            actionList.removeClass('show');
        } else {
            $('.action-list').removeClass('show');
            actionList.addClass('show');
        }   
      }
    }
  }
</script>
<style lang="stylus">
base_color = #ff3c41
label_normal_color = #37EAA0
label_other_color = #3772FD
label_urgent_color = #ff3c41
.todo-item 
    padding 15px 20px
    border-top 1px solid #f1f1f1
    position relative
    &.task-done
      .text
        color #ccc
    .text
      margin-top -2px
      padding-left 26px
      padding-right 35px
    .action-popup
      position absolute
      right 0px
      top 23px
      border 1px solid #EFEFEF
      list-style none
      padding 5px 10px
      border-radius 4px
      background #fff
      box-shadow 0 4px 7px rgba(0,0,0,.1)
      display none
      z-index 99999 
      &.show
        display block
      li
        padding 3px 5px
        margin 5px 0
        cursor pointer
        white-space nowrap
        font-size .9em
        border-radius 3px
        i
          margin-right 5px
        &:hover
          background #f5f5f5
    .label
      display inline-block
      background base_color
      width 15px
      height 15px
      border-radius 50%
      float left
      margin-right 10px
      position relative
      cursor pointer
      &.normal
        background label_normal_color
      &.other
        background label_other_color
      .action-pick-label
        left 0
        width 140px
        li
          color white
          font-weight 700
          text-shadow 0 1px 1px rgba(0,0,0,.2)
          &:hover
            opacity .8
        .important
          background label_urgent_color
        .normal
          background label_normal_color
        .other
          background label_other_color
    /* Task actions */
    .todo-action
      position absolute
      right 20px
      top 12px 
      .more
        cursor pointer
        span
          display inline-block
          margin 0 1px
          width 5px
          height 5px
          border-radius 50%
          background #DADADA
        &:hover
          span
            background #DADADA
    /* Editing mode */
    &.editing
      input
        border none
        font-family inherit
        outline none
        font-size 1em
        width 100%
        background transparent
</style>
