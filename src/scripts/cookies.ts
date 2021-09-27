import Constants from "./constants";
import { gtag } from "./gtag";

export default class Cookies {
  private readonly container: HTMLDivElement;
  private readonly acceptButton: HTMLButtonElement;
  private readonly rejectButton: HTMLButtonElement;

  constructor(private readonly template: HTMLTemplateElement) {
    this.container = template.content.firstChild as HTMLDivElement;
    this.acceptButton =
      this.container.querySelector<HTMLButtonElement>(".accept")!;
    this.rejectButton =
      this.container.querySelector<HTMLButtonElement>(".reject")!;

    const consentCookie = Cookies.getCookie(Constants.consentCookieName);
    this.initAnalytics(consentCookie === "1");

    if (consentCookie) {
      return;
    }

    this.acceptButton.addEventListener("click", this.accept);
    this.rejectButton.addEventListener("click", this.reject);
    document.body.append(template.content);
  }

  public static getCookie(name: string): string | null {
    const cookies = document.cookie;
    const prefix = name + "=";
    const separator = "; ";
    let start = cookies.indexOf(separator + prefix);

    if (start !== -1) {
      start += separator.length;
    } else {
      start = cookies.indexOf(prefix);
      if (start !== 0) {
        return null;
      }
    }

    let end = cookies.indexOf(";", start);
    if (end === -1) {
      end = cookies.length;
    }

    return decodeURIComponent(cookies.substring(start + prefix.length, end));
  }

  public static removeCookie(name: string, path: string): void {
    Cookies.setCookie(name, "", 0, path);
  }

  public static setCookie(
    name: string,
    value: string,
    maxAge: number,
    path: string
  ): void {
    document.cookie = `${name}=${value}; Max-Age=${maxAge}; Path=${path}; SameSite=Strict; Secure`;
  }

  private accept = () => {
    Cookies.setCookie(
      Constants.consentCookieName,
      "1",
      Constants.consentMaxAge,
      "/"
    );
    this.updateConsent(true);
    this.container.remove();
  };

  private reject = () => {
    Cookies.setCookie(
      Constants.consentCookieName,
      "0",
      Constants.consentMaxAge,
      "/"
    );
    this.updateConsent(false);
    this.container.remove();
  };

  private initAnalytics(consent: boolean) {
    const grantStatus = consent ? "granted" : "denied";
    gtag("js", new Date());
    gtag("consent", "default", {
      analytics_storage: grantStatus,
      ad_storage: grantStatus
    });
    gtag("config", "UA-165608042-1", { anonymize_ip: true });
  }

  private updateConsent(consent: boolean) {
    const grantStatus = consent ? "granted" : "denied";
    gtag("consent", "update", {
      analytics_storage: grantStatus,
      ad_storage: grantStatus
    });
  }
}
