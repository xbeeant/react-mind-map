import {Button, Col, Row, Space, Tooltip} from 'antd';
import React, {FC} from 'react';
import {SvgIcons} from './SvgIcons';

export type ToolbarProps = {
  editor: any
};

const Toolbar: FC<ToolbarProps> = () => {
  return (
    <Row gutter={16} justify="center" className="mind-toolbar">
      <Col span={12}>
        <Space>
          <Tooltip title="重做">
            <Button icon={<SvgIcons.undo/>}></Button>
          </Tooltip>
          <Tooltip title="撤销">
            <Button icon={<SvgIcons.redo/>}></Button>
          </Tooltip>
          <Tooltip title="格式刷">
            <Button icon={<SvgIcons.format/>}></Button>
          </Tooltip>
        </Space>
      </Col>
      <Col span={4}></Col>
    </Row>
  );
};

export default Toolbar;
