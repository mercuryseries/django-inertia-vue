<script setup>
import { Link } from '@inertiajs/inertia-vue3';
</script>

<template>
    <nav>
        <ul>
            <li><Link :href="$route('home')">Home</Link></li>
            <li><Link :href="$route('contact')">Contact</Link></li>
        </ul>
    </nav>
    <div class="containa">
        <slot />
    </div>
</template>


<style scoped>
.containa {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
</style>
