import Axios from 'axios'

export async function getTodos() {
    try{
        const response = await Axios.get(`http://localhost:5000/api/todos`)
        return response.data
    } catch (error){
        console.error('ошибка стоп0000000', error)
    }
}
export async function setTodos(data: any) {
    try{
        const response = await Axios.post(`http://localhost:5000/api/todos`, data)
        return response.data
    } catch (error){
        console.error('ошибка стоп0000000', error)
    }
}