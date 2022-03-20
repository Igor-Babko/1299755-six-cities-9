export type City = {
  name: string,
  location: {
    latitude: number,
    longitude : number,
    zoom : number}}

export type Location ={
      latitude: number,
      longitude : number,
      zoom : number}

export type Offer = {
  city: City,
  previewImage: string,
  images: string[],
  title: string,
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
  type: string,
  bedrooms: number,
  maxAdults: number,
  price:number,
  goods:string[],
  host:{
    'id':number,
    'name':string,
    'isPro':boolean,
    'avatarUrl':string,
  },
  description:string,
  location:Location,
  id:number,
}

