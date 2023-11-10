import { gql } from '@apollo/client'
import { getClient } from '@/lib/graphql/apollo-client-server'
import Branches from './Branches'
import { Branch } from '@/lib/utils/branch/types'

export const revalidate = 0

async function getBranches(): Promise<Branch[]> {
  const BRANCHES = gql`
    query {
      findAllBranch {
        id
        name
        address
        phoneNumber
      }
    }
  `
  const { data } = await getClient().query({ query: BRANCHES })

  return data.findAllBranch
}

async function PageBranch() {
  const branches: Branch[] = await getBranches()

  return (
    <>
      <Branches branchs={branches} />
    </>
  )
}

export default PageBranch
