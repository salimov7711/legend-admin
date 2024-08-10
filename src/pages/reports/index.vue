<template>
    <div>
        <div class="page-header">
            <h1>Все отчеты</h1>

            <RouterLink :to="`/reports/create`">
                <button class="add-button">
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
                    <span class="button-text">Создать отчет</span>
                </button>
            </RouterLink>
        </div>

        <div class="wrapper">
            <ReportsTable :reports="reports" @refetch="fetchData"/>
        </div>
    </div>
</template>

<script setup>
import ReportsTable from "@/components/tables/ReportsTable.vue";
import { $api } from "@/utils/api";
import { onMounted } from "vue";

const reports = ref(null);

async function fetchData() {
    try {
        const response = await $api("/api/photo-reports/all-reports");
        reports.value = response.data;
    } catch (err) {
        throw new Error(err);
    }
}
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
    box-shadow:
        0 2px 8px
            rgba(var(--v-shadow-key-umbra-color), var(--v-shadow-sm-opacity)),
        0 0 transparent,
        0 0 transparent;
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
    transition:
        background-color 0.3s,
        transform 0.3s;
    font-size: 16px;
    font-weight: bold;
}

.add-button:hover {
    background-color: #695cf3; /* Darker blue color */
    transform: scale(1.05);
}

.add-button:focus {
    border-color: #66afe9;
    box-shadow: 0 0 0 4px rgba(102, 175, 233, 0.5); /* Blue ring */
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
