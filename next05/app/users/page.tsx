import type { Metadata } from 'next';
import getAllUsers from '../lib/getAllUsers';

export const metadata: Metadata = {
 title: 'Users',
};

export default function UsersPage() {
 return (
  <div>
   <h1>Users</h1>
  </div>
 );
}
