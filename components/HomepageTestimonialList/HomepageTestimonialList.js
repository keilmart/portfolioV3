import Image from "next/image";
import ReadMoreReact from "read-more-react";

const HomepageTestimonialList = () => {
  const testimonials = [
    {
      name: "Joel Bott",
      position: "30 Forensic Engineering",
      photo: "/pictures/joel-bott.png",
      title: "30 Forensic",
      company: "TOK Design Studio",
      testimonial:
        "Keil and I worked together for almost a year, and throughout that time he proved an immensely valuable asset to both our team and our firm as a whole. During our time as colleagues, he ensured all work completed was done so in a timely manner and of the highest quality. He possesses a self-motivated attitude and overall personability which, when paired with his constant strive to further himself through continuing education, created someone who led by example and demonstrated that the road to success was paved with hard-work and a dedication to your craft. He is passionate about what he does and is continuously driven to create the finest product possible. I cannot hold Keil in higher regards.",
    },
    {
      name: "Amy Mejia",
      position: "York Region",
      photo: "/pictures/amy-mejia.png",
      title: "York Region",
      company: "Tatham Engineering",
      testimonial:
        "Keil is very organized and consistent with how he keeps electronic files and hard copy files stored.He has great mathematical abilities and is able to communicate with anyone, which allows him to be very efficient and have a very strong work ethic. Keil is a very quick learner and uses it to his advantage when faced with any new challenges as well as helping others around him on programs such as AutoCAD. He is very reliable as he is able to meet all of his deadlines therefore, I believe that Keil would be a valuable asset and any company would greatly benefit from having him as part of their team.",
    },
  ];

  return (
    <div className="gap-4 -mt-10 md:-mt-8">
      <ul>
        {testimonials.map((testimonial, idx) => (
          <li
            className="antialiased border-b-2 border-dotted last-of-type:border-0"
            key={idx}>
            <div className="grid grid-cols-1 gap-1 py-4 pl-3 pr-2 transition duration-500 ease-in-out rounded-lg group md:py-8 md:gap-4 md:grid-cols-5 hover:bg-gray-100 md:px-12 dark:hover:bg-darkModeDetail">
              <div className="w-24">
                <div className="justify-start hidden w-full pt-1 pb-2 pl-1 md:flex md:pl-0 md:justify-center">
                  <span className="inline-block text-xs font-semibold tracking-widest uppercase text-tertiary">
                    {testimonial.title}
                  </span>
                </div>
                <div>
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    height="95"
                    width="95"
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="flex justify-between col-span-4">
                <div>
                  <div className="flex mb-1 text-xl text-primary dark:text-slate-200">
                    <h3 className="font-semibold dark:text-slate-200">
                      {testimonial.name},&nbsp;
                    </h3>
                    <h3 className="dark:text-slate-200">{testimonial.position}</h3>
                  </div>
                  <ReadMoreReact
                    text={testimonial.testimonial}
                    min={340}
                    ideal={360}
                    max={370}
                    readMoreText="...see more"
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomepageTestimonialList;
