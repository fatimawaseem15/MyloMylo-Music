import { BiParty } from 'react-icons/bi';
import { IoIosArrowDown } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import select_icon from '../assets/select_icon.png';
import i_icon from '../assets/i_icon.png';
import pay_icon from '../assets/pay_icon.png';
import bill_icon from '../assets/bill_icon.png';
import { IoMdMusicalNote } from "react-icons/io";
import { FaMusic } from "react-icons/fa";
import { BiMaleFemale } from "react-icons/bi";
import { PiGuitarLight } from "react-icons/pi";
import { IoSpeedometerOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CgToggleOff } from "react-icons/cg";
import './GetStarted.css';


interface GetStartedFormProps {
  onClose: () => void;
}

const GetStartedForm: React.FC<GetStartedFormProps> = ({ onClose }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic
  };
    return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 overflow-x-hidden">
      <div className="bg-white rounded-lg w-full max-w-3xl mx-4 md:mx-0 shadow-lg max-h-[90vh] overflow-y-auto">
        <div className="text-2xl font-bold bg-secondary text-white rounded-t-lg flex justify-between items-center p-3">
          <h2>Get Started</h2>
          <button onClick={onClose} className="text-white hover:text-gray-300">
            X
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Form content */}
          <div className="flex flex-col md:flex-row gap-7">
            <div className="relative text-md w-full md:w-7/10">
              <label htmlFor="occasionType" className="text-xl font-semibold text-gray-700">
                Occasion Type <span className="text-red-600">*</span>
              </label>
              <div className="relative mt-1 pl-3">
                <select
                  id="occasionType"
                  className="shadow appearance-none border rounded-xl w-full py-6 px-3 pl-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option>Select Occasion Type</option>
                  {/* Add more options as needed */}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <IoIosArrowDown className="text-gray-500 w-5 h-5" />
                </div>
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <div className="bg-thirdColor h-full w-12 flex items-center justify-center rounded-l-xl">
                    <BiParty className="text-white w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative text-md w-full md:w-1/3">
              <label htmlFor="occasionDate" className="text-xl font-semibold text-gray-700">
                Occasion Date <span className="text-red-600">*</span>
              </label>
              <div className="relative mt-1 pl-3">
                <input
                  type="date"
                  id="occasionDate"
                  className="shadow appearance-none border rounded-xl w-full py-6 px-3 pl-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="--/--/----"
                />
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <div className="bg-thirdColor h-full w-12 flex items-center justify-center rounded-l-xl">
                    <BiParty className="text-white w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Personal Information Section */}
          <div>
            <h6 className="text-secondary font-bold text-sm mb-3">Personal Information:</h6>
            <div className="flex flex-col md:flex-row gap-7">
              <div className="relative text-md w-full md:w-1/3">
                <label htmlFor="yourName" className="text-xl font-semibold text-gray-700">
                  Your Name <span className="text-red-600">*</span>
                </label>
                <div className="relative mt-1 pl-3">
                  <input
                    type="text"
                    id="yourName"
                    className="shadow appearance-none border rounded-xl w-full py-6 px-3 pl-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Your Name"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <div className="bg-thirdColor h-full w-12 flex items-center justify-center rounded-l-xl">
                      <LuUser2 className="text-white w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative text-md w-full md:w-1/3">
                <label htmlFor="recipientName" className="text-xl font-semibold text-gray-700">
                  Recipient’s Name <span className="text-red-600">*</span>
                </label>
                <div className="relative mt-1 pl-3">
                  <input
                    type="text"
                    id="recipientName"
                    className="shadow appearance-none border rounded-xl w-full py-6 px-3 pl-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Recipient Name"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <div className="bg-thirdColor h-full w-12 flex items-center justify-center rounded-l-xl">
                      <LuUser2 className="text-white w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative text-md w-full md:w-1/3">
                <label htmlFor="relationship" className="text-xl font-semibold text-gray-700">
                  Relationship <span className="text-red-600">*</span>
                </label>
                <div className="relative mt-1 pl-3">
                  <select
                    id="relationship"
                    className="shadow appearance-none border rounded-xl w-full py-6 px-3 pl-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option>Select</option>
                    {/* Add more options as needed */}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <IoIosArrowDown className="text-gray-500 w-5 h-5" />
                  </div>
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <div className="bg-thirdColor h-full w-12 flex items-center justify-center rounded-l-xl">
                      <img src={select_icon} alt="select_icon" className="text-gray-500 w-7 h-7" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Song Details Section */}
          <div>
            <h6 className="text-secondary font-bold text-sm mb-3">Song Details:</h6>
            <div className="flex flex-col md:flex-row gap-7">
              <div className="relative text-md w-full md:w-1/2">
                <label htmlFor="songTheme" className="text-xl font-semibold text-gray-700">
                  Song Theme <span className="text-red-600">*</span>
                </label>
                <div className="relative mt-1 pl-3">
                  <input
                    type="text"
                    id="songTheme"
                    className="shadow appearance-none border rounded-xl w-full py-6 px-3 pl-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Type Here..."
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <div className="bg-thirdColor h-full w-12 flex items-center justify-center rounded-l-xl">
                      <IoMdMusicalNote className="text-white w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative text-md w-full md:w-1/2">
                <label htmlFor="personalAnecdotes" className="text-xl font-semibold text-gray-700">
                  Personal Anecdotes <span className="text-red-600">*</span>
                </label>
                <div className="relative mt-1 pl-3">
                  <input
                    type="text"
                    id="personalAnecdotes"
                    className="shadow appearance-none border rounded-xl w-full py-6 px-3 pl-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Type here..."
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <div className="bg-thirdColor h-full w-12 flex items-center justify-center rounded-l-xl">
                      <IoMdMusicalNote className="text-white w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-7">

          <div className="relative text-md w-full md:w-1/2">
                <label htmlFor="preferredMusicGenre" className="text-xl font-semibold text-gray-700">
                  Preferred Music Genre
                </label>
                <div className="relative mt-1 pl-3">
                <select
                  id="preferredMusic"
                  className="shadow appearance-none border rounded-xl w-full py-6 px-3 pl-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option>Select</option>
                  {/* Add more options as needed */}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <IoIosArrowDown className="text-gray-500 w-5 h-5" />
                </div>
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <div className="bg-thirdColor h-full w-12 flex items-center justify-center rounded-l-xl">
                    <FaMusic  className="text-white w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative text-md w-full md:w-1/2">
                <label htmlFor="moodOfSong" className="text-xl font-semibold text-gray-700">
                  Mood of the Song
                </label>
                   <div className="relative mt-1 pl-3">
                <select
                  id="mood"
                  className="shadow appearance-none border rounded-xl w-full py-6 px-3 pl-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option>Select </option>
                  {/* Add more options as needed */}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <IoIosArrowDown className="text-gray-500 w-5 h-5" />
                </div>
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <div className="bg-thirdColor h-full w-12 flex items-center justify-center rounded-l-xl">
                      <IoMdMusicalNote className="text-white w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
              </div>
                {/* Customization Information Section */}
          <div>
            <h6 className="text-secondary font-bold text-sm mb-3">Customization Options:</h6>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="relative text-md w-full md:w-1/3">
                <label htmlFor="yourName" className="text-xl font-semibold text-gray-700">
                Vocal Style<span className="text-red-600">*</span>
                </label>
                <div className="relative mt-1 pl-3">
                <select
                    id="vocal"
                    className="shadow appearance-none border rounded-xl w-full py-6 px-3 pl-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option>Select</option>
                    {/* Add more options as needed */}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <IoIosArrowDown className="text-gray-500 w-5 h-5" />
                </div>
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <div className="bg-thirdColor h-full w-12 flex items-center justify-center rounded-l-xl">
                      <BiMaleFemale  className="text-white w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative text-md w-full md:w-1/3">
                <label htmlFor="recipientName" className="text-xl font-semibold text-gray-700">
                Instrument Preferences<span className="text-red-600">*</span>
                </label>
                <div className="relative mt-1 pl-3">
                <select
                    id="instrument"
                    className="shadow appearance-none border rounded-xl w-full py-6 px-3 pl-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option>Select</option>
                    {/* Add more options as needed */}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <IoIosArrowDown className="text-gray-500 w-5 h-5" />
                </div>
                 
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <div className="bg-thirdColor h-full w-12 flex items-center justify-center rounded-l-xl">
                    <PiGuitarLight className="text-white w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative text-md w-full md:w-1/3">
                <label htmlFor="relationship" className="text-xl font-semibold text-gray-700">
                Special Requests<span className="text-red-600">*</span>
                </label>
                <div className="relative mt-1 pl-3">
                <input
                    type="text"
                    id="requests"
                    className="shadow appearance-none border rounded-xl w-full py-6 px-3 pl-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Type Here..."
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  </div>
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <div className="bg-thirdColor h-full w-12 flex items-center justify-center rounded-l-xl">
                      <img src={i_icon} alt="select_icon" className="text-gray-500 w-3 h-7" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Delivery Options Section */}
