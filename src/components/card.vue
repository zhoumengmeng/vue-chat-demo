<template>
  <div class="card">
    <div class="card-header">
      <img src="" width="40" height="40" :src="user.img" />
      <p>{{user.name}}</p>
    </div>
    <div class="card-footer">
      <input type="text" name="" placeholder="search user..." @keyup="filterUser" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState([
    'user',
    'filterKey'
  ]),
  methods:{
    filterUser(e) {
      this.$store.dispatch('search', e.target.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
  padding:10px;
}
.card-header img{
  vertical-align:middle;
}
.card-header p{
  display:inline-block;
  margin:0 0 0 10px;
  font-size: 16px;
}
.card-footer{
  margin-top:10px;
}
.card-footer input{
  padding: 0 10px;
  width: 100%;
  font-size: 12px;
  color: #fff;
  height: 30px;
  line-height: 30px;
  border: solid 1px #3a3a3a;
  border-radius: 4px;
  outline: none;
  background-color: #26292E;
  box-sizing: border-box;
}
</style>
