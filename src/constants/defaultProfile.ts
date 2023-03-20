import { TResumeProfile } from '@src/types/resume';

export const DEFAULT_PROFILE: TResumeProfile = {
  name: 'Kien Ngo',
  contact: {
    address: '123 Avenue Road, ABC XYZ, Toronto, Ontario',
    phone: '(416) ***-***',
    email: 'kientngo@proton.me',
  },
  extraLinks: [
    {
      displayText: 'Github',
      link: 'https://github.com/kienngo98',
    },
    {
      displayText: 'LinkedIn',
      link: 'https://linkedin.com/in/kienngo98',
    },
  ],
  intro:
    "As a front-end developer with a focus on website performance, I love to create fast and efficient websites that provide the best possible user experience. I believe that great websites are not only visually appealing but also functionally sound, and my passion lies in making sure that every line of code is optimized for speed and performance. With my skills in front-end development, I strive to create responsive, intuitive, and interactive websites that delight users and exceed expectations. Let's connect and build websites that not only look great but also perform flawlessly.",
  sections: [
    {
      displayText: 'Work Experience',
      items: [
        {
          link: 'https://mome.io',
          name: 'MOME',
          duration: 'May 2022 - Current',
          location: 'Remote',
          title: 'Front-End Developer / Tech Lead',
          highlights: [
            "MOME's vision is to be the number 1 platform to collect, trade and own NFTs of iconic moments in culture. We are building an engaging and gamified ecosystem, featuring the most meaningful NFTs driven by the world's top brands and creators.",
          ],
        },
        {
          link: 'https://aareas.com',
          name: 'Aareas Interactive Inc.',
          duration: 'Apr 2019 - Mar 2022 (3 years)',
          location: 'Toronto, ON',
          title: 'Front-End Developer',
          highlights: [
            'Aareas Interactive is a PropTech company that focuses on creating epic home-buying experiences. Our platform allows people to shop, purchase, and make selections using photorealistic virtual homes, communities, and virtual design centers, online or in person.',
          ],
        },
        {
          link: 'https://techmien.com',
          name: 'Techmien Corp.',
          duration: 'Jan 2018 - May 2018 (5 months)',
          location: 'Toronto, ON',
          title: 'Front-End Developer (CO-OP)',
          highlights: [
            'Techmien Corp is a Toronto-based software development firm that specializes in creating innovative solutions that incorporate leading edge technologies to give our clients a competitive advantage.',
          ],
        },
      ],
    },
    {
      displayText: 'Projects',
      items: [
        {
          link: 'https://classic-resume-builder.vercel.app',
          name: 'Classic Resume Builder',
          duration: '',
          location: '',
          title: 'Founder',
          highlights: ['A simple web app to create & custom your resume'],
        },
        {
          link: 'https://project2.com',
          name: 'Project No. 2',
          duration: '',
          location: 'Toronto, ON',
          title: 'Name of the project',
          highlights: [
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam deserunt doloremque, corporis praesentium maxime tenetur ab voluptate eius aut ad eos reiciendis molestias, voluptas perspiciatis labore! Sint dolores minus voluptates.',
          ],
        },
      ],
    },
    {
      displayText: 'Education',
      items: [
        {
          link: 'https://centennialcollege.ca',
          name: 'Centennial College',
          duration: '2017 - 2019 (3 years)',
          location: 'Toronto, ON',
          title: 'Software Engineering & Game Programming',
          highlights: [
            'Courses: Game design, Three-dimensional graphics programming, Simulation design & Multiplayer online game programming',
            'Graduated with one year of real-life work experience'
          ],
        },
        {
          link: '',
          name: 'Le Quy Don Highschool for Gifted students',
          duration: '2013 - 2016 (3 years)',
          location: 'Vung Tau, Viet Nam',
          title: 'Name of program you took at the highschool',
          highlights: ['Courses: Basic programming with Pascal', 'Graduated at the bottom of the class'],
        },
      ],
    },
  ],
};
