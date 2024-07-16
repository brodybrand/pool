import "./style.css";
import Logo from "./logo.svg";

// body-wrapper
const addBodyWrapper = () => {
  const bodyWrapper = document.createElement("div");

  bodyWrapper.setAttribute("class", "body-wrapper");

  bodyWrapper.appendChild(addHeader());
  bodyWrapper.appendChild(addSidebar());
  bodyWrapper.appendChild(addContentWrapper());
  bodyWrapper.appendChild(addFooter());

  return bodyWrapper;
};
// header
const addHeader = () => {
  const header = document.createElement("div");

  header.setAttribute("class", "header");

  header.appendChild(addLogoWrapper());
  header.appendChild(addNavContainer());

  return header;
};

const addLogoWrapper = () => {
  const logoWrapper = document.createElement("div");

  logoWrapper.setAttribute("class", "logo-wrapper");

  logoWrapper.appendChild(addLogo());
  logoWrapper.appendChild(addName());

  return logoWrapper;
};

const addLogo = () => {
  const logo = document.createElement("div");

  logo.setAttribute("class", "logo");

  const myLogo = new Image();
  myLogo.src = Logo;

  logo.appendChild(myLogo);

  return logo;
};

const addName = () => {
  const name = document.createElement("div");

  name.setAttribute("class", "app-name");
  name.textContent = "App Name";

  return name;
};

const addNavContainer = () => {
  const navContainer = document.createElement("ul");

  navContainer.setAttribute("class", "nav");

  navContainer.appendChild(addNavLink());
  navContainer.appendChild(addNavLink());
  navContainer.appendChild(addNavLink());

  return navContainer;
};

const addNavLink = () => {
  const navLink = document.createElement("li");

  navLink.setAttribute("class", "nav-link");
  navLink.textContent = "Link";

  return navLink;
};

// sidebar
const addSidebar = () => {
  const sidebar = document.createElement("div");

  sidebar.setAttribute("class", "sidebar");

  sidebar.appendChild(addSidebarHeader());
  sidebar.appendChild(addSidebarLinksWrapper());

  return sidebar;
};

const addSidebarHeader = () => {
  const sidebarHeader = document.createElement("h3");

  sidebarHeader.setAttribute("class", "sidebar-header");
  sidebarHeader.textContent = "Sidebar Header";

  return sidebarHeader;
};

const addSidebarLinksWrapper = () => {
  const sidebarLinksWrapper = document.createElement("ul");

  sidebarLinksWrapper.setAttribute("class", "sidebar-link-wrapper");

  sidebarLinksWrapper.appendChild(addSidebarLink());
  sidebarLinksWrapper.appendChild(addSidebarLink());
  sidebarLinksWrapper.appendChild(addSidebarLink());

  return sidebarLinksWrapper;
};

const addSidebarLink = () => {
  const sidebarLink = document.createElement("li");

  sidebarLink.setAttribute("class", "sidebar-link");
  sidebarLink.textContent = "Sidebar Link";

  return sidebarLink;
};

// content
const addContentWrapper = () => {
  const contentWrapper = document.createElement("div");

  contentWrapper.setAttribute("class", "content-wrapper");

  contentWrapper.appendChild(addContentHeader());
  contentWrapper.appendChild(addContent());
  contentWrapper.appendChild(addContentHeader());
  contentWrapper.appendChild(addContent());
  contentWrapper.appendChild(addContentHeader());
  contentWrapper.appendChild(addContent());
  contentWrapper.appendChild(addContentHeader());
  contentWrapper.appendChild(addContent());

  return contentWrapper;
};

const addContentHeader = () => {
  const contentHeader = document.createElement("h2");

  contentHeader.setAttribute("class", "content-header");
  contentHeader.textContent = "Content Header";

  return contentHeader;
};

const addContent = () => {
  const content = document.createElement("p");

  content.setAttribute("class", "content");
  content.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit rhoncus dui, eu rhoncus tortor consectetur at. Phasellus vitae ultrices nibh. Nulla erat tellus, lacinia non mi id, ornare aliquet sapien. Donec placerat elementum lacinia. Aliquam aliquet varius viverra. Aliquam erat volutpat. Nam a fermentum nibh, vitae interdum tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent tincidunt ornare vehicula. Mauris vestibulum sem vitae dolor molestie porttitor. Morbi scelerisque, libero ut euismod pulvinar, elit massa iaculis dui, at dictum lorem felis eu ex. Fusce at finibus elit, non convallis arcu. In sit amet enim ornare, egestas arcu vitae, ullamcorper risus. Nullam scelerisque consectetur dignissim.";

  return content;
};

// footer
const addFooter = () => {
  const footer = document.createElement("div");

  footer.setAttribute("class", "footer");

  footer.appendChild(addFooterLinksWrapper());

  return footer;
};

const addFooterLinksWrapper = () => {
  const footerLinksWrapper = document.createElement("ul");

  footerLinksWrapper.setAttribute("class", "footer-links-wrapper");

  footerLinksWrapper.appendChild(addFooterLink());
  footerLinksWrapper.appendChild(addFooterLink());
  footerLinksWrapper.appendChild(addFooterLink());

  return footerLinksWrapper;
};

const addFooterLink = () => {
  const footerLink = document.createElement("div");

  footerLink.setAttribute("class", "footer-link");
  footerLink.textContent = "Footer Link";

  return footerLink;
};

document.body.appendChild(addBodyWrapper());
