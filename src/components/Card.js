import React, {useState} from "react";
import EditTask from "../modal/EditTask"

import { Card, CardText, CardBody, CardHeader, Button } from "reactstrap";
const CardTask = ({ taskObj, index, deleteTask, updateListArray}) => {
    const [modal,setModal] = useState(false);
    const toggle = () =>{
        setModal(!modal)
    }
    const handleDelete = () =>{
        deleteTask(index);
    }
    const updateTask = (obj) =>{
        updateListArray(obj, index)
    }
  return (
    <div>
      <Card className="card">
        <CardBody>
          <CardHeader style={{ backgroundColor: "#58ACFA"} }tag="h5">{taskObj.Name}</CardHeader>
          <CardText>{taskObj.Description}</CardText>
          <Button style={{ marginRight: "5px" }} onClick = {()=>{setModal(true)}}>Edit</Button>
          <Button onClick = {handleDelete}>Delete</Button>
        </CardBody>
      </Card>
      <EditTask modal={modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
    </div>
  );
};
export default CardTask;
