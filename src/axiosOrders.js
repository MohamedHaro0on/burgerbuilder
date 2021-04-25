import axios from "axios";
const orders = axios.create({
    baseURL: "https://burgerbuilder-3b944.firebaseio.com/",
})
export default orders;