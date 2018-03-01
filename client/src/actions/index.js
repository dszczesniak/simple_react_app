import axios from 'axios';
const URL = `http://localhost:3000`

export function getPeople(){
    const request = axios.get(`${URL}/people`)
                    .then(response => response.data);
    return {
        type:'GET_PEOPLE',
        payload:request
    }
}


export function addPerson(values,cb){
    const request = axios.post(`${URL}/add`,values)
                .then(
                    ()=>cb()
                )

        return {
            type:'ADD_PERSON',
            payload:'ok'
        }

}