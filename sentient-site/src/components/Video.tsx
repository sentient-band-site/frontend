export function Video(props: { src: string; title: string }) {
  return (
    <>
      <div className="aspect-h-9 aspect-w-16">
        <iframe
          title={props.title}
          width="560"
          height="315"
          className="mb-5"
          src={props.src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </>
  );
}
