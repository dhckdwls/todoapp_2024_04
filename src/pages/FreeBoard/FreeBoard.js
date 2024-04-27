'use client';
import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import RootTheme from '@/app/theme';

import { Box, Button, Tab, Tabs, TextField } from '@mui/material';

import PropTypes from 'prop-types';

// 상단탭
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function FreeBoard() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="레시피" {...a11yProps(0)} />
            <Tab label="게시판" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}></CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div>
            <table>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>좋아요</th>
                <th>수정일</th>
              </tr>
              <tr>
                <td>1</td>
                <td>테스트 제목</td>
                <td>테스트 작성자</td>
                <td>10</td>
                <td>2024-04-27</td>
              </tr>
              <tr>
                <td>1</td>
                <td>테스트 제목</td>
                <td>테스트 작성자</td>
                <td>10</td>
                <td>2024-04-27</td>
              </tr>
              <tr>
                <td>1</td>
                <td>테스트 제목</td>
                <td>테스트 작성자</td>
                <td>10</td>
                <td>2024-04-27</td>
              </tr>
              <tr>
                <td>1</td>
                <td>테스트 제목</td>
                <td>테스트 작성자</td>
                <td>10</td>
                <td>2024-04-27</td>
              </tr>
            </table>
          </div>
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default FreeBoard;
