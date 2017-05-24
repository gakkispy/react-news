import React from 'react';
import {Row, Col} from 'antd';
import MobileFooter from './mobile_footer';
import MobileHeader from './mobile_header';
import PCNewsImageBlock from './pc_news_image_block';
import CommonComment from './common_comments';
export default class MobileNewsDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      newsItem: ''
    };
  };

  componentDidMount() {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
      this.setState({newsItem: json});
      document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
    })
	};

  createMarkup() {
    return {__html: this.state.newsItem.pagecontent};
  }

  render() {

    return (
      <div id="mobileDetailsContainer">
        <MobileHeader></MobileHeader>
        <div className="ucmobileList">
          <Row>
            
            <Col span={24} className="container">
              <div className="articleContainer" dangerouslySetInnerHTML = {this.createMarkup()}></div>
               <CommonComment uniquekey={this.props.params.uniquekey} />
            </Col>
          </Row>
        </div>
        <MobileFooter></MobileFooter>
      </div>
    );
  }
}