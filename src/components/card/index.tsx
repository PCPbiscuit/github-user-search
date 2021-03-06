import type { FC } from 'react';
import { useContext } from 'react';

import { Links } from '../';
import { makeRequest } from '../../api';
import { SearchContext } from '../search/searchContext';

import { useQuery } from 'react-query';

export const Card: FC = () => {
  const fetch = () => makeRequest(`/users/${search}`);
  const { data: data, isError } = useQuery('user', fetch, {
    enabled: false,
  });
  const [search] = useContext(SearchContext);

  if (isError) {
    return <p>Error</p>;
  }
  if (!data) return null;

  return (
    <div className="flex p-12 w-full bg-white rounded-2xl shadow-search dark:bg-blue-dark">
      <div>
        <div className="w-28 h-28 mr-9">
          <img src={data.data?.avatar_url} />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-bold text-black dark:text-white">
            {data.data?.login}
          </h1>
          <p className="text-base text-gray dark:text-white">
            Joined 25 Jan 2011
          </p>
        </div>
        <a href={data.data?.html_url} className="text-blue mb-5">
          @{data.data?.login}
        </a>
        <p className="text-blue-ish dark:text-white">
          {data.data?.bio || 'This profile has no bio'}
        </p>
        <div className="bg-gray-ish rounded-xl px-8 py-6 flex items-center my-8 justify-between dark:bg-black-ish">
          <div className="flex flex-col">
            <p className="text-s text-blue-ish dark:text-white">Repos</p>
            <p className="font-bold text-black dark:text-white text-l">
              {data.data?.public_repos}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-s text-blue-ish dark:text-white">Followers</p>
            <p className="font-bold text-black dark:text-white text-l">
              {data.data?.followers}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-s text-blue-ish dark:text-white">Following</p>
            <p className="font-bold text-black  dark:text-white text-l">
              {data.data?.following}
            </p>
          </div>
        </div>
        <Links
          location={data.data?.location}
          company={data.data?.company}
          blog={data.data?.blog}
          twitter={data.data?.twitter_username}
        />
      </div>
    </div>
  );
};
