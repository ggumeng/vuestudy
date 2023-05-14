<template>
  <div class="store__container">
    <div class="store__container__header">
      <input class="store__container__header__input" v-model="inputColor" />
      <button class="store__container__header__btn" @click="changeColor">change</button>
    </div>
    <div class="store__container__body" :style="{ backgroundColor: color }"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    inputColor: '',
  }),
  computed: {
    ...mapGetters({
      color: 'getBackColor',
    }),
  },
  // created() {
  //   this.$store.dispatch('setBackColor', 'yellow');
  //   console.log('created');
  // },
  // mounted() {
  //   this.$store.dispatch('setBackColor', 'purple');
  //   console.log('mounted');
  // },
  // beforeUpdate() {
  //   console.log(this.inputColor, 'beforeUpdate');
  // },
  // updated() {
  //   console.log(this.inputColor, 'update');
  // },
  // beforeDestroy() {
  //   this.$store.dispatch('setBackColor', 'red');
  //   console.log(this.color, 'before Destroy');
  // },
  // destroyed() {
  //   console.log(this.color, 'Destroy');
  // },
  methods: {
    changeColor() {
      this.$store.dispatch('setBackColor', this.inputColor);
      // this.$destroy();
    },
  },
};
</script>

<style lang="scss" scoped>
.store__container {
  width: 100%;
  height: 100%;

  &__header {
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &__input {
      width: 100px;
      height: 25px;
    }

    &__btn {
      width: 100px;
      height: 30px;
    }
  }

  &__body {
    height: calc(100% - 50px);
  }
}
</style>
