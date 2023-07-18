import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import SearchParam from './SearchParam';
import DataTable from './DataTable';
import { Operation } from './types';
import { calculateBalance, getType } from './utils';
import { fetchData } from './service';

function App() {
	const [beginDate, setBeginDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [operatorName, setOperatorName] = useState('');
	const [data, setData] = useState<Operation[]>([]);
	const [totalBalance, setTotalBalance] = useState(0);
	const [initialFetch, setInitialFetch] = useState(false);

	async function fetch() {
		const response = await fetchData({
			operatorName,
			beginDate,
			endDate,
		});
		const formatted = response.map((item) => {
			return {
				...item,
				type: getType(item.type),
			};
		});
		setData(formatted);
	}

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		fetch().then(() => setInitialFetch(true));
	}, []);

	useEffect(() => {
		if (!initialFetch) return;
		const balance = calculateBalance(data);
		setTotalBalance(balance);
	}, [initialFetch]);

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
				<button className='search-button' onClick={search}>
					Pesquisar
				</button>
			</div>

			<DataTable data={data} totalBalance={totalBalance} />
		</>
	);

	async function search() {
		await fetch();
	}
}

export default App;
