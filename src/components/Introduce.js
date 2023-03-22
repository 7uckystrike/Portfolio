
import styled from "@emotion/styled"

export default function Introduce() {

    return(
        <IntroduceWrapper>
            <WrapperTitle>
                짧은 자기소개
            </WrapperTitle>
            <WrapperDescription>
                <p>
                  안녕하세요 :)! FE 신자영입니다.
                  <br/>
                  제 삶의 새로운 과정을 탐색하던 중 개발을 만났습니다.
                  프로그래밍은 제가 해왔던 일들과 달라 배움이 쉽지는 않았습니다만, 상방이 뚫려있어 노력하는만큼 성장할 수 있고
                  가치를 만들어 낼 수 있다는 것에 큰 흥미와 재미를 느꼈습니다.
                  지금 이 순간도 새로이 생겨날 지식들을 하나씩 습득하고 제 것으로 만들어가는 재미는 도파민이 되어 저의 원동력이 되었습니다.

                  개발자로 전직해야겠다는 확신이 서기까지의 시간이 얼마 걸리지 않았습니다.
                  이렇게까지 강한 확신을 가질 수 있는 일이 또 있을까요?
                  꾸준히 공부를 할 수 있다는 것, 하고 싶다는 의지가 생긴다는 것.
                  그로 인해 성장 할 수 있는 환경이라는 것 자체가 축복이라고 생각합니다.
                  프로그래밍 공부를 조금 더 빨리 다짐했더라면 좋았을지 모르겠으나, 지금 이 순간이 가장 빠르다는 믿음으로 
                  제 다양한 사회 경험이 유연하고 소통하기 쉬운 조직으로 성장할 수 있도록 도울 수 있을 것입니다.
                  동료들과 함께 다채로운 색감에 대해 생각하고 사용자의 입장에서 보다 좋은 구현을 상용화 시킬 수 있도록 즐기며 일하고 싶습니다.   
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