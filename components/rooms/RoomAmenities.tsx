type RoomAmenitiesProps = {
  amenities: string[];
};

export default function RoomAmenities({ amenities }: RoomAmenitiesProps) {
  return (
    <div className="border-t border-[#082f49]/15">
      {amenities.map((amenity) => (
        <div
          key={amenity}
          className="flex items-center justify-between border-b border-[#082f49]/10 py-4"
        >
          <span className="text-sm text-[#1d2529]/65">{amenity}</span>

          <span className="text-[#b99a62]">+</span>
        </div>
      ))}
    </div>
  );
}
