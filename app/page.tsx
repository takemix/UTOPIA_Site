import AutumnLeaves from "./components/AutumnLeaves";
import Countdown from "./components/Countdown";
import FadeUp from "./components/FadeUp";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div id="top">
      <Navbar />

      <section className="hero" aria-label="UTOPIA">
        <AutumnLeaves />
        <div className="hero__content">
          <p className="hero__tagline">{"\\ TECHNO & HOUSE PARTY //"}</p>
          <div className="hero__logo-wrap">
            <img src="/images/utopia-1.png" alt="UTOPIA" width={400} height={200} />
          </div>
          <div className="dashes" />
          <div className="hero__date">
            <p className="date-main">2026/11/19 Thu 20:00〜</p>
            <p className="date-venue">@KIETH FLACK 1F</p>
            <p className="date-charge">CHARGE FREE! (1Drink Order)</p>
          </div>
          <div className="dashes" />
          <div className="hero__countdown">
            <Countdown />
          </div>
          <div className="hero__next">
            <span className="badge">GUEST DJ</span>
            <p className="hero__guest">
              DJ OSAWA <span>(3D)</span>
            </p>
          </div>
          <a href="#lineup" className="hero__cta">
            LINE-UP を見る ↓
          </a>
        </div>
        <div className="hero__scroll">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F5D800"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      <section className="lineup" id="lineup">
        <AutumnLeaves variant={1} />
        <div className="container">
          <FadeUp>
            <h2 className="section-title">LINE-UP</h2>
          </FadeUp>
          <FadeUp>
            <span className="badge">GUEST DJ</span>
            <div className="guest-dj">
              <span className="guest-dj__name">DJ OSAWA</span>
              <span className="guest-dj__note">(3D)</span>
            </div>
          </FadeUp>
          <FadeUp>
            <span className="badge">Resident DJ &amp; LIVE</span>
            <div className="resident-grid">
              <div className="resident-card">
                <span className="resident-card__arrow">▶</span>
                <span className="resident-card__name">タキオン</span>
              </div>
              <div className="resident-card">
                <span className="resident-card__arrow">▶</span>
                <span className="resident-card__name">COBRA a.k.a. NORI</span>
              </div>
              <div className="resident-card">
                <span className="resident-card__arrow">▶</span>
                <span className="resident-card__name">AIKO</span>
              </div>
              <div className="resident-card">
                <span className="resident-card__arrow">▶</span>
                <span className="resident-card__name">
                  USHISHI{" "}
                  <span className="resident-card__note">(Fired UP RECORDS)</span>
                </span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="profile" id="profile">
        <AutumnLeaves variant={2} />
        <div className="container">
          <FadeUp>
            <h2 className="section-title">GUEST DJ</h2>
          </FadeUp>
          <FadeUp className="profile-card">
            <div className="profile-card__photo">
              <img
                src="/images/dj-osawa.jpg"
                alt="DJ OSAWA"
                width={1536}
                height={2048}
                loading="lazy"
              />
            </div>
            <div className="profile-card__body">
              <p className="profile-card__name">
                DJ OSAWA{" "}<span className="profile-card__note">(3D)</span>
              </p>
              <p className="profile-card__bio">
                2000年初頭、小倉MEGAHERTZのテクノパーティー「3D」でレジデントを務める。テクノ、エレクトロを中心に、gigoloサウンドを織り交ぜた選曲。
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="info" id="info">
        <AutumnLeaves variant={3} />
        <div className="container">
          <FadeUp>
            <h2 className="section-title">EVENT INFO</h2>
          </FadeUp>
          <FadeUp className="info-table">
            <div className="info-row">
              <span className="info-row__label">DATE</span>
              <span className="info-row__val">2026/11/19 (Thu)</span>
            </div>
            <div className="info-row">
              <span className="info-row__label">TIME</span>
              <span className="info-row__val">20:00〜</span>
            </div>
            <div className="info-row">
              <span className="info-row__label">VENUE</span>
              <span className="info-row__val">KIETH FLACK 1F</span>
            </div>
            <div className="info-row">
              <span className="info-row__label">MUSIC</span>
              <span className="info-row__val">techno, house</span>
            </div>
            <div className="info-row">
              <span className="info-row__label">GUEST</span>
              <span className="info-row__val">DJ OSAWA (3D)</span>
            </div>
            <div className="info-row">
              <span className="info-row__label">CHARGE</span>
              <span className="info-row__val">CHARGE FREE! (1Drink Order)</span>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="venue" id="venue">
        <AutumnLeaves variant={4} />
        <div className="container">
          <FadeUp>
            <h2 className="section-title">VENUE</h2>
          </FadeUp>
          <FadeUp className="venue-card">
            <div className="venue-card__logo">
              <img
                src="/images/kieth-flack-logo.png"
                alt="Kieth Flack"
                width={724}
                height={486}
                className="venue-card__logo-img"
              />
            </div>
            <div className="venue-card__info">
              <p className="venue-card__name">KIETH FLACK 1F</p>
              <a
                className="venue-card__map"
                href="http://www.kiethflack.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                kiethflack.net
              </a>
              <a
                className="venue-card__map"
                href="https://www.google.com/maps/search/Kieth+Flack"
                target="_blank"
                rel="noopener noreferrer"
              >
                Googleマップで見る
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <p className="footer__title">UTOPIA</p>
            <p className="footer__sub">
              TECHNO &amp; HOUSE PARTY @ KIETH FLACK
            </p>
          </div>
          <p className="footer__guest">2026/11/19 · GUEST DJ DJ OSAWA (3D)</p>
        </div>
      </footer>
    </div>
  );
}
