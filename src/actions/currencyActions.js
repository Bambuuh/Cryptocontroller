import { FETCH_ALL_COINS_SUCCESSFULL } from './types'

export const fetchAllCurrencies = () => {
    return dispatch => {
        return fetch('http://gurey.se:9988/api/v1/coin/top?days=7')
            .then(response => response.json().then(data => dispatch({ type: FETCH_ALL_COINS_SUCCESSFULL, payload: data })))
            .catch(error => console.error(error))
    }
}