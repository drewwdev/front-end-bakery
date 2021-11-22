import React from "react";

import navigation from "../constants/navigation";

const Footer = (props) => {
  return (
    <footer className="bg-white" {...props}>
      <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <nav
          className="flex flex-wrap justify-center -mx-5 -my-2"
          aria-label="Footer"
        >
          {navigation.main.map(({ name, href }) => (
            <div key={name} className="px-5 py-2">
              <a
                href={href}
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {name}
              </a>
            </div>
          ))}
        </nav>

        <section className="flex justify-center mt-8 space-x-6">
          {navigation.social.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{name}</span>
              <Icon className="w-6 h-6" aria-hidden="true" />
            </a>
          ))}
        </section>
        <p className="mt-8 text-base text-center text-gray-400">
          Made with ♥ by Drew Wilson
        </p>
      </div>
    </footer>
  );
};

export default Footer;
