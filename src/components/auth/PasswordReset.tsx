import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { FacebookLogo, GoogleLogo, GitHubLogo } from "../../../static/assets";
import {
  ContentBody,
  InputField,
  Form,
  FormGroup,
  FormCard,
  Label,
  SubmitButton,
} from "../../common/Form-Element.style";
import { Container, Heading } from "../../common/UI-Elements.style";
import Link from "next/link";

const PasswordReset = () => {
  return (
    <>
      <Container>
        <ContentBody>
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
        </ContentBody>
      </Container>
    </>
  );
};

export default PasswordReset;
