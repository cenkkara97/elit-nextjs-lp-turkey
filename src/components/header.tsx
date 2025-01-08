import Image from "next/image";

export default function NavHeader() {
  return (
    <nav className="w-full bg-primaryBlue shadow">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-0">
        <div className="flex h-16 items-center justify-between">
          <Image
            src="/assets/images/navbar-logo.png"
            alt="Company Logo"
            width={140}
            height={50}
            className="h-12 w-auto"
          />
        </div>
      </div>
    </nav>
  );
}
