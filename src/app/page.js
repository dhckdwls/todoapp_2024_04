// src/app/page.js
'use client';

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const API_ENDPOINT = '/api/articleWrite'; // 서버의 API 엔드포인트

export default function themeApp() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to save data');
      }

      console.log('Data saved successfully');

      setTitle('');
      setContent('');
      setError(null);
    } catch (error) {
      console.error('Error saving data:', error);
      setError('데이터 저장 중 오류가 발생했습니다.');
    }
  };

  return (
    <>
      <div>
        <form className="tw-flex tw-flex-col tw-p-4 tw-gap-2" onSubmit={handleSubmit}>
          <div className="tw-flex tw-items-center">
            <div>제목 : </div>
            <TextField
              className="tw-flex-1"
              name="title"
              autoComplete="off"
              label="제목을 입력해주세요"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>

          <TextField
            minRows={3}
            maxRows={10}
            multiline
            name="content"
            autoComplete="off"
            label="내용을 입력해주세요"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
          <div className="tw-flex tw-justify-around">
            <Button variant="contained" className="tw-font-bold" type="reset">
              작성취소
            </Button>
            <Button variant="contained" className="tw-font-bold" type="submit">
              작성하기
            </Button>
          </div>
        </form>
        {error && <div className="error-message">{error}</div>}
      </div>
    </>
  );
}
