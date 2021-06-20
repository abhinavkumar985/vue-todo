<template>
  <div class="hello">
    <h6>{{ title }}</h6>
    <br />
    <input type="text" placeholder="Enter Todo" v-model="item" />
    <button @click="addItem">Add</button>
    <div>
      <ul>
        <li v-for="item in getItem" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ActionList from "../store/action-list";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: function() {
    return {
      item: "",
      title: this.$store.getters.GET_APP_TITLE, // This is how you can use getters. [Never access state directly]
    };
  },
  methods: {
    addItem: function() {
      this.$store.dispatch(ActionList.ADD_ITEM, this.item); // Dispatch action "Alwats use action maps"
      this.item = "";
      alert("Item Added in the store");
    },
  },
  computed: {
    getItem: function() {
      return this.$store.getters.GET_TODOS;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  list-style: none;
  display: inherit;
  text-align: center;
  font-size: 20px;
}
a {
  color: #42b983;
}
</style>
