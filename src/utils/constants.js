export const BUTTON_LIST = [
  "All",
  "Olypmic Games",
  "News",
  "World War 2",
  "Podcasts",
  "Final",
  "Live",
  "Independence Day",
];

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=";

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEO_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&regionCode=IN&key=" +
  "&q=Surfing";
export const COMMENTS_DATA = [
  {
    name: "Comment 1",
    author: "Author A",
    nested_comments: [
      {
        name: "Reply 1.1",
        author: "Author B",
        nested_comments: [
          {
            name: "Reply 1.1.1",
            author: "Author C",
            nested_comments: [],
          },
        ],
      },
    ],
  },
  {
    name: "Comment 2",
    author: "Author D",
    nested_comments: [],
  },
  {
    name: "Comment 3",
    author: "Author E",
    nested_comments: [
      {
        name: "Reply 3.1",
        author: "Author F",
        nested_comments: [],
      },
    ],
  },
  {
    name: "Comment 4",
    author: "Author G",
    nested_comments: [],
  },
  {
    name: "Comment 5",
    author: "Author H",
    nested_comments: [
      {
        name: "Reply 5.1",
        author: "Author I",
        nested_comments: [
          {
            name: "Reply 5.1.1",
            author: "Author J",
            nested_comments: [],
          },
        ],
      },
    ],
  },
  {
    name: "Comment 6",
    author: "Author K",
    nested_comments: [],
  },
  {
    name: "Comment 7",
    author: "Author L",
    nested_comments: [
      {
        name: "Reply 7.1",
        author: "Author M",
        nested_comments: [],
      },
    ],
  },
  {
    name: "Comment 8",
    author: "Author N",
    nested_comments: [],
  },
  {
    name: "Comment 9",
    author: "Author O",
    nested_comments: [
      {
        name: "Reply 9.1",
        author: "Author P",
        nested_comments: [],
      },
    ],
  },
  {
    name: "Comment 10",
    author: "Author Q",
    nested_comments: [],
  },
];
