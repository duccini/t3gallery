import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/dbad4c10-53c7-4035-aa28-39d93eb75d52-mpxft5.jpg",
  "https://utfs.io/f/b1426134-0291-4ad2-9116-8fb689c25ea4-ahhhy6.jpg",
  "https://utfs.io/f/8baec8c2-a278-4619-b717-d990a2d7bce8-2m3utn.jpg",
  "https://utfs.io/f/184b03fe-c7ca-4f22-9e53-fc3d7003aa5f-meg2am.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
