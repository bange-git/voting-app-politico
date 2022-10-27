import React from "react";
import { ContentBody } from "../../common/Form-Element.style";
import Image from "next/image";
import {
  Card,
  Container,
  Description,
  Grid,
} from "../../common/UI-Elements.style";
import { ViewCard, LogoAndTitle } from "./ViewAllParties.style";

const ViewAllParties = () => {
  return (
    <Container>
      <ContentBody>
        <Description>List of All Parties involved in the election</Description>
        <Grid>
          <ViewCard>
            <div style={{ display: "flex", gap: 1, marginBottom: "1rem" }}>
              <Image
                src="/images/bio.jpg"
                width={80}
                height={80}
                style={{ borderRadius: "50%" }}
              />
              <LogoAndTitle>
                <h3 style={{ marginBottom: "4px" }}>CPDM </h3>
                <p>Yde, 456 aka street</p>
              </LogoAndTitle>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            et dolore magni dicta beatae recusandae pariatur vel eos veritatis
            ipsum consectetur saepe enim, laborum debitis fugiat laboriosam ea
            reprehenderit provident!
          </ViewCard>
          <ViewCard>
            <div style={{ display: "flex", gap: 1, marginBottom: "1rem" }}>
              <Image
                src="/images/1.jpg"
                width={80}
                height={80}
                style={{ borderRadius: "50%" }}
              />
              <LogoAndTitle>
                <h3 style={{ marginBottom: "4px" }}>SDF </h3>
                <p>Yde, 456 aka street</p>
              </LogoAndTitle>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            et dolore magni dicta beatae recusandae pariatur vel eos veritatis
            ipsum consectetur saepe enim, laborum debitis fugiat laboriosam ea
            reprehenderit provident!
          </ViewCard>
          <ViewCard>
            <div style={{ display: "flex", gap: 1, marginBottom: "1rem" }}>
              <Image
                src="/images/2.jpg"
                width={80}
                height={80}
                style={{ borderRadius: "50%" }}
              />
              <LogoAndTitle>
                <h3 style={{ marginBottom: "4px" }}>UPC </h3>
                <p>Yde, 456 aka street</p>
              </LogoAndTitle>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            et dolore magni dicta beatae recusandae pariatur vel eos veritatis
            ipsum consectetur saepe enim, laborum debitis fugiat laboriosam ea
            reprehenderit provident!
          </ViewCard>
          <ViewCard>
            <div style={{ display: "flex", gap: 1, marginBottom: "1rem" }}>
              <Image
                src="/images/3.jpg"
                width={80}
                height={80}
                style={{ borderRadius: "50%" }}
              />
              <LogoAndTitle>
                <h3 style={{ marginBottom: "4px" }}>YPP </h3>
                <p>Yde, 456 aka street</p>
              </LogoAndTitle>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            et dolore magni dicta beatae recusandae pariatur vel eos veritatis
            ipsum consectetur saepe enim, laborum debitis fugiat laboriosam ea
            reprehenderit provident!
          </ViewCard>
        </Grid>
        <Grid>
          <ViewCard>
            <div style={{ display: "flex", gap: 1, marginBottom: "1rem" }}>
              <Image
                src="/images/dark.jpg"
                width={80}
                height={80}
                style={{ borderRadius: "50%" }}
              />
              <LogoAndTitle>
                <h3 style={{ marginBottom: "4px" }}>WCM </h3>
                <p>Yde, 456 aka street</p>
              </LogoAndTitle>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            et dolore magni dicta beatae recusandae pariatur vel eos veritatis
            ipsum consectetur saepe enim, laborum debitis fugiat laboriosam ea
            reprehenderit provident!
          </ViewCard>
          <ViewCard>
            <div style={{ display: "flex", gap: 1, marginBottom: "1rem" }}>
              <Image
                src="/images/1.jpg"
                width={80}
                height={80}
                style={{ borderRadius: "50%" }}
              />
              <LogoAndTitle>
                <h3 style={{ marginBottom: "4px" }}>YRDPC </h3>
                <p>Yde, 456 aka street</p>
              </LogoAndTitle>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            et dolore magni dicta beatae recusandae pariatur vel eos veritatis
            ipsum consectetur saepe enim, laborum debitis fugiat laboriosam ea
            reprehenderit provident!
          </ViewCard>
          <ViewCard>
            <div style={{ display: "flex", gap: 1, marginBottom: "1rem" }}>
              <Image
                src="/images/2.jpg"
                width={80}
                height={80}
                style={{ borderRadius: "50%" }}
              />
              <LogoAndTitle>
                <h3 style={{ marginBottom: "4px" }}>PPP </h3>
                <p>Yde, 456 aka street</p>
              </LogoAndTitle>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            et dolore magni dicta beatae recusandae pariatur vel eos veritatis
            ipsum consectetur saepe enim, laborum debitis fugiat laboriosam ea
            reprehenderit provident!
          </ViewCard>
          <ViewCard>
            <div style={{ display: "flex", gap: 1, marginBottom: "1rem" }}>
              <Image
                src="/images/meeting.jpg"
                width={80}
                height={80}
                style={{ borderRadius: "50%" }}
              />
              <LogoAndTitle>
                <h3 style={{ marginBottom: "4px" }}>BPP </h3>
                <p>Yde, 456 aka street</p>
              </LogoAndTitle>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            et dolore magni dicta beatae recusandae pariatur vel eos veritatis
            ipsum consectetur saepe enim, laborum debitis fugiat laboriosam ea
            reprehenderit provident!
          </ViewCard>
        </Grid>
      </ContentBody>
    </Container>
  );
};

export default ViewAllParties;
