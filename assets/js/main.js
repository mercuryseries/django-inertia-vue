import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import axios from 'axios';
import '../css/style.css';
import Layout from './components/Layout.vue';

const pages = import.meta.glob('./pages/**/*.vue');

document.addEventListener('DOMContentLoaded', () => {
    const csrfToken = document.querySelector('meta[name=csrf-token]').content;
    axios.defaults.headers.common['X-CSRFToken'] = csrfToken;

    InertiaProgress.init({ showSpinner: true });

    createInertiaApp({
        resolve: async name => {
            const page = (await pages[`./pages/${name}.vue`]()).default;
            page.layout = page.layout || Layout;
            return page;
        },
        setup({ el, App, props, plugin }) {
            createApp({render: () => h(App, props)})
                .use(plugin)
                .mount(el)
        },
    });
});
