<template>
  <section class="md:w-11/12 lg:w-4/6 mx-auto pb-10">
    <SearchForm @SearchOccurs="handleSearch"/>
    <div class="mt-6">
      <h2 class="text-gray-50 text-2xl font-semibold mb-5 ml-5 md:ml-0">
           <span v-if="!search">Movies:</span> 
          <span v-else>Search Result</span>
      </h2>

      <div v-if="movies">
        <MovieList :movies="movies"  ref="movie_cont" />
      </div>

      <div class="flex justify-center items-center my-5 " v-if="prev || next">
        <button v-if="prev" @click="handleClick('prev')" class="text-center rounded-lg p-4 mr-2 bg-white  text-gray-700 font-bold text-lg">
          &lt; Previous
        </button>
        <button v-if="next" @click="handleClick('next')" class="text-center rounded-lg p-4 bg-white ml-2  text-gray-700 font-bold text-lg">
          Next &gt;
        </button>
      </div>
      
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import SearchForm from "@/components/SearchForm.vue"
import MovieList from "@/components/MovieList.vue"
import getMovie from '@/composibles/getMovies'
import { onMounted, ref, watchEffect } from '@vue/runtime-core'

export default {
  name: 'Home',
  components: {
    SearchForm,MovieList
  },
  setup(){

    const movie_cont=ref(null)
    const search=ref(false)

    const uri=ref("http://localhost:8000/api/all_movies/")

    const handleSearch=(search_value)=>{
      if(search_value.length){

        const new_uri=`http://localhost:8000/api/all_movies/?title=${search_value}`
        search.value=true
        uri.value=new_uri
      }else{
        const new_uri="http://localhost:8000/api/all_movies/"
        search.value=false
        uri.value=new_uri
      }
    }

    const {error,movies,fetchMovies,prev,next}=getMovie()


    const handleClick=type=>{
      if(type==='prev'){
        uri.value=prev.value
      }else{
        uri.value=next.value
      }
      const move_to=window.pageYOffset + movie_cont.value.$el.getBoundingClientRect().top-150

      window.scrollTo(0,move_to);
    }

    watchEffect(async()=>{
      await fetchMovies(uri.value)
      uri.value

    })

    return {handleSearch,movies,prev,next,error,handleClick,movie_cont,search}
  }
}
</script>
