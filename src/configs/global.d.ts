type NavItem = {
  title: string;
  url: string;
};
type HeroItem = {
  id: number;
  img: any;
  title: string;
  subTitle: string;
};
type Details = {
  flatSpace: string;
  floorNumber: string;
  roomsNumber: string;
  parking: string;
  payment: string;
};
type BestItem = {
  id: number;
  features: Details[];
  img: any;
  title: string;
};

type CardItem = {
  img: any;
  type: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  floor: string | number;
  parking: string;
};

type Props = {
  title: string;
  subtitle: string;
};

type InfoProps = {
  img: any;
  title: string;
  subtitle: string;
  isContact?: boolean;
};

type CardProps = {
  img: any;
  type: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  floor: string | number;
  parking: string;
};
