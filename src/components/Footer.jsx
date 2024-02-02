import { Button, Footer } from 'flowbite-react';
import { useEffect, useState } from 'react';

import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const FooterCom= ()=> {
    const [backToTop,setBackToTop] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
},[])
const handleScroll = ()=>{
    if(window.scrollY >600){
        setBackToTop(true)
    }else{
        setBackToTop(false)
    }
}

const scrollUp = ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
  return (
   
 <>
   {backToTop && <Button type='button' className='fixed bottom-8 right-8' color='green' onClick={scrollUp}>Top</Button>}
    <Footer container className='border border-t-8 border-teal-500'>
    <div className='w-full max-w-7xl mx-auto'>
      <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
        {/* <div className='mt-5'>
          <Link
            to='/'
            className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
          >
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Sahand's
            </span>
            Blog
          </Link>
        </div> */}
        <div className="mt-5 self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white">J interior</div>
        <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
          <div>
            <Footer.Title title='About' />
            <Footer.LinkGroup col>
              <Footer.Link
                href='https://www.100jsprojects.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                 Projects
              </Footer.Link>
              <Footer.Link
                href='/about'
                target='_blank'
                rel='noopener noreferrer'
              >
              Youtube
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title='Follow us' />
            <Footer.LinkGroup col>
              <Footer.Link
                href='https://www.github.com/sahandghavidel'
                target='_blank'
                rel='noopener noreferrer'
              >
                Facebook
              </Footer.Link>
              <Footer.Link href='#'>Instagram</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title='Contact us' />
            <Footer.LinkGroup col>
              <Footer.Link href='#'>Email</Footer.Link>
              <Footer.Link href='#'>Whatsapp</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <Footer.Divider />
      <div className='w-full sm:flex sm:items-center sm:justify-between'>
        <Footer.Copyright
          href='#'
        //   by="Manikandan & Kumerasan"
          year={new Date().getFullYear()}
        />
        <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
          <Footer.Icon href='#' icon={BsFacebook}/>
          <Footer.Icon href='#' icon={BsInstagram}/>
          <Footer.Icon href='#' icon={BsTwitter}/>
          <Footer.Icon href='https://github.com/sahandghavidel' icon={BsGithub}/>
          <Footer.Icon href='#' icon={BsDribbble}/>

        </div>
      </div>
    </div>
  </Footer>
 </>
  );
}

export default FooterCom