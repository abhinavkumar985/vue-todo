import ActionList from './action-list';

const actions = {
  ADD_ITEM (store, item) {
    store.commit(ActionList.ADD_ITEM,item); 
  }
};

export default actions;