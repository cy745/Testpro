<template>
  <div :class={check:ifChecked} class="gridOne" @click="ifChecked = !ifChecked"></div>
</template>

<script>
export default {
  name: 'gridCheck',
  data() {
    return {
      ifChecked: false
    }
  }
}
</script>

<style scoped>
.gridOne {
  height: 40px;
  box-sizing: border-box;
  border: 1px solid grey;
  background-color: rgba(255, 255, 255, 0.5);
}

.gridOne.check {
  background-color: rgba(20, 20, 20, 0.9) !important;
}
</style>
