import ImageNext from "next/image";

function Image(props : any) {
  return (
    <div className={props.className}>
      <div className={"relative "}>
        <ImageNext layout="responsive" objectFit="contain" src={props.src} />
      </div>
    </div>
  );
}

export default Image;
