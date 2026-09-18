export type Room = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  capacity: string;
  beds: string;
  location: string;
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
      "Settle into an easy Diani rhythm with a comfortable room, tropical surroundings and the Indian Ocean close by.",
    capacity: "Up to 2 guests",
    beds: "Double or twin beds",
    location: "Sea view",
    amenities: ["Sea view", "Private bathroom", "Air conditioning", "Wi-Fi"],
    featuredImage: "/images/rooms/seaview-standard.avif",
    gallery: ["/images/rooms/sea-view-standard.jpg"],
  },

  {
    slug: "sea-view-superior",
    name: "Sea View Superior",
    shortDescription:
      "A more spacious retreat overlooking the gardens and ocean.",
    description:
      "Enjoy more space and a relaxed coastal atmosphere with views across the hotel's tropical setting towards the sea.",
    capacity: "Up to 2 guests",
    beds: "Double or twin beds",
    location: "Sea view",
    amenities: ["Sea view", "Private bathroom", "Air conditioning", "Wi-Fi"],
    featuredImage: "/images/rooms/sea-view-family.avif",
    gallery: ["/images/rooms/sea-view-superior.jpg"],
  },

  {
    slug: "sea-view-family",
    name: "Sea View Family Room",
    shortDescription:
      "A comfortable beachfront escape designed with families in mind.",
    description:
      "Space to relax together, with the beach and the hotel's tropical surroundings providing an easy base for a family stay in Diani.",
    capacity: "Family accommodation",
    beds: "Multiple beds",
    location: "Sea view",
    amenities: ["Sea view", "Private bathroom", "Air conditioning", "Wi-Fi"],
    featuredImage: "/images/rooms/sea-view-family.avif",
    gallery: ["/images/rooms/sea-view-family.jpg"],
  },

  {
    slug: "family-suite-private-pool",
    name: "Family Suite",
    shortDescription:
      "A two-bedroom suite with the added privacy of a private pool.",
    description:
      "Designed for families and groups seeking additional space, this two-bedroom suite includes two bathrooms and a private pool.",
    capacity: "Family accommodation",
    beds: "Two bedrooms",
    location: "Private pool",
    amenities: [
      "Private pool",
      "Two bedrooms",
      "Two bathrooms",
      "Air conditioning",
      "Wi-Fi",
    ],
    featuredImage: "/images/rooms/family-suite.avif",
    gallery: ["/images/rooms/family-suite-private-pool.jpg"],
  },

  {
    slug: "beach-suite",
    name: "Beach Suite",
    shortDescription:
      "A spacious two-bedroom suite for an unhurried coastal stay.",
    description:
      "With two bedrooms and two bathrooms, the Beach Suite offers generous space for families or groups looking to stay close to the ocean.",
    capacity: "Family / group accommodation",
    beds: "Two bedrooms",
    location: "Beachfront",
    amenities: [
      "Beachfront setting",
      "Two bedrooms",
      "Two bathrooms",
      "Air conditioning",
      "Wi-Fi",
    ],
    featuredImage: "/images/rooms/beach-suite.avif",
    gallery: ["/images/rooms/beach-suite.jpg"],
  },
];
