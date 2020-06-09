export const filterEvent = (event, place) => {

    if (place === '') return true;

    const l = event.city.toLowerCase();
    const p = place.toLowerCase();
    if (l === p) return true;
    else return false;
}