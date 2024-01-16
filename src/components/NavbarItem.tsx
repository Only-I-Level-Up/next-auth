import Link from "next/link";
import React from "react";

const NavbarItem = ({ moblie }: { moblie?: boolean }) => {
  return (
    <ul
      className={`text-md justify-center flex w-full gap-4 ${
        moblie && "flex-col h-full"
      } items-center`}
    >
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href="/admin">Admin</Link>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href="/user">User</Link>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <button>Signout</button>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href="/admin">Signin</Link>
      </li>
    </ul>
  );
};

export default NavbarItem;
