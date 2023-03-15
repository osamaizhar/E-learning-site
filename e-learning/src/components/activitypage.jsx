import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";

function ActivityPage() {
  return (
    <div>
      <h1 className='table_head'>Activity Page</h1>
      <Table striped bordered hover variant="white">
      <thead>
        <tr>
          <th>#ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Type Of Exercise</th>
          <th>Duration</th>
          <th>Date</th>
          <th>Actions</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td> 
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
      <Button variant="primary" type="submit">
            Show
          </Button>
          <Button variant="primary" type="submit">
            Edit 
          </Button>
          <Button variant="primary" type="submit">
            Delete
          </Button>
    </Table>
    </div>
  
  );
}

export default ActivityPage;