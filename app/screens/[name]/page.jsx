import { notFound } from 'next/navigation';
import { BOARDS } from '@/components/dc/registry';
import ScreenViewer from '@/components/ScreenViewer';

export const dynamicParams = false;
export function generateStaticParams() {
  return BOARDS.map((b) => ({ name: b.name }));
}
export async function generateMetadata({ params }) {
  const { name } = await params;
  const b = BOARDS.find((x) => x.name === name);
  return { title: b ? b.title : 'Screen', robots: { index: false, follow: false } };
}

export default async function Screen({ params }) {
  const { name } = await params;
  const i = BOARDS.findIndex((x) => x.name === name);
  if (i < 0) notFound();
  return <ScreenViewer board={BOARDS[i]} prev={BOARDS[i - 1]?.name || null} next={BOARDS[i + 1]?.name || null} />;
}
