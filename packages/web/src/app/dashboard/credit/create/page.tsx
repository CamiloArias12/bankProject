import { getClient } from '@/lib/graphql/apollo-client-server'
import { gql } from '@apollo/client'
import FormCredit from './CreateCredit'
export const revalidate = 0

async function getCreditInformation(): Promise<any> {
  const CREDIT_INFORMATION = gql`
    query {
      allClient {
        user {
          identification
          name
          lastName
        }
      }
    }
  `
  const { data } = await getClient().query({ query: CREDIT_INFORMATION })

  return data
}

async function CreatePage() {
  const data = await getCreditInformation()
  return (
    <>
      <FormCredit creditType={data.getTypeCreditAll} clients={data.allClient} />
    </>
  )
}

export default CreatePage
