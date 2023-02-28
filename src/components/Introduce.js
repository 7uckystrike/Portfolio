
import styled from "@emotion/styled"

export default function Introduce() {

    return(
        <IntroduceWrapper>
            <Wrapper__title>
                자기소개
            </Wrapper__title>
            <Wrapper__description>
                <p>
                    여러 직업을 거치며 경험을 쌓았습니다. 
                    새로운 진로를 탐색하는 과정에서 프론트엔드를 접하게 되었습니다. 
                    프로그래밍은 전공이나 제가 해왔던 일과 달라 배움 자체가 쉬운 일은 아니었습니다. 
                    어렵지만, 알아가는 기쁨은 잔잔한 수면 같았던 저에게 재미와 동력, 흥미를 던져주었습니다. 
                    재미는 공부를 멈출 수 없게 하더라구요. 일과 병행하면서 천천히 개발 지식을 쌓고 있습니다. 
                    배운 것들로 프로젝트를 진행하기도 하고, 배포가 완료된 프로젝트 코드를 다시금 복습하고, 리팩토링하며 나아가고 있습니다. 
                    공부는 꾸준함이란 믿음으로 그것을 습관화 하기 위해 오늘도 달리고 있습니다. 
                </p>
                <br/>
                <p>
                    제 다양한 경험이 더 유연하고 소통하기 쉬운 조직으로 성장할 수 있도록 도와줄 것이라 생각합니다. 
                    머리를 맞대어 코드를 생각하고 더 나음을 위해, 많은 사람들과 함께하고 싶습니다.
                </p>
            </Wrapper__description>
        </IntroduceWrapper>
    )
}




// 스타일링
const IntroduceWrapper = styled.div`
   width: 780px;
`

const Wrapper__title = styled.div`
    font-size: 25px;
    padding-bottom: 15px;
`

const Wrapper__description = styled.div`
    text-align: justify;
    margin-bottom: 40px;
`