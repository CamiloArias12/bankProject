import { gql } from '@apollo/client'
import { getClient } from '@/lib/graphql/apollo-client-server'
import { Cdt } from '@/lib/utils/cdt/types'
import Cdts from './Cdts'
import { getCookies } from 'next-client-cookies/server'
import { Role } from '@/lib/utils/user/types'

export const revalidate = 0

async function getCdtes(): Promise<Cdt[]> {
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
  const { data } = await getClient().query({ query: CDTS })

  return data.findAllCdt
}
async function getCdtesClient(identification: number): Promise<Cdt[]> {
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

  const { data } = await getClient().query({
    query: CDTS_CLIENT,
    variables: { identification: identification }
  })
  return data.findAllCdtByClient
}

async function PageCdt() {
  const cookies = getCookies()
  const data = cookies.get('role')
  const identification = cookies.get('data')
  const cdts: Cdt[] =
    data === Role.EMPLOYEE
      ? await getCdtes()
      : await getCdtesClient(Number(identification))
  return (
    <>
      <Cdts cdts={cdts} />
    </>
  )
}

export default PageCdt
