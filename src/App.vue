<script setup>
import ScrollToTop from "@core/components/ScrollToTop.vue";
import initCore from "@core/initCore";
import { initConfigStore, useConfigStore } from "@core/stores/config";
import { hexToRgb } from "@layouts/utils";
import { nextTick, onMounted } from "vue";
import { ModalsContainer } from "vue-final-modal";
import { useRouter, useRoute } from "vue-router";
import { useTheme } from "vuetify";
const { global } = useTheme();
const router = useRouter();
const route = useRoute();
// ℹ️ Sync current theme with initial loader theme
initCore();
initConfigStore();

const configStore = useConfigStore();
const accessToken = useCookie("accessToken").value;

onMounted(async () => {
  // if (localStorage.getItem("token")) {
  //   try {
  //     const response = await $api("/api/photo-reports/getUser");

  //     if (route.name == "login") {
  //       router.push("/");
  //     }
  //   } catch (err) {
  //     if (err.response && err.status === 401) {
  //       router.push("/login");
  //     }
  //   }
  // } else {
  //   router.push("/login");
  // }
  checkAuth()
});

async function checkAuth() {
 
  if (accessToken) {
    try {
      const response = await $api("/api/photo-reports/getUser");
      if (route.name === "login") {
        router.push("/");
      }
    } catch (err) {
      if (err.status === 401) {
        router.push("/login");
      }
    }
  } else {
    router.push("/login");
  }
}
</script>

<template>
  <VLocaleProvider :rtl="configStore.isAppRTL">
    <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
    <VApp
      :style="`--v-global-theme-primary: ${hexToRgb(
        global.current.value.colors.primary
      )}`"
    >
      <RouterView />

      <ScrollToTop />
      <ModalsContainer />
    </VApp>
  </VLocaleProvider>
</template>
