import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import SearchParam from './SearchParam';
import DataTable from './DataTable';
import { Operation, OperationData, OperationType } from './types';

function App() {
	const [beginDate, setBeginDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [operatorName, setOperatorName] = useState('');
	const [data, setData] = useState<Operation[]>([]);
	const [filteredData, setFilteredData] = useState<Operation[]>([]);
	const [totalBalance, setTotalBalance] = useState(0);

	useEffect(() => {
		const data = getData().map((item) => {
			return {
				...item,
				type: getType(item.type),
			};
		});
		setData(data);
		setFilteredData(data);

		const total = calculateBalance(data);
		setTotalBalance(total);
	}, []);

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
				<button className='search-button' onClick={changeSearch}>
					Pesquisar
				</button>
			</div>

			<DataTable data={filteredData} totalBalance={totalBalance} />
		</>
	);

	function changeSearch() {
		let customData: Operation[] = data;

		if (beginDate) {
			customData = customData.filter((item) => {
				const date = dayjs(item.date);
				const begin = dayjs(beginDate);
				return date >= begin;
			});
		}
		if (endDate) {
			customData = customData.filter((item) => {
				const date = dayjs(item.date);
				const end = dayjs(endDate);
				return date <= end;
			});
		}
		if (operatorName) {
			customData = customData.filter(
				(item) => item.operatorName === operatorName
			);
		}
		setFilteredData(customData);
	}
}

export default App;

export function calculateBalance(data: Operation[]): number {
	let totalBalance = 0;

	data.forEach((item) => {
		if (item.type === OperationType.INCOMING_TRANSFER)
			totalBalance += item.value;
		if (item.type === OperationType.OUTGOING_TRANSFER)
			totalBalance -= item.value;
		if (item.type === OperationType.DEPOSIT) totalBalance += item.value;
		if (item.type === OperationType.WITHDRAW) totalBalance -= item.value;
	});

	return totalBalance;
}

function getType(type: string): OperationType {
	switch (type) {
		case 'Transferencia Entrada':
			return OperationType.INCOMING_TRANSFER;
		case 'Transferencia Saida':
			return OperationType.OUTGOING_TRANSFER;
		case 'Deposito':
			return OperationType.DEPOSIT;
		case 'Saque':
			return OperationType.WITHDRAW;
		default:
			return OperationType.INCOMING_TRANSFER;
	}
}

function getData(): OperationData[] {
	return [
		{
			date: '01/01/2021',
			value: 1000,
			type: 'Transferencia Entrada',
			operatorName: 'João',
		},
		{
			date: '02/01/2021',
			value: 200,
			type: 'Transferencia Saida',
			operatorName: 'Maria',
		},
		{
			date: '03/01/2021',
			value: 150,
			type: 'Transferencia Entrada',
			operatorName: 'Pedro',
		},
		{
			date: '29/01/2021',
			value: 450,
			type: 'Transferencia Saida',
			operatorName: 'Lucas',
		},
		{
			date: '30/01/2021',
			value: 300,
			type: 'Transferencia Entrada',
			operatorName: 'Ana',
		},
		{
			date: '01/01/2021',
			value: 100,
			type: 'Transferencia Entrada',
			operatorName: 'João',
		},
		{
			date: '02/01/2021',
			value: 200,
			type: 'Transferencia Saida',
			operatorName: 'Maria 2',
		},
		{
			date: '03/01/2021',
			value: 150,
			type: 'Transferencia Entrada',
			operatorName: 'Pedro 2',
		},
		{
			date: '29/01/2021',
			value: 450,
			type: 'Transferencia Saida',
			operatorName: 'Lucas 2',
		},
		{
			date: '30/01/2021',
			value: 300,
			type: 'Transferencia Entrada',
			operatorName: 'Ana',
		},
		{
			date: '01/01/2021',
			value: 100,
			type: 'Transferencia Entrada',
			operatorName: 'João',
		},
		{
			date: '02/01/2021',
			value: 200,
			type: 'Transferencia Saida',
			operatorName: 'Maria',
		},
		{
			date: '03/01/2021',
			value: 150,
			type: 'Transferencia Entrada',
			operatorName: 'Pedro',
		},
		{
			date: '29/01/2021',
			value: 450,
			type: 'Transferencia Saida',
			operatorName: 'Lucas',
		},
		{
			date: '30/01/2021',
			value: 300,
			type: 'Transferencia Entrada',
			operatorName: 'Ana',
		},
		{
			date: '01/01/2021',
			value: 100,
			type: 'Transferencia Entrada',
			operatorName: 'João',
		},
		{
			date: '02/01/2021',
			value: 200,
			type: 'Transferencia Saida',
			operatorName: 'Maria',
		},
		{
			date: '03/01/2021',
			value: 150,
			type: 'Transferencia Entrada',
			operatorName: 'Pedro',
		},
		{
			date: '29/01/2021',
			value: 450,
			type: 'Transferencia Saida',
			operatorName: 'Lucas',
		},
		{
			date: '30/01/2021',
			value: 300,
			type: 'Transferencia Entrada',
			operatorName: 'Ana',
		},
		{
			date: '30/01/2021',
			value: 300,
			type: 'Transferencia Entrada',
			operatorName: 'Ana',
		},
	];
}
