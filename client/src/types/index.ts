// Central TypeScript types used across the frontend
export type Role = "Resource Team" | "Resource Head" | "Accountant" | "Founder" | "Guest";

export type User = {
  id: string;
  name: string;
  email?: string;
  role: Role;
  avatarUrl?: string;
};

export type Contact = {
  contactId: string;
  contactType: "Primary" | "Billing" | "Feedback" | "Communication" | "Technical";
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  designation?: string;
  isPrimary?: boolean;
  isActive?: boolean;
};

export type Client = {
  clientId: string;
  companyName: string;
  registrationNumber?: string;
  taxIdentification?: string;
  currencyCode: string; // ISO 4217
  billingAddress?: Record<string, any>;
  contacts?: Contact[];
  isActive?: boolean;
};

export type Employee = {
  employeeId: string; // Keka ID
  firstName: string;
  lastName: string;
  email?: string;
  department?: string;
  designation?: string;
  employmentStatus?: string;
  joiningDate?: string;
  kekaEmployeeUuid?: string;
  defaultHourlyRate?: number;
  isActive?: boolean;
};

export type Project = {
  projectId: string;
  clientId: string;
  projectName: string;
  projectCode?: string;
  description?: string;
  startDate?: string;
  endDate?: string | null;
  billingCycle?: "Monthly" | "Quarterly" | "Annual" | "Custom";
  projectStatus?: "Planning" | "Active" | "On Hold" | "Completed" | "Cancelled";
};

export type Allocation = {
  allocationId: string;
  projectId: string;
  clientId: string;
  employeeId: string;
  allocationPercentage: number; // 0-100
  startDate?: string;
  endDate?: string | null;
  hourlyRate?: number;
  billingType?: "Billable" | "Non-Billable" | "Shadow";
  workingModel?: "Client Office" | "TS Office" | "Hybrid" | "Remote" | "None";
  monthlyExpenses?: number;
};

export type InvoiceLine = {
  employeeId: string;
  employeeName: string;
  designation?: string;
  billingType: "Billable"; // Invoices include only Billable lines
  workingModel?: string;
  allocationPercentage: number;
  hoursWorked: number;
  hourlyRate: number;
  monthlyExpenses?: number;
  lineTotal: number;
};

export type Invoice = {
  invoiceId: string;
  invoiceNumber: string;
  clientId: string;
  projectId?: string;
  invoicePeriod: { startDate: string; endDate: string; month: number; year: number; workingDays: number };
  invoiceStatus: "Draft" | "Sent" | "Paid" | "Overdue" | "Cancelled";
  lineItems: InvoiceLine[];
  subtotal: number;
  taxDetails?: { taxType: string; taxRate: number; taxAmount: number }[];
  totalTaxAmount?: number;
  totalAmount: number;
  currencyCode: string;
  createdAt?: string;
};

export type Timesheet = {
  timesheetId: string;
  employeeId: string;
  projectId: string;        
  allocationId: string;   
  date: string; // YYYY-MM-DD
  hoursWorked: number; // Total hours worked on that date
  billableHours: number; // Hours that are billable
  nonBillableHours: number; // Hours that are not billable
  status: "Draft" | "Submitted" | "Approved" | "Rejected";
  notes?: string; // Any additional notes for the timesheet entry
  createdAt?: string; // Timestamp when the timesheet was created
  updatedAt?: string; // Timestamp when the timesheet was last updated
};