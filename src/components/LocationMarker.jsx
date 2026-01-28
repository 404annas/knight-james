import { MapPin } from "lucide-react";

const LocationMarker = ({ name, top, left }) => {
    return (
        <div
            className="absolute flex flex-col items-center"
            style={{ top, left }}
        >
            {/* Icon */}
            <div className="bg-white rounded-full p-2 shadow-lg">
                <MapPin className="text-black w-5 h-5" />
            </div>

            {/* Label */}
            <div className="mt-2 bg-black text-white text-xs px-4 py-1 rounded-full whitespace-nowrap">
                {name}
            </div>
        </div>
    );
};

export default LocationMarker;
