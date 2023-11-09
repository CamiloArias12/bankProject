import { gql } from '@apollo/client';
import { getClient } from '@/lib/graphql/apollo-client-server';
import { User } from '@/lib/utils/user/types';
import Users from './Users';
import { getCookies } from 'next-client-cookies/server';
export const revalidate = 0;



async function getUsers(): Promise<User[]> {
  const USERS= gql`
  query {
  getAllUsers {
   identification
   name
   lastName
   email
   phone
    
  }
  
}`;
  const { data } = await getClient().query({ query: USERS});

   console.log(data)
  return data.getAllUsers;
}

async function PageUser() {
   const cookies=getCookies()

   const data=cookies.get("data")

   console.log(data)
   
  const users: User[] = await getUsers();

  return (
    <>
      <Users users={users} />
    </>
  );
}

export default PageUser;
