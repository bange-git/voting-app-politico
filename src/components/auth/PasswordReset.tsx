import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { FacebookLogo, GoogleLogo, GitHubLogo } from "../../../static/assets";
import {
  GoogleLoginButton,
  GoogleLogoIcon,
  FlexContact,
  InputField,
  Form,
  FormGroup,
  FormCard,
  Label,
  SubmitButton,
  ForgotPassWord,
} from "./Register.style";
import { Container, Heading, Title } from "../../common/UI-Elements.style";
import { OR } from "./Register.style";
import Link from "next/link";

const PasswordReset = () => {
  const { data: session } = useSession();
  console.log(session);
  const { push } = useRouter();

  const providers = [
    { name: "google", Icon: GoogleLogo },
    { name: "facebook", Icon: FacebookLogo },
    { name: "github", Icon: GitHubLogo },
  ];

  const handleSignIn = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log("clicking on sign in/....");
    e.preventDefault();
    console.log("sign in with provider: ");
    signIn();
  };

  return (
    <>
      <Container>
        <FlexContact>
          <FormCard
            style={{
              height: "400px",
              border: "1px solid #d0d4d9",
              borderRadius: "5px",
            }}
          >
            <Heading>Reset Your Password</Heading>
            <p style={{ margin: "1rem" }}>
              Don&apos;t remember your password? Let&apos;s get you a new one.
            </p>
            <Form>
              <FormGroup>
                <Label>Email</Label>
                <InputField type="email" placeholder="Email"></InputField>
              </FormGroup>
              <FormGroup>
                <SubmitButton>Reset Password</SubmitButton>
              </FormGroup>
              <div style={{ fontWeight: "bold", margin: "1rem" }}>
                Remember your password?{" "}
                <Link href="/auth/Login">
                  <a> Login</a>
                </Link>{" "}
              </div>
            </Form>
          </FormCard>
        </FlexContact>
      </Container>
    </>
  );
};

export default PasswordReset;
