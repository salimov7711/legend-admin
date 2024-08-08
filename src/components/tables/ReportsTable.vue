<template>
    <div>
        <table class="table">
            <thead class="t-head">
                <tr class="th-row">
                    <th>id</th>
                    <th>Изображение</th>

                    <th>Название</th>
                    <th>Категория</th>
                    <th>Дата создания</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    class="body-row"
                    v-for="(report, index) in reports"
                    :key="report"
                >
                    <td>{{ report.id }}</td>
                    <td>
                        <div class="img-wrapper">
                            <img :src="report.image" class="img" />
                        </div>
                    </td>

                    <td>{{ report.title }}</td>
                    <td>{{ report.category }}</td>
                    <td>{{ formatDate(report.created_at) }}</td>
                    <td>
                        <div class="button-wrapper">
                        <RouterLink :to="`/reports/update/${report.id}`">
                        <button class="eye-button">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                stroke="#ff5a1f"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_18269_3133)">
                                    <path
                                        d="M6.6665 8.00033C6.6665 8.35395 6.80698 8.69309 7.05703 8.94313C7.30708 9.19318 7.64622 9.33366 7.99984 9.33366C8.35346 9.33366 8.6926 9.19318 8.94265 8.94313C9.19269 8.69309 9.33317 8.35395 9.33317 8.00033C9.33317 7.6467 9.19269 7.30757 8.94265 7.05752C8.6926 6.80747 8.35346 6.66699 7.99984 6.66699C7.64622 6.66699 7.30708 6.80747 7.05703 7.05752C6.80698 7.30757 6.6665 7.6467 6.6665 8.00033Z"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                    <path
                                        d="M14 8C12.4 10.6667 10.4 12 8 12C5.6 12 3.6 10.6667 2 8C3.6 5.33333 5.6 4 8 4C10.4 4 12.4 5.33333 14 8Z"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_18269_3133">
                                        <rect
                                            width="16"
                                            height="16"
                                            fill="white"
                                        ></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        </RouterLink>


                            <button
                                @click="handleDelete(report.id)"
                                class="delet-btn"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    stroke="#F05252"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_18321_6834)">
                                        <path
                                            d="M2.66699 4.66699H13.3337"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                        <path
                                            d="M3.33301 4.66699L3.99967 12.667C3.99967 13.0206 4.14015 13.3598 4.3902 13.6098C4.64025 13.8598 4.97939 14.0003 5.33301 14.0003H10.6663C11.02 14.0003 11.3591 13.8598 11.6092 13.6098C11.8592 13.3598 11.9997 13.0206 11.9997 12.667L12.6663 4.66699"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                        <path
                                            d="M6 4.66667V2.66667C6 2.48986 6.07024 2.32029 6.19526 2.19526C6.32029 2.07024 6.48986 2 6.66667 2H9.33333C9.51014 2 9.67971 2.07024 9.80474 2.19526C9.92976 2.32029 10 2.48986 10 2.66667V4.66667"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                        <path
                                            d="M6.66699 8L9.33366 10.6667M9.33366 8L6.66699 10.6667"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_18321_6834">
                                            <rect
                                                width="16"
                                                height="16"
                                                fill="white"
                                            ></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const emit = defineEmits(["refetch"]);
const formatDate = (dateString) => {
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        // hour: "2-digit",
        // minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("ru-Ru", options);
};
const props = defineProps({
    reports: {
        type: Array,
        default: () => [],
    },
});

async function handleDelete(id) {
    const response = await $api("/api/photo-reports/report/delete/" + id, {
        method: "delete",
    });
    if (response) {
        console.log(response);
        emit("refetch");
    }
}
</script>

<style>
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

    td {
        padding: 10px;
        color: #030303;
    }
}

.body-row {
    text-align: center;
    border-radius: 6px;
    background-color: #f5f5f5;

    margin: 10px;
}
.img {
    width: 100px;
    height: 50px;
    border-radius: 6px;
}

.img-wrapper {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
}
.eye-button {
    display: flex;
    padding: 10px;
    text-align: center;
    background: #fff;
    border-radius: 100%;
    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
    }
    svg {
        stroke: grey;
    }
}

.delet-btn {
    display: flex;
    padding: 10px;
    text-align: center;
    background: #fff;
    border-radius: 100%;
    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
    }
}

.button-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 20px;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
