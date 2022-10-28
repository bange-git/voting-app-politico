import React, { useState } from "react";
import { signIn } from "next-auth/react";
import axios from "axios";
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

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUser(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <>
      <Container>
        <ContentBody>
          <span>{user.email}</span>
          <FormCard>
            <Form>
              <FormGroup>
                <Label data-testid="label">Email</Label>
                <InputField
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></InputField>
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <InputField
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></InputField>
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
                <SubmitButton
                  data-testid="button"
                  disabled={!email || !password}
                  onClick={handleSubmit}
                >
                  {loading ? "please wait" : "Sign In"}
                </SubmitButton>
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
