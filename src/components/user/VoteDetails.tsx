import React from "react";
import { ContentBody } from "../../common/Form-Element.style";
import { Container, Description } from "../../common/UI-Elements.style";
import { VoteList } from "./ViewAllParties.style";

const VoteDetails = () => {
  return (
    <Container>
      <ContentBody>
        <Description>
          List of Political offices you have voted for and the candidates to
          voted
        </Description>
        <table className="styled-table">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Office Name</th>
              <th style={{ textAlign: "center" }}>Candidate Voted For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>President</td>
              <td>Bange Sebastine</td>
            </tr>
            <tr>
              <td>Vice President</td>
              <td>Ndum Henrietta</td>
            </tr>
            <tr>
              <td>Finance Minister</td>
              <td>Agu Akawa</td>
            </tr>
          </tbody>
        </table>
      </ContentBody>
    </Container>
  );
};

export default VoteDetails;
