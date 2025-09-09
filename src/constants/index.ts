import Logo from "../assets/images/logo.png"
import Hero from "../assets/images/hero.png"

import PlayStore from "../assets/images/playstore.png"
import AppStore from "../assets/images/appstore.png"

import Icon1 from "../assets/images/icon1.png"
import Icon2 from "../assets/images/icon2.png"
import Icon3 from "../assets/images/icon3.png"

import Share from "../assets/images/share.png"
import Settings from "../assets/images/settings.png"

import ImgLeft from "../assets/images/left.png"
import ImgRight from "../assets/images/right.png"

import Check from "../assets/images/check.png"
import Warning from "../assets/images/warning.png"

import User from "../assets/images/user.jpg"
import FB from "../assets/images/fb.png"
import Slider from "../assets/images/slider.png"

import News1 from "../assets/images/news1.png"
import News2 from "../assets/images/news2.png"
import News3 from "../assets/images/news3.png"

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

export const HIGHLIGHT_CONTENT = {
    title: 'Air simplifies the organization of your web applications',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
    items: [
        { id: 1, icon: Share, title: 'Social Share', description: 'Semper a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus velna culpa expedita.' },
        { id: 2, icon: Settings, title: 'Secure Integration', description: 'Semper a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus velna culpa expedita.' },
    ],
    imgLeft: ImgLeft
}

export const TRACKING_CONTENT = {
    title: 'Keeping track of your expenses with this app',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
    imgRight: ImgRight,
    items: [
        {
            id: 1,
            icon: Check,
            title: 'Carefully designed',
            description: 'Mucker plastered bugger all mate morish are eroselna culpa expedita.',
        },
        {
            id: 2,
            icon: Check,
            title: 'Choose a App',
            description: 'Mucker plastered bugger all mate morish are eroselna culpa expedita.',
        },
        {
            id: 3,
            icon: Check,
            title: 'Seamless Sync',
            description: 'Mucker plastered bugger all mate morish are eroselna culpa expedita.',
        },
        {
            id: 4,
            icon: Check,
            title: 'User Interactive',
            description: 'Mucker plastered bugger all mate morish are eroselna culpa expedita.',
        }
    ]
}

export const PRICING_CONTENT = {
    title: 'Simple, easy pricing plans for the application',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut .',
    items: [
        {
            id: 1,
            price: '$19',
            month: '/ month',
            description: 'All the basic features to boost your freelance career',
            focused: false,
            features: [
                { label: 'Push Notifications', warning: true },
                { label: 'Offline Synchronization', warning: true },
                { label: 'Unlimited Visitors', warning: false },
                { label: '100 GB Free Storage', warning: false },
                { label: 'Live Chart Support', warning: true }
            ],
            btn: 'Get 14 Days Free Trial'
        },
        {
            id: 2,
            price: '$99',
            month: '/ month',
            description: 'All the basic features to boost your freelance career',
            focused: false,
            features: [
                { label: 'Push Notifications', warning: true },
                { label: 'Offline Synchronization', warning: false },
                { label: 'Unlimited Visitors', warning: false },
                { label: '100 GB Free Storage', warning: false },
                { label: 'Live Chart Support', warning: true }
            ],
            btn: 'Get 14 Days Free Trial'
        },
        {
            id: 3,
            price: '$49',
            month: '/ month',
            description: 'All the basic features to boost your freelance career',
            focused: false,
            features: [
                { label: 'Push Notifications', warning: true },
                { label: 'Offline Synchronization', warning: true },
                { label: 'Unlimited Visitors', warning: false },
                { label: '100 GB Free Storage', warning: false },
                { label: 'Live Chart Support', warning: true }
            ],
            btn: 'Get 14 Days Free Trial'
        }
    ],
    warningIcon: Warning
}

export const TESTIMONIAL_CONTENT = {
    user: User,
    testimonial: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    name: 'Joenell Alonzo, Frontend Developer',
    fb: FB,
    slider: Slider
}

export const DOWNLOAD_CONTENT = {
    title: 'Download our app for free',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare',
    placeholder: 'Enter your email',
    btn: 'Download App',
    footer: `By clicking Sign Up you're confirming that you agree with our Terms and Conditions.`
}

export const NEWS_CONTENT = {
    title: 'Our Latest News',
    items: [
        { type: 'UIUX', img: News1, title: 'Our iOS app has a new design...', date: 'July 28, 2025' },
        { type: 'Webflow', img: News2, title: 'Our iOS app has a new design...', date: 'August 17, 2025' },
        { type: 'CMS', img: News3, title: 'Our iOS app has a new design...', date: 'September 05, 2025' },
    ]
}

const date = new Date()
const year = date.getFullYear()

export const FOOTER_CONTENT = {
    title: 'Install App',
    playstore: PlayStore,
    appstore: AppStore,
    links: [
        {
            title: 'Company',
            links: [
                'About',
                'Features',
                'Works',
                'Career'
            ]
        },
        {
            title: 'Help',
            links: [
                'Customer Support',
                'Delivery Details',
                'Terms & Conditions',
                'Privacy Policy'
            ]
        },
        {
            title: 'Resources',
            links: [
                'Free eBooks',
                'Development Tutorial',
                'How to - Blog',
                'Youtube Playlist'
            ]
        }
    ],
    footer: `© ${year} All Right Reserved @alonzojoe`
}