import axios from "axios"
import * as types from "./actionTypes"

// const getBookRequest = () => {
//     return{
//         type: types.GET_BOOKS_REQUEST
//     }
// }


// const getBookSuccess = (payload) => {
//     return{
//         type: types.GET_BOOKS_SUCCESS,
//         payload
//     }
// }


// const getBookFailure = () => {
//     return{
//         type: types.GET_BOOKS_FAILURE,
//     }
// }


export const getBooks = (params) => dispatch =>  {


  dispatch({type:  types.GET_BOOKS_REQUEST})
   return axios.get('http://localhost:3004/books', params).then(r => {
       dispatch({type: types.GET_BOOKS_SUCCESS, payload: r.data})
   }).catch(e => {
       dispatch({type: types.GET_BOOKS_FAILURE, payload:  e})
   })

}
