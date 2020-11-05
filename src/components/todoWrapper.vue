<template lang="pug">
  .wrapper
    .title {{title}}
    .todosWrapper(
      :class="{todosWrapperInputMode : inputMode}"
      :id="type"
      @drop.prevent="drop($event, type)"
      @dragover.prevent
      )
      .placeholder(v-if="!items.length") Добавьте или перенесите сюда задание
      todo-item.draggableItem(v-for="item in items"
        :key="item.id"
        :title="item.title"
        :date="item.date"
        :time="item.time"
        :text="item.text"
        :id="item.id"
        @dragstart="drag"
        @deleteTodo="deleteTodo(item.id)"
      )
      .dry(v-if="!inputMode")
      button.addBtn(type="button" v-if="!inputMode" @click="toggleInputMode") +
      input-block.inputTodo(
        v-else
        @skipInput="toggleInputMode"
        @addNewTodo="addNewTodo"
        :buttonType="type")
</template>

<script>
import TodoItem from "@/components/todoItem";
import InputBlock from "@/components/inputBlock";
import {mapActions} from "vuex";
export default {
  name:"todoWrapper",
  components: {
    InputBlock,
    TodoItem
  },
  props: {
    title: {
      type: String,
      default: 'Планируется',
      validator: (value)=>{
        return ['Планируется', 'В работе', 'Сделано'].indexOf(value) !== -1;
      }
    },
    type: {
      type: String,
      default: 'planned',
      validator: (value)=>{
        return ['planned', 'working', 'completed'].indexOf(value) !== -1;
      }
    },
    items: Array
  },
  data(){
    return {
      inputMode: false
    }

  },
  methods: {
    ...mapActions(['addTodo', 'moveTodo', 'removeTodo']),
    toggleInputMode(){
      this.inputMode = !this.inputMode;
    },
    addNewTodo(todoObj){
      this.toggleInputMode();
      this.addTodo(todoObj);
    },
    drag(e){
      e.dataTransfer.setData('number', e.target.id);
    },
    drop(e, type) {
      const elemId = Number(e.dataTransfer.getData("number"));
      this.moveTodo({id: elemId, type});
    },
    deleteTodo(id){
      this.removeTodo(id);
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

  .placeholder{
    color: #808080;
    text-align: center;
    margin: 50% 10px 0 10px;
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
      box-shadow: inset -2px -5px 8px 0px #00253c73
    }
  }

  .inputTodo{
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .draggableItem {
    cursor: pointer;
  }

  .dry {
    box-sizing: border-box;
    width: 100%;
    height: 60px;
  }
</style>
