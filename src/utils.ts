import { Operation, OperationType } from './types';

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

export function getType(type: string): OperationType {
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
