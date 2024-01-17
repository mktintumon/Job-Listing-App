import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function Landing() {
    const navigateTo = useNavigate();
  return (
    <MDBContainer fluid className="p-4">
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
          style={{ marginTop: "6rem" }}
        >
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            The best job portal <br />
            <span className="text-primary">for your Carrer</span>
          </h1>

          <p
            className="px-3"
            style={{
              color: "hsl(217, 10%, 50.8%)",
              width: "40rem",
              textAlign: "justify",
              fontSize: "1.2rem",
            }}
          >
            Welcome to our innovative job portal, a dynamic online platform that
            seamlessly connects companies with talented individuals seeking
            career opportunities. At the heart of our website is a comprehensive
            job posting system that empowers organizations to showcase their
            openings, providing detailed insights into company culture, job
            requirements, and growth opportunities.
          </p>
        </MDBCol>

        <MDBCol md="6" style={{ marginTop: "7rem" }}>
          <MDBCard className="my-5" style={{ margin: "2rem", height: "18rem" }}>
            <MDBCardBody className="p-5">
              <h1 style={{ marginBottom: "3rem", textAlign: "center" }}>
                Get Hired or
                <br /> Hire people for free!
              </h1>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5rem",
                }}
              >
                <MDBBtn className="w-15 mb-5" size="md" onClick={()=>navigateTo("/employee/feed")}>
                  Hire Talent
                </MDBBtn>
                <MDBBtn className="w-10 mb-5" size="md" onClick={()=>navigateTo("/employer/create")}>
                  Post JOB
                </MDBBtn>
              </div>

              <div className="text-center"></div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Landing;
