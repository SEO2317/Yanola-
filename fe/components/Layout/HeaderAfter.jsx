import Link from 'next/link'
import { useRouter } from 'next/router';
import Image from 'next/image';
const HeaderAfter = () => {
  const route = useRouter();

  const routeHome = () =>{
    route.push("/")
  }
  return (
    <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
      <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
        <Image
          onClick={routeHome}
          src="/images/DDD.png"
          width="150px"
          height="100px"
        />
      </a>
      <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
        <span><a className="mr-5 hover:text-gray-900">ㅎㅇㅋ</a></span>
        <Link href="https://www.op.gg/"><a className="mr-5 hover:text-gray-900">Ranking</a></Link>
        <Link href="https://www.daum.net/"><a className="mr-5 hover:text-gray-900">Milleage</a></Link>
        <Link href= "/group/mypage"><a className="mr-5 hover:text-gray-900">Mypage</a></Link>
        <Link href="https://www.daum.net/"><a className="mr-5 hover:text-gray-900">Store</a></Link>
        <Link href="https://www.google.co.kr/preferences"><a className="mr-5 hover:text-gray-900">Setting</a></Link>
      </nav>
      <div>
        <button className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0"
        onClick={ () => { window.open('http://localhost:7080/', 'PopupWin',"width=400,height=500" ) }}> Chatting
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"> </path> 
        </svg>
      </button>
      </div>
    </div>
  )
}
export default HeaderAfter