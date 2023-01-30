import React from 'react'
import { useState, useEffect } from 'react'
import StudentForm from '../../Component/StudentForm/StudentForm'
import { Container, Row, Col, Form} from 'react-bootstrap';
import axios from "axios"

export default function StudentPage() {
  const [students, setStudents] = useState();

  //Get Students 
  useEffect(() => {
    const getStudent = async() => {
      try {
        const {data} = await axios.get ("http://localhost:3001/api/students")     
        setStudents (data)
      }
      catch (error) {
        console.log (error.message.data)
      }
    }  
    getStudent()    
  },[students])


  return (
    <>
      <h1>Student Page</h1>
      <StudentForm /><br />
      <Container>
        
        <Row className="list-header">
          <Col>First Name</Col>  
          <Col>Last Name</Col>     
          <Col>Birth Date</Col>            
        </Row>    
      {
        students?.map ((student, idx)=> (
          <Row key={idx} style={{backgroundColor:"#dfe2e8", borderBottom:"1px solid #c9ccd1"}}>
            <Col>{student?.firstname}</Col>  
            <Col>{student?.familyname}</Col>     
            <Col>{student?.datebirth}</Col>            
          </Row>        
        ))  
      }
      </Container>
    </>
  )
}
