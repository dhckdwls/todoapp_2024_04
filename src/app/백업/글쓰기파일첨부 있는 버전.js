'use client';
import React, { useState, useRef } from 'react';
import axios from 'axios';
import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

const Write = ({ noticeSnackbarStatus }) => {
  const [boardId, setBoardId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState([]);

  const boardChange = (event) => {
    setBoardId(event.target.value);
  };

  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  const contentChange = (event) => {
    setContent(event.target.value);
  };

  const inputFileRef = useRef(null);

  // 파일 업로드 함수
  const handleFileUpload = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles([...files, ...newFiles]);
  };

  // 파일 삭제 함수
  const handleFileDelete = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const write = async (event) => {
    event.preventDefault();

    try {
      // 글 작성
      const articleResponse = await axios.post('/api/articleWrite', {
        boardId: boardId,
        title: title,
        content: content,
      });

      // 글 작성 성공 시 파일 업로드
      if (articleResponse.status === 200) {
        // 파일이 있는 경우에만 업로드 수행
        if (files.length > 0) {
          // 파일 업로드
          const uploadedFilesInfo = await uploadFiles(files);

          // 파일 업로드 성공 시, 파일 정보와 글 정보를 조합하여 DB에 저장
          const combineResponse = await axios.post('/api/saveArticleAndFiles', {
            articleId: articleResponse.data.id, // 새로 작성된 글의 ID
            uploadedFilesInfo: uploadedFilesInfo, // 업로드된 파일 정보
          });

          if (combineResponse.status === 200) {
            // 성공 시 스낵바 메시지 표시
            noticeSnackbarStatus.open('글과 파일이 성공적으로 저장되었습니다.', 'success');
          } else {
            // 실패 시 스낵바 메시지 표시
            noticeSnackbarStatus.open('파일 저장에 실패했습니다.', 'error');
          }
        } else {
          // 파일이 없는 경우에도 성공 메시지 표시
          noticeSnackbarStatus.open('글이 성공적으로 저장되었습니다.', 'success');
        }
      } else {
        // 글 작성에 실패한 경우
        noticeSnackbarStatus.open('글 작성에 실패했습니다.', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      noticeSnackbarStatus.open('글과 파일 저장에 실패했습니다.', 'error');
    }
  };

  return (
    <>
      <div style={{ border: '2px solid red' }}>
        <form action="" onSubmit={write}>
          <div
            style={{ border: '2px solid red' }}
            className="tw-flex tw-items-center tw-justify-around">
            <div>분류 :</div>
            <Box sx={{ minWidth: '70%' }}>
              <FormControl fullWidth>
                <InputLabel id="boardId-label">게시판을 골라주세요</InputLabel>
                <Select
                  labelId="boardId-label"
                  id="boardId-select"
                  value={boardId}
                  onChange={boardChange}>
                  <MenuItem value={1}>회원레시피</MenuItem>
                  <MenuItem value={2}>유튜버레시피</MenuItem>
                  <MenuItem value={3}>자유게시판</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div
            className="tw-flex tw-items-center tw-justify-around"
            style={{ border: '2px solid red' }}>
            <div>제목 :</div>{' '}
            <TextField name="title" sx={{ width: '70%' }} value={title} onChange={titleChange} />
          </div>
          <Button
            sx={{ width: '100%' }}
            variant="contained"
            className="tw-font-bold"
            onClick={() => inputFileRef.current.click()} // 파일 선택 창 열기
          >
            파일 첨부하기
          </Button>
          <input
            type="file"
            ref={inputFileRef}
            style={{ display: 'none' }}
            onChange={handleFileUpload}
            accept="image/*, video/*" // 이미지 파일과 동영상 파일만 허용
            multiple // 여러 파일 선택 가능
          />
          <List>
            {files.map((file, index) => (
              <ListItem key={index}>
                {/* 파일이 이미지인 경우에만 이미지를 표시 */}
                {file.type.startsWith('image/') && (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Photo ${index + 1}`}
                    style={{ marginRight: '10px', height: '50px' }}
                  />
                )}
                {/* 파일 이름 또는 미리보기를 표시 */}
                <ListItemText primary={file.name} />
                <Button onClick={() => handleFileDelete(index)} color="error" size="small">
                  <CloseIcon />
                </Button>
              </ListItem>
            ))}
          </List>

          <TextField
            style={{ width: '100%' }}
            minRows={20}
            maxRows={20}
            multiline
            name="content"
            autoComplete="off"
            label="내용을 입력해주세요"
            value={content}
            onChange={contentChange}
          />

          <div className="tw-flex tw-justify-around">
            <Button variant="contained">작성 취소</Button>
            <Button type="submit" variant="contained">
              작성 하기
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Write;
