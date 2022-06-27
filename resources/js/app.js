// Подключаем Vue
import Vue from 'vue'

// Подключение файлов
// Не забываем компоненты оборачивать в <div>
import PostComponent from "./components/PostComponent";


require('./bootstrap');

const app = new Vue ({
    el: '#app',

    components: {
        PostComponent,
    }

})
