import Head from 'next/head'
import styles from '../styles/Home.module.css'
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
        <div className={"container flex mx-auto px-12 flex-col md:px-12 lg:px-12 xl:px-20 2xl:px-28"}>
          <div className={"flex h-36 w-full"}></div>
          <h1 className="text-6xl font-default text-white leading-tight">Marketing Automation</h1>
          <h1 className="text-6xl font-default text-white leading-tight">Solutions</h1>
          <div className={"flex h-14 w-full"}></div>
          <p className="w-1/2 font-pDefault text-white text-xl">Leveraging our hands-on technical expertise, deep automation skills and engineering mindset, we assist the best B2B brands in the world on their journey to enhanced digitalization.</p>
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
          <div className={"flex h-36 w-full"}></div>
          <div className={"flex w-full justify-center align-center"}>
            <LinkScroll to="discoverOurCompany" smooth={true} offset={-100}>
            <img id="scroll-down-arrow" src="/assets/images/scroll-down-arrow.png" />
          </LinkScroll></div>
          <div className={"flex h-10 w-full"}></div>
        </div>
      </div>
      <div className={"flex w-full bg-white"} id="discoverOurCompany">
        <div className={"container flex mx-auto px-12 flex-col md:px-12 lg:px-12 xl:px-20 2xl:px-28"}>
          <div className={"flex h-40 w-full"}></div>
          <h1 style={{ fontSize: '40px' }} className="font-default text-lpBlack-main leading-tight text-center">Raise your company’s digital <span class="text-lpGreen-main">intelligence</span>. Mobilize MarTech <span class="text-lpGreen-main">solutions</span> towards the greatest business impact.</h1>
          <div className={"flex h-16 w-full"}></div>
          <p className="w-3/5 font-pDefault text-lpBlack-main text-xl self-center text-center">Join forces with a great team of marketing automation experts that easily embeds in your existing marketing team, augmenting the strategic and technical expertise so critical in today’s online world.</p>
          <div className={"flex h-16 w-full"}></div>
          <Link href="/123">
            <button className="h:auto flex-grow-0 px-8 py-3 ml-0 m-2 mx-4 bg-lpGreen-main text-white transition-colors font-default text-sm border-2 border-lpGreen-main self-center focus:outline-none duration-150 hover:bg-white hover:text-lpGreen-main">
              DISCOVER OUR COMPANY
              </button>
          </Link>
          <div className={"flex h-20 w-full"}></div>
        </div>
      </div>
    </div>
  )
}
