"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
function DynamicButton() {
  const pathname = usePathname();
  const buttonText: string = pathname === "/login" ? "Sign up" : "Login";
  const buttonLink: string = pathname === "/login" ? "/signup" : "/login";
  return (
    <Link href={buttonLink}>
      <div className="flex justify-end mr-4 mt-4">
        <div className="singUp  w-28 h-12 rounded-xl bg-[#4f46e5] flex border-2 border-black justify-center items-center">
          <p className="text-white text-2xl font-bold hover:scale-105 transition ease-in-out duration-300 hover:text-[#dddddd] cursor-pointer">
            {buttonText}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default DynamicButton;