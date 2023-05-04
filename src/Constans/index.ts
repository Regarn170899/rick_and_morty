interface INavItem {
  name: string;
  id: number;
  path: string;
}

interface PathRouter {
  Home: string;
  Favorites: string;
  Contact: string;
  SingleChar: string;
}
export const arrMenu: Array<INavItem> = [
  { name: "Home", path: "/", id: 1 },
  { name: "Favorites", path: "Favorites", id: 2 },
  { name: "Contact", path: "Contact", id: 3 },
];
export const PathRouter: PathRouter = {
  SingleChar: "/:id",
  Home: "/",
  Favorites: "Favorites",
  Contact: "Contact",
};

export const arrShot: any[] = [...Array(4)];
