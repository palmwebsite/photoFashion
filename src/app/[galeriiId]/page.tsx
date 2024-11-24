import { Gallery } from "../components/gallery/Gallery";

export default async function Galerii({ params }: any) {
  // Ensure params are awaited properly
  const prms = await params;
  const { galeriiId } = await params;
  console.log(prms);

  // Decode the URL-encoded value
  const decodedValue = decodeURIComponent(galeriiId);

  // Extract the part after ":"
  const filterId = decodedValue.split(":")[1];

  return <Gallery filterId={filterId} />;
}
