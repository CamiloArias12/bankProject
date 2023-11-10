'use client'
import { gql, useQuery } from '@apollo/client'
import SelectField from '../../input/SelectField'
import { Button, Input, Select, SelectItem } from '@nextui-org/react'

const GET_BRANCHES = gql`
  query {
    findAllBranch {
      id
      name
    }
  }
`

export function UserForm({
  onClickAccept,
  onClickCancel,
  handleUser,
  user,
  handleChange
}: {
  onClickAccept: any
  onClickCancel: any
  user: any
  handleChange: any
  handleUser: any
}) {
  const { data: dataBranches, refetch: querySubAccount } =
    useQuery(GET_BRANCHES)
  return (
    <div className='flex flex-col gap-5'>
     <Input
        onValueChange={(d) => handleChange('identification', Number(d))}
        name="identification"
        value={user.identification}
        label="Idenficacion"
      />

      <Input
        name="name"
        label="First name"
        value={user.name}
        onValueChange={(d) => handleChange('name', d)}
      />
      <Input
        name="lastName"
        label="Last name"
        value={user.lastName}
        onValueChange={(d) => handleChange('lastName', d)}
      />
      <Input
        name="email"
        label="Email"
        value={user.email}
        onValueChange={(d) => handleChange('email', d)}
      />
      <Input
        name="phone"
        label="Phone number"
        value={user.phone}
        onValueChange={(d) => handleChange('phone', d)}
      />
      <Input
        name="password"
        label="Password"
        value={user.password}
        type="password"
        onValueChange={(d) => handleChange('password', d)}
      />
      <Select
        label="Branch office"
        onChange={d => handleChange('idBranch', Number(d.target.value))}
      >
        {
          dataBranches?.findAllBranch?.map((value) => {
          return(
            <SelectItem key={value.id} value={"h"}>{value.name}</SelectItem>
          );
        })
        }

      </Select>
      <div className="pt-10 flex justify-end">
        <div className="pr-4">
          <Button
            onClick={onClickCancel}
          >Cancel</Button>
        </div>
        <div className="pr-4">
          <Button
            onClick={onClickAccept}
          >Done</Button>
        </div>
      </div>
    </div>
  )
}

export default UserForm
