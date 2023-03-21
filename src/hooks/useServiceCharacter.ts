import { useEffect, useState } from 'react';
import { API_Params, CharacterInterface, Info } from '../interfaces';
import { getAllCharacter } from '../services';

export const useServiceCharacter = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [characters, setCharacters] = useState<Array<CharacterInterface>>([]);
    const [infoPage, setInfoPage] = useState<Info>({});
    const [statusRequest, setStatusRequest] = useState<number>(0);

    const [pageNumber, setPageNumber] = useState<number>(1);
    const [search, setSearch] = useState<string>('');
    const [status, setStatus] = useState<string>('');

    useEffect(() => {
        retrieveCharacters();
        // eslint-disable-next-line
    }, [pageNumber, search, status])

    const getRequestParams = (page: number, name: string, status: string) => {
        let params: API_Params = {};

        if (page) params['page'] = page;

        if (name) params['name'] = name;

        if (status) params['status'] = status;

        return params;
    };

    const retrieveCharacters = () => {
        setLoading(true);
        const params = getRequestParams(pageNumber, search, status);
        getAllCharacter(params)
            .then(({ data }) => {
                const { results, info } = data;
                setCharacters(results);
                setInfoPage(info);
                setStatusRequest(200);
            })
            .catch((error) => setStatusRequest(error.response.status))
            .finally(() => setLoading(false))
    }

    return {
        characters,
        infoPage,
        loading,
        pageNumber,
        statusRequest,
        setPageNumber,
        setSearch,
        setStatus
    }

}