import { Link } from "react-router-dom";
function Button({ to, title, className, onClick }) {
  let Component = "button";
  return (
    <Link onClick={onClick} to={to}>
      <Component className={className}>{title}</Component>
    </Link>
  );
}

export default Button;
