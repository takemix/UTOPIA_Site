import Image from "next/image";
import Countdown from "./components/Countdown";
import FadeUp from "./components/FadeUp";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero__bg-circle" />
        <div className="hero__bg-square" />
        <div className="hero__content">
          <p className="hero__tagline">{"\\ TECHNO & HOUSE PARTY //"}</p>
          <div className="hero__logo-wrap">
            <Image
              src="/images/utopia-1.png"
              alt="UTOPIA"
              width={400}
              height={200}
              priority
            />
          </div>
          <div className="dashes" />
          <div className="hero__date">
            <p className="date-main">2026/7/23 Thu 20:00〜</p>
            <p className="date-venue">@Kieth Flack 1F</p>
            <p className="date-charge">CHARGE FREE! (1 Drink Order)</p>
          </div>
          <div className="dashes" />
          <div className="hero__countdown">
            <Countdown />
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
        <div className="container">
          <FadeUp>
            <h2 className="section-title">LINE-UP</h2>
          </FadeUp>
          <FadeUp>
            <span className="badge">GUEST DJ</span>
            <div className="guest-dj">
              <span className="guest-dj__name">MANAMI</span>
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
                  <span className="resident-card__note">
                    (Fired UP RECORDS)
                  </span>
                </span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="profile" id="profile">
        <div className="container">
          <FadeUp>
            <h2 className="section-title">GUEST PROFILE</h2>
          </FadeUp>
          <FadeUp className="profile-card">
            <div className="profile-card__photo">
              <Image
                src="/images/manami.png"
                alt="MANAMI"
                width={540}
                height={960}
              />
            </div>
            <div className="profile-card__body">
              <p className="profile-card__name">
                MANAMI{" "}
                <span className="profile-card__note">(3D)</span>
              </p>
              <p className="profile-card__bio">
                2002年よりキャリアスタート
                <br />
                小倉MEGAHERTZで開催されていた「3D」を中心に、いくつかのテクノパーティーでレジデントを務める。
                <br />
                2023年5月に行われた「NEO 3D」で超久々にプレイ。
                <br />
                ハードで疾走感のあるトラックを好む。
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="flyer-section">
        <FadeUp>
          <p className="flyer-label">OFFICIAL FLYER</p>
        </FadeUp>
        <FadeUp className="flyer-img">
          <Image
            src="/images/utopia0723_insta.png"
            alt="UTOPIA 2026/7/23 公式フライヤー"
            width={360}
            height={640}
          />
        </FadeUp>
      </section>

      <section className="info" id="info">
        <div className="container">
          <FadeUp>
            <h2 className="section-title">EVENT INFO</h2>
          </FadeUp>
          <FadeUp className="info-table">
            <div className="info-row">
              <span className="info-row__label">DATE</span>
              <span className="info-row__val">2026/7/23 (Thu)</span>
            </div>
            <div className="info-row">
              <span className="info-row__label">TIME</span>
              <span className="info-row__val">20:00〜</span>
            </div>
            <div className="info-row">
              <span className="info-row__label">VENUE</span>
              <span className="info-row__val">@Kieth Flack 1F</span>
            </div>
            <div className="info-row">
              <span className="info-row__label">CHARGE</span>
              <span className="info-row__val">
                CHARGE FREE! (1 Drink Order)
              </span>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="venue" id="venue">
        <div className="container">
          <FadeUp>
            <h2 className="section-title">VENUE</h2>
          </FadeUp>
          <FadeUp className="venue-card">
            <div className="venue-card__logo">
              <Image
                src="/images/kieth-flack-logo.png"
                alt="Kieth Flack"
                width={724}
                height={486}
                className="venue-card__logo-img"
              />
            </div>
            <div className="venue-card__info">
              <p className="venue-card__name">Kieth Flack 1F</p>
              <a
                className="venue-card__map"
                href="https://www.google.com/maps/search/Kieth+Flack"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
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
              TECHNO &amp; HOUSE PARTY @ Kieth Flack
            </p>
          </div>
          <div className="footer__links">
            <a href="#">INSTAGRAM</a>
            <a href="#">TWITTER</a>
          </div>
        </div>
      </footer>
    </>
  );
}
