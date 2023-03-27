import styled from "@emotion/styled"
import { Link } from "react-router-dom"

export default function Introduce() {

  return(
    <IntroduceWrapper>
      <div className="name">SHIN JA YOUNG</div>
      <div className="title">PORTFOLIO</div>
      <IntroduceLink>
        <Link to="/aboutme" style={{ textDecoration: "none" }}>
          <span>introduce</span>
        </Link>
      </IntroduceLink>
    </IntroduceWrapper>
  )
}

const IntroduceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .name {
    font-family: 'Anton', sans-serif;
    font-size: 15rem;
    display: inline-block;
    transform: rotate(-15deg);
  }

  .title {
    font-family: 'Anton', sans-serif;
    font-size: 21rem;
    display: inline-block;
    transform: rotate(-15deg);
    margin-top: -300px;
  }
`

const IntroduceLink = styled.div`
  width: 180px;
  height: 50px;
  background-color: #e84114;
  position: relative;
  bottom: 150px;
  left: 1000px;

  span {
    display: block;
    font-family: 'Anton', sans-serif;
    color: #fff;
    font-size: 25px;
    text-align: center;
  }
`