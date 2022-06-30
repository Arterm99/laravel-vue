<template>
    <div>
        <CreateComponent></CreateComponent>
        <SinglePostComponent ref="indexxx"></SinglePostComponent>
        <!--  ref="index" - позволяет вызывать методы из дочерних классов -->
        <IndexComponent ref="index"></IndexComponent>
<!--        <table class="table">-->
<!--            <thead>-->
<!--            <tr>-->
<!--                <th scope="col">#</th>-->
<!--                <th scope="col">Name</th>-->
<!--                <th scope="col">Age</th>-->
<!--                <th scope="col">Job</th>-->
<!--            </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--            <tr v-for="person in persons">-->
<!--                <th scope="row">{{ person.id}}</th>-->
<!--                <td>{{ person.name}}</td>-->
<!--                <td>{{ person.age}}</td>-->
<!--                <td>{{ person.job}}</td>-->
<!--            </tr>-->
<!--            </tbody>-->
<!--        </table>-->
    </div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent";
import CreateComponent from "./CreateComponent";
import IndexComponent from "./IndexComponent";
export default {
    name: "PostComponent",

    // Вызываем функцию (она по умолчанию скрыта для удобства)
    data() {
        return  {
            persons: null,
        }
    },

    // Зарезервированный метод жизненого цикла компонента для запуска methods
    mounted () {
        // Тест
        this.$refs.indexxx.Test();
    },

    // Вызываем метод axios
    // У него есть методы catch - работа с ошибками, then() - когда все успешно, finally - если мы хотим, что бы все сработало в любом случае
    // "=>" позволяет произвести доступ к переменной | data - то, что придет с backend
    methods: {
    },

    // Вызываем вычисляемые свойства
    computed: {

    },

    // Вызываем экспортера
    components: {
        SinglePostComponent,
        CreateComponent,
        IndexComponent,
    }
}
</script>

<style scoped>

</style>
