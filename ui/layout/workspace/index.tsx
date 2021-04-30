import Header from '@ui/components/header';
import { ConfigProvider, Layout } from 'antd';
import zh_CN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
import React from 'react';

class Container extends React.Component {
  state = {};

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <ConfigProvider locale={zh_CN}>
        <Layout
          style={{
            height: '100%',
          }}
        >
          <Header></Header>
          <Layout>{this.props.children}</Layout>
        </Layout>
      </ConfigProvider>
    );
  }
}

export default Container;
