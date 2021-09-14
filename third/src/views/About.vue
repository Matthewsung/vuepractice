<template>
  <div>
    <h2>ABOUT 페이지 입니다.</h2>
    <h1>{{$store.state.count.default}}</h1>
    <input type="number" v-model="$store.state.count.gap" />
    <button @click="$store.commit('increaseCount')">숫자 올리기</button>
    <button @click="$store.commit('resetCount')">숫자초기화</button>
  </div>
</template>
