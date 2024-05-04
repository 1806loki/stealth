import Link from "next/link";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-[1250px] text-sm text-gray-400 flex  justify-between   px-4 py-2">
      <div>
        <Link href="#">@ 2024, ProfileScreener.com</Link>
      </div>
      <div className="flex gap-3">
        <Link href="#">Contact us</Link>
        <Link href="#">Privacy</Link>
        <Link href="#">Terms</Link>
      </div>
    </div>
  );
};

export default Footer;
