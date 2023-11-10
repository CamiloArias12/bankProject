import { gql } from '@apollo/client'
import { getClient } from '@/lib/graphql/apollo-client-server'
import { Saving } from '@/lib/utils/savings/types'
import Savings from './SavingAccount'
import { getCookies } from 'next-client-cookies/server'
import { Role } from '@/lib/utils/user/types'

export const revalidate = 0

async function getSavinges(): Promise<Saving[]> {
  const SAVINGS = gql`
    query {
      findAllSavingAccount {
        id
        identification
        lastName
        name

        interestRate
        openingDate
      }
    }
  `
  const { data } = await getClient().query({ query: SAVINGS })

  return data.findAllSavingAccount
}
async function getSavingesByClient(identification: number): Promise<Saving[]> {
  const SAVINGS = gql`
    query ($identification: Float!) {
      findAllSavingAccountByClient(identification: $identification) {
        id
        identification
        lastName
        name
        interestRate
      }
    }
  `
  const { data } = await getClient().query({
    query: SAVINGS,
    variables: { identification: identification }
  })

  return data.findAllSavingAccountByClient
}
async function PageSaving() {
  const cookies = getCookies()
  const data = cookies.get('role')
  const identification = cookies.get('data')
  const savings: Saving[] =
    data === Role.EMPLOYEE
      ? await getSavinges()
      : await getSavingesByClient(Number(identification))

  return (
    <>
      <Savings savings={savings} />
    </>
  )
}

export default PageSaving
