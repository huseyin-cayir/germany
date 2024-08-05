import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className={"flex flex-col text-black-100 border-t border-gray-300 "}>
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 py-6">
        <div className="flex flex-col justify-start items-start gap-3 px-7 sm:px-0">
            <h1 className="text-3xl font-bold  ">
              Logo
            </h1>
            <p className="text-base text-gray-700">
            Car Service 2024<br />
            All Rights Reserved &copy;
            </p> 
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">
                {link.title}
              </h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-1 border-t border-gray-300 sm:px-16 px-6 py-5">
        
        <p>
          @2024 CarSevice. All Rights Reserved.
        </p>

        <div className="footer__copyrights-link">
          <Link href="/"
            className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/"
            className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer