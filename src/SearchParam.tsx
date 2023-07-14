interface SearchParamProps {
	valueName: string;
	setValue: (value: string) => void;
	inputAttributes?: React.InputHTMLAttributes<HTMLInputElement>;
}

export default function SearchParam({
	setValue,
	valueName,
	inputAttributes,
}: SearchParamProps) {
	return (
		<div className='search-param-box'>
			<h3>{valueName}</h3>
			<input
				onChange={(e) => setValue(e.target.value)}
				{...inputAttributes}
			/>
		</div>
	);
}
