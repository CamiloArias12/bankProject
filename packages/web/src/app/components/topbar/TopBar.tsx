"use client"

import { User } from "@nextui-org/react";
import { useSession } from "next-auth/react";

export default function TopBar() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-row-reverse w-full h-16 px-2 shadow">
      <User
        name={session.user.name}
        description={session.user.role}
      />
    </div>
  );
}
