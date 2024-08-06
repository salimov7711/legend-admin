<template>
  <div>
    <table class="table">
      <thead class="t-head">
        <tr class="th-row">
          <th>id</th>
          <th>Название</th>
          <th>Дата создания</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rows in 6" class="body-row">
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.table {
  border: 2px;
  width: 100%;
  border-color: #0000;
  .th-row {
    border-radius: 6px;
    background-color: #f5f5f5;
    font-size: 14px;
    
  }
  th {
    padding: 12px 20px;
    border-radius: 8px;
  }
}

.body-row {
  text-align: center;
  border-radius: 6px;
  background-color: #f5f5f5;
  
  margin: 10px;
}
</style>
