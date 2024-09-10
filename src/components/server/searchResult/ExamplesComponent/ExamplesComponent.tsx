import {FC} from "react";

import {IExamplesResponse} from "@/models";

interface IProps {
    examplesObject: IExamplesResponse;
}

const ExamplesComponent: FC<IProps> = ({examplesObject}) => {
   return (
      <div>
            ExamplesComponent
      </div>
   );
};

export {ExamplesComponent};