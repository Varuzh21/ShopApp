import axios from "axios";

const api = axios.create({
    baseURL: "https://dummyjson.com/",
})


class Api {
    static async postUser(form) {
        console.log(form, "API call");
        
        return await api.post("user/login", form);
    }
}

export default Api;