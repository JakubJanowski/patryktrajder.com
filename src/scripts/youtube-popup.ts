export default class YoutubePopup {
  private popup: HTMLElement | null;
  private videoBox: HTMLElement | null;
  private openButtons: NodeListOf<HTMLButtonElement>;
  private closeButtons: NodeListOf<HTMLElement>;
  private youtubePreconnected = false;

  constructor() {
    this.popup = document.getElementById("youtube-popup");
    this.videoBox = document.getElementById("youtube-popup-video");
    this.openButtons = document.querySelectorAll<HTMLButtonElement>(".js-youtube-popup-open");
    this.closeButtons = document.querySelectorAll<HTMLElement>("[data-youtube-close]");

    if (!this.popup || !this.videoBox || this.openButtons.length === 0) return;

    this.bindEvents();

    // Nie obciąża startu strony — odpala dopiero po 3 sekundach.
    window.setTimeout(() => this.addYoutubePreconnect(), 3000);
  }

  private addYoutubePreconnect(): void {
    if (this.youtubePreconnected) return;
    this.youtubePreconnected = true;

    const links: Array<{ rel: string; href: string }> = [
      { rel: "preconnect", href: "https://www.youtube-nocookie.com" },
      { rel: "preconnect", href: "https://www.google.com" },
      { rel: "dns-prefetch", href: "//www.youtube-nocookie.com" },
      { rel: "dns-prefetch", href: "//www.google.com" }
    ];

    links.forEach((item) => {
      const link = document.createElement("link");
      link.rel = item.rel;
      link.href = item.href;
      document.head.appendChild(link);
    });
  }

  private openYoutubePopup(videoId: string | undefined): void {
    if (!videoId || !this.popup || !this.videoBox) return;

    this.addYoutubePreconnect();

    this.popup.classList.add("is-open");
    this.popup.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    this.videoBox.classList.add("is-loading");

    this.videoBox.innerHTML = `
      <div class="youtube-popup__loader">Ładowanie filmu...</div>

      <iframe
        src="https://www.youtube-nocookie.com/embed/${videoId}?rel=0&autoplay=1"
        title="Film YouTube"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    `;

    const iframe = this.videoBox.querySelector<HTMLIFrameElement>("iframe");

    if (iframe) {
      iframe.addEventListener("load", () => {
        this.videoBox?.classList.remove("is-loading");
      });
    }
  }

  private closeYoutubePopup(): void {
    if (!this.popup || !this.videoBox) return;

    this.popup.classList.remove("is-open");
    this.popup.setAttribute("aria-hidden", "true");

    // Usuwa iframe, więc film przestaje grać po zamknięciu.
    this.videoBox.innerHTML = "";
    this.videoBox.classList.remove("is-loading");

    document.body.style.overflow = "";
  }

  private bindEvents(): void {
    this.openButtons.forEach((button) => {
      button.addEventListener("mouseenter", () => this.addYoutubePreconnect(), { once: true });
      button.addEventListener("touchstart", () => this.addYoutubePreconnect(), { once: true });

      button.addEventListener("click", () => {
        this.openYoutubePopup(button.dataset.youtubeId);
      });
    });

    this.closeButtons.forEach((button) => {
      button.addEventListener("click", () => this.closeYoutubePopup());
    });

    document.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key === "Escape" && this.popup?.classList.contains("is-open")) {
        this.closeYoutubePopup();
      }
    });
  }
}