import axios from "axios";
export function request(config){
    const instance=axios.create({
         baseURL:'http://192.168.10.177:40005',
        timeout:5000
    })
    return instance(config)
}
