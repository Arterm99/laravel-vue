<template>
    <div>
        <SinglePostComponent></SinglePostComponent>
        <div>
            <!-- Вывод data() -->
            Name: {{ name }}
        </div>
        <div>Job: {{ vasyaJob }}</div>

        <button @click="sayHello">Hello</button>
        <button @click="sayHi">Hi</button>
    </div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent";
export default {
    name: "PostComponent",

    // Вызываем функцию (она по умолчанию скрыта для удобства)
    data() {
        return  {
            name: 'Вася',
            age: 20,
        }
    },

    // Вызываем методы
    methods: {
        sayHello() {
            console.log('hello');
        },
        sayHi() {
            console.log('Hi');
        }
    },

    // Вызываем вычисляемые свойства
    computed: {
        vasyaJob() {
            return this.name + ' работает в булочной'
        }
    },

    // Вызываем экспортера
    components: {
        SinglePostComponent,
    }
}
</script>

<style scoped>

</style>
