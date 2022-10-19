import React from "react";
import {
  FlexContact,
  InputField,
  Form,
  FormGroup,
  FormCard,
  Label,
  SubmitButton,
} from "./Register.style";
import { Container, Heading } from "../../common/UI-Elements.style";
import Link from "next/link";

const ResetComplete = () => {
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

            <Form>
              <FormGroup>
                <Label>Enter Your New Password</Label>
                <InputField
                  type="password"
                  placeholder="Enter New Password"
                ></InputField>
              </FormGroup>
              <FormGroup>
                <InputField
                  type="password"
                  placeholder="Confirm Password"
                ></InputField>
              </FormGroup>
              <FormGroup>
                <SubmitButton>Change Password</SubmitButton>
              </FormGroup>
            </Form>
          </FormCard>
        </FlexContact>
      </Container>
    </>
  );
};

export default ResetComplete;
