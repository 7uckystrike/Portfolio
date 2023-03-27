import styled from "@emotion/styled"
import html from "../images/html.svg"
import css from "../images/css.svg"
import js from "../images/js.svg"
import react from "../images/react.svg"
import express from "../images/express.svg"
import emotion from "../images/emotion.svg"
import redux from "../images/redux.svg"
import Nav from "./Nav"


export default function Introduce() {

    return(
        <IntroduceWrapper>
          <Nav />
          <WrapperTitle>
            짧은 자기소개
          </WrapperTitle>
          <WrapperDescription>
            <p>
            안녕하세요 :)! FE 신자영입니다.
            <br/>
            프로그래밍은 상방이 뚫려있어 노력하는만큼 성장할 수 있는 기회가 주워집니다. 더 나아가 가치를 만들어 낼 수 있다는 것이 저의 큰 흥미와 재미를 끌어냈습니다.
            어떤 일이든 사람과 사람의 관계 속에서 발생하며 그러므로 협업의 중요함을 인지하고 있습니다.
            프론트엔드를 선택한 이유는 UI의 다채로운 색감을 생각하고 UX로 사용자들에게 더 나은 방향이 무엇일지 고민할 때 제가 움직이고 있다는 생각이 들기 때문입니다.
            </p>
          </WrapperDescription>
          <WrapperTitle>
            사용하는 스킬
          </WrapperTitle>
          <WrapperDescription>
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={js} alt="js" />
            <img src={react} alt="react" />
            <img src={redux} alt="redux" />
            <br/>
            <img src={emotion} alt="emotion" />
            <img src={express} alt="express" />
          </WrapperDescription>
        </IntroduceWrapper>
    )
}


// 스타일링
const IntroduceWrapper = styled.div`
  width:800px;
  height: 00px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`


const WrapperTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`

const WrapperDescription = styled.div`
    text-align: justify;
    font-weight: 300;
    margin-bottom: 50px;
    margin-left: 30px;

    img {
      margin-right: 7px;
    }
`
