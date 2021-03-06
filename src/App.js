import 'antd/dist/antd.css';
import './App.css';
import { Layout } from 'antd';
import AppHeader from './components/common/header';
import VideoPlayer from 'react-video-js-player';

import { Table, Tag, Space } from 'antd';

import { Upload, message } from 'antd';
import {InboxOutlined} from '@ant-design/icons';
import { Button } from 'antd';

const { Header, Content, Footer } = Layout;
 
const Dragger = Upload.Dragger;

const columns = [
  {
    title: 'Time Stamp',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  
  {
    title: 'Violence Detected',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  }
];

const data = [
  {
    key: '1',
    name: '0:10',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['YES', 'MAYBE'],
  },
  {
    key: '2',
    name: '0:45',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['MAYBE'],
  },
  {
    key: '3',
    name: '1:03',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['YES'],
  },
];

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

  // const VideoJs = () => {
  //   const videosrc = vid;
  //   const poster = "";
  //   return (

  //   );
  // }

function App() {
  return (
    <Layout className="mainLayout">
    <Header>
      <AppHeader/> 
    </Header>
    <Content>
      

    <div className="site-layout-content" style={{paddingTop: 200, paddingLeft: 200, paddingRight: 200 }}>
    
        <h1 className='someText'>Upload Video to check for violence</h1>
        <p className='paraText'>The method consists of extracting a set of frames belonging to the video, sending
          them to a pretrained network , obtaining the output of one of its final layers and from
          these outputs training another network architecture with a type of special neurons
          called LSTM. These neurons have memory and are able to analyze the temporal
          information of the video, if at any time they detect violence, it will be classified as a
          violent video.</p>
      
        <Dragger {...props} style={{padding: 50}}>
          <p className="ant-upload-drag-icon">
          <InboxOutlined style={{color: '#1890ff', fontSize:75 }}/>
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
        </Dragger>
        <div className="merkoCenterKaro">
          <div className="ekaurclass">
        <Button type="primary" style={{alignContent:'center'}}>Analyse</Button>
          </div>
        </div>
      </div>
    </Content>
    <Table columns={columns} dataSource={data} style={{paddingLeft: 200, paddingRight: 200}} />
    {/* <div style={{ marginTop: 16, height: 180 }}/> */}

    <Footer style={{ textAlign: 'center' }}>Violence Detection using Convolutional Neural Networks and LSTM architecture @ProjectMinor by Aviral(UE183021), Keysang(UE183043), Manan(UE183049)</Footer>
  </Layout>
  );
}

export default App;
