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
  FlexRow,
  FormGroupLeft,
  FormGroupRight,
} from "../../common/Form-Element.style";
import { Container } from "../../common/UI-Elements.style";
import { OR } from "./Register.style";
import Link from "next/link";

const Register = () => {
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
              <FlexRow>
                <FormGroupLeft>
                  <Label>First name</Label>
                  <InputField type="text" placeholder="First Name"></InputField>
                </FormGroupLeft>
                <FormGroupRight>
                  <Label>Last name</Label>
                  <InputField type="text" placeholder="Last  Name"></InputField>
                </FormGroupRight>
              </FlexRow>
              <FormGroup>
                <Label>Email</Label>
                <InputField type="email" placeholder="Email"></InputField>
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <InputField type="password" placeholder="password"></InputField>
              </FormGroup>
              <FormGroup>
                <SubmitButton>Sign Up</SubmitButton>
              </FormGroup>
              <OR>
                <div>
                  <hr />
                  OR
                  <hr />
                </div>
              </OR>
              <FormGroup>
                {/* {providers.map(({ name, Icon }) => (
                  <GoogleLoginButton
                    key={name}
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("sign in with provider: ", name);
                      signIn(name);
                    }}
                  >
                    {<Icon />}
                    <span>Sign In With {name}</span>
                  </GoogleLoginButton>
                ))} */}
                <GoogleLoginButton onClick={handleSignIn}>
                  <GoogleLogoIcon />
                  <span>Sign In With Google</span>
                </GoogleLoginButton>
              </FormGroup>
              <div style={{ fontWeight: "bold" }}>
                Already have an account?{" "}
                <Link href="/login">
                  <a> Sign In</a>
                </Link>{" "}
                instead
              </div>
            </Form>
          </FormCard>
        </ContentBody>
      </Container>
    </>
  );
};

export default Register;
