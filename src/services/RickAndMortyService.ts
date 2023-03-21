import RickAndMortyAPI from '../api/RickAndMortyAPI';
import {
    API_Params, CharacterInterface, CharacterResponse, EpisodeInterface,
    EpisodeResponse, LocationInterface, LocationResponse
} from '../interfaces';

export const getAllCharacter = ({ ...params }: API_Params) => {
    return RickAndMortyAPI.get<CharacterResponse>('/character', { params });
}

export const getCharacter = (id: string) => {
    return RickAndMortyAPI.get<CharacterInterface>(`/character/${id}`);
}

export const getAllEpisodes = () => {
    return RickAndMortyAPI.get<EpisodeResponse>('/episode');
}

export const getEpisode = (id: string) => {
    return RickAndMortyAPI.get<EpisodeInterface>(`/episode/${id}`);
}

export const getAllLocations = () => {
    return RickAndMortyAPI.get<LocationResponse>('/location');
}

export const getLocation = (id: string) => {
    return RickAndMortyAPI.get<LocationInterface>(`/location/${id}`);
}