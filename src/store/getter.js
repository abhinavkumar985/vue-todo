const getters = {
 GET_APP_TITLE: function(state){
     return state.title;
 },
 GET_TODOS: function(state){
    return state.items;
}   
}

export default getters;