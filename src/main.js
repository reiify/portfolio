import { createApp } from 'vue'
import './assets/styles/style.scss'
import App from './App.vue'

// languages
import { languages, defaultLocale } from './i18n'
import { createI18n, useI18n } from 'vue-i18n'

const localLang = localStorage.getItem('lang')

const messages = Object.assign(languages)
const i18n = createI18n({
    legacy: false, // false - composition api | true - options api
    locale: localLang || defaultLocale,
    fallbackLocale: 'ru',
    messages
})

createApp(App, {
    setup() {
        const { t } = useI18n()
        
        return { t }
    }
}).use(i18n).mount('#app')