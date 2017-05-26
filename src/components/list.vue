<template>
  <div class="list">
    <ul>
      <li v-for="item in sessions" :class="{active:item.id == currentSessionId}" @click="selectSession(item.id)">
        <img class="avatar" :src="item.user.img" height="30" width="30" />
        <p class="name">{{item.user.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  computed : mapState({
    currentSessionId: state=> state.currentSessionId,
    sessions(state) {
      if(state.filterKey == ""){
        return state.sessions;
      }else{
        return state.sessions.filter((item)=>{return item.user.name.indexOf(state.filterKey) != -1})
      }
    }
  }),
  methods:{
    selectSession(id) {
      this.$store.dispatch("selectSession",id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list li{
    padding: 12px 15px;
    border-bottom: 1px solid #292C33;
    cursor: pointer;
    transition: background-color .1s;
  }
  .list li.active{
    background-color: rgba(255, 255, 255, 0.1);
  }
  .list li.active{
    background-color: rgba(255, 255, 255, 0.03);
  }
  .avatar, .name{
    vertical-align:middle;
  }
  .avatar {
    border-radius: 2px;
  }
  .name {
    display: inline-block;
    margin: 0 0 0 15px;
  }
</style>
