<template>
    <h2 class="font-semibold text-primary_pink text-4xl text-center">
        Add A Movie To The Database
    </h2>
  <form @submit.prevent="handlePost" class="pb-10">
      <input type="text" class="block w-10/12 py-2 px-4 md:w-9/12 mx-auto my-4 font-medium shadow-xl rounded-md outline-none bg-secondary_brown text-primary_pink placeholder-primary_pink " name="" id="" placeholder="Title" v-model="title" required>
      <input type="text" class="block w-10/12 py-2 px-4 md:w-9/12 mx-auto my-4 font-medium shadow-xl rounded-md outline-none bg-secondary_brown text-primary_pink placeholder-primary_pink " name="" id="" placeholder="Description" v-model="description" required>
      <input type="date" class="block w-10/12 py-2 px-4 md:w-9/12 mx-auto my-4 font-medium shadow-xl rounded-md outline-none bg-secondary_brown text-primary_pink placeholder-primary_pink " name="" id="" placeholder="Created" v-model="created" required>
      <label class="text-primary_pink font-semibold w-10/12 md:w-9/12 mx-auto block">Rating</label>
      <select v-model="rated" class="block w-10/12 py-2 px-4 md:w-9/12 mx-auto my-4 font-medium shadow-xl rounded-md outline-none bg-secondary_brown text-primary_pink placeholder-primary_pink ">
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
          <option value="N/A">N/A</option>
         
      </select>
      <input type="number" class="block w-10/12 py-2 px-4 md:w-9/12 mx-auto my-4 font-medium shadow-xl rounded-md outline-none bg-secondary_brown text-primary_pink placeholder-primary_pink " name="" id="" placeholder="Duration (in minutes)" v-model="duration" required>
      <input type="text" class="block w-10/12 py-2 px-4 md:w-9/12 mx-auto my-4 font-medium shadow-xl rounded-md outline-none bg-secondary_brown text-primary_pink placeholder-primary_pink " name="" id="" placeholder="Genre" v-model="genre" required>
      <input type="text" class="block w-10/12 py-2 px-4 md:w-9/12 mx-auto my-4 font-medium shadow-xl rounded-md outline-none bg-secondary_brown text-primary_pink placeholder-primary_pink " name="" id="" placeholder="Actors" v-model="actors" required>
      <input type="text" class="block w-10/12 py-2 px-4 md:w-9/12 mx-auto my-4 font-medium shadow-xl rounded-md outline-none bg-secondary_brown text-primary_pink placeholder-primary_pink " name="" id="" placeholder="Country" v-model="country" required>
      <label class="text-primary_pink font-semibold w-10/12 md:w-9/12 mx-auto block">Type</label>
      <select v-model="type" class="block w-10/12 py-2 px-4 md:w-9/12 mx-auto my-4 font-medium shadow-xl rounded-md outline-none bg-secondary_brown text-primary_pink placeholder-primary_pink ">
          <option value="series">Series</option>
          <option value="movie">Movie</option>
          <option value="episode">Episode</option>
      </select>
      <div class="w-32 h-32 mx-auto bg-primary_gold cursor-pointer rounded-md relative flex flex-col justify-center items-center">
          <div class=" absolute w-full ">
            <h2 class="text-center font-medium text-white "> Upload A Poster</h2>
          </div>
      <input type="file" name="" id=""  class="opacity-0 w-full block h-full cursor-pointer"  placeholder="poster" @change="handleChange"  >
      </div>
      <input type="text" class="block w-10/12 py-2 px-4 md:w-9/12 mx-auto my-4 font-medium shadow-xl rounded-md outline-none bg-secondary_brown text-primary_pink placeholder-primary_pink " name="" id="" placeholder="director" v-model="director" required>
      <input type="text" class="block w-10/12 py-2 px-4 md:w-9/12 mx-auto my-4 font-medium shadow-xl rounded-md outline-none bg-secondary_brown text-primary_pink placeholder-primary_pink " name="" id="" placeholder="language" v-model="language" required>
      <div v-if="errors" class="text-center text-red-500 font-semibold ">
          {{errors}}
      </div>
    <div class="text-center">

        <button class="py-3 px-4 rounded-md focus:outline-none bg-primary_gold text-white font-medium ">Submit</button>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import postMovie from "@/composibles/postMovie"
import {useRouter} from 'vue-router'

export default {
    setup(){
    //   DOM element refs
      const title = ref("")
      const  description = ref("")
      const  created = ref("")
      const  rated = ref("N/A")
      const  duration = ref("")
      const  genre = ref("")
      const  actors = ref("")
      const  country = ref("")
      const  type = ref("movie")
      const  poster = ref(null)
      const  director = ref("")
      const  language = ref("")

      const errors=ref(null)
    
    // router
        const router=useRouter()

      const handleChange= (e)=>{
          let file=e.target.files[0]
          poster.value=file
      }


      const handlePost=async()=>{
          
          if(poster.value){
              errors.value=''
              const new_form={
                  "poster": poster.value,
                "title": title.value,
                "description": description.value,
                "rated": rated.value,
                "duration":duration.value,
                "genre.name":genre.value,
                "actors": actors.value,
                "created":created.value,
                "country": country.value,
                "type": type.value,
                "director": director.value,
                "language":language.value,
                
              }
              
            const {error} = await postMovie(new_form)
            console.log(error.value)
            if (error.value!==null){
                errors.value=error.value
            }else{
                console.log('done')
                router.push({

                    name:"Home"
                })
            }
            
          }else{
              errors.value='Please add movie poster'
          }

      }

      return {
            title,
            description,
            created,
            rated,
            duration,
            genre,
            actors,
            country,
            type,
            director,
            language,
            handleChange,
            handlePost,
            errors}
    }
}
</script>

<style>

</style>