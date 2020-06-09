import LanguageDropdown from "./language-dropdown";

export default class Checkbox {
  private readonly svgUse: SVGUseElement;

  constructor(
    private container: HTMLElement,
    private priceWith: number,
    private priceWithout: number,
    private priceWithEn: number,
    private priceWithoutEn: number,
    private isChecked: boolean = false
  ) {
    let icon = container.querySelector("svg.icon") as HTMLElement;
    this.svgUse = icon.querySelector("use") as SVGUseElement;

    icon.addEventListener("click", this.toggle);
    if (this.isChecked) {
      this.svgUse.href.baseVal = "#icon-check-square";
    } else {
      this.svgUse.href.baseVal = "#icon-square";
    }
  }

  private toggle = () => {
    this.isChecked = !this.isChecked;
    if (this.isChecked) {
      this.svgUse.href.baseVal = "#icon-check-square";
    } else {
      this.svgUse.href.baseVal = "#icon-square";
    }
    this.setPrice();
  };

  private setPrice = () => {
    const details = this.container.closest(".product-details");
    const valueSpan = details?.querySelector(
      ".price .value"
    ) as HTMLSpanElement;
    if (this.isChecked) {
      if (LanguageDropdown.getLanguage() === "pl")
        valueSpan.innerHTML = this.priceWith + " PLN";
      else valueSpan.innerHTML = this.priceWithEn + " USD";
    } else {
      if (LanguageDropdown.getLanguage() === "pl")
        valueSpan.innerHTML = this.priceWithout + " PLN";
      else valueSpan.innerHTML = this.priceWithoutEn + " USD";
    }
  };
}
