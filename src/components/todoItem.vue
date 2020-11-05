<template lang="pug">
  .todoItem(
    draggable="true"
    @dragstart="drag($event)"
    @dragend="isDrag=false"
    :class="{highlite : isDrag}"
    )
    .title {{title}}
    .date {{date}} в {{time}}
    .text {{text}}
    button.delete(type="button" @click="deleteTodo") ×
</template>

<script>

export default {
  name: "todoItem",
  props: {
    date: {
      type: String,
      default: '5.11.2020'
    },
    time: {
      type: String,
      default: '00:00'
    },
    title: {
      type: String,
      default: 'Hello'
    },
    text: {
      type: String,
      default: 'World'
    }
  },
  data(){
    return {
      isDrag: false
    }
  },
  methods:{
    drag(event){
      this.isDrag=true;
      this.$emit('dragstart', event);
    },
    deleteTodo(){
      this.$emit('deleteTodo');
    }
  }
}
</script>

<style lang="scss" scoped>
  .todoItem{
    margin-bottom: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    padding: 5px 5px 5px 10px;
    box-sizing: content-box;
    position: relative;
  }

  .todoItem:hover .delete {
    opacity: 0.3;
    &:hover {
      opacity: 1;
    }
  }

  .title{
    font-weight: 700;
    margin-bottom: 5px;
    color: #404040;
  }
  .date{
    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: 300;
    color: grey;
    margin-bottom: 10px;
  }
  .text{
    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #404040;
    margin-bottom: 5px;
  }

  .delete{
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    color: red;
    font-size: 30px;
    font-weight: 700;
    opacity: 0.1;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    transition: opacity .2s;
  }

  .highlite{
    background: #58dbcd;
  }
</style>
