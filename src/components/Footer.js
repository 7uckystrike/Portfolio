import styled from "@emotion/styled"

export default function Footer() {
  const MoveOnTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
    return(
      <TopBtn onClick={MoveOnTop}>go to top</TopBtn>
    )
}

// 스타일링
const TopBtn = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: 3px solid #3eb489;
  cursor: pointer;
  margin-bottom: 50px;
`