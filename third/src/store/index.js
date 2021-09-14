import {createStore} from 'vuex'

export default createStore({
  state:{
    count:{
      default: 0,
      gap:0
    },
    add:{
      name:'',
      age:null
    },
    list:[
      {
        name:'김철수',
        age: 30
      },
      {
        name:'박영희',
        age: 20
      },
    ]
  },
  getters:{
    
  },
  mutations:{
    increaseCount: function (state){
      return state.count.default += state.count.gap
    },
    resetCount:function(state){
      return state.count.default = 0
    },
    addList : (state) => {
      event.preventDefault();
      state.list.push({
        name:state.add.name,
        age:state.add.age
      })
      
    }
  },

})