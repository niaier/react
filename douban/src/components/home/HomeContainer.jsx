import React from 'react'
import { Row, Col } from 'antd';
import { Typography, Space } from 'antd';
const { Title, Text, /*Link */} = Typography;
export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Row>
        <Col span={12} offset={6}>
          <div >
            <Title level={2} style={{
              textAlign: "center"
            }}>本项目说明</Title>
            <hr />
            <br />
            <Space direction="vertical">
              <Text>
                <p>
                本项目是一个电影资讯仿制网站，利用豆瓣开放API获取实时的资讯消息
                </p>
                <p>利用的技术与框架：
                <br/>前端框架：React
                <br/>组件库：AntD
                </p>
                <p></p>
                <p>更新说明：
                <br/>由于豆瓣api端口已禁止访问，故现在本项目使用假数据模拟
                <br/>跳转页面功能仍存在，但由于无法获取新数据，因此分页跳转只更新url地址
                </p>
              </Text>
            </Space>
          </div>
        </Col>
      </Row>
    )
  }
}