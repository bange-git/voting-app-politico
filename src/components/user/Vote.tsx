import React, { useState } from "react";
import { ContentBody } from "../../common/Form-Element.style";
import { Container, Description, Grid } from "../../common/UI-Elements.style";
import {
  OfficeSubmit,
  OfficeTitle,
  VoteCard,
  VoteFormGroup,
  VoteInput,
} from "./ViewAllParties.style";

interface State {
  president: string;
  secretary: string;
}
const ViewAllParties = () => {
  const [state, setState] = useState<string>();

  const onValueChange = (e: any) => {
    setState(e.target.value);
  };
  return (
    <Container>
      <ContentBody>
        <Description>
          You can vote only a candidate for each position... {state}
        </Description>
        <Grid>
          <VoteCard>
            <OfficeTitle>PRESIDENT</OfficeTitle>
            <form>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  name="president"
                  value="Banki Louis Figo"
                  checked={state === "Banki Louis Figo"}
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Banki Louis Figo
                </label>
              </VoteFormGroup>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  value="Alade Alowisse"
                  checked={state === "Alade Alowisse"}
                  name="president"
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Alade Alowisse
                </label>
              </VoteFormGroup>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  value="Faith Azemafac uche"
                  checked={state === "Faith Azemafac uche"}
                  name="president"
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Faith Azemafac uche
                </label>
              </VoteFormGroup>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  value="Obil Julius"
                  checked={state === "Obil Julius"}
                  name="president"
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Obil Julius
                </label>
              </VoteFormGroup>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  checked={state === "Bange Sebastine Hwonyi Peters"}
                  name="president"
                  value="Bange Sebastine Hwonyi Peters"
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Bange Sebastine Hwonyi Peters
                </label>
              </VoteFormGroup>
              <OfficeSubmit>VOTE</OfficeSubmit>
            </form>
          </VoteCard>
          <VoteCard>
            <OfficeTitle>SECRETARY</OfficeTitle>
            <form>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  name="secretary"
                  value="Banki Louis Figo"
                  checked={state === "Banki Louis Figo"}
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Banki Louis Figo
                </label>
              </VoteFormGroup>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  value="Alade Alowisse"
                  checked={state === "Alade Alowisse"}
                  name="secretary"
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Alade Alowisse
                </label>
              </VoteFormGroup>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  value="Faith Azemafac uche"
                  checked={state === "Faith Azemafac uche"}
                  name="secretary"
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Faith Azemafac uche
                </label>
              </VoteFormGroup>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  value="Obil Julius"
                  checked={state === "Obil Julius"}
                  name="secretary"
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Obil Julius
                </label>
              </VoteFormGroup>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  checked={state === "Bange Sebastine Hwonyi Peters"}
                  name="secretary"
                  value="Bange Sebastine Hwonyi Peters"
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Bange Sebastine Hwonyi Peters
                </label>
              </VoteFormGroup>
              <OfficeSubmit>VOTE</OfficeSubmit>
            </form>
          </VoteCard>
          <VoteCard>
            <OfficeTitle>CHAIR PERSON</OfficeTitle>
            <form>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  name="president"
                  value="Banki Louis Figo"
                  checked={state === "Banki Louis Figo"}
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Banki Louis Figo
                </label>
              </VoteFormGroup>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  value="Alade Alowisse"
                  checked={state === "Alade Alowisse"}
                  name="president"
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Alade Alowisse
                </label>
              </VoteFormGroup>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  value="Faith Azemafac uche"
                  checked={state === "Faith Azemafac uche"}
                  name="president"
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Faith Azemafac uche
                </label>
              </VoteFormGroup>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  value="Obil Julius"
                  checked={state === "Obil Julius"}
                  name="president"
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Obil Julius
                </label>
              </VoteFormGroup>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  checked={state === "Bange Sebastine Hwonyi Peters"}
                  name="president"
                  value="Bange Sebastine Hwonyi Peters"
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Bange Sebastine Hwonyi Peters
                </label>
              </VoteFormGroup>
              <OfficeSubmit>VOTE</OfficeSubmit>
            </form>
          </VoteCard>
          <VoteCard>
            <OfficeTitle>VICE PRESIDENT</OfficeTitle>
            <form>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  name="president"
                  value="Banki Louis Figo"
                  checked={state === "Banki Louis Figo"}
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Banki Louis Figo
                </label>
              </VoteFormGroup>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  value="Alade Alowisse"
                  checked={state === "Alade Alowisse"}
                  name="president"
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Alade Alowisse
                </label>
              </VoteFormGroup>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  value="Faith Azemafac uche"
                  checked={state === "Faith Azemafac uche"}
                  name="president"
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Faith Azemafac uche
                </label>
              </VoteFormGroup>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  value="Obil Julius"
                  checked={state === "Obil Julius"}
                  name="president"
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Obil Julius
                </label>
              </VoteFormGroup>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  checked={state === "Bange Sebastine Hwonyi Peters"}
                  name="president"
                  value="Bange Sebastine Hwonyi Peters"
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Bange Sebastine Hwonyi Peters
                </label>
              </VoteFormGroup>
              <OfficeSubmit>VOTE</OfficeSubmit>
            </form>
          </VoteCard>
          <VoteCard>
            <OfficeTitle>TREASURER</OfficeTitle>
            <form>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  name="president"
                  value="Banki Louis Figo"
                  checked={state === "Banki Louis Figo"}
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Banki Louis Figo
                </label>
              </VoteFormGroup>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  value="Alade Alowisse"
                  checked={state === "Alade Alowisse"}
                  name="president"
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Alade Alowisse
                </label>
              </VoteFormGroup>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  value="Faith Azemafac uche"
                  checked={state === "Faith Azemafac uche"}
                  name="president"
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Faith Azemafac uche
                </label>
              </VoteFormGroup>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  value="Obil Julius"
                  checked={state === "Obil Julius"}
                  name="president"
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Obil Julius
                </label>
              </VoteFormGroup>
              <VoteFormGroup>
                <VoteInput
                  type="radio"
                  checked={state === "Bange Sebastine Hwonyi Peters"}
                  name="president"
                  value="Bange Sebastine Hwonyi Peters"
                  onChange={onValueChange}
                />
                <label style={{ paddingLeft: "12px", fontSize: "1.5rem" }}>
                  Bange Sebastine Hwonyi Peters
                </label>
              </VoteFormGroup>
              <OfficeSubmit>VOTE</OfficeSubmit>
            </form>
          </VoteCard>
        </Grid>
      </ContentBody>
    </Container>
  );
};

export default ViewAllParties;
