import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import {
  AiOutlineShareAlt,
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineHeart,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";

const Layout = () => {
  const location = useLocation();
  const { company } = useParams();

  return (
    <main className="w-full min-h-screen bg-back flex gap-5">
      <aside className="w-[5%] bg-white h-screen fixed flex flex-col justify-between items-center pt-5 pb-8">
        <div className="flex flex-col gap-10">
          <div className="w-8 h-8 rounded-full cursor-pointer bg-gray-300 hover:scale-105 transition-all duration-150"></div>
          <ul className="flex flex-col gap-5 list-none">
            <li
              className={`w-fit h-fit p-2 ${
                location.pathname === "/" && "bg-blue-200 rounded"
              }`}
            >
              <Link to="/">
                <AiOutlineHome
                  className="cursor-pointer hover:scale-105 trasa' duration-150"
                  size={28}
                />
              </Link>
            </li>
            <li
              className={`w-fit h-fit p-2 ${
                location.pathname === "/users" && "bg-blue-200 rounded"
              }`}
            >
              <Link to="/users">
                <AiOutlineUsergroupAdd
                  className="cursor-pointer hover:scale-105 trasa' duration-150"
                  size={28}
                />
              </Link>
            </li>
            <li
              className={`w-fit h-fit p-2 ${
                location.pathname === "/share" && "bg-blue-200 rounded"
              }`}
            >
              <Link to="/share">
                <AiOutlineShareAlt
                  className="cursor-pointer hover:scale-105 trasa' duration-150"
                  size={28}
                />
              </Link>
            </li>
            <li
              className={`w-fit h-fit p-2 ${
                location.pathname === "/opportunity" && "bg-blue-200 rounded"
              } ${
                location.pathname === `/opportunity/${company}` &&
                "bg-blue-200 rounded"
              }`}
            >
              <Link to="/opportunity">
                <RiArticleLine
                  className="cursor-pointer hover:scale-105 trasa' duration-150"
                  size={28}
                />
              </Link>
            </li>
            <li
              className={`w-fit h-fit p-2 ${
                location.pathname === "/favorite" && "bg-blue-200 rounded"
              }`}
            >
              <Link to="/favorite">
                <AiOutlineHeart
                  className="cursor-pointer hover:scale-105 trasa' duration-150"
                  size={28}
                />
              </Link>
            </li>
          </ul>
        </div>
        <ul className="flex flex-col gap-3 list-none">
          <li
            className={`w-fit h-fit p-2 ${
              location.pathname === "/settings" && "bg-blue-200 rounded"
            }`}
          >
            <Link to="/settings">
              <AiOutlineSetting
                className="cursor-pointer hover:scale-105 trasa' duration-150"
                size={28}
              />
            </Link>
          </li>
          <div className="w-8 h-8 rounded-full cursor-pointer bg-gray-300 hover:scale-105 transition-all duration-150"></div>
        </ul>
      </aside>
      <div className="w-[95%] ml-[5%]">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
