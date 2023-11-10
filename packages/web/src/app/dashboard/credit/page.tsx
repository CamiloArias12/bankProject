"use client"
import { gql, useLazyQuery, useQuery } from '@apollo/client'
import Credits from './Credits'
import { Credit } from '@/lib/utils/credit/types'
import { Role } from '@/lib/utils/user/types'
import { useSession } from 'next-auth/react'

function getCredits(): Credit[] {
  const CREDITS = gql`
    query {
      findAllCredit {
        id
        identification
        name
        lastName
        creditValue
        state
        startDate
        interest
      }
    }
  `
  const [load, { data}] = useLazyQuery(CREDITS);
  load();
  return data
}

function getCreditsClient(identification: number): Credit[] {
  const CREDITS_CLIENT = gql`
    query ($identification: Float!) {
      findAllCreditByClient(identification: $identification) {
        id
        identification
        name
        lastName
        creditValue
        state
        startDate
        interest
      }
    }
  `
  const [load, {data}] = useLazyQuery(
    CREDITS_CLIENT, {
    variables: { identification: identification }
  })

  load();
  return data
}

function PageCredit() {
  const {data: session} = useSession();
  const data = session.user.role;
  const identification = session.user.identification
  const credits: Credit[] =
    data === Role.EMPLOYEE
      ? getCredits()
      : getCreditsClient(Number(identification))
  return (
    <>
      <Credits credits={credits} />
    </>
  )
}

export default PageCredit
