import { useEffect, useState } from 'react';

import { getAllEpisodes, getCharacter, getEpisode } from '../services';
import { CharacterInterface, EpisodeInterface, Info } from '../interfaces';

export const useServiceEpisode = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [episode, setEpisode] = useState<EpisodeInterface>({});
    const [info, setInfo] = useState<Info>({})
    const [charactersEpisode, setCharactersEpisode] = useState<Array<CharacterInterface>>([]);
    const [id, setId] = useState<string>('1');

    const { count = 1 } = info;

    const retrieveInfo = () => {
        getAllEpisodes()
            .then(({ data }) => {
                const { info } = data;
                setInfo(info);
            })
    }

    const retrieveData = async () => {
        setLoading(true);
        const { data } = await getEpisode(id);
        setEpisode(data);
        const chars = await Promise.all(
            data.characters!.map(async (url) => {
                const onlyNumbers = url.replace(/[^0-9]+/g, '');
                const { data } = await getCharacter(onlyNumbers);
                return data;
            })
        ).finally(() => setLoading(false))
        setCharactersEpisode(chars);
    }

    useEffect(() => {
        retrieveData();
        // eslint-disable-next-line
    }, [id])

    useEffect(() => {
        retrieveInfo();
    }, [])

    return {
        charactersEpisode,
        count,
        episode,
        loading,
        setId
    }

}