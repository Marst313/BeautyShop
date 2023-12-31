import React from 'react';
import { Footer, MainAbout, PageHeader } from '../components/';
import { aboutIcons } from '../utils/links';

const About = () => {
  return (
    <main>
      <PageHeader title="about" />
      <MainAbout />

      <svg className="lg:mt-20 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e13c6b"
          fillOpacity="1"
          d="M0,256L34.3,224C68.6,192,137,128,206,117.3C274.3,107,343,149,411,165.3C480,181,549,171,617,144C685.7,117,754,75,823,64C891.4,53,960,75,1029,117.3C1097.1,160,1166,224,1234,218.7C1302.9,213,1371,139,1406,101.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e13c6b"
          fillOpacity="1"
          d="M0,160L12,149.3C24,139,48,117,72,138.7C96,160,120,224,144,234.7C168,245,192,203,216,186.7C240,171,264,181,288,176C312,171,336,149,360,144C384,139,408,149,432,170.7C456,192,480,224,504,213.3C528,203,552,149,576,154.7C600,160,624,224,648,240C672,256,696,224,720,229.3C744,235,768,277,792,250.7C816,224,840,128,864,117.3C888,107,912,181,936,192C960,203,984,149,1008,138.7C1032,128,1056,160,1080,149.3C1104,139,1128,85,1152,53.3C1176,21,1200,11,1224,37.3C1248,64,1272,128,1296,144C1320,160,1344,128,1368,138.7C1392,149,1416,203,1428,229.3L1440,256L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z"
        ></path>
      </svg>

      <ul className="lg:flex justify-center main-container items-center gap-2">
        {aboutIcons.map((item) => {
          return (
            <li key={item.id} className="max-w-sm flex flex-col justify-evenly items-center my-5  gap-2 ">
              <img src={item.img} alt={item.name} className="w-52 h-52 hover:scale-105 hover:bg-bgPrimaryProducts" />
              <h3 className="text-primaryPink font-semibold">{item.h3}</h3>
              <p className="max-w-xs">{item.paragraph}</p>
            </li>
          );
        })}
      </ul>

      <Footer />
    </main>
  );
};

export default About;
