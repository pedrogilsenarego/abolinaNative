export interface BookType  {
  image: string;
  coverPage: string;
  title: string;
}

export type RootStackParamList = {
  Home: undefined;
  Book: { book: BookType };
  
};