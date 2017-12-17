import { FETCH_ALL_COINS_SUCCESSFULL } from './types'

export const fetchAllCurrencies = timeFrame => {
    return dispatch => {
        console.log(`http://gurey.se:9988/api/v1/coin/top?days=${timeFrame}`)
        return fetch(`http://gurey.se:9988/api/v1/coin/top?days=${timeFrame}`)
            .then(response => response.json().then(data => dispatch({ type: FETCH_ALL_COINS_SUCCESSFULL, payload: data })))
            .catch(error => console.error(error))
    }
}