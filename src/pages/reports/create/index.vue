<template>
    <div class="wrapper">
        <form @submit.prevent="handleCreate">
            <div class="input-group">
                <div class="title-group">
                    <label for="title" class="rounded-label">Назвавние</label>
                    <input
                        v-model="report.title"
                        type="text"
                        class="rounded-input"
                        placeholder="Введите название отчета"
                        id="title"
                    />
                </div>
                <div class="category-group">
                    <label for="cat" class="rounded-label">Категория</label>
                    <select
                        v-model="report.category_id"
                        class="rounded-select"
                        id="cat"
                    >
                        <option disabled value="">Выберите категорию</option>
                        <option
                            v-for="option in options"
                            :key="option.value"
                            :value="option.value"
                        >
                            {{ option.text }}
                        </option>
                    </select>
                </div>

                <div class="order-group">
                    <label for="title" class="rounded-label">Order</label>
                    <input
                        v-model="report.order"
                        type="number"
                        class="rounded-input"
                        placeholder="Введите название отчета"
                        id="title"
                    />
                </div>

                <div class="file-input-wrapper">
                    <label for="title" class="rounded-label">Изображение</label>

                    <input
                        type="file"
                        id="file-input"
                        @change="handleFileChange"
                        ref="fileInput"
                        name="file-input"
                    />
                    <label for="file-input" class="rounded-file-label">
                        {{ selectedFileName || "Выберите файл" }}
                    </label>
                </div>
            </div>

            <div class="btn-wrapper">
                <button type="submit" class="rounded-button">Создать</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";


import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const notify = () => {
    toast.error(ErrorMessage.value, {
        autoClose: 2000,
        position: toast.POSITION.TOP_CENTER,
    });
};

const router = useRouter();
const route = useRoute();
const report = ref({
    title: "",
    order: 0,
    category_id: null,
    image: null,
});
const options = ref([]);
const selectedFileName = ref("");
const fileInput = ref();

const ErrorMessage = ref(undefined);

const fetchCategories = async () => {
    const response = await $api("/api/photo-reports/category/get-all");
    options.value = response;
};

function handleFileChange(e) {
    if (e.target.files.length === 0) return;
    const file = e.target.files[0];
    selectedFileName.value = file.name;
    let reader = new FileReader();
    report.value.image = file;
}

function makeFormdata() {
    let formdata = new FormData();
    formdata.append("title", report.value.title);
    formdata.append("category_id", report.value.category_id);
    formdata.append("order", report.value.order);
    if (report.value.image) {
        formdata.append("image", report.value.image);
    }
    for (const [key, value] of formdata.entries()) {
        console.log(key, value);
    }
    return formdata;
}

async function handleCreate() {
    console.log("create");
    try {
        const response = await $api("/api/photo-reports/report/store/", {
            method: "post",
            body: makeFormdata(),
        });
      router.go(-1);
    } catch (err) {
        ErrorMessage.value = err.data.message
        notify()
    }
}
onMounted(() => {
    fetchCategories();
});
</script>

<style lang="scss">
.input-group {
    display: flex;
    justify-content: center;
    align-items: center;
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
    width: 100%;
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
.rounded-button {
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    width: 200px;
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

.select-wrapper {
    position: relative;
    display: inline-block;
    width: 45%;
}

.rounded-select {
    width: 300px;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 25px;
    font-size: 16px;
    outline: none;
    transition:
        border-color 0.3s,
        box-shadow 0.3s;
    background-color: #fff;
    appearance: none;
    cursor: pointer;
    background-image: url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"><path fill="%23ccc" d="M2 0L0 2h4z"/></svg>');
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 12px;
}

.rounded-select:focus {
    border-color: #7367f0;
    box-shadow: 0 0 5px rgba(102, 175, 233, 0.6);
}

.select-wrapper::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    pointer-events: none;
    border-width: 6px;
    border-style: solid;
    border-color: #ccc transparent transparent transparent;
}

.title-group {
    width: 300px;
    .rounded-label {
        padding-left: 5px;
        display: block;
        font-size: 16px;
        letter-spacing: 1px;
    }
}

.category-group {
    .rounded-label {
        padding-left: 5px;
        display: block;
        font-size: 16px;
        letter-spacing: 1px;
    }
}

.file-input-wrapper {
    position: relative;
    display: inline-block;
    width: 40%;
}

input[type="file"] {
    display: none; /* Hide the actual file input */
}

.rounded-file-label {
    display: inline-block;
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 25px;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    background-color: #fff;
    text-align: center;
    transition:
        border-color 0.3s,
        box-shadow 0.3s;
    color: #666;
}

.rounded-file-label:hover {
    border-color: #7367f0;
    box-shadow: 0 0 5px rgba(102, 175, 233, 0.6);
}

.rounded-file-label::before {
    content: "📁 "; /* Optional: Add a file icon */
}

.rounded-file-label.selected {
    color: #333; /* Change text color when a file is selected */
}

input[type="file"]:focus + .rounded-file-label {
    border-color: #66afe9;
    box-shadow: 0 0 5px rgba(102, 175, 233, 0.6);
}

.btn-wrapper {
    margin-top: 20px;
}
</style>
