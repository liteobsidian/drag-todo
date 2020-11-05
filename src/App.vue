<template>
  <div id="app">
    <todo></todo>
  </div>
</template>

<script>

import Todo from "@/components/todo";

export default {
  name: 'App',
  components: {
    Todo
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
  font-family: 'Tahoma', Tahoma, sans-serif ;
  font-size: 16px;
  line-height: 1.42;
  font-weight: 300;
  background: #f5f5f5;
}
</style>
