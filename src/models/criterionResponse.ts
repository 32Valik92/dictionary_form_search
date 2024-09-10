export interface ISynonymsResponse {
    word: string;
    synonyms: string[];
}

export interface IDefinitionsResponse {
    word: string;
    definitions: { definition: string, partOfSpeech: string }[];
}

export interface IExamplesResponse {
    word: string;
    examples: string[];
}

export interface IRhymesResponse {
    word: string;
    rhymes: {
        all: string[];
    };
}

export interface IAntonymsResponse {
    word: string;
    antonyms: string[];
}

export interface ISyllablesResponse {
    word: string;
    syllables: {
        count: number;
        list: string[];
    }
}