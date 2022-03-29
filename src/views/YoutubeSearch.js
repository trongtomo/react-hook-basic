import "./Blog.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";
const YoutubeSearch = () => {
  const [query, setQuery] = useState("");
  const [video, setVideo] = useState([]);
  useEffect(() => {}, []);
  const handleSearchYoutube = async () => {
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResult: 20,
        key: "AIzaSyDIXJIMGIqNvZ5l4BeUsakObp1eTBgC90I",
        type: "video",
        q: query,
      },
    });
    if (res && res.data && res.data.items) {
      let raw = res.data.items;
      let result = [];
      if (raw && raw.length > 0) {
        raw.map((item) => {
          let object = {};
          object.id = item.id.videoId;
          object.title = item.snippet.title;
          object.createdAt = item.snippet.publishedAt;
          object.authour = item.snippet.channelTitle;
          object.description = item.snippet.description;
          result.push(object);
        });
      }
      setVideo(result);
    }
    console.log("check res utube", res);
  };
  return (
    <div className="youtube-search-container">
      <div className="yt-search">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="button" onClick={handleSearchYoutube}>
          Search
        </button>
      </div>
      {video &&
        video.length > 0 &&
        video.map((item) => {
          return (
            <div className="yt-result" key={item.id}>
              <div className="left"></div>

              <iframe
                src={`https://www.youtube.com/embed/${item.id}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="right">
                <div className="title">{item.title}</div>
                <div className="created-at">
                  Created At:{" "}
                  {moment(item.createdAt).format("DD-MM-YYYY HH:mm:ss A")}
                </div>
                <div className="authour">{item.authour}</div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default YoutubeSearch;
