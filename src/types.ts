export interface Operation {
	date: string;
	value: number;
	type: OperationType;
	operatorName: string;
}

export interface OperationData {
	date: string;
	value: number;
	type:
		| 'Deposito'
		| 'Saque'
		| 'Transferencia Entrada'
		| 'Transferencia Saida';
	operatorName: string;
}

export enum OperationType {
	DEPOSIT = 'Deposito',
	WITHDRAW = 'Saque',
	INCOMING_TRANSFER = 'Transferencia Entrada',
	OUTGOING_TRANSFER = 'Transferencia Saida',
}
