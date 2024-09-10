import {FC} from "react";

import {IDefinitionsResponse} from "@/models";

interface IProps {
    definitionsObject: IDefinitionsResponse;
}

const DefinitionsComponent: FC<IProps> = ({definitionsObject}) => {
   console.log(definitionsObject);
   return (
      <div>
            DefinitionsComponent
      </div>
   );
};

export {DefinitionsComponent};