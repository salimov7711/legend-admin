<template>
    <div class="wrapper">
        <form @submit.prevent="creatCat">
            <div class="input-group">
                <input
                    v-model="category"
                    type="text"
                    class="rounded-input"
                    placeholder="Введите название категории"
                    required
                />
                <button type="submit" class="rounded-button">Создать</button>
            </div>
        </form>
    </div>
</template>

<script setup>

definePage({ 
  meta: {
    action: 'read',
    subject: 'Admin',
  },
})
import { useRouter, useRoute } from "vue-router";
const category = ref("");
const route = useRoute();
const router = useRouter();
const message = ref("");
async function creatCat() {
    try {
        const response = await $api("/api/photo-reports/category/store", {
            method: "post",
            body: { name: category.value },
        });
        if (response) {
            message.value = response.message;
            console.log(message.value);
            router.go(-1);
        }
    } catch (err) {
        message.value = err;
    }
}
</script>

<style lang="scss" scoped>
.input-group {
    display: flex;
    justify-content: center;
    gap: 0 20px;
}
.wrapper {
    background-color: #fbfbfb;
    border-radius: 6px;
    margin: 20px 20px;
    padding: 40px 24px;
    box-shadow:
        0 2px 8px
            rgba(var(--v-shadow-key-umbra-color), var(--v-shadow-sm-opacity)),
        0 0 transparent,
        0 0 transparent;
}

.rounded-input {
    width: 45%;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 25px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s;
}

.rounded-input:focus {
    border-color: #7367f0;
}
.rounded-button:disabled {
    background-color: #66afe9;
    cursor: not-allowed;
}
.rounded-button {
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #7367f0; /* Blue color */

    transition: background-color 0.3s;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
.rounded-button:hover {
    background-color: #695cf3; /* Darker blue color */
}
.rounded-button:focus {
    border-color: #66afe9;
    box-shadow: 0 0 0 4px rgba(102, 175, 233, 0.5); /* Blue ring */
}
</style>
