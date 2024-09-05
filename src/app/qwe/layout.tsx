import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
   title: "",
   description: "",
};

type PropType = { children: React.ReactNode }

const qweLayout = ({children}: PropType) => {
   return (
      <div>
         <p>qwe layout</p>
         {children}
         <p>qwe layout</p>
      </div>
   );
};

export default qweLayout;
