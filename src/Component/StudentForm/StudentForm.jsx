import React from 'react'
import Button from 'react-bootstrap/Button';
import { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Form} from 'react-bootstrap';
import axios from "axios";

export default function StudentForm() {
    const [formData, setFormData] = useState (
     {
        firstname:"",
        lastname: "",
        datebirth: ""
    }
    )

    async function handleSubmit (e) {
       e.preventDefault(); 
       await axios.post ("http://localhost:3001/api/students", formData)
       .catch(error => {
        console.log (error.response.data)
        console.log ("Axios Error")
    });
    }

    async function handleChange (e) {
        setFormData ({...formData, [e.target.name]: e.target.value})
    }
    return (  
        <>
            <Form onSubmit={handleSubmit}>         
                <Form.Control 
                    type="text" 
                    placeholder="first name" 
                    name="firstname"
                    required={true}
                    onChange={handleChange}
                />
                <Form.Control 
                    type="text" 
                    placeholder="last name" 
                    name="familyname"
                    required={true}
                    onChange={handleChange}
                />
                <Form.Control 
                    type="text" 
                    placeholder="Date Birth" 
                    name="datebirth"
                    onChange={handleChange}
                />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>    
        </>       
    )
}
