import React from 'react';
import { Typography, Divider } from 'antd';
import './index.less';

const { Title, Paragraph, Link } = Typography;

function Home() {
  return (
    <section className="app-home">
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
            <li>
              <Link href="https://github.com/gsoft-inc/craco" target="_blank">
                Craco
              </Link>
            </li>
            <li>
              <Link href="https://github.com/moment/moment" target="_blank">
                Moment
              </Link>
            </li>
            <li>
              <Link href="https://github.com/facebook/prop-types" target="_blank">
                PropTypes
              </Link>
            </li>
          </ul>
        </Paragraph>
        <Divider />
        <Title level={4}>Develop Dependencies</Title>
        <Paragraph>
          <ul>
            <li>
              <Link href="https://github.com/eslint/eslint" target="_blank">
                ESLint
              </Link>
            </li>
            <li>
              <Link href="https://github.com/prettier/prettier" target="_blank">
                Prettier
              </Link>
            </li>
            <li>
              <Link href="https://github.com/typicode/husky" target="_blank">
                Husky
              </Link>
            </li>
            <li>
              <Link href="https://github.com/okonet/lint-staged" target="_blank">
                Lint Staged
              </Link>
            </li>
          </ul>
        </Paragraph>
      </Typography>
    </section>
  );
}

export default Home;
