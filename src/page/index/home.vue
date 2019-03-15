<template>
  <div class="home">
    <router-view name="searchBox"></router-view>
    <router-view name="menu" :height="page"></router-view>
    <card v-for="(item,index) in card" :key="index" :cardData="item"></card>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      page: "home"
    };
  },
  created() {
    this.getCard();
  },
  computed: {
    ...mapState({
      card : state => state.Card.card
    })
  },
  methods: {
    ...mapActions(["getCard"])
  }
};
</script>
<style lang='scss'>
</style>