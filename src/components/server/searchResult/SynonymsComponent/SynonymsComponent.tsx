import "@/css/common.css";

import {FC} from "react";

import {NoResultComponent, NotFoundWordComponent} from "@/components";
import {IError, ISynonymsResponse} from "@/models";

interface IProps {
    synonymsObject: ISynonymsResponse | IError;
    criterion: string;
}

const SynonymsComponent: FC<IProps> = ({synonymsObject, criterion}) => {
   return (
      <div className={"component-div "}>
         {
            "word" in synonymsObject ?
               (
                  <div>
                     <div className={"header-criterion"}>
                                You search {criterion} for <span
                           className={"search-word-span"}>&quot;{synonymsObject.word}&quot;</span>:
                     </div>
                     <div className={"criterion-result"}>
                        {
                           synonymsObject.synonyms.length > 0 ?
                              (
                                 synonymsObject.synonyms.map((item, index) => (
                                    <div key={index} className={"criterion-result-item"}>
                                       {index + 1}. {item}
                                    </div>

                                 ))
                              ) : (
                                 <NoResultComponent word={synonymsObject.word} criterion={criterion}/>
                              )
                        }
                     </div>
                  </div>
               ) : (
                  <NotFoundWordComponent message={synonymsObject.message}/>
               )
         }
      </div>
   );
};

export {SynonymsComponent};