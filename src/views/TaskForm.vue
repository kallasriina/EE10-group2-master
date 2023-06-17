<template>
    <BasePage title="Task Form" :loading="loading">
    <template v-slot:secondLine>
    <BaseForm :settings="settings" @submited="onSubmited"/>
    </template>
    </BasePage>
</template>


<script>

import BasePage from '../components/BasePage.vue';
import BaseForm from '../components/BaseForm.vue';
import db from '../utils/db';

export default { 
    name: 'TaskForm',
    components: { BasePage, BaseForm },
    data () {
        return {
            loading: false,
            settings: {
                task: {
                    type: 'text',
                    label: 'task name',
                    initialValue: ''
                },
                date: {
                    type: 'date',
                    label: 'date',
                    initialValue: ''
                },
                projectid: {
                    type: 'number',
                    label: 'project',
                    initialValue: ''
                },
                priority: {
                    type: 'select',
                    label: 'priority',
                    initialValue: '',
                    options: [
                        {label: '', value: ''},
                        {label: 'low', value: 1},
                        {label: 'medium', value: 2},
                        {label: 'high', value: 3}
                    ]
                },
                completed: {
                    type: 'select',
                    label: 'completed',
                    initialValue: '',
                    options: [
                        {label: '', value: ''},
                        {label: 'yes', value: 1},
                        {label: 'no', value: 0}
                ]
                }
            }
        }
    },
    computed: {
        mode() {
            return this.$route.params.id ? 'edit' : 'delete'
        }
    },
}

</script>


