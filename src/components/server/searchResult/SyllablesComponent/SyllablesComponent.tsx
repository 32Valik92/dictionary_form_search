import {FC} from "react";

import {ISyllablesResponse} from "@/models";

interface IProps {
    syllablesObject: ISyllablesResponse;
}

const SyllablesComponent: FC<IProps> = () => {
   return (
      <div>
            SyllablesComponent
      </div>
   );
};

export {SyllablesComponent};