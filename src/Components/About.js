import { useContext ,useEffect} from "react" //ya use karna tha to useContext use kia 
import noteContext from "../Context/notes/noteContext" //note Context say banaya hay to aus ko import kia aur dakho nichy use kar lia 

const About = () => {
    const a = useContext(noteContext)
    useEffect(() => {
        a.update();
       //eslint-disable-next-line
    }, );
  return (
    <div>
      This is about {a.state.name} and he is in class {a.state.class}
    </div>
  )
}

export default About
