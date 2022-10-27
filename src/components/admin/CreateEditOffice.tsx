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
  Select,
} from "../../common/Form-Element.style";
import { Container } from "../../common/UI-Elements.style";

interface Office {
  name: string;
  type: string | null;
}

const CreateEditOffice = () => {
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>();
  const [officeInfo, setOfficeInfo] = useState<Office[]>([]);

  const Add = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!name || !type) {
      toast.error("all fields are required");
      return;
    }
    setOfficeInfo([...officeInfo, { name, type }]);
    toast.success("Office created succesfully");
    setName("");
    setType("");
  };

  return (
    <>
      <Container>
        <ContentBody>
          <FormCard>
            <Form>
              <FormGroup>
                <Label>Name</Label>
                <InputField
                  type="text"
                  placeholder="Office Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></InputField>
              </FormGroup>
              <FormGroup>
                <Label>Type</Label>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                  <option>Legislative</option>
                  <option>Presidential</option>
                  <option>Municipal</option>
                </Select>
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
                <th style={{ textAlign: "center" }}>Type</th>
                <th style={{ textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>President</td>
                <td>Legislative</td>
                <td>
                  <button className="btn btn-edit">Edit</button>
                  <button className="btn btn-delete">Delete</button>
                  <button className="btn btn-view">View</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Vice President</td>
                <td>Legislative</td>
                <td>
                  <button className="btn btn-edit">Edit</button>
                  <button className="btn btn-delete">Delete</button>
                  <button className="btn btn-view">View</button>
                </td>
              </tr>
              {officeInfo.map((info, index) => (
                <tr key={index}>
                  <th scope="row">{index + 3}</th>
                  <td>{info.name}</td>
                  <td>{info.type}</td>
                  <td>
                    <button className="btn btn-edit">Edit</button>
                    <button className="btn btn-delete" onClick={() => {}}>
                      Delete
                    </button>
                    <button className="btn btn-view">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ContentBody>
      </Container>
    </>
  );
};

export default CreateEditOffice;
