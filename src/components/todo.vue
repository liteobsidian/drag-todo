<!--suppress CssInvalidPropertyValue -->
<template lang="pug">
  .container
    .grid-template
      .header Simple TODO
      .content
        todo-wrapper(
        v-for="column in getInitArray"
        :key="column.type"
        :title="column.title"
        :type="column.type"
        :items="getItemsByType(column.type)"
        )
      .footer Другие мои работы на
        a.link(href="https://trywrap.ru/") trywrap.ru

</template>

<script>
import TodoWrapper from "@/components/todoWrapper";
import {mapGetters} from "vuex";
export default {
  name: "todo",
  components: {TodoWrapper},
  computed:{
    ...mapGetters(['getItemsByType', 'getInitArray'])
  }
}

</script>

<style lang="scss" scoped>
.container {
  width: 900px;
  margin: 0 auto;
}

.grid-template {
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-rows: 80px minmax(0%, 1fr) 70px;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
}

.header {
  grid-area: header;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 30px;
  color: transparent;
  background: #808080;
  background-clip: text;
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5);
}

.content {
  grid-area: content;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #808080;
  letter-spacing: 0.06rem;
}

.link{
  margin-left: 5px;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
</style>
