<template lang="pug">
  .form(:class="{errorForm : error}")
    form(@keydown.enter="validateSubmit" @submit.prevent)
      input.title(id="title" type="text" placeholder="Введите заголовок" v-model="todoObj.title")
      .timing
        input.date(type="date" v-model="todoObj.date")
        input.time(type="time" v-model="todoObj.time")
      .textarea-wrapper
        textarea.textarea(
          id="description"
          placeholder="Введите описание задания"
          v-model="todoObj.text")
        .error(v-if="error") Заполните все поля
        button.submit(type="button" @click="validateSubmit") ↩
      button.skip(type="button" @click="handleSkip") -

</template>

<script>
export default {
  name: "inputBlock",
  props: {
    buttonType: String
  },
  data(){
    return {
      todoObj: {
        title: '',
        date: '',
        time: '',
        text: '',
        id: 0,
        type:''
      },
      id: 0,
      error: false
    }
  },
  methods:{
    validateSubmit(){
      let {title, date,time,text}=this.todoObj;
      title && date && time && text ? this.error = false : this.error = true;
      !this.error && this.addNewTodo()

    },
    addNewTodo(){
      this.id++;
      this.todoObj.id=this.id;
      this.todoObj.type=this.buttonType;
      this.todoObj.date=this.todoObj.date.split('-').reverse().join('.');
      this.$emit('addNewTodo', {...this.todoObj})
      this.todoObj.title='';
      this.todoObj.date='';
      this.todoObj.time='';
      this.todoObj.text='';
    },
    handleSkip(){
      this.$emit('skipInput')
    },

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
    transition: all .3s;
  }

  .errorForm{
    background: #ff000040;
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
    margin: 5px 5px 5px 0 ;
    &:focus {
      border-color: rgba(0, 0, 0, 0);
      box-shadow: 0 0 4px 0 #005a91;
    }
    &:last-child{
      margin-right: 0;
    }
  }
  .date{
    flex: 2;
  }
  .time{
    flex: 1;
  }

  .textarea-wrapper{
    position: relative;
  }

  .error {
    font-size: 12px;
    margin-top: -4px;
    color: red;
  }

  .submit{
    position: absolute;
    top: 8px;
    right: 23px;
    background: none;
    border-radius: 5px;
    cursor: pointer;
    color: #0078c3;
    border: 2px solid #0078c3;
    outline: none;
    font-size: 20px;
    font-weight: 700;
    width: 27px;
    height: 33px;
    opacity: 0.3;
    transition: all .3s;
    &:hover {
      opacity: 1;
    }
  }

  .textarea {
    padding: 2px 50px 2px 5px;
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

  .skip {
    position: absolute;
    top: -12px;
    right: 10px;
    border: none;
    outline: none;
    color: #898989;
    font-size: 30px;
    background: none;
    &:hover {
      color: #505050;
      cursor: pointer;
    }
  }

</style>