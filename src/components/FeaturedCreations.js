import React from "react";

import { creations } from "../constants/creations";

const FeaturedCreations = () => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Featured creations
        </h2>
        <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {creations.map((object, index) => {
            return (
              <div key={index} className="relative group">
                <div className="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={object.url}
                    alt={object.name}
                    className="object-cover object-center w-full h-full lg:w-full lg:h-full"
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={object.post}>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        {object.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {object.description}
                    </p>
                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCreations;
