import axios from 'axios'

// /   const posting= ()=> {
    //     var fd = new FormData();
    //     fd.append("poster", poster.value); 
    //     fd.append("title", "New Vue Series 2")
    //     fd.append('description', 'All about VueJs')
    //     fd.append("rated", 4)
    //     fd.append("duration","60")
    //     fd.append("genre.name","Thriller")
    //     fd.append("actors", "Otcheredev")
    //     fd.append("created","2020-03-19")
    //     fd.append("country", "Ghana")
    //     fd.append("type", "movie")
    //     fd.append("director", "OtchereDev")
    //     fd.append("language", "English")

    //     console.log(fd.get(description))

    //     axios({
    //     method: "post",
    //     url: "http://localhost:8000/api/add_movie/",
    //     data: fd,
    //     headers: {
    //     "content-type": `multipart/form-data; boundary=${fd._boundary}`,
    //     },

    //     })
    //     .then((res) => {
    //     console.log(res);
    //     // this.info = res.statusText;
    //     })
    //     .catch((err) => console.log(err.response.data));
    //     }
