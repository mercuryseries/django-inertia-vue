<script setup>
const props = defineProps({
    supportEmail: String,
});
</script>


<template>
    <h1>Contact us</h1>
    <p>{{ supportEmail }}</p>
</template>
