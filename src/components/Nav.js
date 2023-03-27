import styled from "@emotion/styled"
import { Link } from "react-router-dom"

export default function Nav () {

  return(
    <NavWrapper>
      <ul>
          <Link to="/introduce" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to="/aboutme" style={{ textDecoration: "none" }}>
            <li>introduce</li>
          </Link>
          <Link to="/project" style={{ textDecoration: "none" }}>
            <li>project</li>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <li>contact</li>
          </Link>
      </ul>
    </NavWrapper>
  )
}


// 스타일링
const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  ul {
    display: flex;
    flex-direction: row;
  }

  li {
    width: 180px;
    height: 50px;
    background-color: #e84114;
    display: block;
    font-family: 'Anton', sans-serif;
    color: #fff;
    font-size: 25px;
    text-align: center;
    margin-right: 5px;
  }
`