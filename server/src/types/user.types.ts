export interface IUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'accountant' | 'employee';
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }
  