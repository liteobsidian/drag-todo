<template lang="pug">
  .wrapper
    .title {{title}}
    .todosWrapper(:class="{todosWrapperInputMode : inputMode}")
      .todos
        todo-item(v-for="item in todoItems"
          :title="item.title"
          :date="item.date"
          :time="item.time"
          :text="item.text"
          )
        .dry(v-if="!inputMode")
      button.addBtn(type="button" v-if="!inputMode" @click="toggleInputMode") +
      input-block.inputTodo(v-else @addNewTodo="addNewTodo" :buttonType="buttonType")
</template>

<script>
import TodoItem from "@/components/todoItem";
import InputBlock from "@/components/inputBlock";
import {mapMutations} from "vuex";
export default {
  name:"todoWrapper",
  components: {InputBlock, TodoItem},
  props: {
    title: String,
    buttonType: String,
    todoItems: Array
  },
  data(){
    return {
      inputMode: false
    }

  },
  methods: {
    ...mapMutations(['addTodo']),
    toggleInputMode(){
      this.inputMode = !this.inputMode
    },
    addNewTodo(todoObj){
      this.toggleInputMode();
      console.log(todoObj);
      this.addTodo(todoObj)
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper{
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    position: relative;
    height: 100%;
  }
  .title{
    height: 50px;
    border-bottom: 3px solid #d6d6d6;
    color: #808080;
    letter-spacing: 0.06rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .todosWrapper{
    height: calc(100% - 50px);
    object-fit: cover;
    padding: 10px;
    overflow: auto;
  }

  .todosWrapperInputMode {
    height: calc(100% - 200px);
  }

  .addBtn{
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 10px;
    font-weight: 700;
    font-size: 30px;
    color: #fff;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    background: #0078c3;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    transition: all .2s;
    cursor: pointer;
    &:hover{
      background: #005a91;
      font-size: 50px;
    }
  }

  .inputTodo{
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .dry {
    box-sizing: border-box;
    width: 100%;
    height: 60px;
  }
</style>