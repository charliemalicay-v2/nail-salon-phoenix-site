

export default function MobileActions() {
  return (
      <nav className="mobile-actions" aria-label="Quick salon actions">
        <a href="/booking/">
          <span aria-hidden="true">
            ▣
          </span>
          Reserve Now
        </a>
        <a href={"https://www.google.com/maps/search/?api=1&query=Element+Nail+Bar+6022+N+16th+St+Phoenix+AZ+85016"}>
          <span aria-hidden="true">
            ⌖
          </span>
          Direction
        </a>
        <a href="tel:+16026075686">
          <span aria-hidden="true">
            ☎
          </span>
          Call Us
        </a>
      </nav>
  );
}
