import { Schema, model } from 'mongoose';
import { IInvoice } from '../types/invoice.types';

const invoiceSchema = new Schema<IInvoice>(
  {
    clientId: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    amount: { type: Number, required: true },
    issueDate: { type: Date, required: true },
    dueDate: { type: Date, required: true },
    status: { type: String, enum: ['paid', 'unpaid', 'overdue'], default: 'unpaid' },
  },
  { timestamps: true }
);

export const Invoice = model<IInvoice>('Invoice', invoiceSchema);
