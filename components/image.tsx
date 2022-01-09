import ImageNext from "next/image";

function Image(props : any) {
  return (
    <div className={"relative " +  props.className}>
      <ImageNext layout="responsive" objectFit="contain" src={props.src} />
    </div>
  );
}

export default Image;
