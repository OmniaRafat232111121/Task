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
