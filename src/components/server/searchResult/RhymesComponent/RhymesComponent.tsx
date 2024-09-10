import {FC} from "react";

import {IRhymesResponse} from "@/models";

interface IProps {
    rhymesObject: IRhymesResponse;
}

const RhymesComponent: FC<IProps> = ({rhymesObject}) => {
   return (
      <div>
            RhymesComponent
      </div>
   );
};

export {RhymesComponent};