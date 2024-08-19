import key1 from '/key1.png';
import key2 from '/key2.png';
import key3 from '/key3.png';
import key4 from '/key4.png';

import keyFeatureLower from '/keyFeatureLower.png';

function KeyFeatures() {
  return (
    <div className="min-h-screen bg-primary text-white py-8 px-4 md:px-8 lg:px-16 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-10 text-center relative mt-4">
        Key Features
      </h2>      
      <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 w-full max-w-screen-xl">
        {/* upper part */}
        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-5 justify-center">
          <img src={key1} alt="key1" className="w-10 h-10 lg:w-10 lg:h-10 object-cover" />
          <div className="text-center lg:text-left w-full">
            <h1 className="text-xl mb-1">Personalized Songs</h1>
            <p className='text-sm'>Tailor-made music for any occasion, based on your preferences and stories.</p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-5 justify-center">
          <img src={key2} alt="key2" className="w-10 h-10 lg:w-10 lg:h-10 object-cover" />
          <div className="text-center lg:text-left w-full">
            <h1 className="text-xl mb-1">High-Quality Production</h1>
            <p className='text-sm'>Professional-grade recordings with options for different vocal styles and instrumental arrangements.</p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-5 justify-center">
          <img src={key3} alt="key3" className="w-10 h-10 lg:w-10 lg:h-10 object-cover" />
          <div className="text-center lg:text-left w-full">
            <h1 className="text-xl mb-1">Easy Customization</h1>
            <p className='text-sm'>Simple and intuitive process to create your unique song in minutes.</p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-5 justify-center">
          <img src={key4} alt="key4" className="w-10 h-10 lg:w-10 lg:h-10 object-cover" />
          <div className="text-center lg:text-left w-full">
            <h1 className="text-xl mb-1">Fast Delivery</h1>
            <p className='text-sm'>Receive your custom song within days, with options for expedited service.</p>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        {/* lower part */}
        <img src={keyFeatureLower} alt="keyFeatureLower.png"    
        className="w-full h-[178px] object-cover object-center md:h-auto"
    />
      </div>
    </div>
  )
}

export default KeyFeatures;
