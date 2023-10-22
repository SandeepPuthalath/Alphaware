import axios from "axios";
import configKey from "../../config/config";


const instance = axios.create({
    baseURL: configKey.BaseUrl
})

export default instance;