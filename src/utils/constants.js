import dayjs from "dayjs";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50";

export const formatViewCount = (viewCount) => {
  if (viewCount >= 1000000) {
    return (viewCount / 1000000).toFixed(1) + "M";
  } else if (viewCount >= 1000) {
    return (viewCount / 1000).toFixed(1) + "K";
  } else {
    return `${viewCount}`;
  }
};

// List of category IDs
const popularRegionCodes = [
  "US",
  "IN",
  "GB",
  "CA",
  "AU",
  "BR",
  "FR",
  "DE",
  "KR",
  "MX",
  "JP",
  "IT",
  "RU",
  "ES",
  "ZA",
  "NG",
  "PL",
  "AR",
  "PH",
  "ID",
  "EG",
  "TH",
  "PK",
  "IT",
  "VN",
  "SA",
  "TR",
  "CL",
  "CO",
  "UA",
  "MY",
  "PE",
  "NG",
  "SG",
  "KR",
  "NG",
  "ZA",
  "UA",
  "PK",
  "TW",
  "KH",
  "DZ",
  "RO",
  "PT",
  "TZ",
  "AE",
  "HN",
  "KE",
  "LB",
  "LK",
  "KR",
  "LY",
  "GH",
  "HN",
  "TZ",
  "BG",
  "DO",
  "PR",
  "MT",
];

export const getRandomRegionId = () => {
  const randomIndex = Math.floor(Math.random() * popularRegionCodes.length);
  return popularRegionCodes[randomIndex];
};

export function convertToNumber(number) {
  return Number(number).toLocaleString();
}

export function currentDateTime(props) {
  let dateString = props;

  if (!dayjs(dateString).isValid()) {
    console.error("Invalid date string:", dateString);
    return "Invalid Date";
  }

  let formattedDate = dayjs(dateString).format("MMM D, YYYY, h:mm A");
  return formattedDate;
}


export const renderParagraphWithLinks = (apiResponse) => {
  if (!apiResponse) {
    return <p>Loading...</p>;
  }
  const urlRegex = /(https?|ftp):\/\/[^\s/$.?#].[^\s]*/gi;

  // Replace links with clickable anchors in the paragraph
  const paragraphWithLinks = apiResponse.replace(
    new RegExp(urlRegex.source, "gi"),
    (match) => `<a href="${match}" target="_blank" rel="desc_link">${match}</a>`
  );

  return (
    <p
      className="leading-loose text-[0.955rem] text-black  description"
      dangerouslySetInnerHTML={{ __html: paragraphWithLinks }}
    />
  );
};

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

export const LIVE_CHAT_COUNT = 10;

export const GOOGLE_API_KEY = process.env.REACT_APP_VIBETUBE;

export const YOUTUBE_VIDEOS_API2 =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=16";
