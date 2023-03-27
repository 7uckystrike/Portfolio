
import styled from "@emotion/styled"
import { RiGithubFill, RiMailLine } from 'react-icons/ri'
import { RxNotionLogo } from 'react-icons/rx'
import Nav from "./Nav"

export default function Contact() {

    return(
      <ContactWrapper>
        <Nav />
        <ContactContents>
          <p>아이콘을 눌러주세요!</p>
          <div>
            <span className='icon'>
              <a href="https://github.com/7uckystrike"><RiGithubFill /></a>
            </span>
            <span className='icon'>
              <a href="mailto:yeoung.dev@gmail.com"><RiMailLine /></a>
            </span>
            <span className='icon'>
              <a href="https://www.notion.so/jyounge/jyoung-s-blog-d3b61ac8fb814c14a3fac02c981a6e9f"><RxNotionLogo /></a>
            </span>
          </div>
        </ContactContents>
      </ContactWrapper>
      
    )
}


// 스타일링
const ContactWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
`

const ContactContents = styled.div`
  margin-top: 80px;
  margin-bottom: 40px;
  background-color: #f9f9f9;
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  p {
    font-weight: 300;
    margin-bottom: 20px;
  }

  .icon {
    font-size: 40px;
    margin-right: 15px;
  }

  span:last-child {
    margin-right: 0;
  }
`