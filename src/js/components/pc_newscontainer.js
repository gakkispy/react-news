import React from 'react';
import { Row, Col } from 'antd';
import { Tabs, Carousel } from 'antd';
const TabPane = Tabs.TabPane;
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
export default class PCNewsContainer extends React.Component {
  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    };

    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className="container">
            <div className="leftContainer">
              <div className="carousel">
                <Carousel {...settings}>
                  <div><img src="./src/images/carousel_1.jpg" alt=""/></div>
                  <div><img src="./src/images/carousel_2.jpg" alt=""/></div>
                  <div><img src="./src/images/carousel_3.jpg" alt=""/></div>
                  <div><img src="./src/images/carousel_4.jpg" alt=""/></div>
                </Carousel>
              </div>
              <PCNewsImageBlock count={6} type="guoji" width="400px" cardTitle="&#x56FD;&#x9645;&#x65B0;&#x95FB;" imageWidth="112px"/>
            </div>
            <Tabs className="tabs_news">
              <TabPane tab="&#x5934;&#x6761;&#x65B0;&#x95FB;" key="1">
                <PCNewsBlock count={22} type="top" width="100%" bordered="false"/>
              </TabPane>
              <TabPane tab="&#x56FD;&#x9645;" key="2">
								<PCNewsBlock count={22} type="guoji" width="100%" bordered="false"/>
							</TabPane>
            </Tabs>
            <div>
							<PCNewsImageBlock count={8} type="guonei" width="100%" cardTitle="&#x56FD;&#x5185;&#x65B0;&#x95FB;" imageWidth="132px"/>
							<PCNewsImageBlock count={16} type="yule" width="100%" cardTitle="&#x5A31;&#x4E50;&#x65B0;&#x95FB;" imageWidth="132px"/>
						</div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}