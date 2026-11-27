import { redirect } from 'next/navigation';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { isAdmin } from '@/lib/admin-session.mjs';
import '../admin.css';

export const metadata = {
  title: 'Blog admin',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

export default async function AdminLayout({ children }) {
  if (!(await isAdmin())) redirect('/admin/login');
  return (
    <div className="admin-shell">
      <AdminSidebar />
      <div className="admin-main">{children}</div>
    </div>
  );
}
