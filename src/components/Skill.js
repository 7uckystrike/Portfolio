
import styled from "@emotion/styled"

export default function Skill() {

    return(
        <SkillWrapper>
            <WrapperTitle>
                경험지식
            </WrapperTitle>
            <WrapperDescription>
                <strong>HTML, CSS</strong>
                <ul>
                    <li>간단한 마크업이 가능합니다.</li>
                    <li>flexbox, media query등 CSS 문법을 연습합니다.</li>
                    <li>Bootstrap 사용 경험이 있으며, 요즘은 Emotion으로 사이드 프로젝트에 쓰고 있습니다.</li>
                </ul>
                <strong>JavaScript (ES 2015+)</strong>
                <ul>
                    <li>Document Object Model에 대한 이해도가 갖춰져있습니다.</li>
                    <li>npm, yarn과 같은 패키지 매니저를 설치하고 사용합니다.</li>
                    <li>Express, MongoDB, Firebase을 사용하여 환경을 구성하고 사이드 프로젝트에 적용해 본 경험이 있습니다.</li>
                    <li>JavaScript 기본적인 ES6 문법을 알고 있고, 깊고 꾸준히 공부합니다.</li>
                </ul>
                <strong>React</strong>
                <ul>
                    <li>생명주기에 대한 이해도가 있습니다.</li>
                    <li>React Hook을 사용합니다.</li>
                    <li>Redux Toolkit을 이해하고 사용한 경험이 있습니다</li>
                </ul>
                <strong>Git & Github</strong>
                <ul>
                    <li>터미널에서 기본적인 Git 명령어를 사용 할 수 있습니다.</li>
                    <li>Github 저장소를 사용하고 있습니다.</li>
                </ul>
            </WrapperDescription>
        </SkillWrapper>
    )
}



// 스타일링
const SkillWrapper = styled.div`
   width: 780px;
`

const WrapperTitle = styled.div`
    font-size: 25px;
    padding-bottom: 15px;
`

const WrapperDescription = styled.div`
    text-align: justify;
    font-weight: 300;
    margin-bottom: 60px;

    strong {
        padding-left: 2px;
    }

    ul {
        padding-left: 40px;
        margin-bottom: 30px;
    }
`