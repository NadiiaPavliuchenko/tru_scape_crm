import Header from '@/app/components/header';
import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div>
      <Header>Dashboard</Header>
    </div>
  );
}
