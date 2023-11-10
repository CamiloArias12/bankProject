'use client'
import InputField from '@/app/components/input/InputField'
import Button from '../../input/Button'
import InputNumber from '../../input/InputNumber'
import { gql, useQuery } from '@apollo/client'
import SelectField from '../../input/SelectField'

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
    <>
      <InputNumber
        handleChange={handleChange}
        name="identification"
        value={user.identification}
        label="Idenficacion"
      />

      <InputField
        name="name"
        label="Nombres"
        value={user.name}
        onChange={handleUser}
      />
      <InputField
        name="lastName"
        label="Apellidos"
        value={user.lastName}
        onChange={handleUser}
      />
      <InputField
        name="email"
        label="Correo"
        value={user.email}
        onChange={handleUser}
      />
      <InputField
        name="phone"
        label="Telefono"
        value={user.phone}
        onChange={handleUser}
      />
      <InputField
        name="password"
        label="Contrasena"
        value={user.password}
        type="password"
        onChange={handleUser}
      />
      <SelectField
        name="idBranch"
        label="Sucursal"
        value={user.idBranch}
        options={dataBranches?.findAllBranch}
        handleGeneralInformation={handleChange}
      />

      <div className="pt-10 flex justify-end">
        <div className="pr-4">
          <Button
            name="Cancelar"
            background="border  border-[#054818]  text-[#054818]  "
            onClick={onClickCancel}
          />
        </div>
        <div className="pr-4">
          <Button
            name="Aceptar"
            background=" bg-[#054818]  text-white"
            onClick={onClickAccept}
          />
        </div>
      </div>
    </>
  )
}

export default UserForm
