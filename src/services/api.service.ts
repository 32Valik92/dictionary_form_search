import {baseURL, headersKey} from "@/constants";
import {
   IAntonymsResponse,
   IDefinitionsResponse,
   IExamplesResponse,
   IRhymesResponse,
   ISyllablesResponse,
   ISynonymsResponse
} from "@/models";

const searchService = {
   search: async (word: string, criterion: string): Promise<
        IAntonymsResponse |
        IDefinitionsResponse |
        IExamplesResponse |
        IRhymesResponse |
        ISyllablesResponse |
        ISynonymsResponse> => {
      const data = await fetch(`${baseURL}/${word}/${criterion}`, {
         method: "GET",
         headers: {
            "x-rapidapi-key": headersKey.x_rapidapi_key,
            "x-rapidapi-host": headersKey.x_rapidapi_host,
         }
      }).then(value => value.json());

      switch (criterion) {
      case "synonyms":
         return data as ISynonymsResponse;
      case "definitions":
         return data as IDefinitionsResponse;
      case "examples":
         return data as IExamplesResponse;
      case "rhymes":
         return data as IRhymesResponse;
      case "antonyms":
         return data as IAntonymsResponse;
      case "syllables":
         return data as ISyllablesResponse;
      default:
         throw new Error("Invalid criterion");
      }
   }
};

export {
   searchService
};