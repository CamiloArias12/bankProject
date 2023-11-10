import { gql } from '@apollo/client'
import { getClient } from '@/lib/graphql/apollo-client-server'
import Credits from './Credits'
import { Credit } from '@/lib/utils/credit/types'
import { getCookies } from 'next-client-cookies/server'
import { Role } from '@/lib/utils/user/types'

export const revalidate = 0

async function getCredits(): Promise<Credit[]> {
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
  const { data } = await getClient().query({ query: CREDITS })

  return data.findAllCredit
}

async function getCreditsClient(identification: number): Promise<Credit[]> {
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
  const { data } = await getClient().query({
    query: CREDITS_CLIENT,
    variables: { identification: identification }
  })

  return data.findAllCreditByClient
}

async function PageCredit() {
  const cookies = getCookies()
  const data = cookies.get('role')
  const identification = cookies.get('data')
  const credits: Credit[] =
    data === Role.EMPLOYEE
      ? await getCredits()
      : await getCreditsClient(Number(identification))
  return (
    <>
      <Credits credits={credits} />
    </>
  )
}

export default PageCredit
