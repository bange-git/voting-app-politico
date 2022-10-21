import Link from "next/link";
import React from "react";
import { Flex, Title } from "./Header.style";

const Header = () => {
  return (
    <Flex>
      <Title>Politico</Title>
      <ul>
        <li>
          <Link href="/">
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: 18,
              }}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/admin/CreateEditPartyPage">
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: 18,
              }}
            >
              Parties
            </a>
          </Link>
        </li>

        <li>
          <Link href="/admin/CreateEditOfficePage">
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: 18,
              }}
            >
              Offices
            </a>
          </Link>
        </li>

        <li>
          <Link href="/auth/Register">
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: 18,
              }}
            >
              Sign Up
            </a>
          </Link>
        </li>

        <li>
          <Link href="/auth/Login">
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: 18,
              }}
            >
              Sign In
            </a>
          </Link>
        </li>
      </ul>
    </Flex>
  );
};

export default Header;
