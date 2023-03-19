
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
                  저는, 제 삶의 새로운 과정을 탐색하던 중 개발을 만났습니다.
                  프로그래밍은 해가 해왔던 일과 달라 배움이 쉽지는 않았지만, 상방이 뚫려있어 노력하는 만큼 성장할 수 있고 
                  새로운 가치를 만들어 낼 수 있다는 것에 큰 흥미와 재미를 느꼈고 현재 역시 재밌게 배움을 쌓아가고 있습니다.
                  일과 병행하며 공부하고 있는 터라 다소 느립니다만, 새로운 것을 배울 생각과 배우고 있다는 도파민이 저를 언제든 일어서게 만듭니다.
                  개발자로 전직해야겠다는 확신이 서기까지의 시간은 얼마 걸지지 않았던 듯 싶습니다.
                  이렇게까지 강한 확신을 가질 수 있는 일이 또 있을까요. 
                  새로운 정보들이 물밀듯 쏟아지고 공부해야하는 것은 끝이 없습니다. 아마 뒤쳐졌단 생각에 불안할 때도, 학습량에 압박감을 느낄 때도 많을 것 같습니다.
                  그렇지만 재밌습니다. 그래서 행복하고요. 공부를 할 수 있다는 것, 그로 인해 성장 할 수 있다는 것 자체가 축복이라고 생각하기 때문입니다.
                  이제야 개발자가 되겠다 마음 먹은 것이 조금 아쉽습니다만, 지금 이 순간이 가장 빠르다는 문장을 믿으며.
                  제 다양한 경험이 유연하고 소통하기 쉬운 조직으로 성장할 수 있도록 도우며, 많은 사람들과 함께하고 싶습니다. 
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