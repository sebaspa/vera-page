import { bag, hearth, logoVera } from "../assets"


export const MainMenu = () => {
  return (
    <>
      <div className="fixed top-0 w-full z-50">
        <div className="container mx-auto px-4">
          <div className="hidden lg:grid grid-cols-3 gap-4 pt-15 justify-between items-center">
            <ul className="mainMenu">
              <li><a href="#" className="active">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
            <img src={logoVera} alt="logo vera" className='w-[260px] h-auto object-cover mx-auto' />
            <ul className="secondaryMenu">
              <li>
                <a href="#">
                  <img src={hearth} alt="heart" className="w-7 h-7" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={bag} alt="heart" className="w-7 h-7" />
                </a>
              </li>
              <li>
                <a href="#">
                  Profile
                </a>
              </li>
            </ul>
          </div>
          <div className="pt-6 flex lg:hidden items-center justify-between">
            <img src={logoVera} alt="logo vera" className='w-[100px] h-auto object-cover' />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
