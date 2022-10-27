import Link from "next/link";
import React, { useState } from "react";
import { DropDownLi, DropDownMenu, NavLink, SubmenuLink } from "./Header.style";

const DropDown = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <DropDownMenu>
      <DropDownLi>
        <Link href="/new-office">
          <SubmenuLink>Manage Offices</SubmenuLink>
        </Link>
      </DropDownLi>
      <DropDownLi>
        <Link href="/new-parties">
          <SubmenuLink>Manage Parties</SubmenuLink>
        </Link>
      </DropDownLi>
    </DropDownMenu>
  );
};

export default DropDown;
