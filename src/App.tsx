import { useState } from "react";
import SearchParam from "./SearchParam";

function App() {
  const [beginDate, setBeginDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [operatorName, setOperatorName] = useState("");

  return (
    <>
      <SearchParam
        value={beginDate}
        setValue={setBeginDate}
        valueName="Data de início"
      />
      <SearchParam
        value={endDate}
        setValue={setEndDate}
        valueName="Data de fim"
      />
      <SearchParam
        value={operatorName}
        setValue={setOperatorName}
        valueName="Nome operador transacionado"
      />
      <button>Pesquisar</button>
    </>
  );
}

export default App;