<div>
  <h6 className="text-secondary font-bold text-sm mb-3">Delivery Options:</h6>
  <div className="flex flex-col md:flex-row gap-5">
    {/* Delivery Format */}
    <div className="relative text-md w-full md:w-1/3">
  <label htmlFor="deliveryFormat" className="text-xl font-semibold text-gray-700">
    Delivery Format <span className="text-xs text-gray-500">(preferred)</span>
  </label>
  <div className="relative mt-1 ">
    <div className="flex">
    <input
  type="text"
  id="deliveryFormatPart1"
  className="shadow appearance-none border rounded-l-xl w-1/2 py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  placeholder="Download"
 
/>
      <input
        type="text"
        id="deliveryFormatPart2"
        className="shadow appearance-none border rounded-r-xl w-1/2 py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Physical CD"
      />
    </div>
  </div>

    </div>
    
    {/* Delivery Speed */}
    <div className="relative text-md w-full md:w-1/3">
      <label htmlFor="deliverySpeed" className="text-xl font-semibold text-gray-700">
        Delivery Speed<span className="text-red-600">*</span>
      </label>
      <div className="relative mt-1 pl-3">
        <select
          id="deliverySpeed"
          className="shadow appearance-none border rounded-xl w-full py-6 px-3 pl-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option>Select</option>
          <option>Standard</option>
          <option>Expedited</option>
          <option>Overnight</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <IoIosArrowDown className="text-gray-500 w-5 h-5" />
        </div>
        <div className="absolute inset-y-0 left-0 flex items-center">
          <div className="bg-thirdColor h-full w-12 flex items-center justify-center rounded-l-xl">
          <IoSpeedometerOutline  className="text-white w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
    
    {/* Add-Ons */}
    <div className="relative text-md w-full md:w-1/3">
      <label htmlFor="addOns" className="text-xl font-semibold text-gray-700">
        Add-Ons<span className="text-red-600">*</span>
      </label>
      <div className="relative mt-1 ">
       <input
       type="text"
       id="deliveryFormatPart1"
        className="shadow appearance-none border rounded-l-xl w-1/2 py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         placeholder="Custom Music Video"
 
         />
      <input 
        type="text"
        id="deliveryFormatPart2"
        className="shadow appearance-none border rounded-r-xl w-1/2 py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Personalized Album Art "
      />
       
      </div>
    </div>
  </div>
