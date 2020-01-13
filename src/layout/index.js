import React from 'react';
import { connect } from 'react-redux';
import { Layout, Breadcrumb } from 'antd';
import { ToolBar, SideBar } from 'components';
// import styles from './index.css';

const { Content } = Layout;

const BasicLayout = ({
  children,
  currentDatabase,
  currentCollection
}) => {

  return (
    <Layout style={{ height: '100%' }}>
      <ToolBar />
      <Layout >
        <SideBar />
        <Layout style={{ position: 'relative', marginLeft: 200, padding: '0 24px 24px', overflow: 'hidden' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {
              currentDatabase !== 'default' ?
                <React.Fragment>
                  <Breadcrumb.Item>{currentDatabase}</Breadcrumb.Item>
                  <Breadcrumb.Item>{currentCollection}</Breadcrumb.Item>
                </React.Fragment>
                :
                null
            }
          </Breadcrumb>
          <Content
            style={{
              position: 'absolute',
              top: 52,
              background: '#fff',
              padding: 24,
              margin: 0,
              width: 'calc(100% - 48px)',
              height: 'calc(100% - 76px)',
              overflow: 'auto'
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

/*const mapStateToProps = ({ layout: { databases, currentDatabase, currentCollection } }) => ({
  databases,
  currentDatabase,
  currentCollection
});*/

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  updateDatabases: (databases) => dispatch({
    type: 'layout/updateDatabases',
    payload: {
      databases
    }
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicLayout);
