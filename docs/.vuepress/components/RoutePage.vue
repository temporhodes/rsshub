<template>
    <div>
        {{ JSON.stringify(pageData) }}
        <div v-for="h2 in pageData" :key="h2.key">
            <h2>{{ h2.key }}</h2>
        </div>
    </div>
</template>

<script>
import data from './data.js';
import { objectToArray } from './utils.js'

export default {
    props: {
        type: {
            type: String,
            required: true,
        },
    },
    computed: {
        pageData: function () {
            if (data[this.type]) {
                return objectToArray(data[this.type]);
            } else {
                return [];
            }
        }
    }
}
</script>
