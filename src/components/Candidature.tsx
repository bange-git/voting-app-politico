import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  ContentBody,
  InputField,
  Form,
  FormGroup,
  FormCard,
  Label,
  SubmitButton,
  TextArea,
  Select,
} from "../common/Form-Element.style";
import { Container, Description } from "../common/UI-Elements.style";

interface Candidature {
  name: string;
  office: string;
  party: string;
  description: string;
}

const Candidature = () => {
  const [name, setName] = useState<string>("");
  const [office, setOffice] = useState<string>("");
  const [party, setParty] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [candidateInfo, setCandidateInfo] = useState<Candidature[]>([]);

  const Add = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (
      !name ||
      !office ||
      !party ||
      !description ||
      office === " " ||
      party === " "
    ) {
      toast.error("All fields are required");
      return;
    }
    setCandidateInfo([...candidateInfo, { name, office, party, description }]);
    toast.success("Party created succesfully");
    setName("");
    setOffice("");
    setParty("");
    setDescription("");
  };

  return (
    <>
      <Container>
        <ContentBody>
          <FormCard>
            <Description>
              Do you want to be a candidate for the upcoming election?, fill and
              submit the form below.
            </Description>
            <Form>
              <FormGroup>
                <Label>Name</Label>
                <InputField
                  type="text"
                  placeholder="Candidate's Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></InputField>
              </FormGroup>
              <FormGroup>
                <Label>Select Office</Label>
                <Select
                  value={office}
                  onChange={(e) => setOffice(e.target.value)}
                >
                  <option></option>
                  <option>President</option>
                  <option>President</option>
                  <option>Vice President</option>
                  <option>Sectary</option>
                  <option>Communication Officer</option>
                  <option>Chair Person</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label>Select Party</Label>
                <Select
                  value={party}
                  onChange={(e) => setParty(e.target.value)}
                >
                  <option></option>
                  <option>CPDM</option>
                  <option>SDF</option>
                  <option>UPC</option>
                  <option>UNDP</option>
                  <option>YPP</option>
                  <option>UPP</option>
                  <option>RDPC</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <TextArea
                  rows={8}
                  cols={10}
                  placeholder="Tell us why you should be voted for this office ..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></TextArea>
              </FormGroup>
              <FormGroup>
                <SubmitButton onClick={Add}>Save</SubmitButton>
              </FormGroup>
            </Form>
          </FormCard>
          <table className="styled-table">
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>No.</th>
                <th style={{ textAlign: "center" }}>Name</th>
                <th style={{ textAlign: "center" }}>Office</th>
                <th style={{ textAlign: "center" }}>Party</th>
                <th style={{ textAlign: "center" }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Josehp Akumata</td>
                <td>President</td>
                <td>CPDM</td>
                <td>
                  I was born a leader and i believe voted for this position will
                  bring about rapid transformation
                </td>
              </tr>

              <tr>
                <th scope="row">2</th>
                <td>Eric tiku</td>
                <td>President</td>
                <td>SDF</td>
                <td>
                  I am a lover of the community and being elected means rapid
                  development
                </td>
              </tr>

              {candidateInfo.map((info, index) => (
                <tr key={index}>
                  <th scope="row">{index + 3}</th>
                  <td>{info.name}</td>
                  <td>{info.office}</td>
                  <td>{info.party}</td>
                  <td>{info.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ContentBody>
      </Container>
    </>
  );
};

export default Candidature;
