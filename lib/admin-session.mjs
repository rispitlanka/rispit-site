import { createHmac, timingSafeEqual } from 'crypto';
import { cookies, headers } from 'next/headers';

export const ADMIN_COOKIE = 'rispit_admin';
const WEEK = 60 * 60 * 24 * 7;
const attempts = new Map();

export function adminConfigured() {
  return typeof process.env.ADMIN_PASSWORD === 'string' && process.env.ADMIN_PASSWORD.length >= 8;
}

function sign(exp) {
  return createHmac('sha256', process.env.ADMIN_PASSWORD)
    .update(String(exp))
    .digest('base64url');
}

export function passwordMatches(input) {
  const expected = process.env.ADMIN_PASSWORD || '';
  const given = Buffer.from(String(input));
  const wanted = Buffer.from(expected);
  if (given.length !== wanted.length) return false;
  return timingSafeEqual(given, wanted);
}

export function sessionToken() {
  const exp = Date.now() + WEEK * 1000;
  return `${exp}.${sign(exp)}`;
}

export function tokenValid(token) {
  if (!adminConfigured() || typeof token !== 'string') return false;
  const [expRaw, sig] = token.split('.');
  if (!expRaw || !sig) return false;
  const exp = Number(expRaw);
  if (!Number.isFinite(exp) || exp < Date.now() || exp > Date.now() + WEEK * 1000 + 60_000) return false;
  const expected = Buffer.from(sign(exp));
  const got = Buffer.from(sig);
  if (expected.length !== got.length) return false;
  return timingSafeEqual(expected, got);
}

export async function isAdmin() {
  const jar = await cookies();
  return tokenValid(jar.get(ADMIN_COOKIE)?.value);
}

export function cookieOptions() {
  return {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: WEEK,
  };
}

export async function loginAllowed() {
  const head = await headers();
  const ip = head.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';
  const now = Date.now();
  const bucket = (attempts.get(ip) || []).filter((time) => now - time < 15 * 60 * 1000);
  attempts.set(ip, bucket);
  return bucket.length < 8;
}

export async function noteLoginFailure() {
  const head = await headers();
  const ip = head.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';
  const now = Date.now();
  const bucket = (attempts.get(ip) || []).filter((time) => now - time < 15 * 60 * 1000);
  bucket.push(now);
  attempts.set(ip, bucket);
}
