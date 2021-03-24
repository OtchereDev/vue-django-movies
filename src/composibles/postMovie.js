const { ref } = require("vue")
const error=ref(null)

const postData =async(form)=>{
    error.value=null

    const fd = new FormData();
    fd.append("poster", form.poster); 
    fd.append("title", form.title)
    fd.append("description", form.description)
    fd.append("rated", form.rated)
    fd.append("duration",form.duration)
    fd.append("genre.name",form.genre_name)
    fd.append("actors", form.actors)
    fd.append("created",form.created)
    fd.append("country", form.country)
    fd.append("type", form.type)
    fd.append("director", form.director)
    fd.append("language",form.language)

    const res=await fetch('http://localhost:8000/api/add_movie/',{
    method:"POST",
    body:fd
    })

    if(!res.ok){
        throw Error("Sorry, there was an eror .... Please Check Your Data and try Again")
    }
}

const postMovie = async (form)=>{

    try {
        await postData(form)
    } catch (err) {
        error.value=err.message
    }
    console.log(error)
    return {error}
}


export default postMovie