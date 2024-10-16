// FEATURE SECTION COMPONENT
// see home.css for styling

export function SiteFeatures() {
  return (
    <section className="site-features">
      <article>
        <h2 className="features-title">Features</h2>
        <details open name="features">
          <summary>Interactive UI</summary>
          <p>Hands-on user friendly design enriches the user experience</p>
        </details>
        <details name="features">
          <summary>Responsive Behavior</summary>
          <p>Page layout and font size automatically adjust to accomodaate most any screen size</p>
        </details>
        <details name="features">
          <summary>Dynamic Content</summary>
          <p>Dropdown menus, expandable items, and collapsible sections</p>
        </details>
        <details name="features">
          <summary>Modular Components</summary>
          <p>Blocks of reusable code allowing for quick and easy modifications</p>
        </details>
        <details name="features">
          <summary>Customizations</summary>
          <p>COMING SOON!</p>
        </details>
        <details name="features">
          <summary>Animations</summary>
          <p>COMING SOON!</p>
        </details>
      </article>
    </section>
  );
}
