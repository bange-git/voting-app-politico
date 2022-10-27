import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  UserMenuWrapper,
  UserMenu,
  UserInfo,
  Divider,
  UserMenuLink,
  UserMenuImage,
  UserMenuLinkPar,
} from "./UserProfile.style";
import { NavLink } from "./Header.style";
import Link from "next/link";

interface Props {
  closeProfile: () => void;
  openProfile: boolean;
}
const UserProfile = (props: Props) => {
  const menuRef: React.RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const handleProfileClose = (e:any) => {
      if (!menuRef.current?.contains(e.target)) {
        props.closeProfile();
      }
    };
    document.addEventListener("mousedown", handleProfileClose);
    return () => {
      document.removeEventListener("mousedown", handleProfileClose);
    };
  }, []);

  return (
    <UserMenuWrapper ref={menuRef}>
      <UserMenu>
        <UserInfo>
          <Image
            src="/images/bio.jpg"
            width={60}
            height={60}
            style={{ borderRadius: "50%" }}
          />
          <h3 style={{ fontWeight: "500", color: "black", marginLeft: "15px" }}>
            Bange Sebastine
          </h3>
        </UserInfo>
        <Divider />
        <UserMenuLink>
          <UserMenuImage src="/images/profile.png" />
          <UserMenuLinkPar>Edit Profile</UserMenuLinkPar>
        </UserMenuLink>
        <UserMenuLink>
          <UserMenuImage src="/images/setting.png" />
          <UserMenuLinkPar>Settings</UserMenuLinkPar>
        </UserMenuLink>
        <UserMenuLink>
          <UserMenuImage src="/images/help.png" />
          <Link href="/vote-details">
            <UserMenuLinkPar>Your Vote Details ?</UserMenuLinkPar>
          </Link>
        </UserMenuLink>
        <UserMenuLink>
          <UserMenuImage src="/images/logout.png" />
          <UserMenuLinkPar>Logout</UserMenuLinkPar>
        </UserMenuLink>
      </UserMenu>
    </UserMenuWrapper>
  );
};

export default UserProfile;
