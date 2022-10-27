import React from "react";
import { signIn } from "next-auth/react";
import { GoogleLoginButton, GoogleLogoIcon } from "./Register.style";
import {
  ContentBody,
  InputField,
  Form,
  FormGroup,
  FormCard,
  Label,
  SubmitButton,
  ForgotPassWord,
} from "../../common/Form-Element.style";
import { Container } from "../../common/UI-Elements.style";
import { OR } from "./Register.style";
import Link from "next/link";

const SignIn = () => {
  const handleSignIn = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log("clicking on sign in/....");
    e.preventDefault();
    console.log("sign in with provider: ");
    signIn();
  };

  return (
    <>
      <Container>
        <ContentBody>
          <FormCard>
            <Form>
              <FormGroup>
                <Label>Email</Label>
                <InputField type="email" placeholder="Email"></InputField>
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <InputField type="password" placeholder="password"></InputField>
              </FormGroup>
              <ForgotPassWord>
                <Link href="/reset-password">
                  <a
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: 18,
                    }}
                  >
                    {" "}
                    Forgot Password ?
                  </a>
                </Link>
              </ForgotPassWord>
              <FormGroup>
                <SubmitButton>Sign In</SubmitButton>
              </FormGroup>
              <OR>
                <div>
                  <hr />
                  OR
                  <hr />
                </div>
              </OR>
              <FormGroup>
                <GoogleLoginButton onClick={handleSignIn}>
                  <GoogleLogoIcon />
                  <span>Sign In With Google</span>
                </GoogleLoginButton>
              </FormGroup>
              <div style={{ fontWeight: "bold" }}>
                Don&apos;t have an account?{" "}
                <Link href="/register">
                  <a> Sign Up</a>
                </Link>
              </div>
            </Form>
          </FormCard>
        </ContentBody>
      </Container>
    </>
  );
};

export default SignIn;
