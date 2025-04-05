import { ModeToggle } from "@/components/global/mode-toggle";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const font = Playfair_Display({ subsets: ["latin"] });

const Navigation = async () => {
  const { userId } = await auth();

  return (
    <div className="fixed top-0 bg-neutral-600/10 right-0 left-0 p-4 flex items-center justify-between z-50">
      <aside className="flex items-center gap-2">
        <span className="text-xl font-bold"> Imran.</span>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul
          className={cn(
            "flex items-center font-semibold justify-center gap-8",
            font.className
          )}
        >
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Documentation</Link>
          <Link href={"#"}>Features</Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        {userId ? (
          <UserButton />
        ) : (
          <Link
            href={"/agency"}
            className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80"
          >
            Login
          </Link>
        )}

        <ModeToggle />
      </aside>
    </div>
  );
};

export default Navigation;
