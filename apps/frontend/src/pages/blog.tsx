import { useNavigate } from "react-router-dom"
import { Appbar } from "../components/appbar";

export const Blog=()=> {
    const navigate = useNavigate();
    return (
        <div className="bg-no-repeat bg-cover bg-center bg-fixed h-fit bg-black py-[1px]">

             <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="blog-styles.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?
family=Bebas+Neue&family=Geist+Mono:wght@100..900&family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Lexend:wght@100..900&family=Montserrat:wght@100..900&family=Unbounded:wght@200..900&display=swap"
    rel="stylesheet"
  />
  <title>Document</title>
<Appbar/>
  {/* Hero Section Starts */}
  <div className="hero flex w-[85vw] h-[75vh] mx-auto  text-white py-20 bg-gradient-to-b from-purple-900/5 to-purple-900/25">
    {/* Breadcrumb Navigation */}
    <nav className="absolute top-5 left-5 text-sm text-gray-300  font-[Lexend] font-light">
      <a href="index.html" className="hover:text-purple-500">
        Home
      </a>
      <span className="mx-1 text-zinc-500">&gt;</span>
      <span>Blogs</span>
    </nav>
    {/* Hero Section Content */}
    <div className="hero-cont container mx-auto text-center p-5">
      <div className="hero-title h-full flex flex-col w-full justify-center items-center mb-5">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Stay Updated: The Latest Space News, Astronomical Events, and More...
        </h1>
        <p className="text-lg text-gray-400 mb-10">
          Explore the wonders of the cosmos with our curated articles and
          updates.
        </p>
      </div>
      <div className="arrow-cont">
        <a
          href="#articles"
          className="text-purple-500 hover:text-purple-700 transition-all"
        >
          <svg
            className="w-10 h-10 mx-auto animate-bounce opacity-80"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 1000"
            fill="currentColor"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="m500 .456c-151 0-273 122-273 273v454c0 151 122 273 273 273s273-122 273-273v-454c0-151-122-273-273-273zm236 727c0 131-106 237-236 237s-236-106-236-237v-454c0-131 106-237 236-237s236 106 236 237zm-99 39-129 130c-5 4-11 4-16 0l-129-130c-5-4-5-11 0-15l26-26c4-4 11-4 15 0l89 89c4-4 11-4 15 0l89-89c4-4 11-4 15 0l26 26c4 4 4 11-1 15z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
  {/* Hero Section Ends */}
  {/* Articles Section Starts */}
  <div
    id="articles"
    className="max-w-screen-xl mx-auto p-6 text-white font-[Montserrat] text-sm"
  >
    {/* Category and Search */}
    <div className="flex justify-between items-center mb-8">
      <div className="flex flex-wrap space-x-4 w-[60%]">
        <a href="#" className="text-purple-500">
          All
        </a>
        <a href="#" className="hover:text-purple-500">
          News
        </a>
        <a href="#" className="hover:text-purple-500">
          Upcoming Events
        </a>
        <a href="#" className="hover:text-purple-500">
          Astrophysics
        </a>
        <a href="#" className="hover:text-purple-500">
          Exoplanets
        </a>
        <a href="#" className="hover:text-purple-500">
          Technology
        </a>
        <a href="#" className="hover:text-purple-500">
          Missions
        </a>
      </div>
      <div className="search-bar ml-auto">
        <input
          type="text"
          placeholder="Search"
          className=" bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
    </div>
    {/* Blog Posts */}
    <div className="flex flex-wrap">
      {/* Blog Card */}
      
      {/* Blog Card */}
      <div className="flex flex-col w-full md:w-1/3 px-4 mb-8">
        <div className="blog-card  rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/blog/lucy-spacecraft-nasa-trojan-asteroid.webp"
            alt="Blog 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-gray-400 text-sm">Nov 13, 2024 • 7 min</p>
            <h3 className="text-lg font-semibold mt-2">
              Lucy Spacecraft Skims Earth: A 6-Year Mission to Explore Asteroids
            </h3>
            <a href="#" className="text-purple-500 mt-4 inline-block">
              Learn more
            </a>
          </div>
        </div>
      </div>
      {/* Blog Card */}
      <div className="flex flex-col w-full md:w-1/3 px-4 mb-8">
        <div className="blog-card  rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/blog/geminid.jpg"
            alt="Blog 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-gray-400 text-sm">Nov 4, 2024 • 7 min</p>
            <h3 className="text-lg font-semibold mt-2">
              Geminid Meteor Shower 2024: When and Where to Watch
            </h3>
            <a href="#" className="text-purple-500 mt-4 inline-block">
              Learn more
            </a>
          </div>
        </div>
      </div>
      {/* Blog Card */}
      <div className="flex flex-col w-full md:w-1/3 px-4 mb-8">
        <div className="blog-card  rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/blog/artemis.webp"
            alt="Blog 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-gray-400 text-sm">Nov 12, 2024 • 4 min</p>
            <h3 className="text-lg font-semibold mt-2">
              NASA’s Artemis Program: Progress on Returning Humans to the Moon
            </h3>
            <a href="#" className="text-purple-500 mt-4 inline-block">
              Learn more
            </a>
          </div>
        </div>
      </div>
      {/* Blog Card */}
      <div className="flex flex-col w-full md:w-1/3 px-4 mb-8">
        <div className="blog-card  rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/blog/james-webb.jpg"
            alt="Blog 4"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-gray-400 text-sm">Nov 4, 2024 • 7 min</p>
            <h3 className="text-lg font-semibold mt-2">
              How the James Webb Space Telescope is Redefining Astronomy
            </h3>
            <a href="#" className="text-purple-500 mt-4 inline-block">
              Learn more
            </a>
          </div>
        </div>
      </div>
      {/* Blog Card */}
      <div className="flex flex-col w-full md:w-1/3 px-4 mb-8">
        <div className="blog-card  rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/blog/cubesats.jpg"
            alt="Blog 5"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-gray-400 text-sm">Nov 4, 2024 • 7 min</p>
            <h3 className="text-lg font-semibold mt-2">
              The Rise of CubeSats: Small Satellites with Big Potential
            </h3>
            <a href="#" className="text-purple-500 mt-4 inline-block">
              Learn more
            </a>
          </div>
        </div>
      </div>
      {/* Blog Card */}
      <div className="flex flex-col w-full md:w-1/3 px-4 mb-8">
        <div className="blog-card  rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/blog/pers.webp"
            alt="Blog 6"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-gray-400 text-sm">Nov 4, 2024 • 7 min</p>
            <h3 className="text-lg font-semibold mt-2">
              Mars Rover Updates: What Perseverance Have Discovered
            </h3>
            <a href="#" className="text-purple-500 mt-4 inline-block">
              Learn more
            </a>
          </div>
        </div>
      </div>
      {/* Blog Card */}
      <div className="flex flex-col w-full md:w-1/3 px-4 mb-8">
        <div className="blog-card  rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/blog/space-tourism.jpg"
            alt="Blog 7"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-gray-400 text-sm">Nov 4, 2024 • 7 min</p>
            <h3 className="text-lg font-semibold mt-2">
              The Future of Space Tourism: Is It Closer Than We Think?
            </h3>
            <a href="#" className="text-purple-500 mt-4 inline-block">
              Learn more
            </a>
          </div>
        </div>
      </div>
      {/* Blog Card */}
      <div className="flex flex-col w-full md:w-1/3 px-4 mb-8">
        <div className="blog-card  rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/blog/ai-space.jpg"
            alt="Blog 8"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-gray-400 text-sm">Nov 4, 2024 • 7 min</p>
            <h3 className="text-lg font-semibold mt-2">
              AI in Space: Revolutionizing Space Exploration
            </h3>
            <a href="#" className="text-purple-500 mt-4 inline-block">
              Learn more
            </a>
          </div>
        </div>
      </div>
      {/* Blog Card */}
      <div className="flex flex-col w-full md:w-1/3 px-4 mb-8">
        <div className="blog-card  rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/blog/rocket-inno.jpg"
            alt="Blog 9"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-gray-400 text-sm">Nov 4, 2024 • 7 min</p>
            <h3 className="text-lg font-semibold mt-2">
              Rocket Innovations: From Reusability to Hypersonic Travel
            </h3>
            <a href="#" className="text-purple-500 mt-4 inline-block">
              Learn more
            </a>
          </div>
        </div>
      </div>
      {/* Blog Card */}
      <div className="flex flex-col w-full md:w-1/3 px-4 mb-8">
        <div className="blog-card  rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/blog/milky-way.webp"
            alt="Blog 10"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-gray-400 text-sm">Nov 4, 2024 • 7 min</p>
            <h3 className="text-lg font-semibold mt-2">
              Unveiling the Secrets of the Milky Way: New Discoveries
            </h3>
            <a href="#" className="text-purple-500 mt-4 inline-block">
              Learn more
            </a>
          </div>
        </div>
      </div>
      {/* Blog Card */}
      <div className="flex flex-col w-full md:w-1/3 px-4 mb-8">
        <div className="blog-card  rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/blog/cosmic-explosion-view-stockcake.jpg"
            alt="Blog 11"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-gray-400 text-sm">Nov 4, 2024 • 7 min</p>
            <h3 className="text-lg font-semibold mt-2">
              Top Celestial Events to Watch Out For in 2024
            </h3>
            <a href="#" className="text-purple-500 mt-4 inline-block">
              Learn more
            </a>
          </div>
        </div>
      </div>
      {/* Blog Card */}
      <div className="flex flex-col w-full md:w-1/3 px-4 mb-8">
        <div className="blog-card  rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/blog/spacex.jpg"
            alt="Blog 12"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-gray-400 text-sm">Nov 4, 2024 • 7 min</p>
            <h3 className="text-lg font-semibold mt-2">
              SpaceX and Beyond: The Latest in Commercial Spaceflight
            </h3>
            <a href="#" className="text-purple-500 mt-4 inline-block">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Articles Section Ends */}
  {/* Footer Starts */}
  <footer className="w-full backdrop-blur-md font-[Lexend] overflow-hidden">
    {/* Glow Background  */}
    <div className="foot-glow absolute h-[200px] w-[600px] bg-white z-[-1] blur-[90px] top-[-100px] left-[-80px]" />
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/*Grid*/}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
        <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
          <a
            href="#"
            className="flex justify-center items-center lg:justify-start"
          >
            {/* Add Logo and Brand Name  */}
            <img
              src="images/logo.png"
              alt=""
              className="w-[40px] h-[40px] m-2 hover:grayscale-[50%] duration-300"
            />
            <p className="font-[Unbounded]  text-xl text-white">
              Cosmic Horizons
            </p>
          </a>
          <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
            Connecting Astronomers Everywhere. Need Assistance? Reach Out!
          </p>
          <a
            href="#"
            className="py-2.5 px-5 block w-fit h-fit bg-violet-600 rounded-full shadow-sm text-sm text-white mx-auto transition-all  duration-500 hover:bg-violet-700 lg:mx-0"
          >
            Contact us
          </a>
        </div>
        {/*End Col*/}
        <div className="lg:mx-auto text-left ">
          <h4 className="text-lg text-gray-300 font-medium mb-7">
            Cosmic Horizons
          </h4>
          <ul className="text-sm  transition-all duration-500">
            <li className="mb-6">
              <a
                href="index.html"
                className="text-gray-400 hover:text-gray-600"
              >
                Home
              </a>
            </li>
            <li className="mb-6">
              <a href="#" className=" text-gray-400 hover:text-gray-600">
                About
              </a>
            </li>
            <li className="mb-6">
              <a href="#" className=" text-gray-400 hover:text-gray-600">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className=" text-gray-400 hover:text-gray-600">
                Features
              </a>
            </li>
          </ul>
        </div>
        {/*End Col*/}
        <div className="lg:mx-auto text-left ">
          <h4 className="text-lg text-gray-300 font-medium mb-7">Products</h4>
          <ul className="text-sm  transition-all duration-500">
            <li className="mb-6">
              <a
                href="night-sky.html"
                className="text-gray-400 hover:text-gray-600"
              >
                Night Sky Map
              </a>
            </li>
            <li className="mb-6">
              <a href="#" className=" text-gray-400 hover:text-gray-600">
                Guide
              </a>
            </li>
            <li className="mb-6">
              <a href="#" className=" text-gray-400 hover:text-gray-600">
                Learning Path
              </a>
            </li>
            <li>
              <a href="#" className=" text-gray-400 hover:text-gray-600">
                Printables
              </a>
            </li>
          </ul>
        </div>
        {/*End Col*/}
        <div className="lg:mx-auto text-left">
          <h4 className="text-lg text-gray-300 font-medium mb-7">Resources</h4>
          <ul className="text-sm  transition-all duration-500">
            <li className="mb-6">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                FAQs
              </a>
            </li>
            <li className="mb-6">
              <a href="#" className=" text-gray-400 hover:text-gray-600">
                Quick Start
              </a>
            </li>
            <li className="mb-6">
              <a href="#" className=" text-gray-400 hover:text-gray-600">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className=" text-gray-400 hover:text-gray-600">
                User Guide
              </a>
            </li>
          </ul>
        </div>
        {/*End Col*/}
        <div className="lg:mx-auto text-left">
          <h4 className="text-lg text-gray-300 font-medium mb-7">Blogs</h4>
          <ul className="text-sm  transition-all duration-500">
            <li className="mb-6">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                News
              </a>
            </li>
            <li className="mb-6">
              <a href="#" className=" text-gray-400 hover:text-gray-600">
                Tips &amp; Tricks
              </a>
            </li>
            <li className="mb-6">
              <a href="#" className=" text-gray-400 hover:text-gray-600">
                New Updates
              </a>
            </li>
            <li>
              <a href="#" className=" text-gray-400 hover:text-gray-600">
                Events
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/*Grid*/}
      <div className="py-7 border-t border-gray-200">
        <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
          <span className="text-sm text-gray-500 ">
            ©<a href="#">Cosmic Horizons</a> 2024, All rights reserved.
          </span>
          <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-violet-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
              >
                <g id="Social Media">
                  <path
                    id="Vector"
                    d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
                    fill="white"
                  />
                </g>
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-violet-600"
            >
              <svg
                className="w-[1.25rem] h-[1.125rem] text-white"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663ZM9.97414 4.22935C9.97408 4.39417 10.0236 4.55531 10.1165 4.69239C10.2093 4.82946 10.3413 4.93633 10.4958 4.99946C10.6503 5.06259 10.8203 5.07916 10.9844 5.04707C11.1484 5.01498 11.2991 4.93568 11.4174 4.81918C11.5357 4.70268 11.6163 4.55423 11.649 4.39259C11.6817 4.23095 11.665 4.06339 11.6011 3.91109C11.5371 3.7588 11.4288 3.6286 11.2898 3.53698C11.1508 3.44536 10.9873 3.39642 10.8201 3.39635H10.8197C10.5955 3.39646 10.3806 3.48424 10.222 3.64043C10.0635 3.79661 9.97434 4.00843 9.97414 4.22935ZM4.21142 13.5892C3.52442 13.5584 3.15101 13.4456 2.90286 13.3504C2.57387 13.2241 2.33914 13.0738 2.09235 12.8309C1.84555 12.588 1.69278 12.3569 1.56527 12.0327C1.46854 11.7882 1.3541 11.4201 1.32287 10.7431C1.28871 10.0111 1.28189 9.79119 1.28189 7.93669C1.28189 6.08219 1.28927 5.86291 1.32287 5.1303C1.35416 4.45324 1.46944 4.08585 1.56527 3.84069C1.69335 3.51647 1.84589 3.28513 2.09235 3.04191C2.3388 2.79869 2.57331 2.64813 2.90286 2.52247C3.1509 2.42713 3.52442 2.31435 4.21142 2.28358C4.95417 2.24991 5.17729 2.24319 7.0582 2.24319C8.9391 2.24319 9.16244 2.25047 9.90582 2.28358C10.5928 2.31441 10.9656 2.42802 11.2144 2.52247C11.5434 2.64813 11.7781 2.79902 12.0249 3.04191C12.2717 3.2848 12.4239 3.51647 12.552 3.84069C12.6487 4.08513 12.7631 4.45324 12.7944 5.1303C12.8285 5.86291 12.8354 6.08219 12.8354 7.93669C12.8354 9.79119 12.8285 10.0105 12.7944 10.7431C12.7631 11.4201 12.6481 11.7881 12.552 12.0327C12.4239 12.3569 12.2714 12.5882 12.0249 12.8309C11.7784 13.0736 11.5434 13.2241 11.2144 13.3504C10.9663 13.4457 10.5928 13.5585 9.90582 13.5892C9.16306 13.6229 8.93994 13.6296 7.0582 13.6296C5.17645 13.6296 4.95395 13.6229 4.21142 13.5892ZM4.15307 1.03424C3.40294 1.06791 2.89035 1.18513 2.4427 1.3568C1.9791 1.53408 1.58663 1.77191 1.19446 2.1578C0.802277 2.54369 0.56157 2.93108 0.381687 3.38797C0.207498 3.82941 0.0885535 4.3343 0.0543922 5.07358C0.0196672 5.81402 0.0117188 6.05074 0.0117188 7.93663C0.0117188 9.82252 0.0196672 10.0592 0.0543922 10.7997C0.0885535 11.539 0.207498 12.0439 0.381687 12.4853C0.56157 12.9419 0.802334 13.3297 1.19446 13.7155C1.58658 14.1012 1.9791 14.3387 2.4427 14.5165C2.89119 14.6881 3.40294 14.8054 4.15307 14.839C4.90479 14.8727 5.1446 14.8811 7.0582 14.8811C8.9718 14.8811 9.212 14.8732 9.96332 14.839C10.7135 14.8054 11.2258 14.6881 11.6737 14.5165C12.137 14.3387 12.5298 14.1014 12.9219 13.7155C13.3141 13.3296 13.5543 12.9419 13.7347 12.4853C13.9089 12.0439 14.0284 11.539 14.062 10.7997C14.0962 10.0587 14.1041 9.82252 14.1041 7.93663C14.1041 6.05074 14.0962 5.81402 14.062 5.07358C14.0278 4.33424 13.9089 3.82913 13.7347 3.38797C13.5543 2.93135 13.3135 2.5443 12.9219 2.1578C12.5304 1.7713 12.137 1.53408 11.6743 1.3568C11.2258 1.18513 10.7135 1.06735 9.96388 1.03424C9.21256 1.00058 8.97236 0.992188 7.05876 0.992188C5.14516 0.992188 4.90479 1.00002 4.15307 1.03424Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-violet-600"
            >
              <svg
                className="w-[1rem] h-[1rem] text-white"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-violet-600"
            >
              <svg
                className="w-[1.25rem] h-[0.875rem] text-white"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.9346 1.13529C14.5684 1.30645 15.0665 1.80588 15.2349 2.43896C15.5413 3.58788 15.5413 5.98654 15.5413 5.98654C15.5413 5.98654 15.5413 8.3852 15.2349 9.53412C15.0642 10.1695 14.5661 10.669 13.9346 10.8378C12.7886 11.1449 8.19058 11.1449 8.19058 11.1449C8.19058 11.1449 3.59491 11.1449 2.44657 10.8378C1.81277 10.6666 1.31461 10.1672 1.14622 9.53412C0.839844 8.3852 0.839844 5.98654 0.839844 5.98654C0.839844 5.98654 0.839844 3.58788 1.14622 2.43896C1.31695 1.80353 1.81511 1.30411 2.44657 1.13529C3.59491 0.828125 8.19058 0.828125 8.19058 0.828125C8.19058 0.828125 12.7886 0.828125 13.9346 1.13529ZM10.541 5.98654L6.72178 8.19762V3.77545L10.541 5.98654Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* Footer Ends */}
        </div>
    )
}