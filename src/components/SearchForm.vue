<template>
  
    <div class="mx-4 md:mx-0">
            <form @submit.prevent="handleSubmit">
                <input class="py-3 bg-secondary_brown text-primary_pink w-full rounded-lg px-5 placeholder-primary_pink outline-none" type="text" v-model="search" name="search" id="" placeholder="Search for a movie">
            </form>
    </div>
    
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    emits:['SearchOccurs'],

    setup(props,context){
        const search=ref('')

        const handleSubmit=()=>{
            context.emit('SearchOccurs',search.value)
        }

        return {search,handleSubmit}
    }
}
</script>

<style>

</style>