/*import "./principalcss.css";*/
import "./newcss.css";
import "./exp.css";

import Cab from "./components/Cab/Cab";
import Cop from "./components/Cop/Cop";
import Esq from "./components/Cop/Mnu/Mnu";

/*import Cop from "./components/Cop/Cop";*/
export default function Principal() {
  return (
    <div className="DivPag">
      <div className="DivCab">
        <Cab />
      </div>
      <div className="DivDir">
        <Cop />
      </div>
      <div className="DivEsq">
        <Esq />
      </div>
    </div>
  );
}
