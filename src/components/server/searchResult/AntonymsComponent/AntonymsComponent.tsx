import {FC} from "react";

import {IAntonymsResponse} from "@/models";

interface IProps {
    antonymsObject: IAntonymsResponse;
}

const AntonymsComponent: FC<IProps> = ({antonymsObject}) => {
   return (
      <div>
            AntonymsComponent
      </div>
   );
};

export {AntonymsComponent};