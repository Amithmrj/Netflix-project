import axios from "axios";

const instance = axios.create({                        //Instance creation
    baseURL:"https://api.themoviedb.org/3"
  });


  export default instance  