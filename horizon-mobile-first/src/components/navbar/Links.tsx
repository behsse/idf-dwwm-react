interface Props {
    text : string,
    link : string
}

export const Links = ({text, link} : Props) => {
  return (
    <li>
        <a href={link}>{text}</a>
    </li>
  )
}
