import { MMKV } from 'react-native-mmkv';

interface MMKVStorage {
    getString: (key: string) => string | undefined;
    getNumber: (key: string) => number | undefined;
    getBoolean: (key: string) => boolean | undefined;
}

const storage: MMKVStorage = new MMKV();

const itemType = {
    getString: 'getString',
    getNumber: 'getNumber',
    getBoolean: 'getBoolean',
};

const getItem = (key: string, type: keyof MMKVStorage) => {
    return storage[type](key);
};

export {itemType, getItem};
