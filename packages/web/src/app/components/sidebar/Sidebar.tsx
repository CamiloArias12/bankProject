'use client'
import { MenuSidebar, SideBarModules } from '@/lib/utils/SidebarOptions'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import ParametrizationLogo from '../logo/Parametrization'
import HomeLogo from '../logo/Home'
import WalletLogo from '../logo/Wallet'
import AccountingIcon from '../logo/Accounting'
import TreasuryIcon from '../logo/Treasury'
import { useCookies } from 'next-client-cookies'
import { Role } from '@/lib/utils/user/types'
import { signOut, useSession } from 'next-auth/react'
import { Button } from '@nextui-org/react'
import { Crosshair1Icon, CrumpledPaperIcon, DrawingPinIcon, ExitIcon, HomeIcon, MagicWandIcon, PersonIcon, RocketIcon } from '@radix-ui/react-icons'
export default function SideBar() {
  useState<boolean>(false)
  const [select, setSelect] = useState(MenuSidebar.main)

  const route = useRouter()
  const cookies = useCookies()
  const { data: session } = useSession();
  const data = session.user.identification;
  const dataRole = session.user.role;

  return (
    <div
      className={`flex flex-col shadow flex-grow justify-between`}
    >
      <div className='w-full h-16'>
      </div>
      <div
        className='flex flex-col h-full gap-5'
      >
        {SideBarModules.map(sidebar => (
          <>
            {sidebar.role.includes(dataRole as Role) && (
              <div key={sidebar.name} className="w-full">
                {MenuSidebar.main === sidebar.menu && (
                  <Button radius="none" className="w-full bg-white" onClick={() => route.push(sidebar.href)} startContent={<HomeIcon />}>{sidebar.name}</Button>
                )}
                {MenuSidebar.branches === sidebar.menu &&
                  (
                    <Button radius="none" className="w-full bg-white" onClick={() => route.push(sidebar.href)} startContent={<CrumpledPaperIcon />}>{sidebar.name}</Button>
                  )}
                {MenuSidebar.users === sidebar.menu && (
                  <Button radius="none" className="w-full bg-white" onClick={() => route.push(sidebar.href)} startContent={<Crosshair1Icon />}>{sidebar.name}</Button>
                )}
                {MenuSidebar.thirds === sidebar.menu && (
                  <Button radius="none" className="w-full bg-white" onClick={() => route.push(sidebar.href)} startContent={<PersonIcon />}>{sidebar.name}</Button>
                )}
 
                {MenuSidebar.cdt === sidebar.menu && (
                  <Button radius="none" className="w-full bg-white" onClick={() => route.push(sidebar.href)} startContent={<DrawingPinIcon />}>{sidebar.name}</Button>
                )}
                {MenuSidebar.saving === sidebar.menu && (
                  <Button radius="none" className="w-full bg-white" onClick={() => route.push(sidebar.href)} startContent={<RocketIcon />}>{sidebar.name}</Button>
                )}
                {MenuSidebar.credits === sidebar.menu && (
                  <Button radius="none" className="w-full bg-white" onClick={() => route.push(sidebar.href)} startContent={<MagicWandIcon />}>{sidebar.name}</Button>
                )}
              </div>
            )}
          </>
        ))}
      </div>

      <div className='flex w-full'>
        <Button radius="none" className='w-full bg-white text-red-500' startContent={<ExitIcon />} onClick={() => signOut()}>Cerrar sesión</Button>
      </div>
    </div>
  )
}
