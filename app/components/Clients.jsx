import Image from "next/image";
import React from "react";

function Clients() {
  return (
    <div
      id="clients"
      className="section relative py-8 bg-white dark:bg-gray-800"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <div className="lex flex-wrap flex-row -mx-4 justify-center">
          <div className="w-full px-4">
            <div
              id="post-carousel"
              className="navslider-hover splide post-carousel"
            >
              <div className="splide__track">
                <div className="splide__list grayscale">
                  <div className="splide__slide">
                    <div className="w-full px-4 text-center pb-3">
                      <a href="#" target="_blank">
                        <Image
                          width={1000}
                          height={1000}
                          className="grayscale mx-auto opacity-80 hover:opacity-100 max-w-full h-auto"
                          src="/img/dummy/img1.png"
                          alt="Image Description"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <div className="w-full px-4 text-center pb-3">
                      <a href="#" target="_blank">
                        <Image
                          width={1000}
                          height={1000}
                          className="grayscale mx-auto opacity-80 hover:opacity-100 max-w-full h-auto"
                          src="/img/dummy/img2.png"
                          alt="Image Description"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <div className="w-full px-4 text-center pb-3">
                      <a href="#" target="_blank">
                        <Image
                          width={1000}
                          height={1000}
                          className="grayscale mx-auto opacity-80 hover:opacity-100 max-w-full h-auto"
                          src="/img/dummy/img3.png"
                          alt="Image Description"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <div className="w-full px-4 text-center pb-3">
                      <a href="#" target="_blank">
                        <Image
                          width={1000}
                          height={1000}
                          className="grayscale mx-auto opacity-80 hover:opacity-100 max-w-full h-auto"
                          src="/img/dummy/img4.png"
                          alt="Image Description"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <div className="w-full px-4 text-center pb-3">
                      <a href="#" target="_blank">
                        <Image
                          width={1000}
                          height={1000}
                          className="grayscale mx-auto opacity-80 hover:opacity-100 max-w-full h-auto"
                          src="/img/dummy/img5.png"
                          alt="Image Description"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <div className="w-full px-4 text-center pb-3">
                      <a href="#" target="_blank">
                        <Image
                          width={1000}
                          height={1000}
                          className="grayscale mx-auto opacity-80 hover:opacity-100 max-w-full h-auto"
                          src="/img/dummy/img6.png"
                          alt="Image Description"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
