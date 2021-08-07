import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react"

export default function Gnb() {
  const router = useRouter();
  
  let activeItem;

  if(router.pathname === '/') {
    activeItem = "home";
  } else if (router.pathname === '/about') {
    activeItem = "about";
  } else if (router.pathname === '/contact') {
    activeItem = "contact";
  }

  // a 태그나 location.href를 사용해도 되나 이 두가지는 페이지를 새로고침하게됨
  // 요청이 늘어나므로 Link 태그나 router를 사용할것
  // parameter 값의 data는 semantic ui에서 제공하는 것으로 아래 name값 등을 참조함
  function goLink(e, data) {
    if(data.name === 'home') {
      router.push("/");
    } else if(data.name === 'about') {
      router.push("/about");
    } else if(data.name === 'contact us') {
      router.push("/contact");
    }
  }
  return (
       <Menu inverted>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={goLink}
        />
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={goLink}
        />
        <Menu.Item
          name='contact us'
          active={activeItem === 'contact'}
          onClick={goLink}
        />
      </Menu>
  )
}