import Header from "../Header/Header";
import "./Detail.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { Carousel, Col, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [product, setProducts] = useState();
  const [loading, setLoading] = useState(false);

  const [isError, setIsError] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    if (id) getProduct(id);
  }, [id]);

  const getProduct = async (id) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      console.log(response.data);
      setProducts(response.data);
      setLoading(true);
    } catch (error) {
      setIsError(error.message);
    }
  };
  console.log(product, "product");
  return (
    <>
      <Header />
      {loading ? (
        product ? (
          <div className="productMain">
            <Row>
              <Col md={7} sm={12} className="image-parent-height">
                <Carousel>
                  {product.images.map((url, index) => (
                    <Carousel.Item key={index}>
                      <div
                        key={index}
                        className="images"
                        style={{
                          backgroundImage: `url(${url})`,
                        }}
                      ></div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
              <Col md={5} sm={12} className="detail-card">
                <div className="detail-container">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h4 className="captilize">{product.title.slice(0, 10)} </h4>{" "}
                  </div>
                  <div className="divider"></div>
                  <h5 className="captilize">Description</h5>
                  <p style={{ marginBottom: "20px" }}>{product.description}</p>

                  <h5 className="captilize m-10">Variations</h5>
                  <div className="varition">
                    <div>
                      <p style={{ marginBottom: "2px", fontSize: "17px" }}>
                        Total options:{" "}
                        <span style={{ fontWeight: "500" }}>
                          {product.stock} Stock
                        </span>{" "}
                        ;{" "}
                        <span style={{ fontWeight: "500" }}>
                          {product.price} Price{" "}
                        </span>{" "}
                      </p>
                      <p style={{ marginBottom: "10px", fontSize: "17px" }}>
                        Brand:{" "}
                        <span style={{ fontWeight: "500" }}>
                          {product.brand}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          <h2 style={{ textAlign: "center" }}>{isError}</h2>
        )
      ) : (
        <Loader />
      )}
      <Footer />
    </>
  );
};
export default Detail;
