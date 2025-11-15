const Video = (props: { src: string; title: string }) => {
  return (
    <>
      <iframe
        title={props.title}
        className="w-full h-full"
        src={props.src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </>
  );
}

export default Video;