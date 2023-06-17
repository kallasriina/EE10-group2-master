<template>
    <BasePage title="project detail" :loading="loading">
        <template v-slot:topRight>
            <BaseButton label="edit"/>
        </template>
        <template v-slot:secondLine>
            <h2>{{project.project}}</h2>
            <BaseList :items="tasksToDisplay" v-if="tasks.length" />
            <p v-else>No tasks to display</p>
        </template>
        <template v-slot:thirdLine>
            <BaseButton label="add task"/>
            <BaseButton label="delete project"/>
        </template>
    </BasePage>
</template>

<script>
import db from '../utils/db';
import BaseList from '../components/BaseList.vue';
import BasePage from '../components/BasePage.vue';
import BaseButton from '../components/BaseButton.vue';

    export default{
        name: 'ProjectDetailPage',
        data(){
            return {
                project:{},
                tasks:[],
                loading: true
            }
        },
        created (){
            const promises = [
            db.get('js4projects/' + this.$route.params.id),
            db.get('js4tasks?projectid=' + this.$route.params.id)
            ]
            Promise.all(promises).then((results) => {
                this.project=results[0]
                this.tasks= results[1]
                this.loading=false
            })
        },
        components: {BaseList, BasePage, BaseButton},
        computed: {
            tasksToDisplay() {
              
                return this.tasks.map(task => {
                    return {
                        header: task.task,
                        subtitle: 'date',
                        link: "/task/" + task.id,
                    }
                })
             }
        }
    }
</script>

<style>

</style>