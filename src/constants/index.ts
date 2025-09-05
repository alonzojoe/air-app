import Logo from "../assets/images/logo.png"
import Hero from "../assets/images/hero.png"
import PlayStore from "../assets/images/playstore.png"
import AppStore from "../assets/images/appstore.png"

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


