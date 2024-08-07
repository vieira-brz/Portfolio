import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  
  import { CTA } from "../components";
  import { experiences, skills } from "../constants";
  
  import "react-vertical-timeline-component/style.min.css";
  
  const Hobbies = () => {
    return (
      <section className='max-container'>
        <h1 className='head-text'>
          Olá, Eu sou {" "}
          <span className='blue-gradient_text font-semibold drop-shadow'>
            {" "}
            Vinícius
          </span>{" "}
          👋
        </h1>
  
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Desenvolvedor Full Stack & Cientista de Dados no Brasil! Atuando nas áreas Web, DevOps, Infraestrutura e Cloud Servers.
            Reconhecido por otimizar processos de produção através de software. 
            Profissional comprometido com a excelência, capaz de liderar e inovar.
          </p>
        </div>
  
        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text'>Minhas Skills</h3>
  
          <div className='mt-16 flex flex-wrap gap-12'>
            {skills.map((skill) => (
              <div className='block-container md:w-20 md:h-20 w-16 h-16' key={skill.name}>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center '>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain '
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <div className='py-16'>
          <h3 className='subhead-text'>Experiência de trabalho.</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
              Trabalhei em uma empresa até o momento, aprimorando minhas habilidades e
              aliando-se a pessoas inteligentes. Aqui está o resumo:
            </p>
          </div>
  
          <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className='flex justify-center items-center w-full h-full'>
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[80%] h-[80%] object-contain rounded-full'
                      />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {experience.title}
                    </h3>
                    <p
                      className='text-black-500 font-medium text-base'
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>
  
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className='text-black-500/50 font-normal pl-1 text-sm'
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
  
        <hr className='border-slate-200' />
  
        <CTA />
      </section>
    );
  };
  
  export default Hobbies;