import { useState } from "react";
import Sample from "../../assets/2.jpg";

const mockGallery = [
  {
    customer: "John Doe",
    images: [
      { url: { Sample }, tag: "Raw" },
      { url: { Sample }, tag: "Edited" },
      { url: { Sample }, tag: "Cancelled" },
    ],
  },
  {
    customer: "Jane Smith",
    images: [
      { url: { Sample }, tag: "Edited" },
      { url: { Sample }, tag: "Raw" },
    ],
  },
];

const tagColors = {
  Raw: "bg-gray-200 text-gray-700",
  Edited: "bg-[#41b883] text-white",
  Cancelled: "bg-red-200 text-red-800",
};

const Gallery = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#41b883]">Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mockGallery.map((file, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedCustomer(file)}
            className="cursor-pointer bg-white p-4 shadow rounded-xl hover:border-[#41b883] border-transparent border-2 transition"
          >
            <div className="text-center">
              <div className="text-[#41b883] font-semibold text-lg">
                {file.customer}
              </div>
              <p className="text-sm text-gray-500">
                {file.images.length} image{file.images.length > 1 && "s"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-full max-w-4xl max-h-[80vh] overflow-y-auto shadow-lg relative">
            <button
              onClick={() => setSelectedCustomer(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-[#41b883]"
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold mb-4 text-[#41b883]">
              {selectedCustomer.customer}'s Images
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {selectedCustomer.images.map((img, idx) => (
                <div key={idx} className="border rounded-lg overflow-hidden">
                  <img
                    src={img.url}
                    alt={`img-${idx}`}
                    className="w-full h-40 object-cover"
                  />
                  <div
                    className={`p-2 text-center text-sm font-medium ${
                      tagColors[img.tag]
                    }`}
                  >
                    {img.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
