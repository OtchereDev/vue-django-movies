const { ref } = require("vue");

const movies = ref([])
const error= ref(null)
const next=ref(null)
const prev=ref(null)

const fetchMovies=async(uri)=>{
    error.value=null
    try {
        const res=await fetch(uri)

        if(!res.ok){
            throw Error('Sorry Could not fetch the Movies ... Try refreshing the Page')
        }

        const data = await res.json()

        const result=[]

        data.results.forEach(movie=>{
            result.push(movie)
        })

        next.value=data.next
        prev.value=data.previous

        movies.value=result
        
    } catch (err) {
        console.log(err.message)
    }   
}

const getMovies=()=>{
    return {movies,error,fetchMovies,next,prev}
}

export default getMovies