
export type UserRole = 'ADMIN' | 'EMPLOYEE' | 'STUDENT';
export interface User {
    id: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    token: string;
    role: UserRole;
   
}


