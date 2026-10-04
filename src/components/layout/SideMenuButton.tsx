import Link from "next/link";

export default function SideMenuButton() {
  return (
      <Link className="side-menu-button" href="/menu/" aria-label="Open the Element Nail Bar service menu">
        Menu
      </Link>
  );
}
