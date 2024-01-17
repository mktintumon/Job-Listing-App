import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBadge,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Modal({ profile, desc, exp, techs }) {
  return (
    <MDBCard
      alignment="center"
      style={{ width: "25rem", height: "28rem", marginBottom: "2rem" }}
    >
      <MDBCardBody>
        <MDBCardTitle>{profile}</MDBCardTitle>
        <hr></hr>
        <MDBCardText>{desc}</MDBCardText>
        <MDBCardText>
          <p style={{ color: "blue" }}>Tech required</p>
          {techs.map((tech) => (
            <MDBBadge
              className="mx-2"
              color="secondary"
              light
              key={Math.random() * 1000}
            >
              {tech}
            </MDBBadge>
          ))}
        </MDBCardText>
        <p style={{ marginBottom: "1rem", color: "red" }}>
          Experience : {exp}+ years
        </p>
        <MDBBtn>Apply</MDBBtn>
      </MDBCardBody>
      <MDBCardFooter className="text-muted">2 days ago</MDBCardFooter>
    </MDBCard>
  );
}
