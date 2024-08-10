<script setup>
import { VueFinalModal } from "vue-final-modal";

defineProps({
    title: String,
});
const emit = defineEmits(["confirm"]);
</script>

<template>
    <VueFinalModal
        class="confirm-modal"
        content-class="confirm-modal-content"
        overlay-transition="vfm-fade"
        content-transition="vfm-fade"
    >
        <h1 class="head">{{ title }}</h1>
        <slot />

       
            <button @click="emit('confirm')" class="rounded-button-red">
                Удалить
            </button>
       
    </VueFinalModal>
</template>

<style lang="scss">
.confirm-modal {
    display: flex;
    justify-content: center;
    align-items: center;
}
.confirm-modal-content {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: #fff;
    border-radius: 0.5rem;
}
.confirm-modal-content > * + * {
    margin: 0.5rem 0;
}
.confirm-modal-content h1 {
    font-size: 1.375rem;
}
.confirm-modal-content button {
    margin: 0.25rem 0 0 auto;
    padding: 0 8px;
    border: 1px solid;
    border-radius: 0.5rem;
}
.dark .confirm-modal-content {
    background: #000;
}

.head {
    color: red;
    font-weight: normal;
}
.rounded-button-red {
    border: none;
    border-radius: 25px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    width: 200px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: red; /* Blue color */

    transition: background-color 0.3s;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
.rounded-button-red:hover {
    background-color: rgb(229, 0, 0); /* Darker blue color */
}
.rounded-button-red:focus {
    border-color: #66afe9;
    box-shadow: 0 0 0 4px rgba(102, 175, 233, 0.5); /* Blue ring */
}

.confirm-modal-content {
    width: 500px;
}

.button-blue {
    padding: 10px 8px;
    border: none;
    border-radius: 25px;
    color: black;
    font-size: 16px;
    cursor: pointer;
    height: 40px;
    width: 200px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: white; /* Blue color */

    transition: background-color 0.3s;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.buttons-wrapper {
    display: flex;
    justify-content: center;
}

.confirm-modal-content button {
    margin: 0.25rem 0 0 auto;
    padding: 10px 5px;
    border: 1px solid;
    border-radius: 0.5rem;
}
.button-blue:hover {
    background-color: rgb(0, 0, 204);
    color:white
}
.button-blue:focus {
    background-color: rgb(0, 0, 229);
    box-shadow: 0 0 0 4px rgba(102, 175, 233, 0.5); /* Blue ring */
}
</style>
