import type { FC } from 'react';

export const Card: FC = () => {
  return (
    <div className="flex p-12 w-full bg-white rounded-2xl shadow-search">
      <div>
        <div className="w-28 h-28 mr-9">LOGO</div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-bold text-black">The Octocat </h1>
          <p className="text-base text-gray">Joined 25 Jan 2011</p>
        </div>
        <a href="/" className="text-blue mb-5">
          @octocat
        </a>
        <p className="text-blue-ish">This profile has no bio</p>
        <div className="bg-gray-ish rounded-xl px-8 py-6 flex items-center my-8 justify-between">
          <div className="flex flex-col">
            <p className="text-s text-blue-ish">Repos</p>
            <p className="font-bold text-black text-l">8</p>
          </div>
          <div className="flex flex-col">
            <p className="text-s text-blue-ish">Followers</p>
            <p className="font-bold text-black text-l">3938</p>
          </div>
          <div className="flex flex-col">
            <p className="text-s text-blue-ish">Following</p>
            <p className="font-bold text-black text-l">9</p>
          </div>
        </div>
      </div>
    </div>
  );
};
