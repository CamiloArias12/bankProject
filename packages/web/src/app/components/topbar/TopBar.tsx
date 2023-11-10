"use client"

import { Role } from "@/lib/utils/user/types";
import { User } from "@nextui-org/react";
import { useSession } from "next-auth/react";

export default function TopBar() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-row-reverse w-full h-16 px-2 shadow">
      <User
        name={session.user.name}
        description={Role.CLIENT === session.user.role ? "Client": "Admin"}
      />
    </div>
  );
}
