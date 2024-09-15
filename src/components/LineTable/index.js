import { EquipamentContext } from '../../Hooks/EquipementContext';
import { useContext } from "react";

const LineTable = ({id,modality_id,name})=>{

    const { setEquipamentSelected,findDataEquipament,setCoodinateSelected } = useContext(EquipamentContext);
    const data = findDataEquipament({
        id:id,
        equipamentID:modality_id
      })

      console.log({
        data
      })
    return(
        <>
        <tr>
          <td>{data.Model.name} - { name }</td>
          <td onClick={()=>{
            setEquipamentSelected({
            id:id,
            equipamentID:modality_id
          })
          setCoodinateSelected([data.positionHistory.positions[0].lat,data.positionHistory.positions[0].lon])
          }}>{id}</td>
          <td>{modality_id}</td>
        </tr>
        </>
    )
}

export default LineTable;