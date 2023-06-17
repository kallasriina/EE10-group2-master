<template>
    <BasePage title="Projects Page" :loading="loading">
        <template v-slot:topRight>
            <BaseButton label="add"/>
        </template>
        <template v-slot:secondLine>
            <BaseList :items="projectsToDisplay" />
        </template>
        <template v-slot:thirdLine>
        </template>
    </BasePage>
</template>

<script>

import db from '../utils/db.js'
import BaseList from '../components/BaseList.vue'
import BasePage from '../components/BasePage.vue'
import BaseButton from '../components/BaseButton.vue'

export default {

    name: 'ProjectsPage',
    data() {
        return {
            projects: [],
            tasks: []
        }

    },

    created() {

        db.get("js4projects").then(data => { this.projects = data })
        db.get("js4tasks").then(data => { this.tasks = data })
    },
    components: {

        BaseList,
        BasePage,
        BaseButton
    },

    computed: {

        projectsToDisplay() {
            return this.projects.map(project => {
                return {
                    id: project.id,
                    link: "/project/" + project.id,
                    header: project.project,
                    rightContent: this.tasks.filter (task => task.projectid === project.id && task.completed).length + "/" + this.tasks.filter (task => task.projectid === project.id).length
                }
            }
            )
        }
    }

}
</script>

