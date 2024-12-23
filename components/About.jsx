import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Accordion from "./Accordian";
import { EDUCATION, } from "@/public/data";
import {EXPRIENCE, } from "@/public/data";
import LanguagesProgress from "./LanguageProgress";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ui/About.scss';
import { faNode, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';


const About = () => {
    return (
        <section className='max-padd-container py-16 xl:py-28'>
            {/* title */}
            <div className="pb-10 text-center xl:text-start font-bold">
                <span className="text-primary uppercase">Meet Surya</span>
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
                       <TabsList className='w-full grid grid-cols-3 max-w-[435px] border dark:border-secondary mx-auto xl:mx-0'>
                            <TabsTrigger value='skills'>Skills</TabsTrigger>
                            <TabsTrigger value='education'>Education</TabsTrigger>
                            <TabsTrigger value='exprience'>Experience</TabsTrigger>
                            
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
                                    <h4 className="bold-20 uppercase">My Education</h4>
                                    {EDUCATION.map((item, i) => (
                                         <div key={i} className="flex flex-col gap-2 medium-15"> {/* Use flex-col to stack items */}
                                         <div className='block mb-2'> {item.title}  - {item.year}</div>
                                        
                                         
                                         <div className='block mb-2'>{item.t} - {item.y}</div>
                                    
                                     </div>
                                    ))}
                            </div>

                            </TabsContent>




                            <TabsContent value='exprience'>
                                <div className="flex flex-col gap-4">
                                    <h4 className="bold-20 uppercase">Exprience</h4>
                                    {EXPRIENCE.map((item, i) => (
                                         <div key={i} className="flex flex-col gap-1 medium-15"> {/* Use flex-col to stack items */}
                                         <div className='block mb-2'> {item.title}  - {item.year}</div>
                                         <div className='block mb-2'> {item.t4}  - {item.y4}</div>
                                         <div className='block mb-'> {item.t3}  - {item.y3}</div>
                                         <div className='block mb-2'> {item.t2} {item.y2}</div>
                                         <div className='block mb-1'> {item.t1} -{item.y1}</div>
                                         <div className='block mb-2'> {item.t}   - {item.y}</div>
                                        
                                
                                    
                                     </div>
                                    ))}
                            </div>

                            </TabsContent>
                        
                            
                        </div>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}

export default About