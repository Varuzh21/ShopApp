import axios from "axios";

const api = axios.create({
    baseURL: "https://dummyjson.com/",
})


class Api {
    static postUser(form) {
        return api.post("user/login", form);
    }
}

export default Api;