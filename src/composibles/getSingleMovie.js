const { ref } = require("vue");

const movie = ref(null)
const error= ref(null)


const fetchMovie=async(id)=>{
    error.value=null
    try {
        const res=await fetch(`http://localhost:8000/api/movie/${id}`)

        if(!res.ok){
            throw Error('Sorry Could not fetch the Movies ... Try refreshing the Page')
        }

        const data = await res.json()

        movie.value=data
        
    } catch (err) {
        console.log(err.message)
    }   
}

const getSingleMovie=()=>{
    return {movie,error,fetchMovie}
}

export default getSingleMovie