import axios from "axios";

const api = axios.create({
    baseURL: "https://dummyjson.com/",
})


class Api {
    static postUser(form) {
        return api.post("user/login", form);
    }
    static getCategories() {
        return api.get("products/categories")
    }
    static getProducts() {
        return api.get("products/category/mens-shoes")
    }
}

export default Api;