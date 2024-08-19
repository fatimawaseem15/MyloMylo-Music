import pakages1 from '/pakages1.png'; // Ensure the path is correct

const packageData = [
  {
    id: 1,
    title: 'Basic Package',
    description: 'AI-generated song, standard vocal style, digital download',
    price: '$49.99',
    buttonText: 'Get Started',
    imageSrc: pakages1,
    bgColor: 'bg-white',
    textColor: 'text-black',
    buttonColor: 'bg-secondary',
    buttonTextColor: 'text-white',
  },
  {
    id: 2,
    title: 'Premium Package',
    description: 'AI-generated song with professional vocalists, choice of style and instruments, digital download',
    price: '$99.99',
    buttonText: 'Get Started',
    imageSrc: pakages1,
    bgColor: 'bg-secondary',
    textColor: 'text-white',
    buttonColor: 'bg-white',
    buttonTextColor: 'text-secondary',
    message: 'Recommended',
  },
  {
    id: 3,
    title: 'Deluxe Package',
    description: 'Fully produced song with live musicians, custom album art, digital download and physical CD',
    price: '$199.99',
    buttonText: 'Get Started',
    imageSrc: pakages1,
    bgColor: 'bg-white',
    textColor: 'text-black',
    buttonColor: 'bg-secondary',
    buttonTextColor: 'text-white',
  }
];

function Packages() {
  return (
    <div className="min-h-screen bg-[#1a1f25] text-white py-8 px-4 md:px-8 lg:px-16 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-10 text-center relative mt-4">
        Our Packages
        <span className="block h-1 bg-secondary w-30 mx-auto"></span>
      </h2>
      <div className='flex flex-wrap justify-center items-center gap-8'>
        {packageData.map(pkg => (
          <div
            key={pkg.id}
            className={`relative rounded-xl p-6 w-full sm:w-80 md:w-96 lg:w-80 ${pkg.bgColor} ${pkg.textColor} ${pkg.id === 2 ? 'shadow-custom-secondary' : 'shadow-xl'}`}
          >
            {/* Message Box for Box 2 */}
            {pkg.message && (
              <div className="absolute -top-2 right-3 bg-[#D932AD] text-white text-xs px-2 py-1 rounded-full">
                {pkg.message}
              </div>
            )}
            {/* Centered Logo Image */}
            <div className="flex justify-center mb-4">
              <img 
                src={pkg.imageSrc} 
                alt={`${pkg.title}.png`} 
                className="h-24 object-cover rounded-t-xl"
              />
            </div>
            <div className="p-2 sm:p-4 flex flex-col items-center">
              <h1 className="text-xl font-semibold mb-2 text-center">{pkg.title}</h1>
              <p className="mb-4 text-center">{pkg.description}</p>
              <div className="text-2xl font-bold mb-4 text-center">{pkg.price}</div>
              <button className={`py-2 px-4 rounded-lg  ${pkg.buttonColor} ${pkg.buttonTextColor} font-bold`}>
                {pkg.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;
