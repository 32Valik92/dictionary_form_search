import "@/css/common.css";

import {FC} from "react";

import {NoResultComponent, NotFoundWordComponent} from "@/components";
import {IError, IExamplesResponse} from "@/models";

interface IProps {
    examplesObject: IExamplesResponse | IError;
    criterion: string;
}

const ExamplesComponent: FC<IProps> = ({examplesObject, criterion}) => {
   return (
      <div className={"component-div "}>
         {
            "word" in examplesObject ?
               (
                  <div>
                     <div className={"header-criterion"}>
                                You search {criterion} for <span
                           className={"search-word-span"}>&quot;{examplesObject.word}&quot;</span>:
                     </div>
                     <div className={"criterion-result"}>
                        {
                           examplesObject.examples.length > 0 ?
                              (
                                 examplesObject.examples.map((item, index) => (
                                    <div key={index} className={"criterion-result-item"}>
                                       {index + 1}. {item}
                                    </div>

                                 ))
                              ) : (
                                 <NoResultComponent word={examplesObject.word} criterion={criterion}/>
                              )
                        }
                     </div>
                  </div>
               ) : (
                  <NotFoundWordComponent message={examplesObject.message}/>
               )
         }
      </div>
   );
};

export {ExamplesComponent};