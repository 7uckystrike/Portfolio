import profile from '../images/profile.jpeg'
import styled from "@emotion/styled"
import { RiGithubFill, RiMailLine } from 'react-icons/ri'

export default function Header() {

    return(
        <HeadWrapper>
            <WrapperContent>
                <WrapperLeft>
                    <span className='name'>신자영</span>
                    <span className='description'>front-end developer</span>
                    <span className='icon'>
                        <a href='https://github.com/7uckystrike'><RiGithubFill/></a>&nbsp; 
                        <a href='mailto:yeoung.dev@gmail.com'><RiMailLine/></a>
                    </span>
                </WrapperLeft>
                <WrapperRight>
                    <img src={profile} alt="프로필사진" />
                </WrapperRight>
            </WrapperContent>
        </HeadWrapper>
    )
}

// 스타일링
const HeadWrapper = styled.div`
   width: 800px;
   margin-top: 100px;
`

const WrapperContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: flex-end;
    border-top: 3px solid #000;
    border-bottom: 3px solid #000;
    padding: 40px 30px;
    margin-bottom: 40px;
`

const WrapperLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
    padding-bottom: 4px;
    padding-right: 40px;

    .name {
        font-weight: bold;
        font-size: 25px;
        padding-bottom: 4px;
    }

    .description {
        font-size: 8px;
        font-style: italic;
        margin-bottom: 9px; 
    }

    .icon {
        font-size: 20px;
        cursor: pointer;
    }
`

const WrapperRight = styled.div`
    display: flex;

    img {
        width: 150px;
        height: 150px;
        border-radius: 25px;
    }
`