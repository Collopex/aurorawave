import LeftSidebar from '@/components/shared/LeftSidebar';
import RightSidebar from '@/components/shared/RightSidebar';

export default function Home() {
  return (
    <main className='2xl:flex 2xl:flex-row mt-10 gap-14 flex flex-col '>
      <section>
        <LeftSidebar />
      </section>
      <section>
        <RightSidebar />
      </section>
    </main>
  );
}
