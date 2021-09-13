<template>
  <div>
    <h1 class="title">TO DO LIST</h1>
    <div class="content">
      <List />
      <ListAdd />

    </div>
  </div>
</template>

<script>
  import List from './components/List.vue'
  import ListAdd from './components/ListAdd.vue'
  export default {
    components:{
      List,
      ListAdd,
    }
  }
</script>

<style lang="scss">
  $color : red;
  @mixin middle { 
    text-align: center;
    margin-top: 100px;
  }
  *{ margin: 0 ; padding: 0 ;}
  ul{list-style: none;}
  .title{
    color:$color;
    @include middle
  }
  .content{
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    margin-top: 100px;
  }

</style>