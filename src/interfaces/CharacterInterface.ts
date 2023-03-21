export interface Result {
    id?: number | null;
    name?: string;
    status?: Status;
    species?: Species;
    type?: string;
    gender?: Gender;
    origin?: Location;
    location?: Location;
    image?: string;
    episode?: string[];
    url?: string;
    created?: Date;
}

export type Gender = 'Male' | 'Female' | 'unknown';

export interface Location {
    name: string;
    url: string;
}

export type Species = 'Human' | 'Alien';

export type Status = 'Alive' | 'unknown' | 'Dead';