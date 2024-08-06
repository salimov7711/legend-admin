<template>
  <div>
    <div class="page-header">
      <h1>Все категории</h1>
    </div>

    <div class="wrapper">

      <CategoriesTable/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import CategoriesTable from '@/components/tables/CategoriesTable.vue';
</script> 
<style lang="scss">
.wrapper {
  background-color: #fbfbfb;
  border-radius: 6px;
  margin: 20px 0;
  padding: 10px 24px;
  box-shadow: 0 2px 8px
      rgba(var(--v-shadow-key-umbra-color), var(--v-shadow-sm-opacity)),
    0 0 transparent, 0 0 transparent;
}
</style>
