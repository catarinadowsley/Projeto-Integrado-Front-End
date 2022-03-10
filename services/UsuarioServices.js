import axios from "axios"


class UsuarioService{

    //Cadastro
    async cadastrar(data){
        return axios({
            url: "http://svuv-api.herokuapp.com/user/create",
            method: "POST",
            timeout: 5000,
            data: data,
            headers: {
                Accept: 'application/json'
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    //Login
    async login(data){
        return axios({
            url: "http://svuv-api.herokuapp.com/login",
            method: "POST",
            timeout: 5000,
            data: data,
            headers: {
                Accept: 'application/json'
            }
        }).then((response) => {
            console.log(response)
            //AsyncStorage.setItem("token", response.data.token)
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    //Dados última medição.
    async medicao(){
        return axios({
            url: "http://svuv-api.herokuapp.com/data_read/last",
            method: "GET",
            timeout: 5000,
            headers: {
                Accept: 'application/json'
            }
        })
        .then((response) => {
            //console.log(response.data)

            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}

const userService = new UsuarioService()
export default userService 

