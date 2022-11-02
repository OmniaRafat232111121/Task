import LogoImg from '../src/assets/img/header/logo.svg'
import HeroImg from '../src/assets/img/hero/image.svg'
import OverviewProductImg from '../src/assets/img/overview/product.svg';
import FacebookImg from '../src/assets/img/overview/brands/facebook.svg';
import GoogleImg from '../src/assets/img/overview/brands/google.svg';
import CocaColaImg from '../src/assets/img/overview/brands/coca-cola.svg';
import LinkedInImg from '../src/assets/img/overview/brands/linkedin.svg';
import SamsungImg from '../src/assets/img/overview/brands/samsung.svg';
import Feature1Img from '../src/assets/img/features/feature1-img.svg';
import Feature2Img from '../src/assets/img/features/feature2-img.svg';
import Feature3Img from '../src/assets/img/features/feature3-img.svg';
import ArrowRightImg from '../src/assets/img/features/arrow-right.svg';
export const headerData = {
    logo: LogoImg,
    btnText: 'Request a demo',
  };
  
  export const nav = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'Feedback', href: '/' },
    { name: 'Features', href: '/' },
  ];

  export const hero = {
    title: 'Track your Expenses to Save Money',
    subtitle: 'Helps you to organize your income and expenses',
    btnText: 'Try free demo',
    compText: '— Web, iOS and Android',
    image: HeroImg,
  };
  
export const overview = {
  productImg: OverviewProductImg,
  brands: [
    {
      image: FacebookImg,
      delay: 300,
    },
    {
      image: GoogleImg,
      delay: 400,
    },
    {
      image: CocaColaImg,
      delay: 500,
    },
    {
      image: LinkedInImg,
      delay: 600,
    },
    {
      image: SamsungImg,
      delay: 700,
    },
  ],
};




export const product = {
  title: 'Accelaration process To grow Your Business',
  subtitle:
    'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.',
  
};




export const features = {
  feature3: {
    pretitle: 'Use anytime',
    title: 'Use anytime when you need',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature3Img,
  },
};


export const footer = {
  logo: LogoImg,
  links: [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/' },
    { name: 'Careers', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'Features', href: '/' },
    { name: 'Blog', href: '/' },
  ],
  legal: [
    { name: 'Terms of use', href: '/' },
    { name: 'Terms of conditions', href: '/' },
    { name: 'Privacy policy', href: '/' },
    { name: 'Cookie policy', href: '/' },
  ],
  newsletter: {
    title: 'Newsletter',
    subtitle: 'Over 25000 people have subscribed',
  },
  form: {
    placeholder: 'Enter your email',
    btnText: 'Subscribe',
    smallText: 'We don’t sell your email and spam',
  },
};


export const facts = [
  {
    startNumber: '1',
    endNumber: '5',
    unit: '',
    title: 'Years of Experience',
    desc: 'We are 5 years of experienced in this yoga field. Giving the best instructions.',
  },
  {
    startNumber: '1',
    endNumber: '5',
    unit: 'K',
    title: 'Happy Clients',
    desc: 'We have over five thousand clients all over the world. They are very satisfied.',
  },
  {
    startNumber: '1',
    endNumber: '15',
    unit: '',
    title: 'Experienced Trainers',
    desc: 'We have over fifteen dedicated and experienced trainer for yoga and meditation.',
  },
  {
    startNumber: '1',
    endNumber: '24',
    unit: '',
    title: 'Monthly Classes',
    desc: 'Yoga is a physical, mental and spritual practice discipline. We provide 24+ classes monthly.',
  },
];

