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
    projectUrl: "https://www.barnesandnoble.com/w/cloak-cloak/1141007222?ean=9780578360850",
    objectDetails:
      "CLOAK: On the Textobject & its Concealment / Color / 22 pages / $10",
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
    projectUrl: "https://c-l-o-a-k.itch.io/wreckdom",
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
  DEMONOLOGY: {
    imgUrl: "/images/dem2.png",
    title: "DEMONOLOGY",
    url: "catalogue/DEMONOLOGY",
    thumbHeight: "270",
    thumbWidth: "360",
    height: "600",
    width: "800",
    projectUrl: "https://c-l-o-a-k.itch.io/an-exchange-in-demonology",
    objectDetails:
      "An Exchange in Demonology / Free Digital Release / Zine Trilogy / Senia Hardwick",
    text: [
      {
        text:
          "An Exchange in Demonology; an Improvement of the Self and Other is a series of three zines exploring the relationship between demonology, political theory, and the erotic. Over the course of April 2022, each zine will be released in digital and printable formats." 
      },
      {
        text:
          "[1] Through the first issue, ​Introduction to Erotic Demonology and the Ars Goetia, we​​ begin our study of the occult by teaching you how to have sex with demons and give an overview of the philosophical stance and history of ideas in the zine."
      },
      {
        text:
          "[2] Demonology as Route to Unionization is the second zine in a collaboration between CLOAK and Senia Hardwick. Fictions, histories, political theory, and digital artwork coalesce in a brief reflection and instruction on the Ars Goetia and the function of observation." 
      },
      {
        text:
          "[3] The final issue of An Exchange in Demonology; an Improvement of the Self and Others is a reflection on gifts, decapitation, and also includes divination instructions using the Ars Goetia." 
      },
    ],
    shortText: 
      "An Exchange in Demonology // A series of zines exploring the relationship between demonology, political theory, and the erotic."
  },
  DEMONPRINT: {
    imgUrl: "/images/dem.png",
    title: "DEMONPRINT",
    url: "catalogue/DEMONPRINT",
    thumbHeight: "270",
    thumbWidth: "360",
    height: "600",
    width: "800",
    projectUrl: "https://www.amazon.com/dp/057828555X/ref=sr_1_1?crid=1CZMYVETLLB80&keywords=senia+hardwick&qid=1650911563&s=books&sprefix=senia+hardwick%2Cstripbooks%2C115&sr=1-1",
    objectDetails:
      "AN EXCHANGE IN DEMONOLOGY / Senia Hardwick / 92 Pages / $10",
    text: [
      {
        text:
          "A series of zines exploring the relationship between demonology, political theory, and the erotic." 
      },
      {
        text:
          "Through the first issue, Introduction to Erotic Demonology and the Ars Goetia, we begin our study of the occult by teaching you how to have sex with demons and give an overview of the philosophical stance and history of ideas in the zine."
      },
      {
        text: 
          "Demonology as Route to Unionization is the second zine in a collaboration between CLOAK and Senia Hardwick. Fictions, histories, political theory, and digital artwork coalesce in a brief reflection and instruction on the Ars Goetia and the function of observation."
      },
      {
        text: 
          "The final issue of An Exchange in Demonology; an Improvement of the Self and Others is a reflection on gifts, decapitation, and also includes divination instructions using the Ars Goetia."
      }
    ],
    shortText: 
      "An Exchange in Demonology [Print Edition] // A series of zines exploring the relationship between demonology, political theory, and the erotic."
  }
};