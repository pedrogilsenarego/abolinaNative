export interface BookType  {
  image: string;
  coverPage: string;
  title: string;
  price:string
  resume:string;
  resumeEN:string
}

export type RootStackParamList = {
  Home: undefined;
  Book: { book: BookType };
  
};