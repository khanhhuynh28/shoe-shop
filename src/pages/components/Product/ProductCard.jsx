import { MDBCard, MDBCardBody, MDBCardImage, MDBCol } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default function ProductCard(props) {

  return (
    <>
      <MDBCol md="12" lg="3" className="mb-4 mb-lg-0" >
        <MDBCard className="container-card">
          <Link to={`/product/${props.id}`}>
            <MDBCardImage
              src={props.thumbnail}
              position="top"
              alt="giày"
            />
            <MDBCardBody style={{ padding: "0 5px" }}>

              <div className="d-flex justify-content-between" style={{ height: "25px" }}>
                <p className="small">
                  <a href="#!" className="text-muted">
                    {props.category}
                  </a>
                </p>
                <p className="small text-danger">
                  <s>{props.cost.toLocaleString()}đ</s>
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-0">{props.name}</p>
                <p className="mb-0 text-danger">{props.price.toLocaleString()}đ</p>
              </div>
            </MDBCardBody>
          </Link>
        </MDBCard>
      </MDBCol>

    </>
  );
}


