<template>
  <div id="leftDrawer" :class={Open:DrawerOpen,DrawerHide:Hide}
       @click="selectTipTop = getSelectTipTop()" @mouseenter="cancelHide()" @mouseleave="setHide()"
       @mousemove="cancelHide()">
    <div id="toolBar" class="Drawer_icon">
      <i class="ri-menu-4-line" @click="DrawerOpen = !DrawerOpen"></i>
      <div style="width: 64px" @click="$store.commit('toggleAutoHide')">
        <i v-show="!$store.state.AutoHide" class="ri-toggle-line"></i>
        <i v-show="$store.state.AutoHide" class="ri-toggle-fill"></i>
      </div>
    </div>
    <router-link to="/user">
      <div class="Drawer_icon" @click="DrawerOpen = false">
        <i v-if="$store.state.UserToken == null" class="ri-user-5-line"></i>
        <img v-if="$store.state.UserToken != null" id="UserAvatar" :src="getAvatar" alt="">
        <span>{{ getUserName }}</span>
      </div>
    </router-link>
    <router-link v-for="item in $store.state.menu" :key="item.to" :to=item.to>
      <div class="Drawer_icon" @click="DrawerOpen = false">
        <i :class=item.icon></i>
        <span>{{ item.title }}</span>
      </div>
    </router-link>
    <span id="selectTip" :style={top:selectTipTopPX}></span>
  </div>
</template>

<script>
import i18n from "@/locales";

export default {
  name: "leftDrawer",
  data() {
    return {
      Hide: false,
      Timer: null,
      selectTipTop: 64,
      DrawerOpen: false,
    }
  },
  computed: {
    selectTipTopPX: function () {
      return this.selectTipTop + 'px';
    },
    getUserName: function () {
      const userName = this.$store.state.UserName;
      return userName != null ? userName : i18n.t("leftDrawerMenu.logTips");
    },
    getAvatar: function () {
      let avatarName = "2cb80c6e48e6af88e752c5c4d31c2bae.jpg";
      return require("../../public/image/" + avatarName);
    }
  },
  mounted: function () {
    const span = document.createElement("span");
    span.style.flexGrow = '1';
    const SelectArgs = document.querySelectorAll("#leftDrawer a");
    document.getElementById("leftDrawer").insertBefore(span, SelectArgs[SelectArgs.length - 1]);
    this.selectTipTop = this.getSelectTipTop();
    this.setHide();
  },
  methods: {
    getSelectTipTop() {
      return document.querySelector(".router-link-active").offsetTop;
    },
    setHide() {
      if (this.$store.state.AutoHide)
        this.Timer = setTimeout(() => {
          this.DrawerOpen = false;
          this.Hide = true;
        }, 1000);
    },
    cancelHide() {
      this.Hide = false;
      clearTimeout(this.Timer);
    },
  }
}
</script>

<style scoped>
#leftDrawer {
  top: 0;
  left: 0;
  width: 64px;
  z-index: 500;
  height: 100vh;
  display: flex;
  position: fixed;
  overflow: hidden;
  flex-direction: column;
  backdrop-filter: blur(20px);
  justify-content: space-between;
  -webkit-backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.3);
  transition: width .5s cubic-bezier(.19, 1, .22, 1), all 1s cubic-bezier(.19, 1, .22, 1);
  user-select: none;
  -webkit-user-drag: none;
}

#selectTip {
  left: 0;
  top: 0;
  width: 5px;
  height: 28px;
  z-index: 510;
  margin: 18px 2px;
  position: absolute;
  box-sizing: border-box;
  background-color: rgba(81, 81, 81, 0.9);
  transition: top 1s cubic-bezier(.19, 1, .22, 1);
}

.DrawerHide {
  height: 200px !important;
  margin: calc(50vh - 100px) 0;
  background-color: rgba(0, 0, 0, 0.3) !important;
}

@media screen and (min-width: 500px) {
  .DrawerHide {
    box-shadow: 2px 0 10px 1px rgba(0, 0, 0, 0.6);
    left: -58px !important;
  }
}

@media screen and (max-width: 500px) {
  .DrawerHide {
    left: -64px !important;
  }
}


.Open {
  width: 240px !important;
}

#toolBar {
  width: 240px !important;
  justify-content: space-between !important;
  cursor: pointer;
}

#UserAvatar {
  width: 64px;
  padding: 11px;
  height: 64px;
  border-radius: 32px;
  box-sizing: border-box;
}

#leftDrawer a {
  width: 240px;
  text-decoration: none;
  transition: all .5s cubic-bezier(.19, 1, .22, 1);
  user-select: none;
  -webkit-user-drag: none;
}

#leftDrawer .Drawer_icon {
  width: 100%;
  height: 64px;
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: flex-start;
}

.Drawer_icon i {
  width: 64px;
  height: 64px;
  line-height: 64px;
  font-size: 24px;
}

.Drawer_icon > span {
  margin-left: 10px;
  text-align: left;
}

#leftDrawer > span {
  flex-grow: 1;
}

a:link {
  color: black;
}

a:visited {
  color: black;
}

a:hover {
  color: #cccccc;
}

a:active {
  color: white;
}
</style>
