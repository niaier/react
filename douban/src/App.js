import React from 'react';
// import logo from './logo.svg';

// 导入 路由相关的组件页面
import HomeContainer from './components/home/HomeContainer.jsx'
import MovieContainer from './components/movie/MovieContainer.jsx'
import AboutContainer from './components/about/AboutContainer.jsx'
// 导入路由组件
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


// 导入需要的 Ant Design 组件

// import './App.css';
import './App.scss';
import { Layout, Menu,} from 'antd';

const { Header, Content, Footer } = Layout;




class App extends React.Component {
  render() {
    return (<Router>
      <Layout className="layout" style={{ height: '100%' }}>

        {/* Header 头部区域 */}
        <Header>
          <div 
          />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="home">
              <NavLink to="/home">首页</NavLink>
            </Menu.Item>
            <Menu.Item key="movie">
              <NavLink to="/movie/in_theaters/1">电影</NavLink>
            </Menu.Item>
            <Menu.Item key="about">
              <NavLink to="/about">关于</NavLink>
            </Menu.Item>
          </Menu>
        </Header>

        {/* 中间的 内容区域 */}
        <Content style={{ backgroundColor: '#fff', flex: 1 }}>
          <Route path="/home" component={HomeContainer}></Route>
          <Route path="/movie" component={MovieContainer}></Route>
          <Route path="/about" component={AboutContainer}></Route>
        </Content>

        {/* Footer 底部区域 */}
        <Footer style={{ textAlign: 'center' }}>
          react项目 ©2020 
        </Footer>


      </Layout>
    </Router>);
  }
}

export default App;

