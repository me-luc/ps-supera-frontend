import { useState } from 'react';
import SearchParam from './SearchParam';
import DataTable from './DataTable';

function App() {
	const [beginDate, setBeginDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [operatorName, setOperatorName] = useState('');

	return (
		<>
			<div className='search-items-box'>
				<SearchParam
					setValue={setBeginDate}
					valueName='Data de início'
					inputAttributes={{ type: 'date' }}
				/>
				<SearchParam
					setValue={setEndDate}
					valueName='Data de fim'
					inputAttributes={{ type: 'date' }}
				/>
				<SearchParam
					setValue={setOperatorName}
					valueName='Nome operador transacionado'
				/>
			</div>
			<div className='search-button-box'>
				<button className='search-button'>Pesquisar</button>
			</div>

			<DataTable />
		</>
	);
}

export default App;
