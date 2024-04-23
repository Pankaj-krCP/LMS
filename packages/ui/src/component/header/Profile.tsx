import { FC, useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { AbsoluteBox, ButtonHover } from "../../utils/constant";

interface Props {
  auth: string;
  setAuth: Function;
}

const Profile: FC<Props> = ({ auth, setAuth }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="ml-4">
      {auth === "" ? (
        <AiOutlineLogin
          className="cursor-pointer"
          size={24}
          onClick={() => setAuth("login")}
        />
      ) : (
        <FaUserCircle
          className="cursor-pointer"
          size={24}
          onClick={() => setOpen(!open)}
        />
      )}
      {open && (
        <div
          className={`${AbsoluteBox} top-[100%] mt-1 right-16 800px:right-10`}
        >
          <div
            className={`cursor-pointer rounded p-2 mt-1 ${ButtonHover}`}
            onClick={() => setAuth("profile")}
          >
            <span className={`py-2 text-[18px] px-6 font-Poppins font-[400]`}>
              Profile
            </span>
          </div>
          <div
            className={`cursor-pointer rounded p-2 ${ButtonHover}`}
            onClick={() => setAuth("logout")}
          >
            <span className={`py-2 text-[18px] px-6 font-Poppins font-[400]`}>
              Log Out
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
