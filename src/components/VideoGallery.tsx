const VideoGalary = () => {
  return (
    <section className="bg-gray-100 section-padding" id="video-tour">
      {/* title */}
      <h2 className="text-4xl text-center font-bold mb-10 text-black">
        Experience the Plot of Land - Video Gallery
      </h2>

      {/* youtube video */}
      <iframe
        src="https://www.youtube.com/embed/Z-8BSkNg9jw?si=_4jVoKKuh4PXnsAB"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="w-full h-[90vh] rounded"
      ></iframe>
    </section>
  );
};

export default VideoGalary;
