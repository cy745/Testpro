<template>
  <div id="grid-box">
    <div v-for="INDEX in Column" :id="'COLUMN'+INDEX" :key="INDEX" class="column">
      <gridCheck v-for="(item,index) in Row" :key="index" :style="{backgroundColor : item}"></gridCheck>
    </div>
  </div>
</template>

<script>
import gridCheck from "@/components/gridCheck";

export default {
  name: "gridCheckBox",
  components: {
    gridCheck,
  },
  props: {
    row: String,
    column: String
  },
  created() {
    let rowNum = this.row !== undefined ? parseInt(this.row) : 88;
    let columnNum = this.row !== undefined ? parseInt(this.column) : 88;
    this.Row = new Array(rowNum);
    for (let n = 0; n < this.Row.length; n++) {
      let i = (n + 1) % 12;
      switch (i) {
        case 0:
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
          this.Row[n] = "rgba(255,255,255,0.1)";
          break;
        case 2:
        case 4:
        case 6:
        case 9:
        case 11:
          this.Row[n] = "rgba(0,0,0,0.1)";
          break;
      }
    }
    this.Column = new Array(columnNum);
  },
  data() {
    return {
      Row: null,
      Column: null,
    }
  }
}
</script>

<style scoped>
#grid-box {
  margin-left: 64px;
  width: fit-content;
  height: fit-content;
  display: flex;
  background-color: #333333;
  justify-content: center;
  align-items: center;
}

.column {
  width: 50px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.2);
}


</style>
