'use client';
import * as React from 'react';
import classNames from 'classnames';
import RootTheme from './theme';
import dateToStr from './dateUtil';

import {
  AppBar,
  Toolbar,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  TextField,
  Button,
  Stack,
} from '@mui/material';

import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function App() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>
      <Toolbar />
      <div style={{ padding: '10px' }} className="title-box tw-flex tw-justify-between">
        <div>
          <ArrowBackIosNewIcon />
          <h1>회원 바베큐 레시피</h1>
        </div>
        <div>
          <img
            style={{ width: '100px', Height: '100px', border: '2px solid red' }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAAA5OTlISEjk5OSampr8/PzCwsKNjY3q6uqlpaXy8vLFxcVwcHBoaGjLy8sYGBgeHh7e3t5PT08/Pz8QEBAoKCjW1tZUVFTu7u6CgoK2trawsLB8fHy7u7uUlJQsLCwyMjKhoaFaWlojIyOHh4dlZWVERERowodxAAAEu0lEQVR4nO2ca3eiMBCGRQUvVPFCRa1Yaa3+/3+4LpNgvdSSMEim533O2S824cyQZG4ZttUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGiKbs8fzY9xOz7OR36v27Q43LysX70r0pemheKj279Rj+j/jZUcjO6rlzMaNC1edfoP9MvXsWkBK5JML/WZLrLF1U+TpGkhqzD8psl8vU0GwenHYJD0vubf/jJsWkx7zicw3lwfuMGwcz6NjUjHwFJr8Hl/IyafesDyyZIxoRWMox+HJLFkFcdK+PeHo97VqPGTpGJEi/7zAhJRqRfhID3lCla/jlxNaGjvCVIxEir397uCJxWVgwxrl4qTAwldLu7sCjyKLyRz2ezBcLgLtHOJy4ecZJbaNUrEzFsu8M5gxi6f8VaTPPxkpfzEdyJZi0jifhrNWRq/lCYZW0gbSTKn5Atjw1mxIJ9I4YxvOMsXFNhQVjgznDUTlClmpq6C2Imxpl3LxRgZxHnNQlZxYzxvk8+TUJYaWno2ejMSqlJrS7NPTmZdg0Tc0HmymJjPS9nl4WdcSUMJ7iJPficWEydS4rZDpTWUoGG1cyhhl6Z/3tL0rcJSHZhKuGyjEsbWeN5WTCFjZum5vyzX/vmEU7vcIk9JpiJS4HmF/HBei0TcfOSymt60UI7/UYtE3NBqLAKjSUEm5hi2dMXbzCqSJRWR4rd0LrswmpNZ5s3NEHjGyaxq2jDb2Q1CtsYrc3lIDDxBduY/4d7Q9JOD2YtZQh25lQ4yKZwREbEVqE6ZcpZDHUKzq5ymUff4pZZlo8aKCNjOqIvrEgZVmSVRd9w5WvDfkozUk2ZHC3RjaftRoX628MyMklPo1fH8n05YWLTXSihe3LDZafG9/fCepwv9STFiJyVeOzOLve+8rq+vXKL0YoAXC0krNL53SzpMwjAMTv+ij3vd7aa3xk2yOvc4H6/UmF63eXvnVuG5mMb9qPi8ohO1ooX3iMVpxFlHId0mOkbxJlRSfNv/qN+eDEyvMDkiDE5xBNeFAX053NXvUIQxwVr/JuAwahc3vdhxq22aXWiXpduL9DHSx9N516+bnzs3Xj4Ik43//pV+vfubJLxxkKE+jY63Q+stahOjaAfp9EbdVhJSvx7zO4+nMVMi2jZU6I+I3A1vlNG3T4SUihNXCzbj6qZCGSpH77pV+anaPbUKWJ0sSoUUq7Wr7bCArgReXSzaqD1aNXoecOyEWki4tpcKa91r4aM0iaPmSbXWI8OTWFFfcnG0h6qPhFyrLnYYw2YK3jssz2KDmkNfeTx1QFbZrXR4zBoz++65/RUdHa5gS12xlr9/rB+f8RT+p+9cGrVgM6QEmdMd2/MqQ3EI5xfnS5b4iI9hpazwOU+sxpJ5k+pt6sz/QxDkma/px2qPiZ3KhCno5v1SInUq/KbUl/fDup5TiTAVrHnLR7Z9uPVA6Q7zQ9mSMQaC3CpkzE/NcuvlhqmhtucD81PzjeFIU/SAOSgl+g5FNaThrsPLziENVdWhFtz4aBYaytew1fldUktcqUaFo3Y9jNxwFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4a/wDhGgqmCFJVUcAAAAASUVORK5CYII="
          />
        </div>
      </div>
      <div style={{ display: 'flex', overflowX: 'auto', padding: '10px' }}>
        <img
          src="https://picsum.photos/id/237/200/300"
          style={{ marginLeft: '10px', marginRight: '10px' }}
        />
        <img
          src="https://picsum.photos/id/237/200/300"
          style={{ marginLeft: '10px', marginRight: '10px' }}
        />
        <img
          src="https://picsum.photos/id/237/200/300"
          style={{ marginLeft: '10px', marginRight: '10px' }}
        />
        <img
          src="https://picsum.photos/id/237/200/300"
          style={{ marginLeft: '10px', marginRight: '10px' }}
        />
      </div>
      <div className="content-box">
        내용 준비재료 : !@#!@#!@# 내용 : !@#!@#!@# ㅁㄴㄻㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ
        ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴ
      </div>
      <div className="reply-box tw-p-[10px]">
        <ul>
          <li className="tw-flex">
            <img
              style={{ width: '50px', height: '50px', border: '2px solid red' }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAAA5OTlISEjk5OSampr8/PzCwsKNjY3q6uqlpaXy8vLFxcVwcHBoaGjLy8sYGBgeHh7e3t5PT08/Pz8QEBAoKCjW1tZUVFTu7u6CgoK2trawsLB8fHy7u7uUlJQsLCwyMjKhoaFaWlojIyOHh4dlZWVERERowodxAAAEu0lEQVR4nO2ca3eiMBCGRQUvVPFCRa1Yaa3+/3+4LpNgvdSSMEim533O2S824cyQZG4ZttUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGiKbs8fzY9xOz7OR36v27Q43LysX70r0pemheKj279Rj+j/jZUcjO6rlzMaNC1edfoP9MvXsWkBK5JML/WZLrLF1U+TpGkhqzD8psl8vU0GwenHYJD0vubf/jJsWkx7zicw3lwfuMGwcz6NjUjHwFJr8Hl/IyafesDyyZIxoRWMox+HJLFkFcdK+PeHo97VqPGTpGJEi/7zAhJRqRfhID3lCla/jlxNaGjvCVIxEir397uCJxWVgwxrl4qTAwldLu7sCjyKLyRz2ezBcLgLtHOJy4ecZJbaNUrEzFsu8M5gxi6f8VaTPPxkpfzEdyJZi0jifhrNWRq/lCYZW0gbSTKn5Atjw1mxIJ9I4YxvOMsXFNhQVjgznDUTlClmpq6C2Imxpl3LxRgZxHnNQlZxYzxvk8+TUJYaWno2ejMSqlJrS7NPTmZdg0Tc0HmymJjPS9nl4WdcSUMJ7iJPficWEydS4rZDpTWUoGG1cyhhl6Z/3tL0rcJSHZhKuGyjEsbWeN5WTCFjZum5vyzX/vmEU7vcIk9JpiJS4HmF/HBei0TcfOSymt60UI7/UYtE3NBqLAKjSUEm5hi2dMXbzCqSJRWR4rd0LrswmpNZ5s3NEHjGyaxq2jDb2Q1CtsYrc3lIDDxBduY/4d7Q9JOD2YtZQh25lQ4yKZwREbEVqE6ZcpZDHUKzq5ymUff4pZZlo8aKCNjOqIvrEgZVmSVRd9w5WvDfkozUk2ZHC3RjaftRoX628MyMklPo1fH8n05YWLTXSihe3LDZafG9/fCepwv9STFiJyVeOzOLve+8rq+vXKL0YoAXC0krNL53SzpMwjAMTv+ij3vd7aa3xk2yOvc4H6/UmF63eXvnVuG5mMb9qPi8ohO1ooX3iMVpxFlHId0mOkbxJlRSfNv/qN+eDEyvMDkiDE5xBNeFAX053NXvUIQxwVr/JuAwahc3vdhxq22aXWiXpduL9DHSx9N516+bnzs3Xj4Ik43//pV+vfubJLxxkKE+jY63Q+stahOjaAfp9EbdVhJSvx7zO4+nMVMi2jZU6I+I3A1vlNG3T4SUihNXCzbj6qZCGSpH77pV+anaPbUKWJ0sSoUUq7Wr7bCArgReXSzaqD1aNXoecOyEWki4tpcKa91r4aM0iaPmSbXWI8OTWFFfcnG0h6qPhFyrLnYYw2YK3jssz2KDmkNfeTx1QFbZrXR4zBoz++65/RUdHa5gS12xlr9/rB+f8RT+p+9cGrVgM6QEmdMd2/MqQ3EI5xfnS5b4iI9hpazwOU+sxpJ5k+pt6sz/QxDkma/px2qPiZ3KhCno5v1SInUq/KbUl/fDup5TiTAVrHnLR7Z9uPVA6Q7zQ9mSMQaC3CpkzE/NcuvlhqmhtucD81PzjeFIU/SAOSgl+g5FNaThrsPLziENVdWhFtz4aBYaytew1fldUktcqUaFo3Y9jNxwFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4a/wDhGgqmCFJVUcAAAAASUVORK5CYII="
            />
            <div style={{ marginLeft: '30px' }}>
              안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다
            </div>
          </li>
          <li className="tw-flex tw-my-[5px]">
            <img
              style={{ width: '50px', height: '50px', border: '2px solid red' }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAAA5OTlISEjk5OSampr8/PzCwsKNjY3q6uqlpaXy8vLFxcVwcHBoaGjLy8sYGBgeHh7e3t5PT08/Pz8QEBAoKCjW1tZUVFTu7u6CgoK2trawsLB8fHy7u7uUlJQsLCwyMjKhoaFaWlojIyOHh4dlZWVERERowodxAAAEu0lEQVR4nO2ca3eiMBCGRQUvVPFCRa1Yaa3+/3+4LpNgvdSSMEim533O2S824cyQZG4ZttUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGiKbs8fzY9xOz7OR36v27Q43LysX70r0pemheKj279Rj+j/jZUcjO6rlzMaNC1edfoP9MvXsWkBK5JML/WZLrLF1U+TpGkhqzD8psl8vU0GwenHYJD0vubf/jJsWkx7zicw3lwfuMGwcz6NjUjHwFJr8Hl/IyafesDyyZIxoRWMox+HJLFkFcdK+PeHo97VqPGTpGJEi/7zAhJRqRfhID3lCla/jlxNaGjvCVIxEir397uCJxWVgwxrl4qTAwldLu7sCjyKLyRz2ezBcLgLtHOJy4ecZJbaNUrEzFsu8M5gxi6f8VaTPPxkpfzEdyJZi0jifhrNWRq/lCYZW0gbSTKn5Atjw1mxIJ9I4YxvOMsXFNhQVjgznDUTlClmpq6C2Imxpl3LxRgZxHnNQlZxYzxvk8+TUJYaWno2ejMSqlJrS7NPTmZdg0Tc0HmymJjPS9nl4WdcSUMJ7iJPficWEydS4rZDpTWUoGG1cyhhl6Z/3tL0rcJSHZhKuGyjEsbWeN5WTCFjZum5vyzX/vmEU7vcIk9JpiJS4HmF/HBei0TcfOSymt60UI7/UYtE3NBqLAKjSUEm5hi2dMXbzCqSJRWR4rd0LrswmpNZ5s3NEHjGyaxq2jDb2Q1CtsYrc3lIDDxBduY/4d7Q9JOD2YtZQh25lQ4yKZwREbEVqE6ZcpZDHUKzq5ymUff4pZZlo8aKCNjOqIvrEgZVmSVRd9w5WvDfkozUk2ZHC3RjaftRoX628MyMklPo1fH8n05YWLTXSihe3LDZafG9/fCepwv9STFiJyVeOzOLve+8rq+vXKL0YoAXC0krNL53SzpMwjAMTv+ij3vd7aa3xk2yOvc4H6/UmF63eXvnVuG5mMb9qPi8ohO1ooX3iMVpxFlHId0mOkbxJlRSfNv/qN+eDEyvMDkiDE5xBNeFAX053NXvUIQxwVr/JuAwahc3vdhxq22aXWiXpduL9DHSx9N516+bnzs3Xj4Ik43//pV+vfubJLxxkKE+jY63Q+stahOjaAfp9EbdVhJSvx7zO4+nMVMi2jZU6I+I3A1vlNG3T4SUihNXCzbj6qZCGSpH77pV+anaPbUKWJ0sSoUUq7Wr7bCArgReXSzaqD1aNXoecOyEWki4tpcKa91r4aM0iaPmSbXWI8OTWFFfcnG0h6qPhFyrLnYYw2YK3jssz2KDmkNfeTx1QFbZrXR4zBoz++65/RUdHa5gS12xlr9/rB+f8RT+p+9cGrVgM6QEmdMd2/MqQ3EI5xfnS5b4iI9hpazwOU+sxpJ5k+pt6sz/QxDkma/px2qPiZ3KhCno5v1SInUq/KbUl/fDup5TiTAVrHnLR7Z9uPVA6Q7zQ9mSMQaC3CpkzE/NcuvlhqmhtucD81PzjeFIU/SAOSgl+g5FNaThrsPLziENVdWhFtz4aBYaytew1fldUktcqUaFo3Y9jNxwFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4a/wDhGgqmCFJVUcAAAAASUVORK5CYII="
            />
            <div style={{ marginLeft: '30px' }}>
              안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다
            </div>
          </li>
          <li className="tw-flex">
            <img
              style={{ width: '50px', height: '50px', border: '2px solid red' }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAAA5OTlISEjk5OSampr8/PzCwsKNjY3q6uqlpaXy8vLFxcVwcHBoaGjLy8sYGBgeHh7e3t5PT08/Pz8QEBAoKCjW1tZUVFTu7u6CgoK2trawsLB8fHy7u7uUlJQsLCwyMjKhoaFaWlojIyOHh4dlZWVERERowodxAAAEu0lEQVR4nO2ca3eiMBCGRQUvVPFCRa1Yaa3+/3+4LpNgvdSSMEim533O2S824cyQZG4ZttUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGiKbs8fzY9xOz7OR36v27Q43LysX70r0pemheKj279Rj+j/jZUcjO6rlzMaNC1edfoP9MvXsWkBK5JML/WZLrLF1U+TpGkhqzD8psl8vU0GwenHYJD0vubf/jJsWkx7zicw3lwfuMGwcz6NjUjHwFJr8Hl/IyafesDyyZIxoRWMox+HJLFkFcdK+PeHo97VqPGTpGJEi/7zAhJRqRfhID3lCla/jlxNaGjvCVIxEir397uCJxWVgwxrl4qTAwldLu7sCjyKLyRz2ezBcLgLtHOJy4ecZJbaNUrEzFsu8M5gxi6f8VaTPPxkpfzEdyJZi0jifhrNWRq/lCYZW0gbSTKn5Atjw1mxIJ9I4YxvOMsXFNhQVjgznDUTlClmpq6C2Imxpl3LxRgZxHnNQlZxYzxvk8+TUJYaWno2ejMSqlJrS7NPTmZdg0Tc0HmymJjPS9nl4WdcSUMJ7iJPficWEydS4rZDpTWUoGG1cyhhl6Z/3tL0rcJSHZhKuGyjEsbWeN5WTCFjZum5vyzX/vmEU7vcIk9JpiJS4HmF/HBei0TcfOSymt60UI7/UYtE3NBqLAKjSUEm5hi2dMXbzCqSJRWR4rd0LrswmpNZ5s3NEHjGyaxq2jDb2Q1CtsYrc3lIDDxBduY/4d7Q9JOD2YtZQh25lQ4yKZwREbEVqE6ZcpZDHUKzq5ymUff4pZZlo8aKCNjOqIvrEgZVmSVRd9w5WvDfkozUk2ZHC3RjaftRoX628MyMklPo1fH8n05YWLTXSihe3LDZafG9/fCepwv9STFiJyVeOzOLve+8rq+vXKL0YoAXC0krNL53SzpMwjAMTv+ij3vd7aa3xk2yOvc4H6/UmF63eXvnVuG5mMb9qPi8ohO1ooX3iMVpxFlHId0mOkbxJlRSfNv/qN+eDEyvMDkiDE5xBNeFAX053NXvUIQxwVr/JuAwahc3vdhxq22aXWiXpduL9DHSx9N516+bnzs3Xj4Ik43//pV+vfubJLxxkKE+jY63Q+stahOjaAfp9EbdVhJSvx7zO4+nMVMi2jZU6I+I3A1vlNG3T4SUihNXCzbj6qZCGSpH77pV+anaPbUKWJ0sSoUUq7Wr7bCArgReXSzaqD1aNXoecOyEWki4tpcKa91r4aM0iaPmSbXWI8OTWFFfcnG0h6qPhFyrLnYYw2YK3jssz2KDmkNfeTx1QFbZrXR4zBoz++65/RUdHa5gS12xlr9/rB+f8RT+p+9cGrVgM6QEmdMd2/MqQ3EI5xfnS5b4iI9hpazwOU+sxpJ5k+pt6sz/QxDkma/px2qPiZ3KhCno5v1SInUq/KbUl/fDup5TiTAVrHnLR7Z9uPVA6Q7zQ9mSMQaC3CpkzE/NcuvlhqmhtucD81PzjeFIU/SAOSgl+g5FNaThrsPLziENVdWhFtz4aBYaytew1fldUktcqUaFo3Y9jNxwFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4a/wDhGgqmCFJVUcAAAAASUVORK5CYII="
            />
            <div style={{ marginLeft: '30px' }}>
              안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다
            </div>
          </li>
        </ul>
      </div>
      <div style={{ border: '2px solid red' }} className="reply-write-box tw-flex">
        <Box component="form" className="tw-flex-1">
          <TextField
            style={{ width: '100%' }}
            id="outlined-basic"
            label="댓글 작성"
            variant="outlined"
          />
        </Box>
        <Button variant="contained" href="#contained-buttons">
          작성3
        </Button>
      </div>
      <Button
        style={{ marginTop: '10px' }}
        variant="contained"
        className="tw-font-bold tw-w-full"
        type="submit">
        <FavoriteIcon />내 레시피에 추가하기
      </Button>

      <BottomNavigation />
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
    </>
  );
}

export default function themeApp() {
  const theme = RootTheme();

  return <App />;
}
