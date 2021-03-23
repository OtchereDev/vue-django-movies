<template>
  <div class="bg-primary_brown min-h-screen font-primary_family pt-28">

    <nav class="w-full fixed top-0 left-0 bg-primary_gold py-4 px-10 flex justify-between items-center font-semibold z-50">
          <h2 class="font-secondary_family text-xl text-gray-100">
            <router-link to="/"><span class="text-primary_green">Vue</span>Django Movies</router-link> 
          </h2>
          <h2 class="font-secondary_family text-lg text-gray-100">
            <router-link :to="{name:'Add'}">Add movie</router-link> 
          </h2>
    </nav>
    
    <router-view/>

  </div>
</template>

<style>

</style>
