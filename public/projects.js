//   Structure of each project entry. The key for the entry should be the
//   canonical name, as this generates the path by which the page
//   is reached.
// {
//   imgUrl: "/images/relative_image_path",
//   title: "full title for the work ",
//   url: link to project within the app, should match the project key,
//   thumbHeight: "Height of thumbnail in pixels",
//   thumbWidth: "Width of thumbnail in pixels",
//   height: "Height of full image in pixels",
//   width: "Width of full image in pixels",
//   objectDetails: "Details of the object // Displayed between the image // And the purchase link",
//   text: [
//           {text: "An array of objects where each text value results in a new line"},
//           {className: "someStyling", text:"And where a className can be passed which will apply only to this <p>"}
//         ],
//  shortText: "Some short text to display on the catalogue index page"
// }

export const projects = {
  CLOAK: {
    imgUrl: "/images/CLOAK_coverspread.png",
    title: "CLOAK",
    url: "/catalogue/CLOAK",
    thumbHeight: "270",
    thumbWidth: "360",
    height: "600",
    width: "800",
    objectDetails:
      "CLOAK: On the Textobject & its Concealment / Color / 20 pages / $10",
    text: [
      {
        className: "italic",
        text:
          "The cloak is not so much a means of becoming invisible as it is an apparatus for concealing intentions. It is a shroud or a curtain. We can detect the movements occurring behind it, but remain unable to narrow what those movements might be, where they might lead, what they might catalyze.",
      },
      {
        text:
          "In this self-titled inaugural release, we`ve set out to explore the textobject and its relationship to ideations of concealment / surveillance / visibility. ",
      },
      {
        text:
          "CLOAK is not intended to fully encompass these relationships, but instead to instigate new connections / new contexts. We have assembled this work as a starting point. The first flourish of the stealth weapon / integumentary drape / vestigial skin.",
      },
      { text: "What shapes it can be contorted into are yet to be seen." },
    ],
    shortText:
      "CLOAK // In this self-titled inaugural release, we've set out to explore the textobject and its relationship to ideations of concealment / surveillance / visibility. We have assembled CLOAK as a starting point. The first flourish of the stealth weapon / integumentary drape / vestigial skin. ",
  },
  WRECKDOM: {
    imgUrl: "/images/thumbnail.png",
    title: "WRECKDOM",
    url: "catalogue/WRECKDOM",
    thumbHeight: "270",
    thumbWidth: "360",
    height: "600",
    width: "800",
    objectDetails:
      "WRECKDOM / Free Digital Release / 31 Levels / Logan Berry",
    text: [
      {
        text:
          "Through WRECKDOM, Logan Berry has written a work of intense confrontation and examination." 
      },
      {
        text:
          "Bodies dragged through disintegrating interfaces, eyes illuminated in a radioactive green, CCTV footage looping through the static in the air. WRECKDOM is a work of ultratheatricality, luring its audience into the digitized constraints of a primitive stage."
      },
      {
        text: 
        "Utilizing highly constrained and primitive game development tools, WRECKDOM has been designed with a certain abrasion in mind. The eyes strain and the ears bleed. We are all suffering in the esoterica of the watching eye."
      },
      {
        text:
          "Please hold you're breath until the performance is finished."
      }
    ],
    shortText: 
      "WRECKDOM // A work of intense confrontation and examination. Logan Berry articulates a new limb in the theater of surveillance."
  },
};
