import React from "react";
import { useEffect } from "react";

const { tableau } = window;

function TableauViz() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/tableau-2.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const containerDiv = document.getElementById("vizContainer");
      const url =
        "https://public.tableau.com/shared/JFJSBMC7J?:display_count=n&:origin=viz_share_link";

      const options = {
        hideTabs: true,
        onFirstInteractive: function () {
          console.log("Run this code when the viz has finished loading.");
        },
      };
      new tableau.Viz(containerDiv, url, options);
    };
  }, []);

  return <div id="vizContainer" style={{ width: "100%" }}></div>;
}

export default TableauViz;
