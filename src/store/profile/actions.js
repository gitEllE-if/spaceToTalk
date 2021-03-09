export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';
export const CHANGE_AGE = 'PROFILE::CHANGE_AGE';
export const CHANGE_CITY = 'PROFILE::CHANGE_CITY';

export const changeName = (newName) => ({
    type: CHANGE_NAME,
    payload: newName
});

export const changeAge = (newAge) => ({
    type: CHANGE_AGE,
    payload: newAge
});

export const changeCity = (newCity) => ({
    type: CHANGE_CITY,
    payload: newCity
});