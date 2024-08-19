import { request, response } from "express"
import { data } from "../data/data.js"


export const getAllUsers = (request, response) => {
    try {
        if(data.lenght > 0){
            const payload = {
                users: data, 
                status: 200,
                message: 'Usuarios',
                registers: data.lenght,
                url: request.originalUrl
            }
            return response.json(payload)

        } 
        return response.status(404).send('No hay usuarios')
        
        
    } catch (error) {
        return response.status(500).send('Error en el servidor') 
    }
}

export const userById = (request, response) => {

    try {
        
            const {id} = request.params
            
        
            if(isNaN(id)) return response.status(400).send('ID no valido')
        
            const user = data[id-1]
            if(!user) return response.status(404).send('Usuario no existente')
        
        
            return response.send(user)
        
    } catch (error) {
        
        return response.status(500).send('Error Server')
        
    }

}

export const createUser = (request, response) => {
    try {
        const { body } = request

        const user = data.find(user => user.username === body.username)
        if(!user) {
            data.push(body)
            const result = {
                status: 201,
                message: 'usuario creado correctamente',
                user 
            }
            return response.send(result) 

        }
        return response.status(400).send('No se puede crear el usuario porque ya existe')
    } catch (error) {
        return response.status(500).send('Error server')
    }
}