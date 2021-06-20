 const mutations = {
    ADD_ITEM: function(state,item) {
      // Add item in the store
      state.items.push(item);
    }
  };
  
  export default mutations;