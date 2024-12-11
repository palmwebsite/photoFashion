import { Gallery } from "../components/gallery/Gallery";

export default async function Galerii({ params }: any) {
  const { galeriiId } = await params;
  const decodedValue = decodeURIComponent(galeriiId);
  const filterId = decodedValue.split(":")[1];
  // pilte said juurde panna components/gallery/conf

  return <Gallery filterId={filterId} />;
}
