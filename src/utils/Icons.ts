import {
  FaInstagram,
  FaMastodon,
  FaSteam,
  FaTumblr,
  FaTwitter
} from 'react-icons/fa'
import { MdHome, MdInfo } from 'react-icons/md'

export const IconSizes = {
  medium: 24
}

export const Icons = {
  Menu: [
    { title: 'Home', redirect: '/', Icon: MdHome },
    { title: 'About', redirect: '/about', Icon: MdInfo }
  ],
  SocialMedias: [
    { title: 'Steam', Icon: FaSteam },
    { title: 'Instagram', Icon: FaInstagram },
    { title: 'Twitter', Icon: FaTwitter },
    { title: 'Tumblr', Icon: FaTumblr },
    { title: 'Mastodon', Icon: FaMastodon }
  ]
}
