import Constants from "./scripts/constants";
import Expander from "./scripts/expander";
import Gallery from "./scripts/gallery";
import LanguageDropdown from "./scripts/language-dropdown";
import Slider from "./scripts/slider";

const banners = document.getElementsByClassName("banner");
for (let i = 0; i < banners.length; i++) {
  const bannerSlider = banners[i].querySelector(".slider") as HTMLElement;
  if (bannerSlider)
    new Slider(bannerSlider, {
      isCyclic: true,
      showNavDots: true,
      slideDuration: Constants.autoPlaySlideDuration
    });
}

const sliders = document.getElementsByClassName("regular slider");
for (let i = 0; i < sliders.length; i++) new Slider(sliders[i] as HTMLElement);

const galleries = document.getElementsByClassName("gallery");
for (let i = 0; i < galleries.length; i++) new Gallery(galleries[i]);

const expanders = document.getElementsByClassName("expander");
for (let i = 0; i < expanders.length; i++)
  new Expander(expanders[i] as HTMLElement);

const languageDropdown = document.getElementsByClassName("language-dropdown");
for (let i = 0; i < languageDropdown.length; i++)
  new LanguageDropdown(languageDropdown[i] as HTMLElement);

// import Promotion from "./scripts/promotion";
// const products = document.getElementsByClassName("product-details");
// for (let i = 0; i < products.length; i++)
//   new Promotion(products[i] as HTMLElement, new Date(2020, 4, 18));
