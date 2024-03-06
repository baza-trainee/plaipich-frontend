import getYouTubeID from "get-youtube-id";

export const VideoPlayer = ({ url }: { url: string }) => {
  return (
    <iframe
      className="aspect-video w-full lg:mb-12 mb-8"
      src={`https://www.youtube.com/embed/${getYouTubeID(url)}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
