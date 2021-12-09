import React from "react";

import navigation from "../constants/navigation";

const Footer = (props) => {
  return (
    <footer className="bg-white" {...props}>
      <div className="flex-col px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <section className="flex justify-center mt-8 space-x-6">
          <p className="text-sm text-gray-700">Follow me!</p>
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
        <a className="flex justify-center" href="https://github.com/drewwdev">
          <button className="mt-8 text-base text-center text-gray-400">
            Made with ♥ by Drew Wilson
          </button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
