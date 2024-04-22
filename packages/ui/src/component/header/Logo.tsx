import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <span className="text-[25px] font-Poppins font-[500]">CodingSync</span>
      </Link>
    </div>
  );
};

export default Logo;
