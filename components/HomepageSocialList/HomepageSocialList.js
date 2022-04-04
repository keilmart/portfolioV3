import useWindowSize from "../../hooks/useWindowSize";
// https://dev.to/heymarkkop/embed-twitter-widget-on-reactjs-1768 //

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

const HomepageSocialList = ({ posts }) => {
  const { width, height } = useWindowSize();

  return (
    <div className="grid grid-cols-1 gap-4 -mt-10 md:-mt-8 md:grid-cols-3">
      <div className="col-span-2 md:col-start-2">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="keilmart"
          options={width >= 1024 ? { height: 350 } : { height: 350 }}
          // theme="dark"
          // options={{ height: 350 }}
        />
      </div>
    </div>
  );
};

export default HomepageSocialList;
