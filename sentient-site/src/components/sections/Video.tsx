export function Video(props: { src: string; title: string }) {
  return (
    <>
      <div className="w-full aspect-h-9 md:aspect-w-16 md:mb-5">
        <iframe
          title={props.title}
          className="w-full h-full"
          src={props.src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </>
  );
}
