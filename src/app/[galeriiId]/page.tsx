import { Gallery } from "../components/gallery/Gallery";

export default async function Galerii({ params }: any) {
  const { galeriiId } = await params;
  const decodedValue = decodeURIComponent(galeriiId);
  const filterId = decodedValue.split(":")[1];
  console.log("params", params);

  return <Gallery filterId={filterId} />;
}
