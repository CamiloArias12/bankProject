import { useState } from 'react';

export function useUser() {
  const [user, setUser] = useState({
   identification:'',
   name: '',
   lastName:'',
   phone:'',
   email:'',
   password:'',
   idBranch:''
  });
  const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  };
   const handleUserSelect = (name: string, value: any) => {
    setUser((prevData) => ({ ...prevData, [name]: value }));
   };

  return {
    user,
    setUser,
    handleUser,
    handleUserSelect
  };
}
