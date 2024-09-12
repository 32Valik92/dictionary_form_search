import "./page.css";

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

   let renderComponent: ReactElement;
   let wordResult = await searchService.search(word, criterion) as unknown;

   switch (criterion) {
   case "antonyms":
      renderComponent = <AntonymsComponent antonymsObject={wordResult as IAntonymsResponse} criterion={"Antonyms"}/>;
      break;
   case "definitions":
      renderComponent = <DefinitionsComponent definitionsObject={wordResult as IDefinitionsResponse} criterion={"Definitions"}/>;
      break;
   case "examples":
      renderComponent = <ExamplesComponent examplesObject={wordResult as IExamplesResponse} criterion={"Examples"}/>;
      break;
   case "rhymes":
      renderComponent = <RhymesComponent rhymesObject={wordResult as IRhymesResponse} criterion={"Rhymes"}/>;
      break;
   case "syllables":
      renderComponent = <SyllablesComponent syllablesObject={wordResult as ISyllablesResponse} criterion={"Syllables"}/>;
      break;
   case "synonyms":
      renderComponent = <SynonymsComponent synonymsObject={wordResult as ISynonymsResponse} criterion={"Synonyms"}/>;
      break;
   default:
      renderComponent = <div>Invalid criterion</div>;
      break;
   }

   return (
      <div className={"word-result"}>
         {renderComponent}
      </div>
   );
};

export default ResultPage;