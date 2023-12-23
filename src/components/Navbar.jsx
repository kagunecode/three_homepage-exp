import { Link } from "react-router-dom";
import { useNavigationContext } from "../contexts/NavigationContext";

export default function Navbar() {
  const { status, setStatus } = useNavigationContext();
  const handleTransitionToggle = (value) => {
    setStatus(value);
  };
  return (
    <div className="absolute mix-blend-difference text-[white] z-10 flex justify-end gap-[30vw] py-3 px-5 right-0">
      <Link
        to="/work"
        className="text-3xl tracking-tighter font-semibold"
        onClick={() => handleTransitionToggle(true)}
      >
        Work
      </Link>
      <Link to="/studio" className="text-3xl tracking-tighter font-semibold">
        Studio
      </Link>
    </div>
  );
}
