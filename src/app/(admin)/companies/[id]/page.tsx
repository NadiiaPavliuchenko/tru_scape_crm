import Header from '@/app/components/header';
import { notFound } from 'next/navigation';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const id = (await params).id;

  if (Number.isNaN(Number.parseInt(id))) {
    notFound();
  }

  return (
    <>
      <Header>Companies ({String(id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
