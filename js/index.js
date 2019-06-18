const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

// nav
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
let anchorCollection = document.getElementsByTagName('a');
anchorCollection[0].textContent = 'Services';
anchorCollection[1].textContent = 'Product';
anchorCollection[2].textContent = 'Vision';
anchorCollection[3].textContent = 'Features';
anchorCollection[4].textContent = 'About';
anchorCollection[5].textContent = 'Contact';
let navCollection = document.querySelector('nav');

// nav additions
let appChild = document.createElement('a');
appChild.textContent = 'appChild';
let preChild = document.createElement('a');
preChild.textContent = 'preChild';

navCollection.appendChild(appChild);
navCollection.prepend(preChild);

// nav text color
for(let i = 0; i <navCollection.children.length; i++) {
  navCollection.children[i].style.color = 'green';
}

// cta
let header1 = document.getElementsByTagName('h1');
header1[0].textContent = 'DOM Is Awesome';
let btn = document.getElementsByTagName('button');
btn[0].textContent = 'Get Started';
let headerImg = document.getElementById('cta-img');
headerImg.setAttribute('src', siteContent['cta']['img-src']);

// main content
let featuresHeader = document.querySelector('.top-content').firstElementChild.firstElementChild;
featuresHeader.textContent = 'Features';
let featuresContent = document.querySelector('.top-content').firstElementChild.lastElementChild;
featuresContent.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
let aboutHeader = document.querySelector('.top-content').lastElementChild.firstElementChild;
aboutHeader.textContent = 'About';
let aboutContent = document.querySelector('.top-content').lastElementChild.lastElementChild;
aboutContent.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
let servicesHeader = document.querySelector('.bottom-content').firstElementChild.firstElementChild;
servicesHeader.textContent = 'Services';
let servicesContent = document.querySelector('.bottom-content').firstElementChild.lastElementChild;
servicesContent.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
let productHeader = document.querySelector('.bottom-content').children[1].firstElementChild;
productHeader.textContent = 'Product';
let productContent = document.querySelector('.bottom-content').children[1].lastElementChild;
productContent.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
let visionHeader = document.querySelector('.bottom-content').lastElementChild.firstElementChild;
visionHeader.textContent = 'Vision';
let visionContent = document.querySelector('.bottom-content').lastElementChild.lastElementChild;
visionContent.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// contact
let contactHeader = document.querySelector('.contact').children[0];
contactHeader.textContent = 'Contact';
let contactAddress = document.querySelector('.contact').children[1];
contactAddress.textContent = '123 Way 456 Street Somewhere, USA';
let contactPhone = document.querySelector('.contact').children[2];
contactPhone.textContent = '1 (888) 888-8888';
let contactEmail = document.querySelector('.contact').children[3];
contactEmail.textContent = 'sales@greatidea.io';

// footer
let footerCopyright = document.querySelector('footer').firstElementChild;
footerCopyright.textContent = 'Copyright Great Idea! 2018';
