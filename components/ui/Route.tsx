import Link from "next/link";
import clsx from "clsx";

interface RouteProps {
  route: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Route = ({route, label, isActive, onClick}: RouteProps) => {
  return (
    <Link href={route}
    onClick={onClick}
    className={clsx(isActive && "text-primary")}
    >
      {label}
    </Link>
  )
}

export default Route;

