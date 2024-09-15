import Table from 'react-bootstrap/Table';
import LineTable from '../LineTable';
const TableCustom = ({equipaments}) => {

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>id</th>
          <th>equipmentModelId</th>
        </tr>
      </thead>
      <tbody>
        {equipaments.map((item,key)=>{
          return(
            <LineTable key={key} id={item.id} name={item.name} modality_id={item.equipmentModelId}/>
          )
        })}
      </tbody>
    </Table>
  );
}

export default TableCustom;