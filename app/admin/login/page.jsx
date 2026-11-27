import { redirect } from 'next/navigation';
import { loginAction } from '../actions';
import { adminConfigured, isAdmin } from '@/lib/admin-session.mjs';
import '../admin.css';

export const metadata = {
  title: 'Admin sign in',
  robots: { index: false, follow: false },
};

const MESSAGES = {
  '1': 'That password is not right.',
  config: 'Set ADMIN_PASSWORD in .env.local (at least 8 characters), then restart the site.',
  rate: 'Too many attempts. Wait 15 minutes and try again.',
};

export default async function LoginPage({ searchParams }) {
  if (await isAdmin()) redirect('/admin');
  const query = await searchParams;
  const message = MESSAGES[query.error] || '';

  return (
    <main className="admin-login">
      <form className="admin-card" action={loginAction}>
        <p className="admin-kicker">Rispit</p>
        <h1>Blog admin</h1>
        <p className="admin-lead">Only an admin can write and publish articles.</p>
        {!adminConfigured() && <p className="admin-error">{MESSAGES.config}</p>}
        {message && query.error !== 'config' && <p className="admin-error">{message}</p>}
        <label>
          Password
          <input name="password" type="password" autoComplete="current-password" required minLength={8} />
        </label>
        <button type="submit" disabled={!adminConfigured()}>Sign in</button>
      </form>
    </main>
  );
}
