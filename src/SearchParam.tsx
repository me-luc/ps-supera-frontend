interface SearchParamProps {
  value: string;
  valueName: string;
  setValue: (value: string) => void;
}

function SearchParam({ value, setValue, valueName }: SearchParamProps) {
  return (
    <div className="search-param-box">
      <h4>{valueName}</h4>
      <input onChange={(e) => setValue(e.target.value)}/>
    </div>
  );
}

export default SearchParam;
