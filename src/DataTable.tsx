import { useState } from 'react';

export default function DataTable() {
	const [page, setPage] = useState(1);
	const data = getData();
	const ITEMS_PER_PAGE = 5;
	const PAGES_COUNT = Math.ceil(data.length / ITEMS_PER_PAGE);

	return (
		<table className='data-table'>
			<caption>Saldo total: R$ 50 Saldo no periodo: R$ 100</caption>
			<thead>
				<tr>
					<th>Data</th>
					<th>Valentia</th>
					<th>Tipo</th>
					<th>Nome do operador</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item, index) => {
					if (
						index < (page - 1) * ITEMS_PER_PAGE ||
						index >= page * ITEMS_PER_PAGE
					)
						return null;
					return (
						<tr key={index}>
							<td>{item.date}</td>
							<td>{item.value}</td>
							<td>{item.type}</td>
							<td>{item.operatorName}</td>
						</tr>
					);
				})}
			</tbody>
			<tfoot>
				<tr>
					<td colSpan={4} className='extended-td'>
						<button className='paging-option paging-nav'>
							{'<<'}
						</button>
						<button className='paging-option paging-nav'>
							{'<'}
						</button>
						{Array.from({ length: PAGES_COUNT }).map((_, index) => (
							<button
								className='paging-option paging-number'
								id={index + 1 === page ? 'page-selected' : ''}
								key={index + 1}
								onClick={() => setPage(index + 1)}>
								{index + 1}
							</button>
						))}
						<button className='paging-option paging-nav'>
							{'>'}
						</button>
						<button className='paging-option paging-nav'>
							{'>>'}
						</button>
					</td>
				</tr>
			</tfoot>
		</table>
	);
}

function getData() {
	return [
		{
			date: '01/01/2021',
			value: 'R$ 100',
			type: 'Entrada',
			operatorName: 'João',
		},
		{
			date: '02/01/2021',
			value: 'R$ 200',
			type: 'Saída',
			operatorName: 'Maria',
		},
		{
			date: '03/01/2021',
			value: 'R$ 150',
			type: 'Entrada',
			operatorName: 'Pedro',
		},
		{
			date: '29/01/2021',
			value: 'R$ 450',
			type: 'Saída',
			operatorName: 'Lucas',
		},
		{
			date: '30/01/2021',
			value: 'R$ 300',
			type: 'Entrada',
			operatorName: 'Ana',
		},
		{
			date: '01/01/2021',
			value: 'R$ 100',
			type: 'Entrada',
			operatorName: 'João',
		},
		{
			date: '02/01/2021',
			value: 'R$ 200',
			type: 'Saída',
			operatorName: 'Maria 2',
		},
		{
			date: '03/01/2021',
			value: 'R$ 150',
			type: 'Entrada',
			operatorName: 'Pedro 2',
		},
		{
			date: '29/01/2021',
			value: 'R$ 450',
			type: 'Saída',
			operatorName: 'Lucas 2',
		},
		{
			date: '30/01/2021',
			value: 'R$ 300',
			type: 'Entrada',
			operatorName: 'Ana',
		},
		{
			date: '01/01/2021',
			value: 'R$ 100',
			type: 'Entrada',
			operatorName: 'João',
		},
		{
			date: '02/01/2021',
			value: 'R$ 200',
			type: 'Saída',
			operatorName: 'Maria',
		},
		{
			date: '03/01/2021',
			value: 'R$ 150',
			type: 'Entrada',
			operatorName: 'Pedro',
		},
		{
			date: '29/01/2021',
			value: 'R$ 450',
			type: 'Saída',
			operatorName: 'Lucas',
		},
		{
			date: '30/01/2021',
			value: 'R$ 300',
			type: 'Entrada',
			operatorName: 'Ana',
		},
		{
			date: '01/01/2021',
			value: 'R$ 100',
			type: 'Entrada',
			operatorName: 'João',
		},
		{
			date: '02/01/2021',
			value: 'R$ 200',
			type: 'Saída',
			operatorName: 'Maria',
		},
		{
			date: '03/01/2021',
			value: 'R$ 150',
			type: 'Entrada',
			operatorName: 'Pedro',
		},
		{
			date: '29/01/2021',
			value: 'R$ 450',
			type: 'Saída',
			operatorName: 'Lucas',
		},
		{
			date: '30/01/2021',
			value: 'R$ 300',
			type: 'Entrada',
			operatorName: 'Ana',
		},
		{
			date: '01/01/2021',
			value: 'R$ 100',
			type: 'Entrada',
			operatorName: 'João',
		},
		{
			date: '02/01/2021',
			value: 'R$ 200',
			type: 'Saída',
			operatorName: 'Maria',
		},
		{
			date: '03/01/2021',
			value: 'R$ 150',
			type: 'Entrada',
			operatorName: 'Pedro',
		},
		{
			date: '29/01/2021',
			value: 'R$ 450',
			type: 'Saída',
			operatorName: 'Lucas',
		},
		{
			date: '30/01/2021',
			value: 'R$ 300',
			type: 'Entrada',
			operatorName: 'Ana',
		},
		{
			date: '30/01/2021',
			value: 'R$ 300',
			type: 'Entrada',
			operatorName: 'Ana',
		},
	];
}
