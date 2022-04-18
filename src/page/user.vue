<template>
  <div :style="{backgroundColor:UserBackgroundColor}" class="page">
    <transition mode="out-in" name="turnToNewPic">
      <!--suppress HtmlUnknownTarget -->
      <img v-show="isShow" id="UserBackground" :src=Pic_Real alt="">
    </transition>
    <div id="mContent" :style="{backgroundColor:UserBackgroundColor}">
      <br><br><br>
      <img-inputer v-model="Pic_temp"></img-inputer>

      <h1>UserName:{{ $store.state.UserName }}</h1>
      <h3>UserToken:{{ $store.state.UserToken }}</h3>
      <h2>UserID:{{ $store.state.UserID }}</h2>

      <label>
        <input v-model="UserName" type="text">
      </label><br>
      <label>
        <input v-model="UserPassword" type="password">
      </label><br>
      <button @click="tryLogin()">点击登录</button>
      <button @click="$store.dispatch('logout')">点击退出</button>
      <br>
      <button @click="isShow = !isShow">获取颜色{{ UserBackgroundColor }}</button>
    </div>
  </div>
</template>

<script>
import Palette from '../../public/js/palette.min'

export default {
  name: "User",
  data() {
    return {
      UserName: "",
      UserPassword: "",
      UserBackgroundColor: null,
      Pic_Real: null,
      Pic_temp: null,
      isShow: true,
    }
  },
  watch: {
    Pic_temp: function (newOne, oldOne) {
      const temp_this = this;
      if (typeof oldOne === "string") {
        temp_this.Pic_Real = oldOne;
        temp_this.isShow = false;
      }
      setTimeout(function () {
        if (typeof newOne !== "string") {
          temp_this.readBlobAsDataURL(newOne, (e) => {
            localStorage.setItem("UserBackground", e);
            temp_this.Pic_temp = e;
            temp_this.Pic_Real = e;
          });
        }
        temp_this.isShow = true;
      }, 550);
    }
  },
  created() {
    const localUserBackground = localStorage.getItem("UserBackground");
    if (localUserBackground !== null) {
      this.Pic_temp = localUserBackground;
      this.Pic_Real = localUserBackground;
    }
  },
  mounted() {
    document.getElementById("UserBackground").onload = () => this.getColor();
    let stopping = true;
    window.onmousewheel = (e) => {
      if (stopping === true) {
        stopping = !stopping;

        let direction = e.deltaY > 0 ? 'down' : 'up';
        console.log(direction);

        setTimeout(() => {
          stopping = !stopping;
        }, 1500);
      }

    };
  },
  methods: {
    getColor() {
      let image = new Image();
      image.src = this.Pic_temp;
      document.getElementById("UserBackground").style.objectFit
          = image.height >= image.width ? "contain" : "cover";
      this.UserBackgroundColor = new Palette(image).getDominantColor();
      image = null;
    },
    readBlobAsDataURL(blob, callback) {
      if (blob != null) {
        const a = new FileReader();
        a.onload = (e) => callback(e.target.result);
        a.readAsDataURL(blob);
      }
    },
    tryLogin() {
      this.$store.dispatch('login', {
        UserName: this.UserName,
        UserPassword: this.UserPassword
      });
    },
  }
}
</script>

<style scoped>
#UserBackground {
  left: 0;
  width: 100%;
  z-index: 300;
  height: 61.4vh;
  background-color: transparent;
  position: absolute;
  object-fit: cover;
  object-position: center;
  transform: translateY(-19.3vh) translateZ(-1px) scale(2.01);
}

#mContent {
  width: 100%;
  z-index: 400;
  padding: 40px;
  min-height: 100vh;
  margin-top: 61.4vh;
  position: relative;
  border-top: 12px ridge rgba(0, 0, 0, 0.1);
  box-shadow: 0 -2px 60px 20px rgba(0, 0, 0, 0.5);
  transition: all .5s cubic-bezier(.45, .39, .45, .96);
}

#mContent h1, h2, h3, h4, h5, h6, p, span {
  background: inherit;
  color: transparent;
  /*noinspection CssInvalidPropertyValue*/
  background-clip: text;
  -webkit-background-clip: text;
  filter: invert(1) grayscale(1) contrast(9);
}

.page {
  height: 100vh;
  width: 100vw;
  perspective: 1px;
  overflow-y: hidden;
  overflow-x: hidden;
  transform-style: preserve-3d;
}

.page::-webkit-scrollbar {
  display: none;
}
</style>
