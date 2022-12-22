import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import axios from 'axios';
import '../css/style.css';
import Layout from './components/Layout.vue';

const pages = import.meta.glob('./pages/**/*.vue');

document.addEventListener('DOMContentLoaded', () => {
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

    InertiaProgress.init({ showSpinner: true });

    const routePlugin = {
        install: (app, _options) => {
            app.config.globalProperties.$route = window.reverseUrl
        }
    }

    createInertiaApp({
        resolve: async name => {
            const page = (await pages[`./pages/${name}.vue`]()).default;
            page.layout = page.layout || Layout;
            return page;
        },
        setup({ el, App, props, plugin }) {
            createApp({render: () => h(App, props)})
                .use(plugin)
                .use(routePlugin)
                .mount(el)
        },
    });
});
