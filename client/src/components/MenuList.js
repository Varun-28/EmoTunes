import { BsFillHouseFill, BsJournalAlbum } from "react-icons/bs";
import { BiPulse } from "react-icons/bi";
import { FaMicrophoneAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const MenuList = [
  {
    id: 1,
    icon: <BsFillHouseFill />,
    name: "Home",
  },
  {
    id: 2,
    icon: <BiPulse />,
    name: "Categories",
  },
  {
    id: 2,
    icon: <FaMicrophoneAlt />,
    name: "Artist",
  },
  {
    id: 4,
    icon: <BsJournalAlbum />,
    name: "Albums",
  },
  {
    id: 5,
    icon: <AiFillStar />,
    name: "Favourites",
  },
];

export { MenuList };
