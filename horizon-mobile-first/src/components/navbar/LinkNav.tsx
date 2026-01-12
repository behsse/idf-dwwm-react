import { Link } from "react-router"

interface Props {
    text : string,
    link : string
}

export const LinkNav = ({text, link} : Props) => {
  return (
    <li>
        <Link to={link}>{text}</Link>
    </li>
  )
}