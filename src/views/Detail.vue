<template>
  <h2 class="text-center font-semibold text-5xl text-primary_pink" v-if="movie">
      {{movie.title}}
  </h2>
  <div class="flex flex-col md:flex-row h-full mx-10 pb-10" v-if="movie">
      <div class=" w-10/12 mx-auto md:w-4/12 flex justify-center items-center">
        <div class="w-72 h-64 bg-primary_pink rounded-lg overflow-hidden">
            <img :src="movie.poster" class="w-full h-full" alt="">
        </div>
      </div>
      <div class="w-full mx-auto md:w-10/12 md:mx-10 text-primary_pink text-lg font-semibold">
      <h2>
          Description:
      </h2>
      <p class="font-normal">
          {{movie.description}}
      </p>
      <h2>
          Realese date : {{formatDate().created}}
      </h2>

      <h2>
          Rating : {{movie.rated}} Stars
      </h2>

      <h2>
          Genere : {{movie.genre.name}}
      </h2>

      <h2>
          Duration : {{movie.duration}} minutes
      </h2>

      <h2>
          Directed By : {{movie.director}} 
      </h2>

      <h2>
          Classification : {{movie.type}}
      </h2>

      <h2>
          Actors
      </h2>
      <p class="font-normal">
          {{movie.actors}}
      </p>

      <h2>
          Language : {{movie.language}}
      </h2>


      </div>
  </div>
</template>

<script>
import getSingleMovie from "@/composibles/getSingleMovie"
import { watchEffect } from '@vue/runtime-core'
export default {
    props:['id'],

    setup(props){
        const {error,fetchMovie,movie}=getSingleMovie()


        watchEffect(async()=>{
            await fetchMovie(props.id)
            
        })

        const formatDate=()=>{
            const original_date=new Date(...movie.value.created.split("-"))
            const day=original_date.getDate()
            const month=original_date.toLocaleString('default', { month: 'long' })
            const year = original_date.getFullYear()

            const formatDate=`${day} ${month}, ${year}`

            return  {created:formatDate}
        }

        return {movie,formatDate}

    }
}
</script>

<style>

</style>