<template>
    
    <div class="w-full">
        <div  class="w-full image-cover rounded-t-md h-56" >
            <div class="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right hover:opacity-25 group-hover:opacity-25">
                <span class="text-base tracking-wide  font-bold border-b border-white font-sans"> {{MoviesWithshortenDesc.date}}</span>
                <span class="text-xs tracking-wide font-bold uppercase block font-sans">{{MoviesWithshortenDesc.month}}</span>
            </div>
        </div>
        <div class="py-8 px-4 bg-secondary_brown text-primary_pink rounded-b-md hover:opacity-25 group-hover:opacity-25">
            <span class="block text-lg  font-bold tracking-wide">{{MoviesWithshortenDesc.title}}</span>
            <span  class="block text-sm w-full">
                {{MoviesWithshortenDesc.description}}
            </span>
        </div>
    </div>
    <div class="absolute top-0 -left-full bg-gray-800 preview w-full h-full transition-all duration-300 flex flex-col justify-center items-center">
        <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">{{movie.title}}</span> 
        <div class="pt-8 text-center">
            <button @click='handleClick(movie.id)' class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">More Detail</button>
        </div>
    </div>
   
</template>

<script>
import { computed, ref } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
export default {
    props:['movie'],
    setup(props){

        const router=useRouter()

        const MoviesWithshortenDesc=computed(()=>{
            const movie=props.movie
            const movie_release_date=new Date(...movie.created.split('-'))
            const month = movie_release_date.toLocaleString('default', { month: 'short' });
            const date=movie_release_date.getDate()
            return {...movie,description:movie.description.substring(0,50),date,month}
        })

        const handleClick=(id)=>{
            router.push({
                name:'Detail',
                params:{
                    id:id
                }
            })
        }      

        return {MoviesWithshortenDesc, handleClick}
    }
}
</script>

<style>

    .group:hover .preview{
        left:0%
                }

</style>