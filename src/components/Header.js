import profile from '../images/profile.jpeg'
import styled from "@emotion/styled"
import { RiGithubFill, RiMailLine } from 'react-icons/ri'

export default function Header() {

    return(
        <HeadWrapper>
            <Wrapper__content>
                <Wrapper__left>
                    <span className='name'>신자영</span>
                    <span className='description'>front-end developer</span>
                    <span className='icon'>
                        <a href='https://github.com/7uckystrike'><RiGithubFill/></a>&nbsp; 
                        <a href='mailto:yeoung.dev@gmail.com'><RiMailLine/></a>
                    </span>
                </Wrapper__left>
                <Wrapper__right>
                    <img src={profile} alt="프로필사진" />
                </Wrapper__right>
            </Wrapper__content>
        </HeadWrapper>
    )
}




// 스타일링
const HeadWrapper = styled.div`
   width: 800px;
   margin-top: 100px;
`

const Wrapper__content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: flex-end;
    border-top: 3px solid #000;
    border-bottom: 3px solid #000;
    padding: 40px 30px;
    margin-bottom: 40px;
`

const Wrapper__left = styled.div`
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

const Wrapper__right = styled.div`
    display: flex;

    img {
        width: 150px;
        height: 150px;
        border-radius: 25px;
    }
`