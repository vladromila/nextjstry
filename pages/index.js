import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={"flex w-full"}>
      <div className={"flex w-full bg-homepage-hero bg-cover bg-no-repeat bg-bottom"}>
        <div className={"container flex flex-col"}>
          <div className={"flex h-36 w-full"}></div>
          <h1 className="text-6xl font-default text-white">Marketing Automation</h1>
          <h1 className="text-6xl font-default text-white leading-tight">Solutions</h1>
          <div className={"flex h-14 w-full"}></div>
          <p className="w-1/2 font-pDefault text-white text-xl">Leveraging our hands-on technical expertise, deep automation skills and engineering mindset, we assist the best B2B brands in the world on their journey to enhanced digitalization.</p>
          <div className={"flex h-10 w-full"}></div>
          <div className={"flex flex-row items-center"}>
            <Link href="/123">
              <button className="h:auto flex-grow-0 px-8 py-3 ml-0 m-2 mx-4 text-lpGreen-links transition-colors font-default text-sm bg-white border-2 border-white focus:outline-none duration-150 hover:bg-lpGreen-main hover:text-white">
                <a className={''}>FIND OUT MORE</a>
              </button>
            </Link>
            <Link href="/123">
              <button className="h:auto flex-grow-0 px-8 py-3 m-2 mx-4 text-lpGreen-links transition-colors font-default text-sm bg-white border-2 border-white focus:outline-none duration-150 hover:bg-lpGreen-main hover:text-white">
                <a className={''}>FIND OUT MORE</a>
              </button>
            </Link>
          </div>
          <div className={"flex h-36 w-full"}></div>
        </div>
      </div>
    </div>
  )
}
