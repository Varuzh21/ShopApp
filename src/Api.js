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
    static getProduct(productId) {
        return api.get(`products/${productId}`)
    }
    static getSearchProduct(search){
        return api.get(`products/search?q=${search}`)
    }
}

export default Api;