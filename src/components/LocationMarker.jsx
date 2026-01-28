import { MapPin } from "lucide-react";

const LocationMarker = ({ name, top, left }) => {
    return (
        <div
            className="absolute flex flex-col items-center"
            style={{ top, left }}
        >
            {/* Icon */}
            <div className="bg-white rounded-full p-2.5 shadow-lg">
                <MapPin className="text-black w-7 h-7" />
            </div>

            {/* Label */}
            <div className="mt-2 bg-black text-white text-sm px-4 py-1 rounded-full whitespace-nowrap">
                {name}
            </div>
        </div>
    );
};

export default LocationMarker;
