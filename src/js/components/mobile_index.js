import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Tabs, Carousel} from 'antd';
import MobileList from './mobile_list';
const TabPane = Tabs.TabPane;
export default class MobileIndex extends React.Component {
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
        <MobileHeader/>
        <Tabs>
          <TabPane tab="头条" key="1">
						<div class="carousel">
							<Carousel {...settings}>
								<div><img src="./src/images/carousel_1.jpg"/></div>
								<div><img src="./src/images/carousel_2.jpg"/></div>
								<div><img src="./src/images/carousel_3.jpg"/></div>
								<div><img src="./src/images/carousel_4.jpg"/></div>
							</Carousel>
						</div>
						<MobileList count={20} type="top"/>
					</TabPane>
          <TabPane key="2" tab="社会">
            <MobileList count={20} type="shehui"/>
          </TabPane>
          <TabPane key="3" tab="国内">
            <MobileList count={20} type="guonei"/>
          </TabPane>
          <TabPane key="4" tab="国际">
            <MobileList count={20} type="guoji"/>
          </TabPane>
          <TabPane key="5" tab="娱乐">
            <MobileList count={20} type="yule"/>
          </TabPane>
        </Tabs>
        <MobileFooter/>
      </div>
    )
  }
}