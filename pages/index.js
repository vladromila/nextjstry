import Head from 'next/head'
import styles from '../styles/index.module.css'
import Link from 'next/link'
import { useState } from 'react';
import * as Scroll from 'react-scroll';

// Or Access Link,Element,etc as follows
let LinkScroll = Scroll.Link;


export default function Home() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className={"flex w-full flex-col"}>
      <nav className='flex items-center flex-wrap bg-green-400 p-3 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <svg
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className='fill-current text-white h-8 w-8 mr-2'
            >
              <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
            </svg>
            <span className='text-xl text-white font-bold uppercase tracking-wide'>
              Talwind CSS
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white '>
                Home
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                Services
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                About us
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <div className={"flex w-full bg-homepage-hero bg-cover bg-no-repeat bg-bottom"}>
        <div className={"container flex mx-auto px-12 flex-col md:px-20 lg:px-20 xl:px-20 2xl:px-28"}>
          <div className={"flex h-20 lg:h-36 w-full"}></div>
          <h1 className="text-4xl lg:text-6xl font-default text-white leading-tight">Marketing Automation</h1>
          <h1 className="text-4xl lg:text-6xl font-default text-white leading-tight">Solutions</h1>
          <div className={"flex h-14 w-full"}></div>
          <p className="lg:w-1/2 font-pDefault text-white text-xl">Leveraging our hands-on technical expertise, deep automation skills and engineering mindset, we assist the best B2B brands in the world on their journey to enhanced digitalization.</p>
          <div className={"flex h-10 w-full"}></div>
          <div className={"flex flex-col xsm:items-center xsm:flex-row xsm:justify-start content-start items-start"}>
            <Link href="/123">
              <button className="h:auto flex-grow-0 px-8 py-3 ml-0 m-2 mx-4 text-lpGreen-links transition-colors font-default text-sm bg-white border-2 border-white focus:outline-none duration-150 hover:bg-lpGreen-main hover:text-white">
                FIND OUT MORE
              </button>
            </Link>
            <Link href="/123">
              <button className="h:auto flex-grow-0 px-8 py-3 ml-0 m-2 xsm:mx-4 text-white transition-colors font-default text-sm bg-lpGreen-links border-2 border-lpGreen-links focus:outline-none duration-150 hover:bg-lpGreen-linksHover hover:border-lpGreen-linksHover hover:text-black">
                CONTACT US
              </button>
            </Link>
          </div>
          <div className={"flex h-10 sm:h-20 lg:h-36 w-full"}></div>
          <div className={"flex w-full justify-center align-center"}>
            <LinkScroll to="discoverOurCompany" smooth={true} offset={-100}>
              <img id="scroll-down-arrow" src="/assets/images/scroll-down-arrow.png" />
            </LinkScroll></div>
          <div className={"flex h-10 w-full"}></div>
        </div>
      </div>
      <div className={"flex w-full bg-white"} id="discoverOurCompany">
        <div className={"container flex mx-auto px-6 flex-col md:px-20 lg:px-20 xl:px-20 2xl:px-28"}>
          <div className={"flex h-20 lg:h-40 w-full"}></div>
          <h1 className="font-default text-lpBlack-main leading-tight text-center text-3xl sm:text-4xl lg:text-5xl">Raise your company’s digital <span class="text-lpGreen-main">intelligence</span>. Mobilize MarTech <span class="text-lpGreen-main">solutions</span> towards the greatest business impact.</h1>
          <div className={"flex h-16 w-full"}></div>
          <p className="lg:w-3/5 font-pDefault text-lpBlack-main text-xl self-center text-center">Join forces with a great team of marketing automation experts that easily embeds in your existing marketing team, augmenting the strategic and technical expertise so critical in today’s online world.</p>
          <div className={"flex h-16 w-full"}></div>
          <Link href="/123">
            <button className="h:auto flex-grow-0 px-8 py-3 bg-lpGreen-main text-white transition-colors font-default text-sm border-2 border-lpGreen-main self-center focus:outline-none duration-150 hover:bg-white hover:text-lpGreen-main">
              DISCOVER OUR COMPANY
              </button>
          </Link>
          <div className={"flex h-40 w-full"}></div>
        </div>
      </div>
      <div className={"container flex mx-auto px-12 flex-col md:px-20 lg:px-20 xl:px-20 2xl:px-28"}>
        <div className={"flex flex-row flex-wrap"}>
          <div className={"flex w-full md:w-1/2 xl:w-1/3 flex-col p-0 md:pr-16"}>
            <h1 className="font-default text-lpBlack-main leading-tight text-4xl">What we <span class="text-lpGreen-main">do</span></h1>
            <div className={"flex h-10 w-full"}></div>
            <p className="font-pDefault text-lpBlack-main text-lg">With a keen focus on discovering new paths for complex marketing automation challenges, and on leveraging data engineering best practices, we guide enterprise leaders towards a path of great digital progress.</p>
            <div className={"flex h-20 w-full"}></div>
          </div>
          <div className={"flex w-full md:w-1/2 xl:w-1/3 flex-col p-0  md:pl-16 xl:p-0 xl:px-8 wwd"}>
            <img width={96} height={96} src="/assets/images/icon1.svg" />
            <div className={"flex h-8 w-full"}></div>
            <h1 className="font-default text-lpBlack-main leading-tight text-3xl">Eloqua<br /><span className="wwd-toChange">Consulting</span></h1>
            <div className={"flex h-8 w-full"}></div>
            <a href="/" className={"text-sm text-lpBlack-main font-default hover:text-lpGreen-main"}>» LEARN MORE</a>
            <div className={"flex h-20 w-full"}></div>
          </div>
          <div className={"flex w-full md:w-1/2 xl:w-1/3 flex-col p-0 md:pr-16 xl:p-0 xl:pl-16 wwd"}>
            <img width={96} height={96} src="/assets/images/icon2.svg" />
            <div className={"flex h-8 w-full"}></div>
            <h1 className="font-default text-lpBlack-main leading-tight text-3xl">Eloqua<br /><span className="wwd-toChange">Implementation</span></h1>
            <div className={"flex h-8 w-full"}></div>
            <a href="/" className={"text-sm text-lpBlack-main font-default hover:text-lpGreen-main"}>» LEARN MORE</a>
            <div className={"flex h-20 w-full"}></div>
          </div>
          <div className={"flex w-full md:w-1/2 xl:w-1/3 flex-col p-0 md:pl-16 xl:p-0 xl:pr-16 wwd"}>
            <img width={96} height={96} src="/assets/images/icon3.svg" />
            <div className={"flex h-8 w-full"}></div>
            <h1 className="font-default text-lpBlack-main leading-tight text-3xl">Eloqua <span className="wwd-toChange">Platform</span><br />Implementation</h1>
            <div className={"flex h-8 w-full"}></div>
            <a href="/" className={"text-sm text-lpBlack-main font-default hover:text-lpGreen-main"}>» LEARN MORE</a>
            <div className={"flex h-20 w-full"}></div>
          </div>
          <div className={"flex w-full md:w-1/2 xl:w-1/3 flex-col p-0  md:pr-16 xl:p-0 xl:px-8 wwd"}>
            <img width={96} height={96} src="/assets/images/icon4.svg" />
            <div className={"flex h-8 w-full"}></div>
            <h1 className="font-default text-lpBlack-main leading-tight text-3xl">Eloqua <span className="wwd-toChange">Campaign</span><br />Production</h1>
            <div className={"flex h-8 w-full"}></div>
            <a href="/" className={"text-sm text-lpBlack-main font-default hover:text-lpGreen-main"}>» LEARN MORE</a>
            <div className={"flex h-20 w-full"}></div>
          </div>
          <div className={"flex w-full md:w-1/2 xl:w-1/3 flex-col p-0  md:pl-16 xl:p-0 xl:pl-16 wwd"}>
            <img width={96} height={96} src="/assets/images/icon5.svg" />
            <div className={"flex h-8 w-full"}></div>
            <h1 className="font-default text-lpBlack-main leading-tight text-3xl">Eloqua<br /><span className="wwd-toChange">Enhancements</span></h1>
            <div className={"flex h-8 w-full"}></div>
            <a href="/" className={"text-sm text-lpBlack-main font-default hover:text-lpGreen-main"}>» LEARN MORE</a>
            <div className={"flex h-20 w-full"}></div>
          </div>
          <div className={"flex w-full md:w-1/2 xl:w-1/3 flex-col p-0 md:pr-16 xl:p-0 xl:pr-16 wwd"}>
            <img width={96} height={96} src="/assets/images/icon6.svg" />
            <div className={"flex h-8 w-full"}></div>
            <h1 className="font-default text-lpBlack-main leading-tight text-3xl">Eloqua Reporting<br />and <span className="wwd-toChange">Analytics</span></h1>
            <div className={"flex h-8 w-full"}></div>
            <a href="/" className={"text-sm text-lpBlack-main font-default hover:text-lpGreen-main"}>» LEARN MORE</a>
            <div className={"flex h-20 w-full"}></div>
          </div>
          <div className={"flex w-full md:w-1/2 xl:w-1/3 flex-col p-0  md:pl-16 xl:p-0 xl:px-8 wwd"}>
            <img width={96} height={96} src="/assets/images/icon7.svg" />
            <div className={"flex h-8 w-full"}></div>
            <h1 className="font-default text-lpBlack-main leading-tight text-3xl">Eloqua<br /><span className="wwd-toChange">Training</span></h1>
            <div className={"flex h-8 w-full"}></div>
            <a href="/" className={"text-sm text-lpBlack-main font-default hover:text-lpGreen-main"}>» LEARN MORE</a>
            <div className={"flex h-20 w-full"}></div>
          </div>
          <div className={"flex w-full md:w-1/2 xl:w-1/3 flex-col p-0  md:pr-16 xl:p-0 xl:pl-16 wwd"}>
            <img width={96} height={96} src="/assets/images/icon8.svg" />
            <div className={"flex h-8 w-full"}></div>
            <h1 className="font-default text-lpBlack-main leading-tight text-3xl">Pardot <span className="wwd-toChange">Technology</span><br />Services</h1>
            <div className={"flex h-8 w-full"}></div>
            <a href="/" className={"text-sm text-lpBlack-main font-default hover:text-lpGreen-main"}>» LEARN MORE</a>
            <div className={"flex h-20 w-full"}></div>
          </div>
          <div className={"flex w-full md:w-1/2 xl:w-1/3 flex-col p-0 md:pl-16 xl:p-0 xl:pr-16 wwd"}>
            <img width={96} height={96} src="/assets/images/icon9.svg" />
            <div className={"flex h-8 w-full"}></div>
            <h1 className="font-default text-lpBlack-main leading-tight text-3xl">HubSpot Marketing<br /><span className="wwd-toChange">Automation Services</span></h1>
            <div className={"flex h-8 w-full"}></div>
            <a href="/" className={"text-sm text-lpBlack-main font-default hover:text-lpGreen-main"}>» LEARN MORE</a>
            <div className={"flex h-20 w-full"}></div>
          </div>
          <div className={"flex w-full md:w-1/2 xl:w-1/3 flex-col p-0  md:pr-16 xl:p-0 xl:px-8 wwd"}>
            <img width={96} height={96} src="/assets/images/icon10.svg" />
            <div className={"flex h-8 w-full"}></div>
            <h1 className="font-default text-lpBlack-main leading-tight text-3xl">Marketo<br /><span className="wwd-toChange">Software Services</span></h1>
            <div className={"flex h-8 w-full"}></div>
            <a href="/" className={"text-sm text-lpBlack-main font-default hover:text-lpGreen-main"}>» LEARN MORE</a>
            <div className={"flex h-20 w-full"}></div>
          </div>
          <div className={"flex w-full md:w-1/2 xl:w-1/3 flex-col p-0  md:pr-16 xl:p-0 xl:pl-16 wwd justify-end"}>
            <div className={"h-4 bg-lpGreen-main"} />
            <div className={"flex h-20 w-full"}></div>
          </div>
        </div>
      </div>
      <div className={"container flex mx-auto px-6 flex-col md:px-20 lg:px-20 xl:px-20 2xl:px-28"}>
        <div className={"flex h-20 lg:h-40 w-full"}></div>
        <h1 className="font-default text-lpBlack-main leading-tight text-center text-3xl sm:text-4xl lg:text-5xl">Marketing Automation <span class="text-lpGreen-main">Success</span> Cases</h1>
        <div className={"flex h-16 w-full"}></div>
        <p className="lg:w-3/5 font-pDefault text-lpBlack-main text-xl self-center text-center">Stay on top of marketing automation technology enhancements with free access to our know-how.</p>
        <div className={"flex h-16 w-full"}></div>
        <div className={"flex flex-row flex-wrap"}>
          <div className={"flex w-full lg:w-1/3 flex-col p-0 lg:pr-4"}>
            <img className={"h-auto w-full max-w-sm"} src="/assets/images/bi1.png" />
            <div className={"flex h-8 w-full"}></div>
            <h1 className="font-default text-lpBlack-main leading-tight text-2xl transition-colors hover:text-lpGreen-main cursor-pointer">3 Methods of Restricting Access to a Group of Contacts in Eloqua</h1>
            <div className={"flex h-8 w-full"}></div>
            <p className="w-full font-pDefault text-gray-500 text-sm">Global visibility over the entire Eloqua database is a privilege not usually granted to any team member. Most often, it is only MarTech platform administrators who have unlimited access and permissions. There are many reasons for this, ranging from securi [...]</p>
            <div className={"flex h-20 w-full"}></div>
          </div>
          <div className={"flex w-full lg:w-1/3 flex-col p-0 lg:px-2"}>
            <img className={"h-auto w-full max-w-sm"} src="/assets/images/bi2.png" />
            <div className={"flex h-8 w-full"}></div>
            <h1 className="font-default text-lpBlack-main leading-tight text-2xl transition-colors hover:text-lpGreen-main cursor-pointer">Operational Excellence in Eloqua Campaign Configuration</h1>
            <div className={"flex h-8 w-full"}></div>
            <p className="w-full font-pDefault text-gray-500 text-sm">Digital marketing has become invaluable when it comes to the success of a company. It enables visibility on the market and to potential clients. Gaining exposure implies a broader range of people that may choose a company’s products or servi[...]</p>
            <div className={"flex h-20 w-full"}></div>
          </div>
          <div className={"flex w-full lg:w-1/3 flex-col p-0  lg:pl-4"}>
            <img className={"h-auto w-full max-w-sm"} src="/assets/images/bi3.png" />
            <div className={"flex h-8 w-full"}></div>
            <h1 className="font-default text-lpBlack-main leading-tight text-2xl transition-colors hover:text-lpGreen-main cursor-pointer">Best-Practice Configuration of Email Nurture Campaigns in Eloqua Marketing Software</h1>
            <div className={"flex h-8 w-full"}></div>
            <p className="w-full font-pDefault text-gray-500 text-sm">Establishing positive relationships with consumers is one of the most important goals of any reputable brand. The brand-consumer relationship is the driving force at the core of any successful business. By fostering this relationship, brands can make sure[...]</p>
            <div className={"flex h-20 w-full"}></div>
          </div>
        </div>
        <Link href="/123">
          <button className="h:auto flex-grow-0 px-8 py-3 bg-lpGreen-main text-white transition-colors font-default text-sm border-2 border-lpGreen-main self-center focus:outline-none duration-150 hover:bg-white hover:text-lpGreen-main">
            SEE MORE RESOURCES
              </button>
        </Link>
        <div className={"flex h-40 w-full"}></div>
      </div>
    </div>
  )
}
