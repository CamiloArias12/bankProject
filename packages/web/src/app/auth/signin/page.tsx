'use client'
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons"
import { signIn } from "next-auth/react";

export default function Login() {

  const heroImage = "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  return (
    <div className="flex h-screen w-screen">

      <figure className="w-2/3 bg-sky-500 ">
        <img
          src={heroImage}
          className="w-full h-full object-cover object-center"
        />
      </figure>

      <div className="w-1/3 flex items-center justify-center m-10">

        <div className="flex flex-col w-96 gap-y-6 items-center justify-center">
          <Input
            value={email}
            onValueChange={setEmail}
            type="email"
            label="Email"
            isRequired
            isClearable
          />
          <Input
            value={password}
            onValueChange={setPassword}
            type={isPasswordVisible ? "text": "password"}
            label="Password"
            isRequired
            endContent={
              <button type="button" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                {
                  isPasswordVisible ?
                    (<EyeOpenIcon className="text-2xl text-default-400 pointer-events-none" />)
                    :
                    (<EyeNoneIcon className="text-2xl text-defaults-400 pointer-events-none" />)
                }
              </button>
            }
          />
          <Button 
            className="w-full bg-sky-300 text-sky-900 font-bold"
            onClick={() => {
            signIn('credentials', {
              email: email,
              password: password,
              redirect: true,
              callbackUrl: '/dashboard'
            })
          }}>Iniciar sesión</Button>
        </div>
      </div>
    </div>
  );
}
