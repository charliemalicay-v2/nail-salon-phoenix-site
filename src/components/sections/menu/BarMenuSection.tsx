

export default function BarMenuSection() {
  return (
      <section className="bar-menu" id="bar-menu">
        <header>
          <p className="eyebrow">
            Unwind
          </p>
          <h2>
            {"Beer & Wine Menu."}
          </h2>
          <p>
            Settle in and slow the world down with a curated list of Napa Valley wines and rare imported beers.
          </p>
        </header>
        <div className="bar-menu-columns">
          <section className="simple-menu-section compact">
            <header>
              <p className="eyebrow">
                Napa Estate Wines
              </p>
              <h2>
                Wines
              </h2>
            </header>
            <div>
              <article>
                <div>
                  <h3>
                    2023 Moscato Frizzante
                  </h3>
                  <p>
                    {"A whisper of orange blossom & white peach. Delicate, bright, and perfectly sparkling."}
                  </p>
                </div>
                <b>
                  $12
                </b>
              </article>
              <article>
                <div>
                  <h3>
                    2024 Limited Release Rosé
                  </h3>
                  <p>
                    {"Sun-kissed strawberry & tropical guava. A crisp, bone-dry finish makes this rosé undeniably elegant and photo-perfect."}
                  </p>
                </div>
                <b>
                  $15
                </b>
              </article>
              <article>
                <div>
                  <h3>
                    2022 Limited Release Chardonnay
                  </h3>
                  <p>
                    {"Crisp pear & lemon blossom with a silken vanilla-oak finish. Pure, cool, and classic."}
                  </p>
                </div>
                <b>
                  $15
                </b>
              </article>
              <article>
                <div>
                  <h3>
                    2022 ‘Another World’ Pinot Noir
                  </h3>
                  <p>
                    Velvety layers of black cherry and wild raspberry. A whisper of rosemary and cloud-soft tannins.
                  </p>
                </div>
                <b>
                  $15
                </b>
              </article>
            </div>
          </section>
          <section className="simple-menu-section compact">
            <header>
              <p className="eyebrow">
                {"Imported & Craft Beers"}
              </p>
              <h2>
                Beers
              </h2>
            </header>
            <div>
              <article>
                <div>
                  <h3>
                    Lindemans Framboise Lambic
                  </h3>
                  <p>
                    A sparkling Belgian import bursting with fresh raspberry aroma. Sweet-tart like liquid sorbet.
                  </p>
                </div>
                <b>
                  $11
                </b>
              </article>
              <article>
                <div>
                  <h3>
                    Fruli Strawberry Beer
                  </h3>
                  <p>
                    A Belgian award-winner with a creamy strawberry-shortcake scent. Silky body and gentle sweetness.
                  </p>
                </div>
                <b>
                  $12
                </b>
              </article>
              <article>
                <div>
                  <h3>
                    Westmalle Extra Trappist Single
                  </h3>
                  <p>
                    A rare golden ale crafted from a historic Belgian monastery recipe.
                  </p>
                </div>
                <b>
                  $11
                </b>
              </article>
              <article>
                <div>
                  <h3>
                    Athletic ‘Run Wild’ NA IPA
                  </h3>
                  <small>
                    Non-Alcoholic
                  </small>
                  <p>
                    A full-flavored craft NA IPA with zesty pine-citrus aroma.
                  </p>
                </div>
                <b>
                  $7
                </b>
              </article>
              <article>
                <div>
                  <h3>
                    Delirium Tremens
                  </h3>
                  <p>
                    An iconic pale gold ale with champagne bubbles and notes of pear and spice.
                  </p>
                </div>
                <b>
                  $14
                </b>
              </article>
              <article>
                <div>
                  <h3>
                    Chimay Cent Cinquante
                  </h3>
                  <p>
                    A limited-edition monastery brew with notes of honeyed spice and apricot.
                  </p>
                </div>
                <b>
                  $16
                </b>
              </article>
              <article>
                <div>
                  <h3>
                    Samuel Smith Organic Chocolate Stout
                  </h3>
                  <p>
                    An organic English stout with a cascading nitro head and velvety notes of rich cacao.
                  </p>
                </div>
                <b>
                  $10
                </b>
              </article>
            </div>
          </section>
        </div>
      </section>
  );
}
