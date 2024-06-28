import { Link } from "react-router-dom";
import { CTA } from "../components";
import { certificates } from "../constants";
import { arrow } from "../assets/icons";

const Certificates = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                Bem vindo aos meus {" "}
                <span className='blue-gradient_text font-semibold drop-shadow'>
                    {" "}
                    Certificados
                </span>{" "}
                🏆
            </h1>

            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>
                    Gosto de estudar variados temas e explorar o vasto mundo da tecnologia.
                    Durante minha jornada, foquei principalmente em desenvolvimento web e machine learning,
                    mas também adquiri conhecimentos em outras áreas relevantes para o mercado e para meu desenvolvimento profissional.
                </p>
            </div>

            <div className='flex flex-wrap my-20 gap-16'>
                {certificates.map((project) => (
                    <div className='lg:w-[400px] w-full' key={project.name}>
                        <div className='block-container w-12 h-12'>
                            <div className={`btn-back rounded-xl ${project.theme}`} />
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img
                                    src={project.iconUrl}
                                    alt='threads'
                                    className='w-1/2 h-1/2 object-contain rounded'
                                />
                            </div>
                        </div>

                        <div className='mt-5 flex flex-col'>
                            <h4 className='text-2xl font-poppins font-semibold'>
                                {project.name}
                            </h4>
                            <p className='mt-2 text-slate-500'>{project.description}</p>
                            <div className='mt-5 flex items-center gap-2 font-poppins'>
                                <Link
                                    to={project.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='font-semibold text-blue-600'
                                >
                                    Ir para
                                </Link>
                                <img
                                    src={arrow}
                                    alt='arrow'
                                    className='w-4 h-4 object-contain'
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <hr className='border-slate-200' />

            <CTA />
        </section>
    );
};

export default Certificates;