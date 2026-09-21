import { roomGalleries } from "@/data/room-galleries";

export type Room = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  capacity: string;
  beds: string;
  location: string;
  highlights: string[];
  amenities: string[];
  featuredImage: string;
  gallery: string[];
};

export const rooms: Room[] = [
  {
    slug: "sea-view-standard",
    name: "Sea View Standard",
    shortDescription:
      "A comfortable coastal stay with views towards the Indian Ocean.",
    description:
      "Settle into an easy Diani rhythm with a comfortable room, tropical surroundings and the Indian Ocean close by. The Sea View Standard offers a relaxed base for couples and individual travellers exploring the South Coast.",
    capacity: "Up to 2 guests",
    beds: "Double or twin beds",
    location: "Sea view",
    highlights: [
      "Views towards the Indian Ocean",
      "Comfortable coastal accommodation",
      "Ideal for couples",
    ],
    amenities: ["Sea view", "Private bathroom", "Air conditioning", "Wi-Fi"],
    featuredImage: "/images/rooms/seaview-standard.avif",
    gallery: roomGalleries["sea-view-standard"],
  },

  {
    slug: "sea-view-superior",
    name: "Sea View Superior",
    shortDescription:
      "A more spacious retreat overlooking the gardens and ocean.",
    description:
      "Enjoy more space and a relaxed coastal atmosphere with views across the hotel's tropical setting towards the sea. A comfortable choice for guests looking for a little more room during their Diani stay.",
    capacity: "Up to 2 guests",
    beds: "Double or twin beds",
    location: "Sea view",
    highlights: [
      "Sea and garden views",
      "Spacious accommodation",
      "Relaxed coastal setting",
    ],
    amenities: ["Sea view", "Private bathroom", "Air conditioning", "Wi-Fi"],
    featuredImage: "/images/rooms/sea-view-superior.avif",
    gallery: roomGalleries["sea-view-superior"],
  },

  {
    slug: "sea-view-family",
    name: "Sea View Family Room",
    shortDescription:
      "A comfortable coastal escape designed with families in mind.",
    description:
      "Space to relax together, with the beach and the hotel's tropical surroundings providing an easy base for a family stay in Diani.",
    capacity: "Family accommodation",
    beds: "Multiple beds",
    location: "Sea view",
    highlights: [
      "Designed for families",
      "Sea-facing setting",
      "Easy access to the beach",
    ],
    amenities: ["Sea view", "Private bathroom", "Air conditioning", "Wi-Fi"],
    featuredImage: "/images/rooms/sea-view-family.avif",
    gallery: roomGalleries["sea-view-family"],
  },

  {
    slug: "family-suite-private-pool",
    name: "Family Suite",
    shortDescription: "A two-bedroom suite with the privacy of its own pool.",
    description:
      "Designed for families and groups seeking additional space, the Family Suite combines two bedrooms and two bathrooms with the added privacy of a private pool.",
    capacity: "Family accommodation",
    beds: "Two bedrooms",
    location: "Private pool",
    highlights: [
      "Two bedrooms",
      "Two bathrooms",
      "Private swimming pool",
      "Ideal for families or groups",
    ],
    amenities: [
      "Private pool",
      "Two bedrooms",
      "Two bathrooms",
      "Air conditioning",
      "Wi-Fi",
    ],
    featuredImage: "/images/rooms/family-suite.avif",
    gallery: roomGalleries["family-suite-private-pool"],
  },

  {
    slug: "beach-suite",
    name: "Beach Suite",
    shortDescription:
      "A spacious two-bedroom suite for an unhurried coastal stay.",
    description:
      "With two bedrooms and two bathrooms, the Beach Suite offers generous space for families or groups looking to stay close to the ocean and make the most of Diani's beachfront setting.",
    capacity: "Family / group accommodation",
    beds: "Two bedrooms",
    location: "Beachfront",
    highlights: [
      "Two bedrooms",
      "Two bathrooms",
      "Close to the beach",
      "Generous space for families or groups",
    ],
    amenities: [
      "Beachfront setting",
      "Two bedrooms",
      "Two bathrooms",
      "Air conditioning",
      "Wi-Fi",
    ],
    featuredImage: "/images/rooms/beach-suite.avif",
    gallery: roomGalleries["beach-suite"],
  },
];

export function getRoomBySlug(slug: string) {
  return rooms.find((room) => room.slug === slug);
}
