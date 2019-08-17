export const FETCH_DATA = 'fetch_data';

export function defaultFunction(value) {
    console.log('value-----------------------', value);
    const data = value;

    return {
        type: FETCH_DATA,
        payload: data
    }
}