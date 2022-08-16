<script setup>
const props = defineProps({
    events: Object,
});
</script>


<template>
    <h2>This is the events page</h2>
    <ul>
        <li v-for="(event, index) in events" :key="index">{{event}}</li>
    </ul>
</template>
