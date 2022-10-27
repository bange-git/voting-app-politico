import { ContentBody } from "../../common/Form-Element.style";
import { Container } from "../../common/UI-Elements.style";

const ListParties = () => {
  return (
    <Container>
      <ContentBody>
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
            <tr>
              <th scope="row">3</th>
              <td>UPC</td>
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
              <th scope="row">4</th>
              <td>RDC</td>
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
              <th scope="row">5</th>
              <td>YPP</td>
              <td>Yde 494 Road</td>
              <td>https://unsplash.com/photos/-uHVRvDr7pg</td>
              <td>SDF means Social Democratic Front</td>
              <td>
                <button className="btn btn-edit">Edit</button>
                <button className="btn btn-delete">Delete</button>
                <button className="btn btn-view">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </ContentBody>
    </Container>
  );
};

export default ListParties;
