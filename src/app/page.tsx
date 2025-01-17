// import { headers } from 'next/headers';
import AddCompanyButton from './components/add-company-button';
import MagicButton from './components/magic-button';
// import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  // console.log(headers());
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      {/* <p>{new Date().toTimeString()}</p>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>NotActive</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel> */}
      <AddCompanyButton />
      <MagicButton />
    </main>
  );
}
