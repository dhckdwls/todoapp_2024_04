import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import { Box, TextField, Button, Typography, Modal } from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
//modal
//모달창 스타일
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// modal 열기, 닫기
function useEditReplyModalStatus() {
  const [opened, setOpened] = React.useState(false);

  const open = () => {
    setOpened(true);
  };

  const close = () => {
    setOpened(false);
  };

  return {
    opened,
    open,
    close,
  };
}

const ReplyModal = ({ status }) => {
  return (
    <>
      <Modal
        open={status.opened}
        onClose={status.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            댓글 수정
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              style={{ width: '100%' }}
              id="outlined-basic"
              label="댓글 수정"
              variant="outlined"
            />
            <Button variant="contained">수정하기</Button>
            <Button variant="contained" onClick={status.close}>
              수정취소
            </Button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

//modal 여기까지

const RecipyDetail = ({ noticeSnackbarStatus, selectedArticleId }) => {
  const editReplyModalStatus = useEditReplyModalStatus();
  const id = selectedArticleId;
  const [article, setArticle] = useState(null);

  const replyWrite = (event) => {
    event.preventDefault();
    alert('안녕');
  };

  useEffect(() => {
    // API 호출하여 글 목록을 가져옴
    const fetchArticle = async () => {
      try {
        const response = await axios.post('/api/article', { id });
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, []); // 마운트될 때 한 번만 호출

  const test = () => {
    alert('안녕');
  };

  return (
    <>
      <Button onClick={test}>테스트</Button>
      <ReplyModal status={editReplyModalStatus} />
      <div style={{ padding: '10px' }} className="title-box tw-flex tw-justify-between">
        <div>
          <ArrowBackIosNewIcon />
          <h1>회원 바베큐 레시피</h1>
          <h1>제목 : ~~~</h1>
          좋아요 수 : 10 댓글수 : 10
          <Button variant="contained">수정하기</Button>
          <Button variant="contained">삭제하기</Button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img
            style={{ width: '100px', Height: '100px', border: '2px solid red' }}
            src="https://picsum.photos/id/237/200/300"
          />
        </div>
      </div>
      <div className="img-box tw-border-2 tw-border-red-500 ">
        <ul className="tw-flex">
          <li style={{ marginLeft: '10px', marginRight: '10px' }}>
            <img src="https://picsum.photos/id/237/200/300" />
          </li>
          <li style={{ marginLeft: '10px', marginRight: '10px' }}>
            <img src="https://picsum.photos/id/237/200/300" />
          </li>
          <li style={{ marginLeft: '10px', marginRight: '10px' }}>
            <img src="https://picsum.photos/id/237/200/300" />
          </li>
        </ul>
      </div>

      <div className="content-box">
        준비재료 : 앞다리살 600g, 양념 1통 , 양파 반개 고기를 삶는다 삶을때 양파를 넣어준다 그 후에
        양넘을 발라서 구워준다
      </div>
      <div className="reply-box tw-p-[10px]">
        <ul>
          <li className="tw-flex tw-items-center">
            <img style={{ width: '50px', height: '50px', border: '2px solid red' }} src="" />
            <div style={{ marginLeft: '30px' }}>
              <h1>작성자 : 홍길동</h1>
              <h1>수정일 : 20204-04-30 09:07:17</h1>
              내용
              <div>
                <Button variant="contained">좋아요</Button>
                <Button variant="contained">싫어요</Button>
                <Button variant="contained">답글</Button>
                <Button variant="contained" onClick={editReplyModalStatus.open}>
                  수정
                </Button>
                <Button variant="contained">삭제</Button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <form action="" className="tw-flex" onSubmit={replyWrite}>
          <TextField
            style={{ width: '100%' }}
            id="outlined-basic"
            label="댓글 작성"
            variant="outlined"
            name="content"
          />
          <Button type="submit" variant="contained" href="#contained-buttons">
            작성
          </Button>
        </form>
      </div>

      <Button
        style={{ marginTop: '10px' }}
        variant="contained"
        className="tw-font-bold tw-w-full"
        type="submit">
        <FavoriteIcon />내 레시피에 추가하기
      </Button>
    </>
  );
};
export default RecipyDetail;
