export interface IInvoice {
    _id?: string;
    clientId: string;
    projectId: string;
    amount: number;
    issueDate: Date;
    dueDate: Date;
    status: 'paid' | 'unpaid' | 'overdue';
    createdAt?: Date;
    updatedAt?: Date;
  }
  