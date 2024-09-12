import {FC} from "react";

import {NoResultComponent, NotFoundWordComponent} from "@/components";
import {IDefinitionsResponse, IError} from "@/models";

interface IProps {
    definitionsObject: IDefinitionsResponse | IError;
    criterion: string;
}

const DefinitionsComponent: FC<IProps> = ({definitionsObject, criterion}) => {
   return (
      <div className={"component-div "}>
         {
            "word" in definitionsObject ? (
               <div>
                  <div className={"header-criterion"}>
                            You search {criterion} for <span
                        className={"search-word-span"}>&quot;{definitionsObject.word}&quot;</span>:
                  </div>
                  <div className={"criterion-result"}>
                     {
                        definitionsObject.definitions.length > 0 ?
                           (
                              definitionsObject.definitions.map((item, index) => (
                                 <div key={index} className={"criterion-result-item"}>
                                    {index + 1}. <span
                                       className={"search-word-span"}>&quot;{definitionsObject.word}&quot; use like {item.partOfSpeech}</span>:
                                                &quot;{item.definition}&quot;
                                 </div>
                              ))
                           ) : (
                              <NoResultComponent word={definitionsObject.word} criterion={criterion}/>
                           )
                     }
                  </div>
               </div>
            ) : (
               <NotFoundWordComponent message={definitionsObject.message}/>
            )
         }
      </div>
   );
};

export {DefinitionsComponent};