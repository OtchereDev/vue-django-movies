<template>
    <div class="flex flex-wrap ">
        <div v-for="movie in movies" :key="movie.id" class="group shadow-lg overflow-hidden  mx-4 my-2 rounded-md bg-white w-11/12  md:w-5/12 flex justify-center items-center   content-div bg-center bg-cover bg-no-repeat relative" :style="{ backgroundImage:'url('+movie.poster+')'}">
            <MovieCard :movie="movie"/>      
        </div>            
    </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue"

export default {
    components:{MovieCard},
    props:['movies']
}
</script>

<style>

</style>