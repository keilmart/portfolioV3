// import { ArrowRightIcon } from "@heroicons/react/outline";

import {
  TwitterTimelineEmbed,
  // TwitterShareButton,
  // TwitterFollowButton,
  // TwitterHashtagButton,
  // TwitterMentionButton,
  // TwitterTweetEmbed,
  // TwitterMomentShare,
  // TwitterDMButton,
  // TwitterVideoEmbed,
  // TwitterOnAirButton,
} from "react-twitter-embed";
// import Link from "next/link";

const HomepageBlogList = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 gap-4 -mt-10 md:-mt-8 md:grid-cols-3">
      <div className="col-span-1">
        {/* <div className="border-b-2 border-dotted last-of-type:border-0">
          <Link href="/">
            <a className="grid grid-cols-1 gap-1 py-4 transition duration-500 ease-in-out group md:py-8 md:gap-4 md:grid-cols-4 hover:bg-gray-100">
              <div className="col-span-1">
                <span className="inline-block text-sm text-tertiary">
                  Date of Post
                </span>
              </div>
              <div className="flex justify-between col-span-3">
                <div>
                  <h3 className="mb-1 text-xl font-semibold text-primary">
                    Blog Title
                  </h3>
                  <p className="text-md text-tertiary">Blog Subtitle</p>
                </div>
                <ArrowRightIcon className="flex-initial w-5 h-5 mr-4 text-gray-400 transition duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </a>
          </Link>
        </div> */}
      </div>
      <div className="col-span-2">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="keilmart"
          options={{ height: 350 }}
        />
      </div>
    </div>
  );
};

export default HomepageBlogList;
