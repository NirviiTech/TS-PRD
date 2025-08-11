import { Request, Response } from 'express';
import { Invoice } from '../models/Invoice.js';
import { IInvoice } from '../types/invoice.types.js';

export const createInvoice = async (req: Request, res: Response) => {
  try {
    const invoice: IInvoice = req.body;
    const newInvoice = await Invoice.create(invoice);
    res.status(201).json(newInvoice);
  } catch (err) {
    res.status(500).json({ message: 'Error creating invoice', error: err });
  }
};

export const getInvoices = async (_: Request, res: Response) => {
  try {
    const invoices = await Invoice.find()
      .populate('clientId')
      .populate('projectId');
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching invoices', error: err });
  }
};
