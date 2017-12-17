import { FETCH_ALL_COINS, FETCH_ALL_COINS_SUCCESSFULL } from '../actions/types'
const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ALL_COINS_SUCCESSFULL:
        console.log(action.payload)
            return action.payload
        default:
            return state
    }
}