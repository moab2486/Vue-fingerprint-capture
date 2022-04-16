<script>
 export default {
    data(){
        return{
            searchQuery: ""
        }
    },
    methods:{
        searchButton(){

        }
    }
 }
</script>
<template>
    <div class="mt-4">
        <div class="search-bar">
            <span class="icon muted-text">
                <i class="fa-solid fa-search"></i>
            </span>
            <input type="search" class="search-input" v-model="searchQuery">
            <button class="search-button" @click="searchButton">search</button>
        </div>
    </div>
</template>