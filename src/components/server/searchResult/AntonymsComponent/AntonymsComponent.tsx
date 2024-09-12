import "@/css/common.css";

import {FC} from "react";

import {NoResultComponent, NotFoundWordComponent} from "@/components";
import {IAntonymsResponse, IError} from "@/models";

interface IProps {
    antonymsObject: IAntonymsResponse | IError;
    criterion: string;
}

const AntonymsComponent: FC<IProps> = ({antonymsObject, criterion}) => {
   return (
      <div className={"component-div "}>
         {
            "word" in antonymsObject ?
               (
                  <div>
                     <div className={"header-criterion"}>
                                You search {criterion} for <span
                           className={"search-word-span"}>&quot;{antonymsObject.word}&quot;</span>:
                     </div>
                     <div className={"criterion-result"}>
                        {
                           antonymsObject.antonyms.length > 0 ?
                              (
                                 antonymsObject.antonyms.map((item, index) => (
                                    <div key={index} className={"criterion-result-item"}>
                                       {index + 1}. {item}
                                    </div>

                                 ))
                              ) : (
                                 <NoResultComponent word={antonymsObject.word} criterion={criterion}/>
                              )
                        }
                     </div>
                  </div>
               ) : (
                  <NotFoundWordComponent message={antonymsObject.message}/>
               )
         }
      </div>
   );
};

export {AntonymsComponent};