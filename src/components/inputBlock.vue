<template lang="pug">
  .form
    form(@keydown.enter="addNewTodo")
      input.title(id="title" type="text" placeholder="Введите заголовок" v-model="todoObj.title")
      .timing
        input.date(type="date" v-model="todoObj.date")
        input.time(type="time" v-model="todoObj.time")
      textarea.textarea(
        id="description"
        placeholder="Введите описание задания"
        v-model="todoObj.text")
</template>

<script>
export default {
  name: "inputBlock",
  data(){
    return {
      todoObj: {
        title: 'Покормить кота',
        date: '2020-11-20',
        time: '19:00',
        text: 'Сухой + влажный корм 2 столовых ложки lorem ipsum dolor sit Lorem ipsum dolor sit amet'
      }
    }
  },
  methods:{
    addNewTodo(){
      this.$emit('addNewTodo', this.todoObj)
      this.todoObj.title='';
      this.todoObj.date='';
      this.todoObj.time='';
      this.todoObj.text='';

    }
  }
}
</script>

<style lang="scss" scoped>
  .form {
    background: #fff;
    width: 100%;
    padding: 10px;
    height: 150px;
    border-top: 2px solid #d6d6d6;
  }
  .label {
    font-size: 14px;
    color: #808080;
  }

  .timing {
    display: flex;
  }

  input {
    width: 100%;
    padding: 2px 5px;
    border: 1px solid #808080;
    outline: none;
    margin: 5px 5px 5px 0px ;
    &:focus {
      border-color: rgba(0, 0, 0, 0);
      box-shadow: 0px 0px 4px 0px #005a91;
    }
    &:last-child{
      margin-right: 0px;
    }
  }
  .date{
    flex: 2;
  }
  .time{
    flex: 1;
  }

  .textarea {
    padding: 2px 5px;
    border: 1px solid #808080;
    outline: none;
    cursor: text;
    resize: none;
    width: 100%;
    height: 50px;
    &:focus {
      border-color: rgba(0, 0, 0, 0);
      box-shadow: 0 0 4px 0 #005a91;
    }
  }

</style>