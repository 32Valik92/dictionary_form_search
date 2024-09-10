import React, {ReactElement} from "react";

import {
   AntonymsComponent,
   DefinitionsComponent,
   ExamplesComponent,
   RhymesComponent,
   SyllablesComponent,
   SynonymsComponent
} from "@/components";
import {
   IAntonymsResponse,
   IDefinitionsResponse,
   IExamplesResponse,
   IRhymesResponse,
   ISyllablesResponse,
   ISynonymsResponse
} from "@/models";
import {searchService} from "@/services";

type Props = {
    params: {
        word: string;
        criterion: string;
    }
}

const ResultPage = async (props: Props) => {
   const {params: {criterion, word}} = props;
   console.log(criterion);
   let renderComponent: ReactElement;
   let wordResult = await searchService.search(word, criterion) as unknown;

   switch (criterion) {
   case "antonyms":
      renderComponent = <AntonymsComponent antonymsObject={wordResult as IAntonymsResponse}/>;
      break;
   case "definitions":
      renderComponent = <DefinitionsComponent definitionsObject={wordResult as IDefinitionsResponse}/>;
      break;
   case "examples":
      renderComponent = <ExamplesComponent examplesObject={wordResult as IExamplesResponse}/>;
      break;
   case "rhymes":
      renderComponent = <RhymesComponent rhymesObject={wordResult as IRhymesResponse}/>;
      break;
   case "syllables":
      renderComponent = <SyllablesComponent syllablesObject={wordResult as ISyllablesResponse}/>;
      break;
   case "synonyms":
      renderComponent = <SynonymsComponent synonymsObject={wordResult as ISynonymsResponse}/>;
      break;
   default:
      renderComponent = <div>Invalid criterion</div>;
      break;
   }

   return (
      <div>
         {renderComponent}
      </div>
   );
};

export default ResultPage;