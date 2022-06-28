<template>
    <div>
        <SinglePostComponent></SinglePostComponent>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="person in personsAgeMoreTwenty">
                <th scope="row">{{ person.id}}</th>
                <td>{{ person.name}}</td>
                <td>{{ person.age}}</td>
                <td>{{ person.job}}</td>
            </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
import SinglePostComponent from "./SinglePostComponent";
export default {
    name: "PostComponent",

    // Вызываем функцию (она по умолчанию скрыта для удобства)
    data() {
        return  {
            persons: [
                {
                    id: 1,
                    name: 'Vasya',
                    age: 20,
                    job: 'coach',
                },
                {
                    id: 2,
                    name: 'Elena',
                    age: 17,
                    job: 'rest',
                },
                {
                    id: 3,
                    name: 'Petr',
                    age: 34,
                    job: 'seller',
                },
                {
                    id: 4,
                    name: 'Ksusha',
                    age: 25,
                    job: 'traveler',
                },
                {
                    id: 5,
                    name: 'Olya',
                    age: 21,
                    job: 'Teacher',
                }
            ]

        }
    },

    // Вызываем методы
    methods: {

    },

    // Вызываем вычисляемые свойства
    // Вызываем метод filter(), который так же преобразует масив как v-for и v-if
    computed: {
        personsAgeMoreTwenty() {
            return this.persons.filter(function (person) {
                return person.age > 20
            })
        },
        personsAgeLessTwenty() {
            return this.persons.filter(function (person) {
                return person.age < 20
            })
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
