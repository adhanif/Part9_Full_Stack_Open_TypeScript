import { Heading } from "../types";

const Header = (props: Heading) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

export default Header;
