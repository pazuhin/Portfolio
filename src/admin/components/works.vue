<template>
  <div>
    <div 
      v-for="(item, index) in list" 
      :key="index">
      {{ item }}
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      list: [1, 5, 3, 4, 5, 6, 7, 8]
    };
  }
};
</script>
