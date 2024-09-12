import "./page.css";

import React from "react";

import {DynamicFormComponent} from "@/components";

export default function HomePage() {
   return (
      <div className={"mainContainer"}>
         <DynamicFormComponent/>
      </div>
   );
}
