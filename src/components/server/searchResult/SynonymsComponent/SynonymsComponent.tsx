import {FC} from "react";

import {ISynonymsResponse} from "@/models";

interface IProps {
    synonymsObject: ISynonymsResponse;
}

const SynonymsComponent: FC<IProps> = ({synonymsObject}) => {
   console.log(synonymsObject);
   return (
      <div>
            SynonymsComponent
      </div>
   );
};

export {SynonymsComponent};