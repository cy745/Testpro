<template>
  <div id="gameView">
    <div id="floatPanel">
      <span>{{ ID === null ? "未连接" : ID }}</span>
      <span v-for="item in PersonInfo" :key="item.id">
                [ id:{{ item.id }}, x:{{ item.x }}, y:{{ item.y }} ]
            </span>
      <hr>
      <div>
        <button v-if="!isConnect" @click="connect()">
          connect
        </button>
        <button v-if="isConnect" @click="disconnect()">
          disconnect
        </button>
      </div>
    </div>
  </div>

</template>

<script>
import * as PIXI from 'pixi.js'
import Stats from "stats.js"
import * as io from "socket.io-client"

export default {
  name: "game",
  computed: {
    isConnect() {
      if (this.Connection === null) return false;
      else return this.Connection.connected;
    }
  },
  data() {
    return {
      ID: "",
      Connection: null,
      PersonInfo: null,
      Stats: new Stats(),
      App: new PIXI.Application({width: window.innerWidth, height: window.innerHeight, antialias: true}),
    }
  },
  created() {
    window.onresize = () => this.App.renderer.resize(window.innerWidth, window.innerHeight);
    window.onmousemove = this.positionDataSync;
    this.App.renderer.backgroundColor = 0x52BAE0;
    this.loadJson(require("@/assets/things.json"), require("@/assets/things.png"));
  },
  mounted() {
    this.Stats.dom.style.left = "";
    this.Stats.dom.style.right = "0px";

    document.getElementById("gameView").appendChild(this.App.view);
    document.getElementById("gameView").appendChild(this.Stats.dom);

    this.animate();
  },
  methods: {
    loadJson(FramesJson, MetaImage) {
      PIXI.Loader.shared.reset();
      PIXI.utils.clearTextureCache();
      PIXI.Loader.shared.add("MetaImage", MetaImage).load(() => {
        let Frames = FramesJson.frames;
        let texture = PIXI.utils.TextureCache["MetaImage"];
        for (let item in Frames) {
          if (Object.prototype.hasOwnProperty.call(Frames, item)) {
            const Texture = new PIXI.Texture(texture);
            Texture.frame = new PIXI.Rectangle(
                Frames[item].frame.x, Frames[item].frame.y,
                Frames[item].frame.w, Frames[item].frame.h
            );
            PIXI.utils.TextureCache[item] = Texture;
          }
        }
      });
    },
    createSprite(data) {
      this.clearStage();
      for (let key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          let Sprite = new PIXI.Sprite(PIXI.utils.TextureCache["cloud-25"]);
          [Sprite.x, Sprite.y, Sprite["id"]] = [data[key].x, data[key].y, key];
          Sprite.pivot.set(Sprite.width / 2, Sprite.height / 2);
          this.App.stage.addChild(Sprite);
        }
      }
    },
    animate() {
      this.Stats.begin();
      for (let id in this.PersonInfo)
        if (Object.prototype.hasOwnProperty.call(this.PersonInfo, id))
          for (let key in this.App.stage.children)
            if (Object.prototype.hasOwnProperty.call(this.App.stage.children, key))
              if (this.App.stage.children[key].id === id) {
                let position = this.App.stage.children[key].position;
                let [x, y] = [this.PersonInfo[id].x, this.PersonInfo[id].y];

                position.x = this.Lerp(position.x, x, 0.1);
                position.y = this.Lerp(position.y, y, 0.1);
              }

      window.requestAnimationFrame(this.animate);
      this.Stats.end();
    },
    connect() {
      if (this.Connection === null || this.Connection.disconnected) {
        this.Connection = io.connect('192.168.31.181:9001');
        this.ConnectionInit();
      }
    },
    ConnectionInit() {
      this.Connection.on('init', id => this.ID = id);
      this.Connection.on('dataSync', data => this.PersonInfo = data);
      this.Connection.on('chat', msg => console.log(msg));
      this.Connection.on('getRoomer', data => this.createSprite(data));
    },
    disconnect() {
      if (this.Connection !== null && this.Connection.connected) this.Connection.disconnect();
      [this.ID, this.PersonInfo] = [null, null];
      this.clearStage();
    },
    positionDataSync(event) {
      if (this.Connection !== null) this.Connection.emit("positionDataSync", [event.clientX, event.clientY]);
    },
    clearStage() {
      this.App.stage.removeChildren(0, Object.keys(this.App.stage.children).length);
    },
    Lerp(value1, value2, amount) {
      amount = amount < 0 ? 0 : amount;
      amount = amount > 1 ? 1 : amount;
      return value1 + (value2 - value1) * amount;
    }
  },
  beforeDestroy() {
    window.onresize = null;
    window.onmousemove = null;
    this.disconnect();
  }
}
</script>

<style scoped>
#gameView {
  height: 100vh;
  width: 100vw;
}

#floatPanel {
  position: fixed;
  bottom: 64px;
  right: 64px;
  width: 350px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-color: #333333;
  color: white;
}
</style>

