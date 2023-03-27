import styled from "@emotion/styled"
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import { RxNotionLogo } from 'react-icons/rx'
import Nav from './Nav'

export default function Introduce() {
  return(
  <ProjectWrapper>
    <Nav />
    <WrapperTitle>
      프로젝트
    </WrapperTitle>
    <WrapperDescription>
      <div className='sideProject'>
        <div className='project'>
          <span className='title'>community</span>
          <span className='icon'>
            <a href='https://github.com/7uckystrike/community.git'><AiFillGithub /></a>
            <a href='https://jyounge.notion.site/community-react-express-heroku-3624278cbb6f44e99cef79499250338c'><RxNotionLogo /></a>&nbsp;
            <a href='https://react-board.herokuapp.com/'><AiOutlineLink /></a>
          </span>
        </div>
        <div className='description'>
          <ul>
            <li><strong>Express</strong>를 기반으로 <strong>MongoDB</strong>를 백엔드 서비스로 이용했으며, <br/> mongoose 라이브러리를 통해 연결했습니다.</li>
            <li>회원가입은 Firebase를 사용했습니다.</li>
            <li>리덕스를 경험하고 리덕스 툴킷을 사용했습니다.</li>
            <li>Bootstrap으로 틀을 만들고 세부적인 스타일링은 <strong>Emotion</strong>을 사용했습니다.</li>
          </ul>
        </div>
      </div>
      
      <div className='sideProject'>
        <div className='project'>
          <span className='title'>book search</span>
          <span className='icon'>
            <a href='https://github.com/7uckystrike/search-book.git'><AiFillGithub /></a>
            <a href='https://jyounge.notion.site/search-book-react-b3ed25b3324c4b0d89baa0d09d65f9ec'><RxNotionLogo /></a>
            <a href='https://book-lilac-two.vercel.app/'><AiOutlineLink /></a>
          </span>
        </div>
        <div className='description'>
          <ul>
            <li>카카오 <strong>오픈 API</strong>를 이용했습니다.</li>
            <li>JavaScript <strong>ES6</strong> 문법을 경험하였습니다.</li>
            <li><strong>map</strong> 함수를 통해 배열 꺼내는 연습을 했습니다.</li>
            <li>vercel로 배포했습니다.</li>
          </ul>
        </div>
      </div>
      
      <div className='sideProject'>
        <div className='project'>
          <span className='title'>portfolio</span>
          <span className='icon'>
            <a href='https://github.com/7uckystrike/portfolio'><AiFillGithub /></a>
            <a href='https://jyounge.notion.site/portfolio-react-7969e52d97e440928e1fec3b7ce3b3b9'><RxNotionLogo /></a>
            <a href='https://7uckystrike.github.io/portfolio/'><AiOutlineLink /></a>
          </span>
        </div>
        <div className='description'>
          <ul>
            <li><strong>React</strong>로 처음부터 끝까지 만든 포트폴리오입니다.</li>
            <li>yarn 패키지를 설치했습니다.</li>
            <li>스타일링은 <strong>Emotion</strong>으로 작업했습니다.</li>
            <li>새로운 branch를 만들어 기존 포트폴리오 코드와 따로 관리합니다.</li>
            <li><strong>gh-pages</strong> 패키지를 사용해 git page로 배포했습니다.</li>
          </ul>
        </div>
      </div>
      
      <div className='sideProject'>
        <div className='project'>
          <span className='title'>SNS</span>
          <span className='icon'>
            <a href='https://github.com/7uckystrike/sns-clone'><AiFillGithub /></a>
            <a href='https://jyounge.notion.site/sns-react-firebase-c509c2507d75406f8732db75bc2134d6'><RxNotionLogo /></a>
            <a href='https://7uckystrike.github.io/sns-clone/'><AiOutlineLink /></a>
          </span>
        </div>
        <div className='description'>
          <ul>
            <li>Firebase를 사용하여 CRUD 및 회원가입을 구현했습니다.</li>
            <li>yarn을 통해 프로젝트를 설치했습니다.</li>
            <li>게시글 모아보기 기능을 추가하여 사용자 개인의 게시물을 한 곳에 모았습니다.</li>
            <li>git page로 배포했습니다.</li>
          </ul>
        </div>
      </div>
      
      <div className='sideProject'>
        <div className='project'>
          <span className='title'>todo list</span>
          <span className='icon'>
            <a href='https://github.com/7uckystrike/vanillaJS-TodoList'><AiFillGithub /></a>
            <a href='https://jyounge.notion.site/todo-list-f39eab10d6394719be651df65afb6368'><RxNotionLogo /></a>
            <a href='https://7uckystrike.github.io/vanillaJS-TodoList/'><AiOutlineLink /></a>
          </span>
        </div>
        <div className='description'>
          <ul>
            <li>개발을 배운 후, 처음으로 만들어 본 프로젝트입니다.</li>
            <li>순수 자바스크립트에 대해 공부하였습니다.</li>
            <li><strong>localStorage</strong>를 통해 입력된 데이터를 저장합니다.</li>
            <li>media query를 사용해 아이폰5 기준에 맞춰 반응형을 구현했습니다.</li>
          </ul>
        </div>
      </div>
      
      {/* <div className='sideProject'>
        <div className='project'>
          <span className='title'>emotion note</span>
          <span className='icon'>
            <a href='https://github.com/7uckystrike/note.git'><AiFillGithub /></a>
            <a href='https://jyounge.notion.site/emoiton-note-react-da804bbb40644ae7b023d79d479f8700'><RxNotionLogo /></a>
            <a href='https://note-two-mu.vercel.app/'><AiOutlineLink /></a>
          </span>
        </div>
        <div className='description'>
          <ul>
            <li>다양한 <strong>hook</strong> 경험으로 이해도가 향상되었습니다.</li>
            <li><strong>useContext</strong>를 사용해 상태관리를 경험하였습니다.</li>
            <li>media Query를 반응형으로 만들었습니다.</li>
            <li>vercel로 배포했습니다.</li>
          </ul>
        </div>
      </div> */}
    </WrapperDescription>
  </ProjectWrapper>
)}



// 스타일링
const ProjectWrapper = styled.div`
  width:800px;
  margin-top: 90px;
`

const WrapperTitle = styled.div`
    font-size: 20px;
    padding-bottom: 15px;
`

const WrapperDescription = styled.div`
  margin-bottom: 60px;

  .sideProject {
    height: 230px;

    border: 1px solid #000;
    box-shadow: 5px 5px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    margin-bottom: 40px;
  }

  .project {
    width: 210px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .description {
    width: 500px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 300;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
    padding-left: 10px;
  }

  .icon {
    font-size: 18px;
    padding-left: 10px;
  }

  a {
    margin-right: 10px;
  }
`