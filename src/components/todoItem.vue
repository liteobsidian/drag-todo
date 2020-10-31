<template lang="pug">
  .todoItem
    .title {{title}}
    .date {{date}} в {{time}}
    .text {{text}}
</template>

<script>
export default {
  name: "todoItem",
  data(){
    return {
      title:'Покормить кота',
      date:'20.11.2020',
      time:'19:00',
      text: 'Сухой + влажный корм 2 столовых ложки lorem ipsum dolor sit Lorem ipsum dolor sit amet'
    }
  }
}
</script>

<style scoped>
  .todoItem{
    margin-bottom: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    padding: 5px 5px 5px 10px;
    box-sizing: content-box;
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
</style>