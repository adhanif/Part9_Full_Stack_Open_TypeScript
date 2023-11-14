interface Props {
  name: string;
}

const Header = (props: Props) => {
  return <div>{props.name}</div>;
};

export default Header;
