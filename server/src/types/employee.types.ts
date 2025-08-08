export interface IEmployee {
    _id?: string;
    name: string;
    email: string;
    position: string;
    department: string;
    joinDate: Date;
    salary: number;
    createdAt?: Date;
    updatedAt?: Date;
  }
  