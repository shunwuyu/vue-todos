<template>
  <ul class="todo-list">
    <todo-item v-for="(item, key) in collection" v-bind:key="key" :model="item" v-on:removeItem="item-deleted"></todo-item>
  </ul>
</template>
<script>
  import TodoItem from './TodoItem.vue';
  export default {
    props: ['collection'],
    methods: {
      'item-deleted': function(model) {
        console.log('zzzz');
        // this.collection.remove(model);
      }
    },
    components: {
      'todo-item': TodoItem
    }
  }
</script>
<style lang="stylus">
.todo-list 
  list-style none
</style>

