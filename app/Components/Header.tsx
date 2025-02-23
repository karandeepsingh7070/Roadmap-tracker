import Image from 'next/image';
import logo from "../utils/logo.svg"
import femaleAvatar from "../utils/femaleAvatar.svg"
import "../header.css"; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Image src={logo} alt="" className="logo-img" />
        <h1 className="course-title">Complete Next Js Bootcamp</h1>
      </div>
        <Image src={femaleAvatar} alt="" className="avatar-img" />
    </header>
  );
};

export default Header;
