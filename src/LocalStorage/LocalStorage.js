const SLAYER_HELPER = 'SLAYER_HELPER';

export const SLAYER_MASTER_KEY = `${SLAYER_HELPER}:SLAYER_MASTER`;
export const COMBAT_LEVEL_KEY = `${SLAYER_HELPER}:COMBAT_LEVEL`;
export const SLAYER_LEVEL_KEY = `${SLAYER_HELPER}:SLAYER_LEVEL`;
export const BLOCK_LIST_KEY = `${SLAYER_HELPER}:BLOCK_LIST`;
export const DESIRED_TASKS_KEY = `${SLAYER_HELPER}:DESIRED_TASKS`;
export const SLAYER_UNLOCKS_KEY = `${SLAYER_HELPER}:SLAYER_UNLOCKS`;
export const QUESTS_KEY = `${SLAYER_HELPER}:QUESTS`;

export const readFromStorageOrDefault = (key, defaultValue) => {
    const value = JSON.parse(localStorage.getItem(key));
    return (value) ? value : defaultValue;
};

export const readIntFromStorageOrDefault = (key, defaultValue) => {
    const int = readFromStorageOrDefault(key, defaultValue);
    return (Number.isInteger(int)) ? int : 
        (isNaN(parseInt(int))) ? defaultValue : parseInt(int);
};

export const writeToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};