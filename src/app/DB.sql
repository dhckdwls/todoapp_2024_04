DROP DATABASE IF EXISTS teamProject_24_04;
CREATE DATABASE teamProject_24_04;
USE teamProject_24_04;

## article 생성 (reipy 일수도 있고 자유게시판 글일수도 있어서 article로)
CREATE TABLE article (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    regDate DATETIME NOT NULL,
    updateDate DATETIME NOT NULL,
    
    boardId INT,
    title TEXT,
    content TEXT,
    
    hitPoint INT NOT NULL DEFAULT 0
);

## reply 테이블 생성
CREATE TABLE reply(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    regDate DATETIME NOT NULL,
    updateDate DATETIME NOT NULL,
    relId INT NOT NULL,
    relTypeCode CHAR(50) NOT NULL,
    
    content TEXT
);

# board 테이블 생성
CREATE TABLE board(
    id INT(10) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    regDate DATETIME NOT NULL,
    updateDate DATETIME NOT NULL,
    `code` CHAR(50) NOT NULL UNIQUE COMMENT 'notice(공지사항), free(자유), QnA(질의응답) ...',
    `name` CHAR(20) NOT NULL UNIQUE COMMENT '게시판 이름',
    delStatus TINYINT(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '삭제 여부 (0=삭제 전, 1=삭제 후)',
    delDate DATETIME COMMENT '삭제 날짜'
);

# board TD 생성
INSERT INTO board
SET regDate = NOW(),
updateDate = NOW(),
`code` = 'MEMBER RECIPY',
`name` = '회원 레시피';

INSERT INTO board
SET regDate = NOW(),
updateDate = NOW(),
`code` = 'FREE',
`name` = '자유게시판';

## 아티클 TD
INSERT INTO article
SET regDate = NOW(),
updateDate = NOW(),
boardId = 1,
title = 'test',
content = 'test';

## 아티클 TD
INSERT INTO article
SET regDate = NOW(),
updateDate = NOW(),
boardId = 1,
title = 'test2',
content = 'test2';

## 아티클 TD
INSERT INTO article
SET regDate = NOW(),
updateDate = NOW(),
boardId = 2,
title = 'test3',
content = 'test3';

## reply TD
INSERT INTO reply
SET regDate = NOW(),
updateDate = NOW(),
relId = 1,
relTypeCode = 'article',
content = '테스트1';

## reply TD
INSERT INTO reply
SET regDate = NOW(),
updateDate = NOW(),
relId = 2,
relTypeCode = 'article',
content = '테스트2';



#####################################################################



