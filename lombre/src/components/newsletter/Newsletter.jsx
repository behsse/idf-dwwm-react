import { Button } from "../button/Button"
import { Input } from "../input/Input"
import style from "./newsletter.module.scss"

export const Newsletter = () => {
    return(
        <div className={style.newsletter}>
            <h4>Subscribe</h4>
            <p>Sign-up to our newsletter</p>
            <Input type="email" placeholder="Your mail"/>
            <Button text="submit" href="/"/>
        </div>
    )
}