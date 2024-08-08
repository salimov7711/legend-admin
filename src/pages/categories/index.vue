<template>
  <div>
    <div class="page-header">
      <h1>Все категории</h1>
      <RouterLink :to="`categories/create`">
      <button class="add-button" >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
        <span class="button-text">Создать категорию</span>
      </button>  
      </RouterLink>
      
    </div>

    <div class="wrapper">
      <CategoriesTable :categories="categories" @refetch="fetchData" />
      <!-- <vue-awesome-paginate
              v-model="currentPage"
              :total-items="50"
              :items-per-page="5"
              :max-pages-shown="5"
              @click="onClickHandler"
          /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import CategoriesTable from "@/components/tables/CategoriesTable.vue";
import "vue-awesome-paginate/dist/style.css";

import { $api } from "@/utils/api";
import { onMounted } from "vue";
import { ref } from "vue";
const categories = ref(null);
const error = ref(null);
const currentPage = ref(1);
const onClickHandler = (page) => {
  console.log(page);
};
const fetchData = async () => {
  try {
    const response = await $api("/api/photo-reports/category");
    categories.value = response.data;
    console.log(response);
  } catch (err) {
    error.value = err;
    console.log(error.value);
  }
};

onMounted(() => {
  fetchData();
});
</script>
<style lang="scss">
.wrapper {
  background-color: #fbfbfb;
  border-radius: 6px;
  margin: 40px 24px;
  padding: 40px 24px;
  box-shadow: 0 2px 8px
      rgba(var(--v-shadow-key-umbra-color), var(--v-shadow-sm-opacity)),
    0 0 transparent, 0 0 transparent;
}

.pagination-container {
  display: flex;

  column-gap: 10px;
}

.paginate-buttons {
  height: 40px;

  width: 40px;

  border-radius: 20px;

  cursor: pointer;

  background-color: rgb(242, 242, 242);

  border: 1px solid rgb(217, 217, 217);

  color: black;
}

.paginate-buttons:hover {
  background-color: #d8d8d8;
}

.active-page {
  background-color: #3498db;

  border: 1px solid #3498db;

  color: white;
}

.active-page:hover {
  background-color: #2988c8;
}

.add-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 25px;
  background-color: #7367f0; /* Blue color */
  color: white;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  font-size: 16px;
  font-weight: bold;
}

.add-button:hover {
  background-color: #695cf3; /* Darker blue color */
  transform: scale(1.05);
}

.add-button:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.5); /* Blue ring */
}

.icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.button-text {
  display: inline-block;
}

.page-header {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 30px;
}
</style>
