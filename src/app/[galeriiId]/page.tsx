import { Gallery } from "../components/gallery/Gallery";

interface PageProps {
  params: { galeriiId: string };
}

export default async function Galerii({ params }: PageProps) {
  // Ensure params are awaited properly
  const { galeriiId } = await params;

  // Decode the URL-encoded value
  const decodedValue = decodeURIComponent(galeriiId);

  // Extract the part after ":"
  const filterId = decodedValue.split(":")[1];

  return <Gallery filterId={filterId} />;
}
