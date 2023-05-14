<!-- 
  레이어는 항상 트리 구조로 가야 한다.
  flex 를 사용할 때는 min-width, min-height를 꼭 잡아야 한다.
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import './assets/global.scss';

export default {
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100vh;
}
</style>
