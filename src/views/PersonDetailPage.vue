<template>
    <BasePage title="person detail" :loading="loading">
        <template v-slot:topRight>
            <BaseButton label="edit"/>
        </template>
        <template v-slot:secondLine>
            <h2>{{ person.first + ' ' + person.last }}</h2>
        </template>
        <template v-slot:thirdLine>
            <BaseButton label="delete"/>
        </template>
    </BasePage>
</template>

<script>
    import db from '../utils/db';
    import BasePage from '../components/BasePage.vue';
    import BaseButton from '../components/BaseButton.vue';

    export default{
        name: 'PersonDetailPage',
        data(){
            return {
                person:{},
                loading:true
            }
        },
        created (){
            db.get('js4persons/' + this.$route.params.id).then(record => {
                this.person = record
                this.loading = false
            })
        },
        components: {BasePage, BaseButton}
    }
</script>

<style>
</style>