import React, { useState, useEffect } from "react";
//import toast from "../../common/Toast/Toast";
import { toast } from "react-toastify";
import {
  FlexContainer,
  InputField,
  Form,
  FormGroup,
  FormCard,
  Label,
  SubmitButton,
  TextArea,
} from "../../common/Form-Element.style";
import { Container } from "../../common/UI-Elements.style";

interface Party {
  name: string;
  address: string;
  logUrl: string;
  description: string;
}

const CreateEditParty = () => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [logUrl, setLogoUrl] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [partyInfo, setPartyInfo] = useState<Party[]>([]);
  //   const [editInfo, setEditInfo] = useState<Party>({
  //     name: partyInfo.
  //   })

  const Add = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!name || !address || !logUrl) {
      toast.error("all fields are required");
      return;
    }
    setPartyInfo([...partyInfo, { name, address, logUrl, description }]);
    toast.success("Party created succesfully");
    setName("");
    setAddress("");
    setLogoUrl("");
    setAddress("");
    setDescription("");
  };

  const handleDelete = (name: string) => {
    console.log(name);
    const filteredData = partyInfo.filter((item) => item.name === name);
    console.log(filteredData);
  };

  return (
    <>
      <Container>
        <FlexContainer>
          <FormCard>
            <Form>
              <FormGroup>
                <Label>Name</Label>
                <InputField
                  type="text"
                  placeholder="Party's Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></InputField>
              </FormGroup>
              <FormGroup>
                <Label>Address</Label>
                <InputField
                  type="text"
                  placeholder="Hq Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></InputField>
              </FormGroup>

              <FormGroup>
                <Label>Logo Url</Label>
                <InputField
                  type="text"
                  placeholder="Enter Logo Url"
                  value={logUrl}
                  onChange={(e) => setLogoUrl(e.target.value)}
                ></InputField>
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <TextArea
                  rows={8}
                  cols={10}
                  placeholder="enter yoour message"
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
                <th style={{ textAlign: "center" }}>Address</th>
                <th style={{ textAlign: "center" }}>LogoUrl</th>
                <th style={{ textAlign: "center" }}>Description</th>
                <th style={{ textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>SDF</td>
                <td>Yde 494 Road</td>
                <td>https://unsplash.com/photos/-uHVRvDr7pg</td>
                <td>SDF means Social Democratic Front</td>
                <td>
                  <button className="btn btn-edit">Edit</button>
                  <button className="btn btn-delete">Delete</button>
                  <button className="btn btn-view">View</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>CPDM</td>
                <td>Yde 494 Road</td>
                <td>https://unsplash.com/photos/-uHVRvDr7pg</td>
                <td>SDF means Social Democratic Front</td>
                <td>
                  <button className="btn btn-edit">Edit</button>
                  <button className="btn btn-delete">Delete</button>
                  <button className="btn btn-view">View</button>
                </td>
              </tr>
              {partyInfo.map((info, index) => (
                <tr key={index}>
                  <th scope="row">{index + 3}</th>
                  <td>{info.name}</td>
                  <td>{info.address}</td>
                  <td>{info.logUrl}</td>
                  <td>{info.description}</td>
                  <td>
                    <button className="btn btn-edit">Edit</button>
                    <button
                      className="btn btn-delete"
                      onClick={() => handleDelete(name)}
                    >
                      Delete
                    </button>
                    <button className="btn btn-view">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FlexContainer>
      </Container>
    </>
  );
};

export default CreateEditParty;
