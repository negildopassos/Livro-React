import React from "react";
import TabelaBody from "./components/TabelaBody";
import TabelaFoot from "./components/TabelaFoot";
import TabelaHead from "./components/TabelaHead";


function App() {
  return (
    <table className="tabela">
     <TabelaHead/>
     <TabelaFoot/>
     <TabelaBody/> 
    </table>
  );
}

export default App;
