'use client';
import { MenuSidebar, SideBarModules } from '@/lib/utils/SidebarOptions';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import ParametrizationLogo from '../logo/Parametrization';
import HomeLogo from '../logo/Home';
import WalletLogo from '../logo/Wallet';
import AccountingIcon from '../logo/Accounting';
import TreasuryIcon from '../logo/Treasury';
import { useCookies } from 'next-client-cookies';
import { Role } from '@/lib/utils/user/types';
export default function SideBar() {
  const [toggleBar, setToggleBar] = useState(false);
    useState<boolean>(false);
  const [select, setSelect] = useState(MenuSidebar.main);

  const route = useRouter();
   const cookies=useCookies()
   const data=cookies.get("data")
   const dataRole=cookies.get("role")


  return (
    <div
      className={`flex flex-col shadow  flex-grow justify-between bg-white  w-[250px]`}
    >
     
      <div className=" flex flex-col h-full ">
        <div className="relative ">
          <div
            className={`absolute h-8 w-8 -right-6 ${
              !toggleBar ? '-top-20' : '-top-10'
            }`}
          >
            <img
              src="/logo.svg"
              onClick={() => {
                setToggleBar(!toggleBar);
              }}
            />
          </div>
        </div>

        <div className="flex flex-col rounded-sm py-4 items-center justify-center h-full  w-full my-8">
          <div className="w-full flex flex-col justify-center items-center">
            {SideBarModules.map((sidebar) => (
	    <>
	       {sidebar.role.includes(dataRole as Role) &&
              <div key={sidebar.name} className="w-full   ">
                <motion.div
                  className={`flex flex-col  my-5    mx-3 
				 `}
                  whileHover={{ scale: 1.03 }}
                >
                  <div
                    className={`gene w-full ${toggleBar && ' rounded-sm'}`}
                    onClick={() => {
			setSelect(sidebar.menu)
		    }}
                  >
                    <div className="flex  flex-col w-full">
                      <div
                        className={` p-4 hover:border-b-2 hover:border-[#054818]]
				       ${sidebar.menu === select && ' rounded-sm bg-[#dde0e5] '}

				    `}
                      >
                        <div
                          className={`flex flex-row  w-full h-full 
				    ${
              '  justify-center '
            } 
				    ${toggleBar ? 'justify-center' : 'justify-between'}
				    `}
                          onClick={() => {
                              route.push(sidebar.href);
                          }}
                        >
                          <div className="flex flex-row">
                            <div className="h-4 w-4 ">
                                                           {MenuSidebar.main=== sidebar.menu &&
                                sidebar.menu === select && (
                                  <HomeLogo color="#054818" />
                                )}
                              {MenuSidebar.main === sidebar.menu &&
                                sidebar.menu !== select && (
                                  <HomeLogo color="#26384b" />
                                )}
                              {MenuSidebar.branches=== sidebar.menu &&
                                sidebar.menu === select && (
                                  <WalletLogo color="#054818" />
                                )}
                              {MenuSidebar.branches=== sidebar.menu &&
                                sidebar.menu !== select && (
                                  <WalletLogo color="#26384b" />
                                )}
			      {MenuSidebar.users=== sidebar.menu &&
                                sidebar.menu === select && (
                                  <ParametrizationLogo color="#054818" />
                                )}
                              {MenuSidebar.users=== sidebar.menu &&
                                sidebar.menu !== select && (
                                  <ParametrizationLogo color="#26384b" />
                                )}

                              {MenuSidebar.cdt=== sidebar.menu &&
                                sidebar.menu === select && (
                                  <AccountingIcon color="#054818" />
                                )}
                              {MenuSidebar.cdt=== sidebar.menu &&
                                sidebar.menu !== select && (
                                  <AccountingIcon color="#26384b" />
                                )}

                              {MenuSidebar.saving=== sidebar.menu &&
                                sidebar.menu === select && (
                                  <TreasuryIcon color="#054818" />
                                )}

                              {MenuSidebar.saving=== sidebar.menu &&
                                sidebar.menu !== select && (
                                  <TreasuryIcon color="#26384b" />
                                )}
                            </div>
                            {!toggleBar && (
                              <label
                                className={`pl-6 text-sm font-sans  ${
                                  sidebar.menu == select
                                    ? 'text-[#054818] font-semibold'
                                    : 'text-[#26384b]'
                                }`}
                              >
                                {sidebar.name}
                              </label>
                            )}
                          </div>
                                                  </div>
                      </div>
                                          </div>
                  </div>
                </motion.div>
              </div>
	      }
	      </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
