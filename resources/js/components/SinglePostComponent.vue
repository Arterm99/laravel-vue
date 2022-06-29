<template>
    <div>
        Single Component + {{ name }}
    </div>
</template>

<script>
export default {
    name: "SinglePostComponent",

    data() {
        return {
            name: 'Alisa',
        }
    },

    methods: {
        Test() {
            console.log('Test string');
        }
    }
}
</script>

<style scoped>

</style>
