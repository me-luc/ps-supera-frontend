import { useState } from 'react';
import { Operation } from './types';
import { calculateBalance } from './utils';

interface DataTableProps {
	data: Operation[];
	totalBalance: number;
}

export default function DataTable({ data, totalBalance }: DataTableProps) {
	const [page, setPage] = useState(1);
	const ITEMS_PER_PAGE = 5;
	const PAGES_COUNT = Math.ceil(data.length / ITEMS_PER_PAGE);

	const periodBalance = calculateBalance(data);

	return (
		<table className='data-table'>
			<caption>
				Saldo total: R$ {totalBalance} | Saldo no periodo: R${' '}
				{periodBalance}
			</caption>
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
