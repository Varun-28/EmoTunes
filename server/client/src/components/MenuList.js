import { BsFillHouseFill } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { AiFillCamera, AiFillPlayCircle } from "react-icons/ai";
import { GiChoice } from "react-icons/gi";

const MenuList = [
  {
    id: 1,
    icon: <BsFillHouseFill />,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    icon: <GiChoice />,
    name: "Choice",
    path: "/choice",
  },
  {
    id: 3,
    icon: <AiFillCamera />,
    name: "Capture",
    path: "/choice/capture",
  },
  {
    id: 4,
    icon: <AiFillPlayCircle />,
    name: "Song Player",
    path: "/choice/playlist",
  },
  {
    id: 5,
    icon: <BiLogIn />,
    name: "Login",
    path: "/login",
  },
];

export { MenuList };
