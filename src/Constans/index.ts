interface INavItem {
  name: string;
  id: number;
  path: string;
}

interface PathRouter {
  Home: string;
  Error: string;
  Favorites: string;
  Contact: string;
  SingleChar: string;
}
export const arrMenu: Array<INavItem> = [
  { name: "Home", path: "/", id: 1 },
  { name: "Favorites", path: "favorites", id: 2 },
  { name: "Contact", path: "contact", id: 3 },
];
export const PathRouter: PathRouter = {
  Error: "/*",
  SingleChar: "/character/:id",
  Home: "/",
  Favorites: "/favorites",
  Contact: "/contact",
};

export const arrShot: any[] = [...Array(4)];
