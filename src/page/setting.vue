<template>
  <div class="page">
    <ShangLiu>
    </ShangLiu>
  </div>

</template>

<script>
import ShangLiu from "@/components/ShangLiu";

export default {
  name: "setting",
  components: {
    ShangLiu
  }
}
</script>

<style scoped>
.page {
  display: flex;
  padding: 40px;
  justify-content: center;
  align-items: center;
  background-image: url("../../public/image/80a85adcc9574b1918297bfc9e37186b.jpg");
}
</style>
