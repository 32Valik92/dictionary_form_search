import "@/css/common.css";

import {FC} from "react";

interface IProps {
    message: string;
}

const NotFoundWordComponent: FC<IProps> = ({message}) => {
   return (
      <div className={"error-message"}>Sorry, {message}!</div>
   );
};

export {NotFoundWordComponent};