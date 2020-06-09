import { GET_EVENTS, GET_EVENT, ADD_EVENT, SEARCH_EVENTS, DELETE_EVENT } from '../actions/types';
import { filterEvent } from '../helper';

const initialState = {
    events: [],
    event: {},
    searches: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EVENTS:
            return {
                ...state,
                events: action.payload
            }
        case GET_EVENT:
            return {
                ...state,
                event: action.payload,
                searches: false
            }
        case ADD_EVENT:
            return {
                ...state,
                events: [...state.events, action.payload],
                searches: false

            }
        case SEARCH_EVENTS:
            return {
                ...state,
                events: state.events.filter(event => filterEvent(event, action.payload)),
                searches: true
            }
        case DELETE_EVENT:
            return {
                ...state,
                events: action.payload
            }
        default:
            return state
    }
}
