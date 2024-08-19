import service1 from '/service1.png';
import service2 from '/service2.png';
import service3 from '/service3.png';
import service4 from '/service4.png';
import service5 from '/service5.png';
import service6 from '/service6.png';
import service7 from '/service7.png';
import service8 from '/service8.png';
import service9 from '/service9.png';
import service10 from '/service10.png';
import service11 from '/service11.png';
import service12 from '/service12.png';
import service13 from '/service13.png';
import service14 from '/service14.png';
import service15 from '/service15.png';



const services = [
  {
    img: service1,
    title: 'Want to propose?',
    description: 'Surprise your love with a personalized song.',
  },
  {
    img: service2,
    title: 'Organizing a birthday?',
    description: 'Give the gift of a custom song.',
  },
  {
    img: service3,
    title: 'Celebrate your anniversary',
    description: 'With a song made just for you.',
  },
  {
    img: service4,
    title: 'Planning a wedding?',
    description: 'Make it unforgettable with a personalized song.',
  },
  {
    img: service5,
    title: 'Need a unique gift?',
    description: 'Create a custom song for any occasion.',
  },
  {
    img: service6,
    title: 'Welcoming a new baby?',
    description: 'Commemorate with a personalized lullaby.',
  },
  {
    img: service7,
    title: 'Graduating?',
    description: 'Celebrate with a song that marks the milestone.',
  },
  {
    img: service8,
    title: 'Retiring?',
    description: 'Honor the journey with a custom-made song.',
  },
  {
    img: service9,
    title: "Mother's Day coming up?",
    description: 'Show your love with a special song.',
  },
  {
    img: service10,
    title: "Father's Day approaching?",
    description: 'Surprise him with a personalized song.',
  },
  {
    img: service11,
    title: 'Got engaged?',
    description: 'Capture the moment with a unique song.',
  },
  {
    img: service12,
    title: 'Promotion at work?',
    description: 'Celebrate with a custom song.',
  },
  {
    img: service13,
    title: 'New home?',
    description: 'Create memories with a personalized housewarming song.',
  },
  {
    img: service14,
    title: 'Holiday season?',
    description: 'Spread cheer with a festive custom song.',
  },
  {
    img: service15,
    title: 'Missing someone?',
    description: 'Send them a song that says it all.',
  },
];



export default function Services() {
  return (
    <div className="min-h-screen bg-primary text-white py-8 px-4 md:px-8 lg:px-16 flex flex-col items-center">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-10 text-center relative mt-4"
        style={{ textDecoration: 'underline', textDecorationColor: '#A825C1' }} // Replace with your primary color if different
      >
        Who Should Use Our Service
      </h2>

      <div className="w-full max-w-screen-xl px-4 md:px-10 lg:px-16 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className='p-2 lg:p-4 md:p-4 flex flex-col items-center md:items-start text-center md:text-left'>
            <img src={service.img} alt={`service${index + 1}.png`} className="w-full h-auto"/>
            <h1 className='font-bold text-secondary text-xl mt-2'>{service.title}</h1>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

     
         
      </div>
  );
}
