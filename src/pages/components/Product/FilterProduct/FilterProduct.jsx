import React from 'react'
import { useSelector } from 'react-redux'
import './filter-product.css'
import { Rate } from 'antd'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import Paging from '../../Paging/Paging'
const FilterProduct = () => {
    const filterProduct = useSelector(state => state.product.filter)

    return (
        <div className='filter-product-container'>
            <div className='filter-product'>
                {
                    filterProduct?.map((key, index) => (
                        <MDBCol key={index} md="12" lg="3" className="mb-4 mb-lg-0 " >
                            <MDBCard className="container-card">
                                <Link to={`/product/${key.id}`}>
                                    <MDBCardImage
                                        src={key.thumbnail}
                                        position="top"
                                        alt="giày"
                                    />
                                    <MDBCardBody style={{ padding: "0 5px" }}>
                                        <div className="d-flex justify-content-between" style={{ height: "25px" }}>
                                            <div className="small">
                                                <p className="text-muted">
                                                    {key.category}
                                                </p>
                                            </div>
                                            <p className="small text-danger">
                                                <s>{key.cost.toLocaleString()}đ</s>
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 product-name">{key.name}</p>
                                            <p className="mb-0 text-danger">{key.price.toLocaleString()}đ</p>
                                        </div>
                                    </MDBCardBody>
                                </Link>
                            </MDBCard>
                        </MDBCol>
                    ))
                }
            </div>
            <div>
                <Paging />
            </div>
        </div>
    )
}

export default FilterProduct