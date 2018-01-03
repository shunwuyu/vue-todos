<template>
  <div class="todo-content-title">
      <h2>Your tasks</h2>
      <p class="task-report"><span class="task-remain">{{ taskDone }} done</span> / {{ taskTotal }} task(s)</p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        taskDone: 0,
        taskTotal: 3
      }
    }
  }
</script>
<style>
</style>
