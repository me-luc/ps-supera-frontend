import axios from 'axios';
import { OperationData } from './types';
import { formatInputDateToDdMmYyyy } from './utils';

const ACCOUNT_ID = 5;

interface Params {
	operatorName?: string;
	beginDate?: string;
	endDate?: string;
}

export async function fetchData({ operatorName, beginDate, endDate }: Params) {
	const params = new URLSearchParams();

	if (operatorName) {
		params.append('operatorName', operatorName);
	}

	if (beginDate) {
		params.append('beginDate', formatInputDateToDdMmYyyy(beginDate));
	}

	if (endDate) {
		params.append('endDate', formatInputDateToDdMmYyyy(endDate));
	}

	const headers = {
		'Content-Type': 'application/json',
		id: ACCOUNT_ID,
	};

	const data = await axios.get(
		`http://localhost:8080/?${params.toString()}`,
		{
			headers,
		}
	);

	return data.data as OperationData[];
}
