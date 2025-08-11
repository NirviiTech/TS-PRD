import { Document, Types } from 'mongoose';

export interface IInvoice extends Document {
  clientId: Types.ObjectId;
  projectId: Types.ObjectId;
  amount: number;
  issueDate: Date;
  dueDate: Date;
  status: 'paid' | 'unpaid' | 'overdue';
}
