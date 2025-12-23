import { Info } from "./info/Info"
import style from "./infoSection.module.scss"

export const InfoSection = () => {
  return (
    <div className={style.infoSection}>
        <Info 
            src="/coffee.jpg" 
            alt="Image de café" 
            title="Coffee" 
            texts={
                ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ipsa officiis accusamus dolorum consequatur cupiditate, assumenda eaque ipsam porro quibusdam rerum distinctio suscipit obcaecati ab veniam facilis molestiae eveniet odit.", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ipsa officiis accusamus dolorum consequatur cupiditate, assumenda eaque ipsam porro quibusdam rerum distinctio suscipit obcaecati ab veniam facilis molestiae eveniet odit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ipsa officiis accusamus dolorum consequatur cupiditate, assumenda eaque ipsam porro quibusdam rerum distinctio suscipit obcaecati ab veniam facilis molestiae eveniet odit.", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ipsa officiis accusamus dolorum consequatur cupiditate, assumenda eaque ipsam porro quibusdam rerum distinctio suscipit obcaecati ab veniam facilis molestiae eveniet odit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ipsa officiis accusamus dolorum consequatur cupiditate, assumenda eaque ipsam porro quibusdam rerum distinctio suscipit obcaecati ab veniam facilis molestiae eveniet odit."]
            }
            reverse={false}
        />
        <Info 
            src="/about.jpg" 
            alt="Image d'un ordinateur portable" 
            title="About" 
            texts={
                ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ipsa officiis accusamus dolorum consequatur cupiditate, assumenda eaque ipsam porro quibusdam rerum distinctio suscipit obcaecati ab veniam facilis molestiae eveniet odit.", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ipsa officiis accusamus dolorum consequatur cupiditate, assumenda eaque ipsam porro quibusdam rerum distinctio suscipit obcaecati ab veniam facilis molestiae eveniet odit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ipsa officiis accusamus dolorum consequatur cupiditate, assumenda eaque ipsam porro quibusdam rerum distinctio suscipit obcaecati ab veniam facilis molestiae eveniet odit.", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ipsa officiis accusamus dolorum consequatur cupiditate, assumenda eaque ipsam porro quibusdam rerum distinctio suscipit obcaecati ab veniam facilis molestiae eveniet odit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ipsa officiis accusamus dolorum consequatur cupiditate, assumenda eaque ipsam porro quibusdam rerum distinctio suscipit obcaecati ab veniam facilis molestiae eveniet odit."]
            }
            reverse={true}
        />
    </div>
  )
}
