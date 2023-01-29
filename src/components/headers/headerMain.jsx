import React from 'react'
import { Col, Row, Button } from 'antd'
export const HeaderMain = () => {
  return (
    <>
      <Row>
        <Col
          span={24}
          style={{
          
            height: '50px',
            borderRadius:'10px',
          }}
        >
          <Row>
            <Col span={6}>
              <p
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginLeft: '15%',
                }}
              >
                GRUPO TANERI
              </p>
            </Col>
            <Col span={2}></Col>
            <Col span={3}>
              <p
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                Inicio
              </p>
            </Col>
            <Col span={3}>
              <p
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                Quienes somos
              </p>
            </Col>
            <Col span={3}>
              <p
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                Trabajo
              </p>
            </Col>
            <Col span={3}>
              <p
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                Equipo
              </p>
            </Col>
            <Col>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: '5%',
                }}
              >
                <Button type="default" size={20}>
                  Agenda aqui
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}
