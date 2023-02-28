
import styled from "@emotion/styled"

export default function Introduce() {

    return(
        <IntroduceWrapper>
            <WrapperTitle>
                자기소개
            </WrapperTitle>
            <WrapperDescription>
                <p>
                    제 삶의 새로운 과정을 탐색하던 중 프론트엔드를 만났습니다.
                    프로그래밍은 제가 해왔던 일과 달라 배움이 쉬운 일은 아니었습니다.abs
                    어렵지만, 알아가는 기쁨은 유유히 흘러가던 저에게 재미와 동력 그리고 흥미를 던져주었습니다.
                    재미는 그 어떤 힘보다 강하여, 공부를 멈출 수 없게 만들었습니다.abs
                    일과 병행하며 천천히 개발 지식을 쌓고 있습니다.
                    배운 것들로 프로젝트를 진행하고, 배포가 완료된 코드를 다시금 복기하며 이해도를 쌓고 있습니다. 
                    <br /><br />
                    UI를 위한 여러 색감을 생각하고 UX로 사용자들에게 더 나은 방향이 무엇일지 고민 할 때 희열을 느낍니다.
                    동료들과 함께 의견을 나누고 조율하는 것을 선호하며 협업의 중요성을 인지하고 있습니다.
                    제 다양한 경험이 유연하고 소통하기 쉬운 조직으로 성장할 수 있도록 도와줄 것이라 생각합니다.
                    머리를 맞대어 코드를 생각하고 더 나음을 위해, 많은 사람들과 함께하고 싶습니다.
                </p>
                <br/>
                <p>

                    
                </p>
            </WrapperDescription>
        </IntroduceWrapper>
    )
}




// 스타일링
const IntroduceWrapper = styled.div`
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
`