import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import Image from "next/image";
import dev from '../public/avatar.png'
import design from '../public/design.png'
import code from '../public/machine.png'
import consulting from '../public/code.png'
import slack from '../public/slack-clone.png'
import linkedin from '../public/linkedin-clone.png'
import yan from '../public/yan-dev.png'
import gmail1 from '../public/gmail.png'
import web3 from '../public/web3.png'
import web5 from '../public/web5.png'
import hulu from '../public/hulu-clone.png'
import {useState, useRef} from "react"
import Link from 'next/link'
import emailjs from '@emailjs/browser'
/* eslint no-use-before-define: 0 */


export default function Home() {

  const [darkMode, setDarkMode] = useState(false);
  const [done, setDone] = useState(false);

  const formRef = useRef();

  const handleSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm(
          'service_cc71u0f', 
          'template_gc3dfjt', 
          formRef.current, 
          'user_JEUhIkUdOFsAWVacOn6Oo')
    .then((result) => {
        console.log(result.text);
        setDone(true);
    }, (error) => {
        console.log(error.text);
    });
  }
  

  return (
    <div className={darkMode ? 'dark' : ""} >
      <Head>
        <title>Asyncrite Simo Portfolio </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800" >
       <section className="min-h-screen" >
        <nav className="py-10 mb-12 flex justify-between sticky top-0 z-9" >
          <h1 className="text-xl font-burtons dark:text-white " >developed bySimo</h1>
          <ul className="flex items-center" >
            <li>
              <BsFillMoonStarsFill onClick={()=>{setDarkMode(!darkMode)}} className="cursor-pointer text-2xl" />
            </li>
            <li>
              <a className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 
                              rounded-md ml-8 "href="#"
              >Resume</a>
            </li>
          </ul>
        </nav>

        <div className="text-center p-10 py-1" >
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl " >Asyncrite Simo Simo</h2>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-white " >Developer and Designer.</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white" >Informatic engineer at the HTW Berlin of Applied Sciences. My academic backkground is a mixture of computer science and mechanical engineering</p>
        </div>

        <div className="flex text-5xl justify-center gap-16 py-3 text-gray-600 " >
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        
        <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto overflow-hidden md:h-96 md:w-96" >
          <Image src={dev} layout="fill" objectFit='cover' />
        </div>
       </section>

       <section>
        <div className="text-center py-2" >
          <h2 className="text-3xl py-1 text-teal-500 mb-5" >Portfolio</h2>
          <p className="dark:text-white" >For the <span className="text-teal-700"span>University</span>, <span className="text-teal-700"span>Company </span> such as <span className="text-teal-700" >Think3DDD</span> and personal research, i've done remote work and 
          collaborated with talented people to create Digital Products for both bussiness and consumer use with new trends Technologies.
          </p>
          
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-white" >I offer from a wide range of services, including brand UI design, Web development</p>
        </div>

        <div className="lg:flex gap-10 " >
          <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-white " >
            <Image src={design} width="100" height="100"/>
            <h3 className="text-lg font-medium pt-8 pb-2" >Beautiful Designs</h3>
            <p className="py-2">Creating elegant designs suited for your needs following core design theory</p>

            <div className="flex justify-around" >
              <div>
                <h4 className="py-4 text-teal-600 underline underline-offset-2 " >Design tools</h4>
                <p className="text-gray-800 font-bold  py-1" >Photoshop</p>
                <p className="text-gray-800 font-bold py-1" >Figma</p>
                <p className="text-gray-800 font-bold py-1" >microsoft Visio</p>
                <p className="text-gray-800 font-bold py-1" >yEd</p>
              </div>

              <div>
                <h4 className="py-4 text-teal-600 underline underline-offset-2 " >HTML Styling</h4>
                <p className="text-gray-800 font-bold  py-1" >Tailwind Css</p>
                <p className="text-gray-800 font-bold py-1" >Sass</p>
                <p className="text-gray-800 font-bold py-1" >Css</p>
                <p className="text-gray-800 font-bold py-1" >styled-Component</p>
              </div>
            </div>
            
          </div>

          <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-white " >
            <Image src={consulting} width="100" height="100"/>
            <h3 className="text-lg font-medium pt-8 pb-2" >Programming Skills</h3>
            <p className="py-2">Solving problems using programming skills </p>
              <div className="flex justify-around" >

                <div className="mr-5" >
                 <h4 className="py-4 text-teal-600 underline underline-offset-2 " >Languages</h4>
                 <p className="text-gray-800 py-1 font-bold" >Javascript </p>
                 <p className="text-gray-800 py-1 font-bold" >C#</p>
                 <p className="text-gray-800 py-1 font-bold" >Python</p>
                </div>

                <div>
                 <h4 className="py-4 text-teal-600 underline underline-offset-2 mr-5" >Framework</h4>
                 <p className="text-gray-800 py-1 font-bold" >reactJs</p>
                 <p className="text-gray-800 py-1 font-bold" >Redux</p>
                 <p className="text-gray-800 py-1 font-bold" >NextJs</p>
                </div>

                <div >
                 <h4 className="py-4 text-teal-600 underline underline-offset-2 " >Database Management</h4>
                 <p className="text-gray-800 py-1  font-bold" >MySQL</p>
                 <p className="text-gray-800 py-1 font-bold " >SQL</p>
                </div>
              </div>
          </div>

          <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-white" >
            <Image src={code} width="100" height="100"/>
            <h3 className="text-lg font-medium pt-8 pb-2" >Systems</h3>
            <p className="py-2">build, scale and deliver secure software</p>
            
            <div className="flex justify-around" >
              <div>
              <h4 className="py-4 text-teal-600 underline underline-offset-2 mr-6" >Management tools</h4>
                <p className="text-gray-800 py-1 font-bold " >Trello</p>
                <p className="text-gray-800 py-1 font-bold " >Microsoft Teams</p>
                <p className="text-gray-800 py-1 font-bold " >Versione</p>
              </div>

              <div>
              <h4 className="py-4 text-teal-600 underline underline-offset-2 " > VersionsManagement tools</h4>
                <p className="text-gray-800 py-1 font-bold " >GitLab</p>
                <p className="text-gray-800 py-1 font-bold " >GitHub</p>
                <p className="text-gray-800 py-1 font-bold " >Git</p>                
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section>
        <div className="text-center" >
          <h3 className="text-4xl font-bold py-1 dark:text-white " >Create and Inspire.</h3>
            <div className="dark:text-white py-5" >
              <p>"You can Code Tasks, not Consciousness. Underneath , you can check various self made Project in Web Development using <span className="text-teal-700 font-bold " >Firebase</span> as backend</p>

            </div>
        </div>

        <div className="md:grid grid-cols-3 gap-10 py-10 " >
          <div className="basis-1/3 flex-1 " >
            <h3 className="mb-2 dark:text-white font-bold" >Netflix 2.0 Clone</h3>
            <Link href="https://netflix-clone-2c60a.web.app/" >
              <a target="_blank">
                <Image src={hulu} className="rounded-lg object-cover cursor-pointer " width={"100%"} height={"100%"} layout="responsive" />
              </a>              
            </Link>            
          </div>

          <div className="basis-1/3 flex-1 " >
            <h3 className="mb-2 dark:text-white font-bold" >Linkedin clone</h3>
            <Link href="https://linkedin-clone-85a35.web.app" >
            <a target="_blank">
              <Image src={linkedin} className="rounded-lg object-cover cursor-pointer " width={"100%"} height={"100%"} layout="responsive" />
            </a>
            </Link>
           
          </div>

          <div className="basis-1/3 flex-1 " >
            <h3 className="mb-2 dark:text-white font-bold" >Gmail Clone</h3>
            <Link href="https://clone-d64bf.web.app/" >
              <a target="_blank">
                <Image src={gmail1} className="rounded-lg object-cover cursor-pointer " width={"100%"} height={"100%"} layout="responsive" />
              </a>
            </Link>
          </div>

          <div className="basis-1/3 flex-1 " >
            <h3 className="mb-2 dark:text-white font-bold" >iMessage</h3>
            <Link  href="https://imessage-clone-c2b14.web.app/">
              <a target="_blank">
                <Image src={web3} className="rounded-lg object-cover cursor-pointer " width={"100%"} height={"100%"} layout="responsive" />
              </a>
            </Link>
          </div>

          <div className="basis-1/3 flex-1 " >
            <h3 className="mb-2 dark:text-white font-bold" >Slack clone</h3>
            <Link href="https://slack-clone-293ff.web.app" >
              <a target="_blank">
                <Image src={slack} className="rounded-lg object-cover cursor-pointer " width={"100%"} height={"100%"} layout="responsive" />
              </a>
            </Link>
          </div>

          <div className="basis-1/3 flex-1 " >
            <h3 className="mb-2 dark:text-white font-bold" >Dummy</h3>
            <Image src={web5} className="rounded-lg object-cover cursor-pointer " width={"100%"} height={"100%"} layout="responsive" />
          </div>
        </div>
       </section>

       <section>
          <div className="flex justify-around items-center text-center md:gap-10" >
            <div className="hidden lg:inline " >
              <h1 className="text-lg mb-5 p-5 dark:text-white" >Let's discuss your project</h1>
              <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto overflow-hidden md:h-96 md:w-96" >
                <Image src={yan} layout="fill" objectFit='cover' />
              </div>
            </div>

            <div className="flex flex-col " >
              <h3 className="dark:text-white mb-5" > <span className="text-teal-700 font-bold ">What's your Story ?</span> Get in touch. Always ready to start new project and face new Challenges</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3" >
                <input className="text-md rounded-md p-2 border border-sky-300 outline-0 dark:bg-transparent dark:text-white"  type="text" placeholder='Name' />
                <input className="text-md rounded-md p-2 border border-sky-300 outline-0 dark:bg-transparent dark:text-white"  type="text" placeholder="Subject" />
                <input className="text-md rounded-md p-2 border border-sky-300 outline-0 dark:bg-transparent dark:text-white" type="email" placeholder="Email" />
                <textarea className="text-md rounded-md p-2 border border-sky-300 outline-0 dark:bg-transparent dark:text-white" name="" id="" cols="30" rows="10" placeholder="Message" />
                <button className="border h-10 w-13 mb-5 border-sky-300 dark:text-white">submit</button>
                {done && "thank you...your message have been sent"}
              </form>
            </div>
            
          </div>

          <p className="text-center p-8 dark:text-white" >Copyright &copy;{new Date().getFullYear()}</p>


       
       </section>

      </main>

      
    </div>
  )
}
