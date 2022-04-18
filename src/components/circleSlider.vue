<template>
  <div ref="circleSlider" :style="{width:center*2+'px',height:center*2+'px'}" class="circleSlider">
    <svg :style="{transform:'rotate('+rotate+'deg)!important'}" version="1.1"
         xmlns="http://www.w3.org/2000/svg">
      <circle :cx="center" :cy="center" :r="center - lineWidth/2"
              :stroke-dasharray="center * 5.14" :stroke-width="lineWidth"
              fill="transparent" stroke="rgba(0,0,0,0.3)"/>
      <circle :cx="center" :cy="center" :r="center - lineWidth/2"
              :stroke-dasharray="center * 6.28" :stroke-dashoffset="progress"
              :stroke-width="lineWidth" fill="transparent"
              stroke="rgba(255,255,255,0.8)"/>
    </svg>
    <transition mode="in-out" name="ProgressShow">
            <span v-show="Progress!==0" :style="{fontSize:(center/2)+'px',top:(center/2+lineWidth*2)+'px'}"
                  class="circleSlider_Text">
                {{ Progress.toFixed(0) }}
            </span>
    </transition>
  </div>
</template>

<script>
export default {
  name: "circleSlider",
  props: ['wd', 'lw', 'rt', 'min', 'max', 'attr'],
  computed: {
    lineWidth() {
      return this.lw === undefined ? 4 : parseInt(this.lw)
    },
    rotate() {
      return this.rt === undefined ? 120 : parseFloat(this.rt)
    },
    center() {
      return this.wd === undefined ? 32 : parseInt(this.wd) / 2
    },
    progress() {
      return this.center * 6.28 - this.center * this.Progress * 0.0514
    }
  },
  data() {
    return {
      Progress: null,
      Max: this.max === undefined ? 100 : parseFloat(this.max),
      Min: this.min === undefined ? 0 : parseFloat(this.min)
    }
  },
  created() {
    this.Progress = (this.attr - this.Min) * 100 / Math.abs(this.Min - this.Max);
  },
  mounted() {
    let main = this.$refs.circleSlider;
    let ProgressLast = this.Progress;
    let temp_this = this;
    let pgLast = 0;

    main.addEventListener("mousedown", startDrag);

    function onDrag(e) {
      let xMove = ProgressLast + (e.clientX - pgLast) / 2;
      temp_this.Progress = xMove <= 100 && xMove ? xMove : temp_this.Progress;
      temp_this.Progress = xMove < 0 ? 0 : temp_this.Progress;
      temp_this.Progress = xMove > 100 ? 100 : temp_this.Progress;
      let Output = temp_this.Progress * Math.abs(temp_this.Min - temp_this.Max) / 100 + temp_this.Min;
      temp_this.$emit('update:attr', Output);
    }

    function startDrag(e) {
      pgLast = e.clientX;
      ProgressLast = temp_this.Progress;
      window.addEventListener("mousemove", onDrag);
      window.addEventListener("mouseup", stopDrag);
    }

    function stopDrag() {
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("mouseup", stopDrag);
    }
  },
}
</script>

<style scoped>
.circleSlider {
  cursor: move;
  min-width: 32px;
  min-height: 32px;
  user-select: none;
  position: relative;
  display: inline-block;
}

.circleSlider svg {
  width: 100%;
  height: 100%;
  transform: rotate(90deg);
  transform-origin: 50% 50%;
  min-width: 32px !important;
  min-height: 32px !important;
}

.circleSlider_Text {
  left: 0;
  top: 24px;
  width: 100%;
  color: white;
  user-select: none;
  text-align: center;
  position: absolute;
}

.ProgressShow-enter,
.ProgressShow-leave-to {
  /*transform: scale(0.98);*/
  opacity: 0;
}

.ProgressShow-leave,
.ProgressShow-enter-to {
  /*transform: scale(1);*/
  opacity: 1;
}

.ProgressShow-enter-active,
.ProgressShow-leave-active {
  transition: all .3s cubic-bezier(.45, .39, .45, .96);
}
</style>
