import { useState, useEffect } from 'react';

import { getAllLocations, getCharacter, getLocation } from '../services'
import { CharacterInterface, Info, LocationInterface } from '../interfaces';

export const useServiceLocation = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [location, setLocation] = useState<LocationInterface>({});
    const [info, setInfo] = useState<Info>({})
    const [charactersLocation, setCharactersLocation] = useState<Array<CharacterInterface>>([])
    const [id, setId] = useState<string>('1');

    const { count = 1 } = info;

    const retrieveInfo = () => {
        getAllLocations()
            .then(({ data }) => {
                const { info } = data;
                setInfo(info);
            })
    }

    const retrieveData = async () => {
        setLoading(true);
        const { data } = await getLocation(id);
        setLocation(data);
        const chars = await Promise.all(
            data.residents!.map(async (url) => {
                const onlyNumbers = url.replace(/[^0-9]+/g, '');
                const { data } = await getCharacter(onlyNumbers);
                return data;
            })
        ).finally(() => setLoading(false))
        setCharactersLocation(chars);
    }

    useEffect(() => {
        retrieveData();
        // eslint-disable-next-line
    }, [id])

    useEffect(() => {
        retrieveInfo();
    }, [])

    return {
        charactersLocation,
        count,
        loading,
        location,
        setId,
    }

}