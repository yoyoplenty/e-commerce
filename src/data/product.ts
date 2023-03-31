export interface iProduct {
  id: Number | any;
  name: String;
  img: String;
  description: String;
  price: String;
}

export const products: iProduct[] = [
  {
    id: 1,
    name: "Shoes",
    img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80sh.com/photos/Bd7gNnWJBkU",
    description: "This is a running shoes",
    price: "$3000",
  },
  {
    id: 2,
    name: "Apple",
    img: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "This is a sleek appple",
    price: "$4000",
  },
  {
    id: 3,
    name: "Watch",
    img: "https://plus.unsplash.com/premium_photo-1670963024947-bbb770b7ee28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    description: "This is a dope shoes",
    price: "$2000",
  },
  {
    id: 4,
    name: "Book",
    img: "https://plus.unsplash.com/premium_photo-1665329006421-4e945f91885f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80splash.com/photos/w-xtsVmrsAU  ",
    description: "This is a glorious shoes",
    price: "$7000",
  },
];
