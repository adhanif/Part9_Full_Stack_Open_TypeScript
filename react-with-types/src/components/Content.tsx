import React from 'react';
import { ContentProps } from '../types';
import Part from './Part';

const Content = ({ parts }: ContentProps): JSX.Element => {
  return (
    <div>
      {parts.map((course, i) => {
        return <Part key={i} course={course} />;
      })}
    </div>
  );
};

export default Content;
