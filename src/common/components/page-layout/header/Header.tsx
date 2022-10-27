import Link from "next/link";
import React, { useState } from "react";
import DropDown from "./DropDown";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Navbar, NavLink, Logo, OpenMenuButton } from "./Header.style";
import Image from "next/image";
import UserProfile from "./UserProfile";

const Header = () => {
  const [openProfile, setOpenProfile] = useState<boolean>(false);

  const closeProfile = () => {
    setOpenProfile(false);
  };

  const [isAdminDropdownVisible, setIsAdminDropdownVisible] =
    useState<boolean>(false);

  const [extendedNavbar, setExtendedNavbar] = useState<boolean>(false);

  const showAdminDropdown = () => {
    setIsAdminDropdownVisible(true);
  };

  const closeAdminDropdown = () => {
    setIsAdminDropdownVisible(false);
  };

  const toggleExtended = () => {
    setExtendedNavbar(false);
  };

  return (
    <Navbar extendedNavbar={extendedNavbar}>
      <Logo>Politico</Logo>
      <OpenMenuButton onClick={() => setExtendedNavbar((curr) => !curr)}>
        {extendedNavbar ? <FaTimes /> : <FaBars />}
      </OpenMenuButton>
      <ul onClick={toggleExtended}>
        <li>
          <Link href="/">
            <NavLink>Home</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/vote">
            <NavLink>Voting</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/parties">
            <NavLink>All Parties</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/candidacy">
            <NavLink>Submit Candidacy</NavLink>
          </Link>
        </li>

        <li>
          <Link href="/register">
            <NavLink>Sign Up</NavLink>
          </Link>
        </li>

        <li>
          <Link href="/login">
            <NavLink>Sign In</NavLink>
          </Link>
        </li>
        <li
          onClick={showAdminDropdown}
          onMouseEnter={showAdminDropdown}
          onMouseLeave={closeAdminDropdown}
        >
          <h3>Admin</h3>

          {isAdminDropdownVisible && <DropDown />}
        </li>
        <li onClick={() => setOpenProfile((curr) => !curr)}>
          <Image
            src="/images/bio.jpg"
            width={40}
            height={40}
            style={{ borderRadius: "50%" }}
          />
        </li>
      </ul>
      {openProfile && (
        <UserProfile closeProfile={closeProfile} openProfile={openProfile} />
      )}
    </Navbar>
  );
};

export default Header;
