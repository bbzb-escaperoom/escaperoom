import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],
    ssr: false,
    app: {
        baseURL: '/escaperoom/'
    },
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
})
