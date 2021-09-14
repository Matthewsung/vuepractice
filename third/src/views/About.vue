<template>
  <div>
    <h2>ABOUT 페이지 입니다.</h2>
    <h1>{{$store.state.count}}</h1>
    <button @click="$store.commit('increaseCount')">숫자 올리기</button>
    <button @click="$store.commit('resetCount')">숫자초기화</button>

    <List />
  </div>
</template>
<script>
import List from './List.vue'
export default {
  components:{
    List
  }
}
</script>