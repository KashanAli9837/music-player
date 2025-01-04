const Video = ({ url }) => {
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center md:p-4">
      <iframe
        src={`https://www.youtube.com/embed/${url}?playlist=${url}&enablejsapi=1&loop=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full max-w-[560px] aspect-video rounded-md"
      ></iframe>
    </div>
  );
};

export default Video;