import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { Journal1, Journal2, Journal3, Pattern, SubscribeHero } from '../assets/images/';

const Journal = () => {
  return (
    <section className="main-container container-journal">
      <h2>Beauty Chronicles</h2>

      <article className="journal-article">
        <div>
          <div>
            <img src={Pattern} alt="pattern" />
          </div>
          <img src={Journal1} alt="Wellness" />
        </div>

        <div>
          <h2>Wellness Wisdom for Inner Glow</h2>
          <p>Journal about nutrition, mental health, and a balanced lifestyle that support inner beauty.</p>

          <Link>
            READ MORE
            <Icon icon="solar:arrow-right-linear" />
          </Link>
        </div>
      </article>
      <hr />

      <article className="journal-article">
        <div>
          <div>
            <img src={Pattern} alt="pattern" />
          </div>
          <img src={Journal2} alt="Wellness" />
        </div>

        <div>
          <h2>Trendsetting Beauty Insights</h2>
          <p>Discover the latest trends in skin care, that are currently popular in the beauty world.</p>

          <Link>
            READ MORE
            <Icon icon="solar:arrow-right-linear" />
          </Link>
        </div>
      </article>
      <hr />

      <article className="journal-article">
        <div>
          <div>
            <img src={Pattern} alt="pattern" />
          </div>
          <img src={Journal3} alt="Wellness" />
        </div>

        <div>
          <h2>Wellness Wisdom for Inner Glow</h2>
          <p>Journal about nutrition, mental health, and a balanced lifestyle that support inner beauty.</p>

          <Link>
            READ MORE
            <Icon icon="solar:arrow-right-linear" />
          </Link>
        </div>
      </article>
      <hr />

      <button className="btn">
        VIEW ALL JOURNAL
        <Icon icon="solar:arrow-right-linear" />
      </button>

      <div>
        <div className="women-masker">
          <img src={SubscribeHero} alt="women masker" />
        </div>

        <div className="card-subscribe">
          <div>
            <img src={Pattern} alt="pattern" className="w-3/4 opacity-30" />
            <h3>Subscribe Now !!!</h3>
            <h4>and get special offer</h4>
          </div>

          <form>
            <Icon icon="ic:round-email" />
            <input type="email" />

            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Journal;
