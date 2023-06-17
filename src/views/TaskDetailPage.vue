<template>
    <BasePage title="Task Detail" :loading="loading">
        <template v-slot:topRight>
            <BaseButton label="Edit"/>
        </template>
        <template v-slot:secondLine>
            <h2>{{ task.task }}</h2>
            <ul>
                <li>Project: {{ task.project }}</li>
                <li>Priority: {{ taskToDisplay.priority }}</li>
                <li>Completed: {{ taskToDisplay.completed }}</li>
                <li>Date: {{ taskToDisplay.date }}</li>
            </ul>
        </template>
        <template v-slot:thirdLine>
            <BaseButton label="Delete task"/>
            <BaseButton :label="completedTaskLabel"/>
        </template>
    </BasePage>
</template>

<script>
    import db from '../utils/db';
    import BasePage from '../components/BasePage.vue';
    import BaseButton from '../components/BaseButton.vue';
    import { formatDate } from '../utils/dateFunctions';
    
    export default{
        name: 'TaskDetailPage',
        data(){
            return {
                task:{},
                loading: true,
            }
        },
        created (){
            db.get('js4tasks/' + this.$route.params.id).then(record => {
                this.task = record
                this.loading = false
                console.log(this.task)
            })
        },
        computed: {
            completedTaskLabel(){
                return this.task.completed ? 'Mark uncompleted' : 'Mark completed'
            },
            taskToDisplay(){
                const priorities = {
                    '1':'low',
                    '2':'medium',
                    '3':'high'
                }
                return {
                    completed: this.task.completed ? 'yes' : 'no',
                    date: formatDate(this.task.date),
                    priority: priorities["" + this.task.priority]
                }
            }
        },
        components: {BasePage, BaseButton}
    }
</script>

<style>
</style>