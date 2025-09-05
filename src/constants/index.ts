import Logo from "../assets/images/logo.png"
import Hero from "../assets/images/hero.png"
import PlayStore from "../assets/images/playstore.png"
import AppStore from "../assets/images/appstore.png"
import Icon1 from "../assets/images/icon1.png"
import Icon2 from "../assets/images/icon2.png"
import Icon3 from "../assets/images/icon3.png"

export const NAVBAR_CONTENT = {
    logo: Logo,
    links: [
        { id: 1, link: '#home', text: 'Home' },
        { id: 2, link: '#features', text: 'Features' },
        { id: 3, link: '#testimonial', text: 'Testimonial' },
        { id: 4, link: '#blog', text: 'Blog' },
    ]
}

export const HOME_CONTENT = {
    title: 'Discover How Trending Apps Can Benefit You',
    description: 'Boost your productivity with a simple to-do app. A mobile application Budgeting for your personal life',
    playstore: PlayStore,
    appstore: AppStore,
    hero: Hero
}


export const STATS_CONTENT = [
    { id: 1, title: '100', subTitle: 'User' },
    { id: 2, title: '33k', subTitle: 'Download' },
    { id: 3, title: '10k', subTitle: 'Customer' },
    { id: 4, title: '20k', subTitle: 'Developer' },
]

export const FEATURES_CONTENT = {
    title: 'A brief description of how it works Air apart from others',
    subTitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia',
    items: [
        { id: 1, icon: Icon1, title: 'Innovative Solution', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ' },
        { id: 2, icon: Icon2, title: 'Fully functional', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ' },
        { id: 3, icon: Icon3, title: 'Suporting', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ' }
    ]
}