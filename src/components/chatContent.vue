<template>
	<div class="text-box">
		<textarea placeholder="按 Ctrl + Enter 发送" @keyup.ctrl.enter="onKeyUp" v-model="content"></textarea>
	</div>
</template>
<script>
import {mapState} from 'vuex'

export default {
  data(){
    return {
      content:''
    }
  },
	computed:mapState({
		user:state => state.user,
		currentSessionId: state => state.currentSessionId,
		session(state) {
			return state.sessions.filter((session)=>session.id == state.currentSessionId)[0];
		}
	}),
  methods:{
    onKeyUp(){
      if(this.content.length > 0){
        this.$store.dispatch('sendMessage',this.content);
        this.content = '';
      }
    }
  }
}	

</script>
<style scope>
  .text-box{
    background: #fff;
    height: 160px;
    border-top: solid 1px #ddd;
  }
  .text-box textarea{
    padding: 10px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font-family: "Micrsofot Yahei";
    resize: none;
  }
</style>