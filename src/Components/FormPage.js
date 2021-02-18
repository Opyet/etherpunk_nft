import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const FormPage = () => {
return (
<MDBContainer style={{padding:"50px",width:"800px",margin:"10rem",alignContent:"center", backgroundColor:"white", borderRadius:"40px"}}>
  <MDBRow>
    <MDBCol md="6">
      <form style={{width:"400px",marginLeft:"8rem"}}>
        <p className="h5 text-center mb-4">Enter the details about Entity</p>
        <div className="grey-text">
          <MDBInput label="Price" icon="envelope" group type="text" 
             />
          <MDBInput label="Increment" icon="lock" group type="text"  />
          <MDBInput label="Add File" icon="lock" group type="file"  />
        </div>
        <div className="text-center">
          <MDBBtn>Add Product</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default FormPage;