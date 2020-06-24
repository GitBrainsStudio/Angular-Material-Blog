import { Role } from './role';

export class Account
{
    userName : string;
    token : string;
    roles : Role[] = [];
}
