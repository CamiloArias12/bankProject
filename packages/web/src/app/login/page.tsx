'use client'
import { useCookies } from 'next-client-cookies'
import { useEffect, useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/navigation'

const AUTH = gql`
  mutation ($identification: Float!, $password: String!) {
    authentication(identification: $identification, password: $password) {
      identification
      role
    }
  }
`
export default function Login() {
  const [identification, setIdentification] = useState<String>('')
  const [password, setPassword] = useState<String>('')
  const route = useRouter()
  const [auth, { data, loading, error }] = useMutation(AUTH)
  const cookies = useCookies()

  if (data) {
    cookies.set('data', data.authentication.identification)
    cookies.set('role', data.authentication.role)
    route.push('/dashboard')
  }

  const handleLogin = () => {
    auth({
      variables: { identification: Number(identification), password: password }
    })
  }
  return (
    <div className="flex flex-row h-screen w-screen  items-center justify-center bg-white">
      <div className="  shadow-lg flex p-10 bg-gray-100 flex-col items-center justify-center  items-center">
        <div className="flex flex-row  justify-center items-center pt-8 pb-14 px-10 ">
          <label className="font-bold text-2xl">BIENVENIDOS</label>
        </div>

        <div className=" flex   flex-col   w-full m-8 justify-center  ">
          <div className="flex flex-col  justify-center pt-10">
            <label className="pb-3 font-bold text-[#000000] ">
              Identificacion{' '}
            </label>
            <input
              onChange={e => setIdentification(e.target.value)}
              className=" bg-[#DEE2E9]  rounded-[10px] border border-white p-2 "
            />
          </div>
          <div className="flex flex-col w-full justify-center py-10">
            <label className="pb-3 font-bold text-[#000000] ">Contrasena</label>
            <input
              type="password"
              onChange={e => setPassword(e.target.value)}
              className="bg-[#DEE2E9] rounded-[10px] border border-white p-2 "
            />
          </div>
          {error && <label className="text-[#FF0000]">Datos incorrectos</label>}
          <div className="flex justify-center py-10 ">
            <button
              onClick={handleLogin}
              className="bg-[#054818] text-white h-[59px]  rounded-lg hover:shadow-lg w-full "
            >
              Iniciar sesion{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
