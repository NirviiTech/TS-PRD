// import { Request, Response, NextFunction } from 'express';
// import { rolesPermissions, Permission, Role } from '../config/roles.js';

// // Middleware to check if user has the required permission
// export const checkPermission = (permission: Permission) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     const user = req.user as { role: Role } | undefined;
   
//     if (!user) {
//       return res.status(401).json({ message: 'Not authenticated' });
//     }

//     const allowedPermissions = rolesPermissions[user.role];
//     if (!allowedPermissions.includes(permission)) {
//       return res.status(403).json({ message: 'Forbidden: Access denied' });
//     }

//     next();
//   };
// };
import { Request, Response, NextFunction } from 'express';
import { permissionsMatrix, Role, AccessLevel } from '../config/roles.js';

export const checkAccess = (
  functionName: keyof typeof permissionsMatrix,
  requiredLevel: AccessLevel
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as { role: Role };

    if (!user || !user.role) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    const roleAccess = permissionsMatrix[functionName][user.role];

    const levelsOrder: AccessLevel[] = ['none', 'view', 'limited', 'full'];
    if (levelsOrder.indexOf(roleAccess) < levelsOrder.indexOf(requiredLevel)) {
      return res.status(403).json({ message: 'Forbidden: Access denied' });
    }

    next();
  };
};
