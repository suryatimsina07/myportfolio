import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Accordion from "./Accordian";
import { EDUCATION, EXPERINCE } from "@/public/data";
import LanguagesProgress from "./LanguageProgress";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ui/About.scss';
import { faNode, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';


const About = () => {
    return (
        <section className='max-padd-container py-16 xl:py-28'>
            {/* title */}
            <div className="pb-10 text-center xl:text-start font-bold">
                <span className="text-primary uppercase">Meet Ishwor</span>
                <h3 className='h3 font-extrabold'>About me</h3>
            </div>
            {/* container */}
            <div className='flex flex-col xl:flex-row gap-16'>
                {/* left */}
                <div className='xl:flexCenter flex-1 relative'>
                    <div className="stage-cube-cont" data-aos="fade-right" data-aos-anchor=".about__container" data-aos-duration="500">
                        <div className="cubespinner">
                            <div className="face1">
                                <FontAwesomeIcon icon={faNode} color="#3C873A" />
                            </div>
                            <div className="face2">
                                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                            </div>
                            <div className="face3">
                                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                            </div>
                            <div className="face4">
                                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                            </div>
                            <div className="face5">
                                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                            </div>
                            <div className="face6">
                                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className="flex-1 mx-auto xl:mx-0">
                    <Tabs defaultValue="skills">
                        <TabsList className='w-full grid grid-cols-3 max-w-[511px] border dark:border-secondary mx-auto xl:mx-0'>
                            <TabsTrigger value='skills'>Skills</TabsTrigger>
                            <TabsTrigger value='education'>Education</TabsTrigger>
                            <TabsTrigger value='intro'>My Expertise</TabsTrigger>
                        </TabsList>
                        {/* tabs content */}
                        <div className="pt-12 xl:pt-3 pl-3">
                            <TabsContent value='skills'>
                                <div className="flex flex-col gap-4">
                                    <LanguagesProgress />
                                </div>
                            </TabsContent>

                            {/* education */}
                            <TabsContent value='education'>
                                <div className="flex flex-col gap-4">
                                    <h4 className="bold-20 uppercase">My Education & Experience</h4>
                                    {EDUCATION.map((item, i) => (
                                        <div key={i} className="flex gap-4 medium-15">
                                            <div>{item.title}</div>
                                            -
                                            <div>{item.year}</div>
                                        </div>
                                    ))}
                                </div>
                                <hr className="my-4 w-10/12" />
                                <div className="flex flex-col gap-4 mt-1.5">
                                    {EXPERINCE.map((item, i) => (
                                        <div key={i} className="flex gap-4 medium-15">
                                            <div>{item.title}</div>
                                            -
                                            <div>{item.year}</div>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>
                            {/* skills */}
                            <TabsContent value='intro'>
                                <h4 className="bold-20 uppercase pb-1">Pleasure to meet you!</h4>
                                <p className="max-w-md">I am an enthusiastic student of Computer Science and Business Management, driven by a passion for developing impactful and purposeful projects. My learning philosophy centers on immersive, hands-on experiences that allow me to dive into complex concepts headfirst. I firmly believe this practical approach not only deepens my understanding but also sets the stage for excellence in the dynamic field of computer science. Whether it's coding, analyzing data, or collaborating on innovative solutions, I am committed to making a meaningful difference through technology.</p>
                                {/* accordion */}
                                {/* <Accordion sliceCount={(0, 3)} /> */}
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}

export default About