// // Define all permissions for each role
// export const rolesPermissions = {
//     admin: [
//       'manage_users',
//       'manage_clients',
//       'manage_projects',
//       'manage_invoices',
//       'view_reports'
//     ],
//     accountant: [
//       'manage_invoices',
//       'view_reports'
//     ],
//     employee: [
//       'view_projects'
//     ]
//   } as const;
  
//   export type Role = keyof typeof rolesPermissions;
//   export type Permission = typeof rolesPermissions[Role][number];
  
export type AccessLevel = 'full' | 'view' | 'limited' | 'none';

export const permissionsMatrix: Record<string, Record<string, AccessLevel>> = {
  client_management: {
    resource_team: 'full',
    resource_head: 'view',
    accountant: 'view',
    founder: 'view'
  },
  employee_management: {
    resource_team: 'full',
    resource_head: 'full',
    accountant: 'view',
    founder: 'view'
  },
  project_creation: {
    resource_team: 'full',
    resource_head: 'full',
    accountant: 'view',
    founder: 'view'
  },
  resource_allocation: {
    resource_team: 'full',
    resource_head: 'full',
    accountant: 'view',
    founder: 'view'
  },
  invoice_generation: {
    resource_team: 'none',
    resource_head: 'view',
    accountant: 'full',
    founder: 'view'
  },
  invoice_management: {
    resource_team: 'none',
    resource_head: 'view',
    accountant: 'full',
    founder: 'view'
  },
  financial_reports: {
    resource_team: 'limited',
    resource_head: 'full',
    accountant: 'full',
    founder: 'full'
  },
  dashboard_access: {
    resource_team: 'limited',
    resource_head: 'full',
    accountant: 'full',
    founder: 'full'
  },
  system_administration: {
    resource_team: 'none',
    resource_head: 'limited',
    accountant: 'none',
    founder: 'full'
  }
};

export type Role = 'resource_team' | 'resource_head' | 'accountant' | 'founder';
