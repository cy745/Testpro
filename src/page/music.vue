<template>
  <div class="page">
    <div style="background-color: #333333; padding: 40px 20px; border-radius: 30px">
      <circleSlider :attr.sync="tPlayer.volume.value" lw="4px" max="0" min="-100" rt="113"
                    wd='64px'></circleSlider>
      <circleSlider ref="testing" :attr.sync="tShower2" lw="4px" rt="113" wd='64px'></circleSlider>
      <circleSlider :attr.sync="PanVol.pan.value" lw="4px" max="1" min="-1" rt="113"
                    wd='64px'></circleSlider>
      <br><br>
      <audio controls src="../../public/test.mp3"></audio>
      <br><br>
      <span>{{ tPlayer.volume.value.toFixed(1) }}</span> ||
      <span>{{ tShower2.toFixed(1) }}</span> ||
      <span>{{ PanVol.pan.value.toFixed(1) }}</span>
    </div>
  </div>
</template>

<script>
import * as Tone from "tone"
import circleSlider from "@/components/circleSlider";

export default {
  name: "music",
  components: {
    circleSlider,
  },
  data() {
    return {
      tShower: 0,
      tShower2: 40,
      Synth: new Tone.PolySynth().toMaster(),
      PanVol: new Tone.PanVol().toMaster(),
      tPlayer: new Tone.Player(require("../../public/test.mp3"), () => {
        console.log("load")
      }).toMaster(),
      loop: new Tone.Loop(time => {
        this.Synth.triggerAttackRelease("C2", "8n", time)
      }, "4n"),
      Keymap: {
        65: 'C3',
        87: 'C#3',
        83: 'D3',
        69: 'D#3',
        68: 'E3',
        70: 'F3',
        84: 'F#3',
        71: 'G3',
        89: 'G#3',
        90: 'G#3',
        72: 'A3',
        85: 'A#3',
        74: 'B3',
        75: 'C4',
        79: 'C#4',
        76: 'D4',
        80: 'D#4',
        59: 'E4',
        186: 'E4',
        222: 'F4',
        221: 'F#4',
        220: 'G4'
      }
    }
  },
  mounted() {
    let key = {};
    for (let One in this.Keymap) key[One] = {down: false};
    this.Synth.set({
      'oscillator': {
        'partials': [2, 7, 2, .4, .7],
        'phase': 90
      },
      'envelope': {
        'attack': 0.1,
        'decay': 0.1,
        'sustain': 0.5,
        'release': 0.1
      }
    });
    document.querySelector("audio").volume = this.tShower2 * 0.01;
    document.onkeydown = (e) => {
      let note = this.Keymap[e.which];
      if (!note) return;
      if (!key[e.which].down) {
        this.Synth.triggerAttack(note);
        key[e.which].down = true;
      }
      // e.code === "Space" ? this.playAndPause() : e.code === "KeyM" ? this.tPlayer.mute = !this.tPlayer.mute : null;
    };
    document.onkeyup = (e) => {
      let note = this.Keymap[e.which];
      if (!note) return;
      if (key[e.which].down) {
        this.Synth.triggerRelease(note);
        console.log("up" + this.Keymap[e.which]);
        key[e.which].down = false;
      }
    };
  },
  methods: {
    playAndPause() {
      this.tPlayer.state === "stopped" ? this.tPlayer.start() : this.tPlayer.stop();
    },
  },
  beforeDestroy() {
    document.onkeydown = null;
  }
}
</script>

<style scoped>
.page {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #1e1e1e;
  height: fit-content !important;
  color: white;

  background-image: url("../../public/image/01b36db366d0545219883d30a5ba16b1.jpg");
}

.circleSlider {
  margin: 0 20px;
}
</style>
