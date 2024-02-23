// import React from 'react';

// const Signin = () => {
//   return (
//     <div>
//       <h1>Sign In Page</h1>
//       {/* Add your content here */}
//     </div>
//   );
// };

// export default Signin;
 


import React, { useState, useEffect } from 'react';
import { Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';
// import LoginService from '../service/LoginService';

// import Header from "../Components/Header"
// import Footer from "../Components/Footer"
// import "../Components/Footer.css"

// Import your image
//import image from '../../public/images/Login.png';

const Signin = () => {
  const [roleId, setRoleId] = useState(null); // State to store roleId

  useEffect(() => {
    // Fetch roleId from URL query parameter if present
    const params = new URLSearchParams(window.location.search);
    const roleIdParam = params.get('roleId');
    if (roleIdParam) {
      setRoleId(roleIdParam);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

  };

  return (
    <>
    {/* <Header></Header> */}
    <Container className="d-flex justify-content-center mt-5">
      {/* Image */}
      <img src="../images/Login.png" alt="Left side " style={{ width: 400, marginRight: 20 }} />

      {/* Form */}
      <div style={{ border: "1px solid #ced4da", padding: 20, borderRadius: 5 }}>
        <h3 className="mb-4">Login</h3>
        {/* Display roleId if present */}
        {roleId && (
          <div className="mb-4">
            <strong>Role ID:</strong> {roleId}
          </div>
        )}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="username">Username:</Label>
            {/* <Input type="username" id="username"/> */}
            <Input type="text" id="username" placeholder="Enter the UserName" pattern="[A-Za-z ]+" title="Only Alphabet input is allowed" required />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password:</Label>
            {/* <Input type="password" id="password"/> */}

            <Input 
              type="password" 
              id="password" 
              placeholder="Enter the Password"
              pattern="(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9].*[0-9])(?=.*[a-z]).{8,}" 
              title="Password must contain one uppercase letter, one symbol, minimum two numbers, one lowercase letter, and be at least 8 characters long"
              required 
            />
          </FormGroup>    
          <Button type="submit" color="primary">Login</Button>
        </Form>
      </div>
    </Container>
  
    </>
  );
};

export default Signin;