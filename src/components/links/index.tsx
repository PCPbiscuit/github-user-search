import type { FC } from 'react';

import { ReactComponent as Company } from './company.svg';
import { ReactComponent as Location } from './location.svg';
import { ReactComponent as Twitter } from './twitter.svg';
import { ReactComponent as Website } from './website.svg';

export const Links: FC = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="space-y-4">
        <div className="flex items-center space-x-5">
          <Location />
          <p>San Francisco</p>
        </div>
        <div className="flex items-center space-x-5">
          <Website />
          <p>Not available</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-5">
          <Twitter />
          <p>Not available</p>
        </div>
        <div className="flex items-center space-x-5">
          <Company />
          <p>Not available</p>
        </div>
      </div>
    </div>
  );
};
