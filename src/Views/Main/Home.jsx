import React, { useState } from "react";
import "../../assets/css/main.css";
import { HeaderMain } from "../../components/headers/headerMain";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Button, Col, Row } from "antd";
import arrowDrop from "../../assets/animations/arrowDrop.json";
import Lottie from "lottie-react";
import bg1 from "../../assets/img/aeria1.jpeg";
import bg2 from "../../assets/img/aeria4.jpeg";
import image1 from "../../assets/img/aeria2.jpg";
import image2 from "../../assets/img/aeria5.jpeg";
import image3 from "../../assets/img/aeria6.jpg";
import image4 from "../../assets/img/aeria7.jpg";
import image5 from "../../assets/img/aeria8.jpg";

import { useParallax, Parallax } from "react-scroll-parallax";
import {
  GiDeliveryDrone,
  GiHealingShield,
  GiSecurityGate,
  GiRingingAlarm,
  GiPoliceCar,
  GiPhotoCamera,
} from "react-icons/gi";
import {FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa"

export const Home = () => {
  const { ref } = useParallax({ speed: 10 });

  const BodyUpper = () => {
    return (
      <Row>
        <Col
          span={24}
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",

            opacity: 0.32,
            height: "100vh",
          }}
        >
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "15%",
              flexDirection: "column",
              marginRight: "25%",
              marginLeft: "25%",
            }}
          >
            <h1>Bienvenidos a Grupo Taneri</h1>
            <span>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis necessitatibus est doloribus? Perferendis repellendus
              suscipit, esse quas, maxime rem asperiores aperiam ut ex quos
              similique non doloribus placeat nemo debitis!
            </span>
            <div
              style={{
                marginTop: "30%",
              }}
            >
              <Button
                type="ghost"
                style={{
                  width: 200,
                  height: "5vh",
                  borderRadius: "6px",
                  borderWidth: "2px",
                  borderColor: "black",
                }}
              >
                Descubranos
              </Button>
              <div
                style={{
                  marginTop: "20%",
                  width: 200,
                  height: "10vh",
                }}
              >
                <Lottie animationData={arrowDrop} loop={true} autoPlay />
              </div>
            </div>
          </Col>
        </Col>
      </Row>
    );
  };

  const AboutThem = () => {
    return (
      <Row>
        <Col
          span={24}
          style={{
            height: "60vh",
            display: "flex",
            justifyContent: "space-between",
            direction: "row",
            alignItems: "center",
            paddingLeft: "2%",
            paddingRight: "2%",
            backgroundColor: "white",
            zIndex: 200,
          }}
        >
          <Col span={10}>
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cum
              corporis repellendus sint distinctio magnam sapiente sed numquam
              quae porro cumque tenetur quos, saepe ipsum temporibus alias
              maxime voluptatum rerum!
            </p>
          </Col>
          <Col
            span={10}
            style={{
              backgroundImage: `url(${image1})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "90%",
            }}
          />
        </Col>
      </Row>
    );
  };

  const TheyWorks = () => {
    return (
      <Parallax translateY={["-200px", "200px"]}>
        <Row>
          <Col
            span={24}
            style={{
              height: "100vh",
              backgroundImage: `url(${bg2})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              opacity: 0.5,
            }}
            ref={ref}
          >
            <Col
              span={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Col
                span={6}
                style={{
                  width: "100%",
                  marginRight: "8%",
                  marginBottom: "10%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "white",
                    borderRadius: "4px",
                    borderWidth: "1px solid white",
                    transform: "rotate(-45deg)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      transform: "rotate(45deg)",
                      width: "100%",
                      left: 3,
                      bottom: -20,
                    }}
                  >
                    <GiDeliveryDrone size={50} color={"green"} opacity={1} />
                  </div>
                </div>
              </Col>
              <Col
                span={6}
                style={{
                  width: "100%",
                  marginRight: "10%",
                  marginBottom: "10%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "white",
                    borderRadius: "4px",
                    borderWidth: "1px solid white",
                    transform: "rotate(-45deg)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      transform: "rotate(45deg)",
                      width: "100%",
                      left: 3,
                      bottom: -24,
                    }}
                  >
                    <GiHealingShield size={50} color={"gray"} opacity={1} />
                  </div>
                </div>
              </Col>
              <Col
                span={6}
                style={{
                  width: "100%",
                  marginRight: "10%",
                  marginBottom: "10%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "white",
                    borderRadius: "4px",
                    borderWidth: "1px solid white",
                    transform: "rotate(-45deg)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      transform: "rotate(45deg)",
                      width: "100%",
                      left: 3,
                      bottom: -20,
                    }}
                  >
                    <GiPoliceCar size={50} color={"blue"} opacity={1} />
                  </div>
                </div>
              </Col>
              <Col
                span={6}
                style={{
                  width: "100%",
                  marginRight: "10%",
                  marginBottom: "10%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "white",
                    borderRadius: "4px",
                    borderWidth: "1px solid white",
                    transform: "rotate(-45deg)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      transform: "rotate(45deg)",
                      width: "100%",
                      left: 3,
                      bottom: -29,
                    }}
                  >
                    <GiSecurityGate size={50} color={"red"} opacity={1} />
                  </div>
                </div>
              </Col>
              <Col
                span={6}
                style={{
                  width: "100%",
                  marginRight: "10%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "white",
                    borderRadius: "4px",
                    borderWidth: "1px solid white",
                    transform: "rotate(-45deg)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      transform: "rotate(45deg)",
                      width: "100%",
                      left: 3,
                      bottom: -20,
                    }}
                  >
                    <GiRingingAlarm size={50} color={"red"} opacity={1} />
                  </div>
                </div>
              </Col>
              <Col
                span={6}
                style={{
                  width: "100%",
                  marginRight: "10%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "white",
                    borderRadius: "4px",
                    borderWidth: "1px solid white",
                    transform: "rotate(-45deg)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      transform: "rotate(45deg)",
                      width: "100%",
                      left: 3,
                      bottom: -20,
                    }}
                  >
                    <GiPhotoCamera size={50} color={"gold"} opacity={1} />
                  </div>
                </div>
              </Col>
            </Col>
            <Col span={12}>
              <Col span={12}>
                <h2>Lorem ipsum dolor sit</h2>
                <div style={{ marginTop: "5%" }}>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores tempora ad excepturi eum dolor et nihil vitae quae
                    minus quo quaerat, aspernatur velit iusto sequi ipsa, itaque
                    ex sapiente incidunt!
                  </p>
                </div>
                <div style={{ marginTop: "5%" }}>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores tempora ad excepturi eum dolor et nihil vitae quae
                    minus quo quaerat, aspernatur velit iusto sequi ipsa, itaque
                    ex sapiente incidunt!
                  </p>
                </div>
                <div style={{ marginTop: "5%" }}>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores tempora ad excepturi eum dolor et nihil vitae quae
                    minus quo quaerat, aspernatur velit iusto sequi ipsa, itaque
                    ex sapiente incidunt!
                  </p>
                </div>
                <div style={{ marginTop: "5%" }}>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores tempora ad excepturi eum dolor et nihil vitae quae
                    minus quo quaerat, aspernatur velit iusto sequi ipsa, itaque
                    ex sapiente incidunt!
                  </p>
                </div>
                <div style={{ marginTop: "5%" }}>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores tempora ad excepturi eum dolor et nihil vitae quae
                    minus quo quaerat, aspernatur velit iusto sequi ipsa, itaque
                    ex sapiente incidunt!
                  </p>
                </div>
              </Col>
            </Col>
          </Col>
        </Row>
      </Parallax>
    );
  };

  const TeamWork = () => {
    return (
      <Row>
        <Col
          span={24}
          style={{
            backgroundColor: "white",
            zIndex: 10,
            height: "100vh",
          }}
        >
          <Col
            span={24}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "3%",
              marginLeft: "3%",
              marginRight: "3%",
            }}
          >
            <div>
              <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
            </div>
            <div
              style={{
                width: "40%",
                marginTop: 10,
                textAlign: "center",
              }}
            >
              <hr />
            </div>
            <Col span={24}>
              <div>
                <p> Assumenda reprehenderit sint fugit nesciunt ratione. </p>
              </div>
            </Col>
            <Col
              span={24}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Col
                span={6}
                style={{
                  marginTop: "8%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div>
                  <img
                    src={image2}
                    alt={"image 2"}
                    style={{
                      width: 350,
                      height: 350,
                    }}
                  />
                </div>
                <div>
                  <h2>Lorem ipsum goflen</h2>
                </div>
                <div> 
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dignissimos necessitatibus expedita voluptates porro quos, reiciendis quia tenetur recusandae enim perspiciatis ullam nisi optio! Praesentium voluptatum perferendis provident iusto pariatur!</p>
                </div>
              </Col>
              <Col
                span={6}
                style={{
                  marginTop: "8%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div>
                  <img
                    src={image3}
                    alt={"image 3"}
                    style={{
                      width: 350,
                      height: 350,
                    }}
                  />
                </div>
                <div>
                  <h2>Lorem ipsum goflen</h2>
                </div>
                <div> 
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dignissimos necessitatibus expedita voluptates porro quos, reiciendis quia tenetur recusandae enim perspiciatis ullam nisi optio! Praesentium voluptatum perferendis provident iusto pariatur!</p>
                </div>
              </Col>
              <Col
                span={6}
                style={{
                  marginTop: "8%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div>
                  <img
                    src={image4}
                    alt={"image 4"}
                    style={{
                      width: 350,
                      height: 350,
                    }}
                  />
                </div>
                <div>
                  <h2>Lorem ipsum goflen</h2>
                </div>
                <div> 
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dignissimos necessitatibus expedita voluptates porro quos, reiciendis quia tenetur recusandae enim perspiciatis ullam nisi optio! Praesentium voluptatum perferendis provident iusto pariatur!</p>
                </div>
              </Col>
            </Col>
          </Col>
        </Col>
      </Row>
    );
  };

  const ContactUs = () =>{
    return(
      <Parallax translateY={["-200px", "300px"]}>
        <Row>
          <Col
            span={24}
            style={{
              height: "60vh",
              backgroundImage: `url(${bg2})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              opacity: 0.5,
              paddingTop:'15%',
            }}
            ref={ref}
          >
            <Col span={24} style={{
              display:'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft:'5%',
              marginRight:'5%',
            }}>
              <h2>Sequi unde magni quidem aut reiciendis aperiam expedita.</h2>
            </Col>
            <Col span={24} style={{
              display:'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft:'5%',
              marginRight:'5%',
            }}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, qui ea corporis porro provident ipsa quaerat nulla voluptas nobis! Sint, nisi! Similique doloremque accusamus reprehenderit eius a in doloribus excepturi.</p>
            </Col>
            <Col span={24} style={{
              display:'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft:'5%',
              marginRight:'5%',
            }}>
              <Button> Agenda una visita </Button>
            </Col>

        </Col>
      </Row>
        </Parallax>
    )
  }
  const Footer = () =>{
    return(
      <Row>
        <Col span={24} style={{
          height:'35vh',
          backgroundColor:'aliceblue',
          marginTop:'3%',
        }}>
          <Col span={24} style={{
             display:'flex',
             justifyContent: 'center',
             alignItems: 'center',
             marginTop:'3%',
          }}>
            <h2>Nuestras redes sociales</h2>
          </Col>
          <Col span={24} style={{
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:'2%',
            marginLeft:'10%',
          }}>

          <Col span={3}>
            <FaFacebookSquare size={30} color={'blue'}/>
          </Col>
          <Col span={3}>
            <FaTwitter size={30} color={'lightBlue'}/>
          </Col>
          <Col span={3}>
            <FaYoutube size={30} color={'red'}/>
          </Col>
          <Col span={3}>
            <FaInstagram size={30} color={'purple'}/>
          </Col>
          <Col span={3}>
            <FaLinkedin size={30} color={'blue'}/>
          </Col>

          </Col>
          <Col span={24} style={{
            display:'flex',
            position:'relative',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center',
           bottom:-70,

          }}>
            <span>
            ©  <a href="https://www.recenps.cl">Recenps T.I</a> |   {new Date().getFullYear()}
            </span>


          </Col>

        </Col>
      </Row>
    )
  }

  return (
    <>
      <HeaderMain />
      <BodyUpper />
      <AboutThem />
      <TheyWorks />
      <TeamWork />
      <ContactUs/>
      <Footer/>
      <FloatingWhatsApp
        phoneNumber="+56933122600"
        accountName="Rafael Goméz"
        onClick={() => {}}
        statusMessage="responde aproximadamente en 2 minutos"
        chatMessage="Muchas gracias por comunicarse con Grupo Taneri , ¿En que te podemos ayudar?"
        placeHolder="Escriba aqui..."
        messageDelay={2}
        allowClickAway={true}
        allowEsc={true}
      />
    </>
  );
};
