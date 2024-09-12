import "@/css/common.css";

import {FC} from "react";

interface IProps {
    word: string;
    criterion: string;
}

const NoResultComponent: FC<IProps> = ({word, criterion}) => {
   return (
      <div className={"criterion-result-item"}>
            Sorry, <span className={"search-word-span"}>&quot;{word}&quot;</span> does not {criterion}!
      </div>
   );
};

export {NoResultComponent};