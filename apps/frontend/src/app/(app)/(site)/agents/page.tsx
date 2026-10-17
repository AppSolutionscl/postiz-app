import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'RRSS be levels Chile',
  description: '',
};

export default async function Page() {
  return redirect('/agents/new');
}
