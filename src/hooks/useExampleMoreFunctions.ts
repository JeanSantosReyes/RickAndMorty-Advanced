import { useEffect, useState } from 'react';

import { getAllEpisodes, getCharacter, getEpisode } from '../services';
import { CharacterInterface, EpisodeInterface, Info } from '../interfaces';

/* 
Este hook no se esta usando, 
Es una segunda manera de traer los datos, haciendo uso de mas funciones y useEffect
*/

export const useExampleMoreFunctions = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [episode, setEpisode] = useState<EpisodeInterface>({});
    const [info, setInfo] = useState<Info>({})
    const [charactersEpisode, setCharactersEpisode] = useState<Array<CharacterInterface>>([]);
    const [id, setId] = useState<string>('1');

    const { characters = [] } = episode;
    const { count = 1 } = info;

    const retrieveInfo = () => {
        getAllEpisodes()
            .then(({ data }) => {
                const { info } = data;
                setInfo(info);
            })
    }

    const retrieveEpisode = () => {
        setLoading(true);
        getEpisode(id)
            .then(({ data }) => {
                setEpisode(data);
            })
            .finally(() => setLoading(false))
    }

    const retrieveCharacters = async () => {
        const chars = await Promise.all(
            characters.map(async (url) => {
                const onlyNumbers = url.replace(/[^0-9]+/g, '');
                const { data } = await getCharacter(onlyNumbers);
                return data;
            })
        );
        setCharactersEpisode(chars);
    }

    useEffect(() => {
        retrieveInfo();
    }, [])

    useEffect(() => {
        retrieveEpisode();
        // eslint-disable-next-line
    }, [id])

    useEffect(() => {
        retrieveCharacters();
        // eslint-disable-next-line
    }, [episode])

    return {
        charactersEpisode,
        count,
        episode,
        loading,
        setId
    }

}