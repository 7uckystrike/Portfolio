
import styled from "@emotion/styled"
import { AiFillGithub } from 'react-icons/ai'
import { RxNotionLogo } from 'react-icons/rx'

export default function Introduce() {

    return(
        <IntroduceWrapper>
            <Wrapper__title>
                사이드 프로젝트
            </Wrapper__title>
            <Wrapper__description>
                <div className='sideProject'>
                    <div className='project'>
                        <div className='title'>emotion note </div>
                        <div> <AiFillGithub/> <RxNotionLogo/> </div>
                    </div>
                    <div className='project'>
                        <div className='title'>community</div>
                    </div>
                </div>
                <div className='sideProject'>
                    <div className='project'>
                        <div className='title'>book search</div>
                    </div>
                    <div className='project'>
                        <div className='title'>todo list</div>
                    </div>
                </div>
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
    margin-bottom: 400px;

    .sideProject {
        width: 100%
    }

    .project {
        background: yellow;
        height: 300px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        padding: 0px 20px;
        margin-bottom: 35px;
        font-size: 20px;

        .title {
            border-bottom: 4px solid #f45a8f;
        }
    }


`