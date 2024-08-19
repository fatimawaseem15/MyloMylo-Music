import logo from '/logo.png';

function Footer() {
  return (
    <div className="bg-primary text-white py-8 px-4 md:px-8 lg:px-16 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6 text-center relative mt-4">
        Subscribe To Our Newsletter
      </h2>
      <div className="text-center">
        <p className="mb-6 w-full md:w-2/3 lg:w-1/2 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin.
        </p>
        <div className="flex justify-center mt-6">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="yourname@ymail.com"
            className="p-4 w-full md:w-2/3 lg:w-1/2 text-black rounded"
          />
        </div>
        <div className="mt-10">
          <button className="bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
            Subscribe Now
          </button>
        </div>
      </div>
      <div className="mt-16 w-full flex flex-col md:flex-row justify-between items-center text-center md:text-left p-6">
        <div className="mb-6 md:mb-0 flex flex-col items-center md:items-center">
          <img src={logo} alt="Logo" className="h-20 w-20 mb-2" />
          <h1 className="text-xl font-semibold">MyloMylo</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">FAQs</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
      <div className="mt-4 text-sm text-center md:text-left">
        © 2024 MyloMylo. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
