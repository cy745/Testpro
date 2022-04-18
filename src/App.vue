<template>
  <div id="app">
    <leftDrawer ref="leftDrawer"></leftDrawer>

    <keep-alive>
      <div id="MainViewPort" @click="$refs.leftDrawer.DrawerOpen = false">
        <transition mode="out-in" name="scale">
          <router-view></router-view>
        </transition>
      </div>
    </keep-alive>
  </div>
</template>

<script>
import leftDrawer from "@/components/leftDrawer";

export default {
  name: 'App',
  components: {
    leftDrawer,
  },
  created() {
    if (localStorage.getItem("userToken") != null) {
      this.$store.commit("setUserToken", localStorage.getItem("userToken"));
      this.$store.commit("setUserName", localStorage.getItem("userName"));
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

body::-webkit-scrollbar {
  display: none;
}

.page {
  top: 0;
  height: 100vh;
  min-width: 100vw;
  width: fit-content;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.scale-enter,
.scale-leave-to {
  transform: scale(0.98);
  opacity: 0.75;
}

.scale-leave,
.scale-enter-to {
  transform: scale(1);
  opacity: 1;
}

.scale-enter-active,
.scale-leave-active {
  transition: all .3s cubic-bezier(.45, .39, .45, .96);
}

.turnToNewPic-enter,
.turnToNewPic-leave-to {
  /*transform: scale(0.98);*/
  opacity: 0;
}

.turnToNewPic-leave,
.turnToNewPic-enter-to {
  /*transform: scale(1);*/
  opacity: 1;
}

.turnToNewPic-enter-active,
.turnToNewPic-leave-active {
  transition: all .5s cubic-bezier(.45, .39, .45, .96);
}

</style>
