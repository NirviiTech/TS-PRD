import { Request, Response } from 'express';
import { Client } from '../models/Client';
import { IClient } from '../types/client.types';

export const createClient = async (req: Request, res: Response) => {
  try {
    const client: IClient = req.body;
    const newClient = await Client.create(client);
    res.status(201).json(newClient);
  } catch (err) {
    res.status(500).json({ message: 'Error creating client', error: err });
  }
};

export const getClients = async (_: Request, res: Response) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching clients', error: err });
  }
};
