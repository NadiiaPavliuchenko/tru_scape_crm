'use client';
import React from 'react';
import Button from '@/app/components/button';
import { useRouter } from 'next/navigation';

// const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
//   ssr: false,
// });

export default function AddCompanyButton() {
  const router = useRouter();
  return (
    <>
      <Button onClick={() => router.push('/companies/new')}>Add company</Button>
    </>
  );
}
