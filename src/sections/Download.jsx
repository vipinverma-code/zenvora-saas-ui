import React from "react";
import { Element } from "react-scroll";
import { links, logos } from "../constants";
import Marker from "../components/Marker";

const Download = () => {
  return (
    <section>
      <Element name="download" className="g7 relative pb-32 pt-24 max-md:py-16">
        <div className="container">
          {/* =========================
              DOWNLOAD CONTENT
          ========================== */}
          <div
            className="
              grid
              grid-cols-[minmax(0,540px)_minmax(0,1fr)]
              items-center
              gap-6
              max-xl:grid-cols-[minmax(0,400px)_minmax(0,1fr)]
              max-lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)]
              max-md:grid-cols-1
            "
          >
            {/* =========================
                LEFT CONTENT
            ========================== */}
            <div className="relative min-w-0">
              {/* Logo */}
              <div className="mb-10">
                <img
                  src="/images/zenvora.png"
                  width={160}
                  height={55}
                  alt="Zenvora"
                />
              </div>

              {/* Description */}
              <p className="body-1 mb-10 max-w-md">
                Try it now for free on iOS, Android, PC, Web- whatever your
                flavor, we've got you covered.
              </p>

              {/* Download platforms */}
              <ul className="flex flex-wrap items-center gap-6">
                {links.map(({ id, url, icon }) => (
                  <li
                    key={id}
                    className="
                      download_tech-link
                      download_tech-link_last-before
                      download_tech-link_last-after
                    "
                  >
                    <a
                      href={url}
                      className="
                        download_tech-icon_before
                        relative
                        flex
                        size-22
                        items-center
                        justify-center
                        rounded-half
                        border-2
                        border-s3
                        bg-s1
                        transition-borderColor
                        duration-500
                      "
                    >
                      <span className="absolute top-2 rotate-90">
                        <Marker />
                      </span>

                      <img
                        src="/images/lines.svg"
                        alt=""
                        className="absolute size-13/20 object-contain"
                      />

                      <span className="download_tech-icon">{icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* =========================
                RIGHT PREVIEW
            ========================== */}
            <div className="relative min-w-0 max-md:hidden">
              <div
                className="
                  download_preview-before
                  download_preview-after
                  relative
                  w-full
                  rounded-40
                  border-2
                  border-s5
                  p-6
                "
              >
                <div
                  className="
                    relative
                    w-full
                    rounded-3xl
                    bg-s1
                    px-6
                    pb-6
                    pt-14
                  "
                >
                  {/* Browser dots */}
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />

                  {/* Preview */}
                  <img
                    src="/images/screen.jpg"
                    width={855}
                    height={655}
                    alt="Zenvora application preview"
                    className="
                      block
                      w-full
                      max-w-full
                      h-auto
                      rounded-xl
                      object-contain
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              COMPANY LOGOS
          ========================== */}
          <ul
            className="
              mt-24
              flex
              items-center
              justify-center
              gap-12
              max-lg:hidden
            "
          >
            {logos.map(({ id, url, width, height, title }) => (
              <li key={id}>
                <img
                  src={url}
                  width={width}
                  height={height}
                  alt={title}
                  className="object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};

export default Download;
