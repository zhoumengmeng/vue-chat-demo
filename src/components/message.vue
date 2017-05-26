<template>
	<div class="message-box">
		<ul class="message-list">
			<li v-for="item in session.messages">
				<p class="time">
          <span>{{ item.date | time }}</span>
        </p>
        <div class="content" :class="{self:item.self}">
        	<img class="avatar" height="30" width="30" :src="item.self ? user.img : session.user.img" />
        	<div class="text">{{item.content}}</div>
        </div>
			</li>
		</ul>
	</div>
</template>
<script>
import {mapState} from 'vuex'

export default {
	computed:mapState({
		user:state => state.user,
		currentSessionId: state => state.currentSessionId,
		session(state) {
			return state.sessions.filter((session)=>session.id == state.currentSessionId)[0];
		}
	}),
	filters:{
		time(date) {
			if(typeof date === 'string'){
				date = new Date(date);
			}
			var h = date.getHours(),
					m = date.getMinutes();
			if(h < 10){
				 h = "0" + h
			};
			if(m < 10){
				 m = "0" + m
			}
			return h+ ':' + m;
		}
	}
}	

</script>
<style scope>
.message-box{
	background: #eee;
	height:400px;
	overflow-y: scroll;
	padding:20px;
}
.time{
	margin: 7px 0;
  text-align: center;
}
.time>span{
	display: inline-block;
  padding: 0 18px;
  font-size: 12px;
  color: #fff;
  border-radius: 2px;
  background-color: #dcdcdc;
}
.avatar {
    float: left;
    margin: 0 10px 0 0;
    border-radius: 3px;
}
.text {
	display:inline-block;
  position: relative;
  padding: 0 10px;
	max-width: 480px;
  min-height: 30px;
  line-height: 2.5;
  font-size: 12px;
  text-align: left;
  word-break: break-all;
  background-color: #fafafa;
  border-radius: 4px;
  color:#575759;
}
.text:before{
	content: " ";
  position: absolute;
  top: 9px;
  right: 100%;
  border: 6px solid transparent;
  border-right-color: #fafafa;
}
.self{
	text-align:right;
}
.self .avatar{
	float:right;
	margin: 0 0 0 10px;
}
.self .text{
	background-color: #b2e281;
}
.self .text:before{
	right: inherit;
  left: 100%;
  border-right-color: transparent;
  border-left-color: #b2e281;
}
</style>