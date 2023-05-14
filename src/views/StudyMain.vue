<template>
  <div class="app">
    <!-- left -->
    <StudyLeft />
    <div class="app__container">
      <!-- header -->
      <StudyHeader />
      <div class="app__container__body">
        <div class="app__container__body__content">
          <router-view />
        </div>
        <!-- right -->
        <StudyRight />
      </div>
    </div>
  </div>
</template>

<script>
import StudyHeader from '../components/StudyHeader.vue';
import StudyLeft from '../components/StudyLeft.vue';
import StudyRight from '../components/StudyRight.vue';

export default {
  name: 'StudyMain',
  components: { StudyLeft, StudyHeader, StudyRight },
};
</script>

<style scoped lang="scss">
.app {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background: lightblue;

  &__container {
    width: 100%;
    height: 100%;

    &__body {
      width: 100%;
      height: calc(100% - 50px);
      display: flex;

      &__content {
        width: 100%;
        background: grey;
      }
    }
  }
}
</style>