</div>
  {/* Contact Information Section */}
  <div>
            <h6 className="text-secondary font-bold text-sm mb-3">Contact Information:</h6>
            <div className="flex flex-col md:flex-row gap-7">
              <div className="relative text-md w-full md:w-1/2">
                <label htmlFor="songTheme" className="text-xl font-semibold text-gray-700">
                Email Address
                </label>
                <div className="relative mt-1 pl-3">
                  <input
                    type="text"
                    id="songTheme"
                    className="shadow appearance-none border rounded-xl w-full py-6 px-3 pl-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter email"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <div className="bg-thirdColor h-full w-12 flex items-center justify-center rounded-l-xl">
                    <MdAlternateEmail className="text-white w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative text-md w-full md:w-1/2">
                <label htmlFor="personalAnecdotes" className="text-xl font-semibold text-gray-700">
                Phone Number 
                </label>
                <div className="relative mt-1 pl-3">
                  <input
                    type="text"
                    id="personalAnecdotes"
                    className="shadow appearance-none border rounded-xl w-full py-6 px-3 pl-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Phone Number"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <div className="bg-thirdColor h-full w-12 flex items-center justify-center rounded-l-xl">
                    <FaPhoneAlt  className="text-white w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


            {/* Payment Information: Section */}
     <div>
            <h6 className="text-secondary font-bold text-sm mb-3">Payment Information:</h6>
            <div className="flex flex-col md:flex-row gap-7">
              <div className="relative text-md w-full md:w-1/2">
                <label htmlFor="songTheme" className="text-xl font-semibold text-gray-700">
                Payment Method
                  </label>
                <div className="relative mt-1 pl-3">
                <select
                  id="occasionType"
                  className="shadow appearance-none border rounded-xl w-full py-6 px-3 pl-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option>Select </option>
                  {/* Add more options as needed */}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <IoIosArrowDown className="text-gray-500 w-5 h-5" />
                </div>
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <div className="bg-thirdColor h-full w-12 flex items-center justify-center rounded-l-xl">
                    <img src={pay_icon} alt="pay_icon.png"  className="text-white w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative text-md w-full md:w-1/2">
                <label htmlFor="personalAnecdotes" className="text-xl font-semibold text-gray-700">
                Billing Address
                </label>
                <div className="relative mt-1 pl-3">
                  <input
                    type="text"
                    id="personalAnecdotes"
                    className="shadow appearance-none border rounded-xl w-full py-6 px-3 pl-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Address"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <div className="bg-thirdColor h-full w-12 flex items-center justify-center rounded-l-xl">
                    <img src={bill_icon} alt="bill_icon.ong" className="text-white w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-8 text-md w-full md:w-full">
  <label htmlFor="personalAnecdotes" className="text-xl font-semibold text-gray-700">
    Comment
  </label>
  <div className="relative mt-3 pl-4">
  <textarea
  id="personalAnecdotes"
  className="shadow appearance-none border rounded-xl w-full py-6 px-5 pl-16 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
  rows={9}  
  placeholder="Comment"
/>
    <div className="absolute inset-y-0 left-0 flex items-center">
      <div className="bg-thirdColor h-full w-20 mb-2 flex items-center justify-center rounded-l-xl">
        <img src={pay_icon} alt="bill_icon.png" className="text-white w-7 h-7" />
      </div>
    </div>
  </div>
</div>
 </div>
 <div className="flex items-center space-x-2 p-2 rounded-lg ">
  <CgToggleOff className="h-8 w-8 " />
  <span className=" text-lg">
    User agrees to the terms and conditions
  </span>
</div>


          

<div className="flex flex-col items-center space-y-6">
  <div className="text-center">
   
  </div>
  <div className="flex justify-center space-x-4">
  <button
      type="button"
      className="bg-gray-400 text-white rounded-full px-6 py-3 text-lg font-bold hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
    >
      Review Your Order Details
    </button>
    <button
      type="submit"
      className="bg-secondary text-white rounded-full px-8 py-4 text-xl font-bold hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary-light focus:ring-opacity-50"
    >
      Submit
    </button>
  </div>
</div>

        </form>
      </div>
    </div>
  );
}

export default GetStartedForm;
