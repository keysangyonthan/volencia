import { Upload, message } from 'antd';
import {InboxOutlined} from '@ant-design/icons';
import { Button } from 'antd';

const Dragger = Upload.Dragger;

const props = {
    name: 'file',
    multiple: true,
    showUploadList: false,
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

<div className="site-layout-content">
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
          <InboxOutlined style={{color: '#1890ff', fontSize:75 }}/>
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
        </Dragger>
        <div className="merkoCenterKaro" >
        <Button type="primary">Analyse</Button>
        </div>
      </div>