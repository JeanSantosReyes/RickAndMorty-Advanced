import { Result as CharacterInterface } from "./CharacterInterface";
import { Result as EpisodeInterface } from "./EpisodeInterface";
import { Result as LocationInterface } from "./LocationInterface";
export type { Result as CharacterInterface } from "./CharacterInterface";
export type { Result as EpisodeInterface } from "./EpisodeInterface";
export type { Result as LocationInterface } from "./LocationInterface";

export interface API_Params {
    page?: number;
    name?: string;
    status?: string;
}

export interface Info {
    count?: number;
    pages?: number;
    next?: string;
    prev?: null;
}

export interface CharacterResponse {
    info: Info;
    results: CharacterInterface[];
}

export interface EpisodeResponse {
    info: Info;
    results: EpisodeInterface[];
}

export interface LocationResponse {
    info: Info;
    results: LocationInterface[];
}