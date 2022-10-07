import Link from 'next/link'
import { useAtom } from 'jotai';
import authAtom from '../../stores/authAtom';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Header = () => {
  const [auth, setAuth] = useAtom(authAtom)
  const route = useRouter();

  const myPageHandler = (event) => {
    if (auth.token == null) {
      alert("로그인 하면 보여드림");
      event.preventDefault();
    } else {
      route.push("/group/mypage");
    }
  }

  const rankPageHandler = (event) => {
    if (auth.token == null) {
      alert("로그인 좀 하고 누르셈");
      event.preventDefault();
    } else {
      route.push("/group/mypage");
    }
  }

  const millegePageHandler = (event) => {
    if (auth.token == null) {
      alert("로그인 좀 ㅠ");
      event.preventDefault();
    } else {
      route.push("/group/mypage");
    }
  }

  const storePageHandler = (event) => {
    if (auth.token == null) {
      alert("로그인 좀 해주십쇼");
      event.preventDefault();
    } else {
      route.push("/group/mypage");
    }
  }


  const settingPageHandler = (event) => {
    if (auth.token == null) {
      alert("로그인 좀 해주십쇼. 근데 이건 아직 구현 못했습니다ㅠ");
      event.preventDefault();
    } else {
      route.push("/");
    }
  }

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
        <Link href="/sign-up"><a className="mr-5 hover:text-white-900">Id 입력</a></Link>
        <span onClick={rankPageHandler}><a className="mr-5 hover:text-gray-900">Ranking</a></span>
        <span onClick={millegePageHandler}><a className="mr-5 hover:text-gray-900">Milleage</a></span>
        <span onClick={myPageHandler}><a className="mr-5 hover:text-gray-900">Mypage</a></span>
        <span onClick={storePageHandler}><a className="mr-5 hover:text-gray-900">Store</a></span>
        <span onClick={settingPageHandler}><a className="mr-5 hover:text-gray-900">Setting</a></span>
      </nav>
      <div>
        <button className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0"
          onClick={() => { window.open('http://localhost:7080/', 'PopupWin', "width=400,height=500") }}> Chatting
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"> </path>
          </svg>
        </button>
      </div>
    </div>
  )
}
export default Header