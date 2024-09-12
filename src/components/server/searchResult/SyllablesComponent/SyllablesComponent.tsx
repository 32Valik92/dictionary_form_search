import {FC} from "react";

import {NoResultComponent, NotFoundWordComponent} from "@/components";
import {IError, ISyllablesResponse} from "@/models";

interface IProps {
    syllablesObject: ISyllablesResponse | IError;
    criterion: string;
}

const SyllablesComponent: FC<IProps> = ({syllablesObject, criterion}) => {
   return (
      <div className={"component-div "}>
         {
            "word" in syllablesObject ? (
               <div>
                  <div className={"header-criterion"}>
                            You search {criterion} for <span
                        className={"search-word-span"}>&quot;{syllablesObject.word}&quot;</span>:
                  </div>
                  {
                     syllablesObject.syllables?.count ?
                        (
                           <div className={""}>
                              <span
                                 className={"search-word-span"}>&quot;{syllablesObject.word}&quot;</span> has {syllablesObject.syllables.count} syllables:
                                        [{syllablesObject.syllables.list.join("-")}]
                           </div>
                        ) : (
                           <NoResultComponent word={syllablesObject.word} criterion={criterion}/>
                        )
                  }
               </div>
            ) : (
               <NotFoundWordComponent message={syllablesObject.message}/>
            )
         }
      </div>
   );
};

export {SyllablesComponent};