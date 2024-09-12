import "@/css/common.css";

import {FC} from "react";

import {NoResultComponent, NotFoundWordComponent} from "@/components";
import {IError, IRhymesResponse} from "@/models";

interface IProps {
    rhymesObject: IRhymesResponse | IError;
    criterion: string;
}

const RhymesComponent: FC<IProps> = ({rhymesObject, criterion}) => {
   return (
      <div className={"component-div "}>
         {
            "word" in rhymesObject ?
               (
                  <div>
                     <div className={"header-criterion"}>
                                You search {criterion} for <span
                           className={"search-word-span"}>&quot;{rhymesObject.word}&quot;</span>:
                     </div>
                     <div className={"criterion-result"}>
                        {
                           rhymesObject.rhymes.all.length > 0 ?
                              (
                                 rhymesObject.rhymes.all.map((item, index) => (
                                    <div key={index} className={"criterion-result-item"}>
                                       {index + 1}. {item}
                                    </div>

                                 ))
                              ) : (
                                 <NoResultComponent word={rhymesObject.word} criterion={criterion}/>
                              )
                        }
                     </div>
                  </div>
               ) : (
                  <NotFoundWordComponent message={rhymesObject.message}/>
               )
         }
      </div>
   );
};

export {RhymesComponent};