export var link: number;
export function activeLink(activeLink: string) {
  switch (activeLink) {
    case "Home":
      link = 0;
      break;
    case "About":
      link = 1;
      break;
    case "Menu":
      link = 2;
      break;
    case "Contact":
      link = 3;
      break;
    default:
      link = 0;
  }
}
