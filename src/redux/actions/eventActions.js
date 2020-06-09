import { GET_EVENTS, GET_EVENT, ADD_EVENT, SEARCH_EVENTS, DELETE_EVENT } from './types';
import axios from 'axios';


export const getEvents = () => async dispatch => {

    const res = await axios.get('http://localhost:3001/events');
    dispatch({
        type: GET_EVENTS,
        payload: res.data
    })
}

export const getEvent = (id) => async dispatch => {
    const event = await axios.get(`http://localhost:3001/events/${id}`);
    dispatch({
        type: GET_EVENT,
        payload: event.data
    })
}

export const addEvent = (data) => async dispatch => {
    try {
        const res = await axios.post('http://localhost:3001/events', data);
        dispatch({
            type: ADD_EVENT,
            payload: res.data
        })
    } catch (err) {
        console.log(err);
        dispatch(
            { type: GET_EVENTS }
        )
    }
}

export const searchEvents = (name) => async dispatch => {
    const res = await axios.get('http://localhost:3001/events');
    dispatch({
        type: GET_EVENTS,
        payload: res.data
    })
    dispatch({
        type: SEARCH_EVENTS,
        payload: name
    })
}

export const deleteEvent = (id) => async dispatch => {
    await axios.delete(`http://localhost:3001/events/${id}`);
    const res = await axios.get('http://localhost:3001/events');
    dispatch({
        type: DELETE_EVENT,
        payload: res.data
    })
}