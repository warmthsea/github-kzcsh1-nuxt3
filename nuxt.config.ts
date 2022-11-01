// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    vite: {
        server: {
            open: true,
            strictPort: true,
            proxy: {
                '/equipment': 'http://192.168.10.137:9999',
                '/cms': {
                    target: 'http://192.168.10.137:9999',
                    ws: true,
                    changeOrigin: true
                }
            }
        },
    },
})
