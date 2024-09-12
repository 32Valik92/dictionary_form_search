import "./HeaderComponent.css";
import "@/css/common.css";

import Link from "next/link";
import React, {FC} from "react";

const HeaderComponent: FC = () => {
   return (
      <div>
         <Link href={"/"}>
            <button type="submit" className={"home-button mulish-mulish"}>Home</button>
         </Link>
      </div>
   );
};

export {HeaderComponent};