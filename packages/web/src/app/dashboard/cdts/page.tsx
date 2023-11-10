"use client"

import { gql, useQuery } from '@apollo/client'
import { Cdt } from '@/lib/utils/cdt/types'
import Cdts from './Cdts'
import { Role } from '@/lib/utils/user/types'
import { useSession } from 'next-auth/react'

export const revalidate = 0

const CDTS = gql`
    query {
      findAllCdt {
        id
        identification
        lastName
        name
        depositAmount
        interestRate
        maturityDate
        startDate
      }
    }
  `
const CDTS_CLIENT = gql`
    query ($identification: Float!) {
      findAllCdtByClient(identification: $identification) {
        id
        identification
        lastName
        name
        depositAmount
        interestRate
        maturityDate
        startDate
      }
    }
  `

export default function PageCdt() {
  const { data: session } = useSession();
  const role = session.user.role;
  const identification = session.user.identification;

  const { data, loading } = useQuery(CDTS);
  console.log(data);

  if (loading) return;

  const cdts: Cdt[] = [];
  return (
    <>
      <Cdts cdts={cdts} />
    </>
  )
}

