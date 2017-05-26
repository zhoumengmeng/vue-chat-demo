<template>
  <div id="app">
    <div class="sidebar">
      <Card></Card>
      <List></List>
    </div>
    <div class="main">
      <Message></Message>
      <chat-content></chat-content>
    </div>
  </div>
</template>

<script>

import Card from './components/card';
import List from './components/list';
import Message from './components/message';
import ChatContent from './components/chatContent';

export default {
  components: {Card, List, Message, ChatContent},
  created() {
    this.$store.dispatch("initData");
  }
}
</script>

<style>
body{
  background: #ccc;
}
ul,li {
  list-style: none;
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 60px auto;
  width:800px;
  height:600px;
  overflow: hidden;
  border-radius: 3px;
}
.sidebar{
  height: 100%;
  float: left;
  width: 200px;
  color: #f4f4f4;
  background-color: #2e3238;
}
.main{
  height:100%;
  padding-left:200px;
}
</style>
