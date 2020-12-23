import { Typography, Divider } from 'antd';
import './App.less';

const { Title, Paragraph, Link } = Typography;

function App() {
  return (
    <section className="App">
      <Typography>
        <Title>Introduction</Title>
        <Paragraph>A Create React App Template With Ant Design.</Paragraph>
        <Divider />
        <Title level={4}>Dependencies</Title>
        <Paragraph>
          <ul>
            <li>
              <Link href="https://github.com/ant-design/ant-design" target="_blank">
                Ant Design
              </Link>
            </li>
          </ul>
        </Paragraph>
        <Divider />
        <Title level={4}>Develop Dependencies</Title>
        <Paragraph>
          <ul>
            <li>
              <Link href="https://github.com/gsoft-inc/craco" target="_blank">
                Craco
              </Link>
            </li>
          </ul>
        </Paragraph>
      </Typography>
    </section>
  );
}

export default App;
