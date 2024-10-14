// TOUR GUIDE SLIDE COMPONENT
// see SiteTour.css for styling

export function SlideTourGuide() {
  return (
    <article className="slide-tour-guide">
      <i className="fa-solid fa-street-view"><span>Tour Guide</span></i>
      <p>
        This tour assists you in navigating the site's various features and
        extra details. Each tab highlights an aesthetic or functionality and its
        purpose. Thumb your way through the guide to learn more or explore the
        site on your own and see what hidden gems you can discover.
      </p>
    </article>
  );
}
