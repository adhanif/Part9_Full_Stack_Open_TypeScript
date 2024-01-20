import { ContentProps } from '../types';

const Content = ({ parts }: ContentProps): JSX.Element => {
  return (
    <div>
      {parts.map((ele, i) => (
        <p key={i}>
          {ele.name}
          {ele.exerciseCount}
        </p>
      ))}
    </div>
  );
};

export default Content;
