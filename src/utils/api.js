import { ofetch } from "ofetch";

export const $api = ofetch.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  async onRequest({ options }) {
    const accessToken = useCookie("accessToken").value;
    const token = localStorage.getItem('token')
      options.headers = {
        ...options.headers,
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${accessToken}`,
      };
    if (token) {
      options.headers.Authorization = `Bearer ${accessToken}`
    }
  },
});
