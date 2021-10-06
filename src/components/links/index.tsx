import type { FC } from 'react';

interface Props {
  location?: string;
  company?: string;
  blog?: string;
  twitter?: string;
}

import { ReactComponent as Company } from './company.svg';
import { ReactComponent as Location } from './location.svg';
import { ReactComponent as Twitter } from './twitter.svg';
import { ReactComponent as Website } from './website.svg';

export const Links: FC<Props> = ({ location, company, blog, twitter }) => {
  return (
    <div className="grid grid-cols-2 dark:text-white text-blue-ish">
      <div className="space-y-4">
        <div className="flex items-center space-x-5">
          <Location className=" fill-current" />
          <p>{location || 'Not available'}</p>
        </div>
        <div className="flex items-center space-x-5">
          <Website className=" fill-current" />
          <p>{blog || 'Not available'}</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-5">
          <Twitter className=" fill-current" />
          <p>{twitter || 'Not available'}</p>
        </div>
        <div className="flex items-center space-x-5">
          <Company className=" fill-current" />
          <p>{company || 'Not available'}</p>
        </div>
      </div>
    </div>
  );
};
