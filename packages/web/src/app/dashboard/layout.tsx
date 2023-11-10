import { getServerSession } from 'next-auth'
import HeaderModule from '../components/header/HeaderModule'
import SideBar from '../components/sidebar/Sidebar'
import { redirect } from 'next/navigation'
import TopBar from '../components/topbar/TopBar'

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession();

  if (!session || !session.user) {
    redirect('/api/auth/signin');
  }

  return (
    <div className="flex flex-row h-screen  ">
      <div className="flex ">
        <SideBar />
      </div>
      <div className='flex flex-col w-full'>
        <TopBar />
        <section className="flex flex-grow my-6 mx-4 h-[80%]">
          {children}
        </section>
      </div>
    </div>
  )
}
