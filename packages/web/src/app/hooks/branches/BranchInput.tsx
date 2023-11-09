import { useState } from 'react';

export function useBranch() {
  const [branch, setBranch] = useState({
    name: '',
    address:'',
    phoneNumber:''
  });
  const handleBranch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBranch((prevData) => ({ ...prevData, [name]: value }));
  };

  return {
    branch,
    setBranch,
    handleBranch,
  };
}
