<template>
  <div>
    <h1>LIST 입니다</h1>
    <ul>
      <li 
        v-for="(value, index) in $store.state.list" 
        :key=index
      > 
        {{value.name}} : {{value.age}}
      </li>
    </ul>
    <form @submit="$store.commit('addList')">
      <input type="text" v-model="$store.state.add.name" placeholder="이름입력" />
      <input type="number" v-model="$store.state.add.age" placeholder="나이입력" />
      <button>입력하기</button>
    </form>
  </div>
</template>

<style >
  ul{
    list-style: none;
  }
</style>