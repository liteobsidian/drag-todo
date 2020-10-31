<template lang="pug">
  .wrapper
    .title {{title}}
    .todosWrapper
      .todos
        .item
        .item
      button(type="button")
    .inputLine
</template>

<script>
export default {
  name:"todoWrapper",
  props: {
    title: String
  },
  data(){
    return {

    }

  }
}
</script>

<style lang="scss" scoped>

</style>