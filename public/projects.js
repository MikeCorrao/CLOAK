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
    projectUrl: "https://bookshop.org/books/cloak-on-the-textobject-its-concealment/9780578360850",
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
    projectUrl: "https://bookshop.org/books/an-exchange-in-demonology-improvement-of-the-self-and-others/9780578285559",
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
  },
  RELENTLESS: {
    imgUrl: "/images/RELENTLESS.png",
    title: "RELENTLESS",
    url: "catalogue/RELENTLESS",
    thumbHeight: "270",
    thumbWidth: "360",
    height: "600",
    width: "800",
    projectUrl: "https://c-l-o-a-k.itch.io/relentless",
    objectDetails:
      "RELENTLESS / Free Digital Release / Infinite Poem / Danika Stegeman LeMay",
    text: [
      {
        className: "italic",
        text:
          "Reveal Yourself!" 
      },
      {
        text:
          "The text [ body ] is relentless. The text [ body ] is an animal that desires survival. The text [ body] is fierce and oppressive. The text [ body ] is continuous; it perseveres. Where are your blank spaces? With what do you fill them? Where is the mother of your body? Is the goddess of your variables a black hole like mine? The universe is infinite with permutations. Re-string the harps and loop the cups so they never empty."
      },
      {
        text: 
          "Danika Stegeman LeMay's text is mechanized by primitive probability functions and meticulous word banks to create an infinitely reproducing poem. Relentless in its forward march. There is always more to come."
      }
    ],
    shortText: 
      "RELENTLESS // The endless poetic assault. The text is an animal that desires survival."
  },
  POLICELUCIFER: {
    imgUrl: "/images/PL-Coverspread.png",
    title: "POLICELUCIFER",
    url: "catalogue/POLICELUCIFER",
    thumbHeight: "270",
    thumbWidth: "360",
    height: "600",
    width: "800",
    projectUrl: "https://bookshop.org/books/police-lucifer/9780578285528",
    objectDetails:
      "POLICE LUCIFER / William Watson / 44 pages / $8",
    text: [
      {
        text:
          "A digital conversation drifts on archaic CRT monitors. Basal AI composite-syntax duels itself in the spaces between Foucault's DISCIPLINE & PUNISH and Plato's FORMS. Humanity continues its de-evolution towards ambient stasis. Discoveries are rendered stillborn as the code of rhetoric is disabled." 
      },
      {
        text:
          "Within the miasma, Edmund Emil Kemper III has arrived. The metaphysical independent variable. The surveillant of horrific violence and flexuous plasticene abjection."
      },
      {
        text:
          "Where does depravity cross condolence? Where does the illogical become sentimental?"
      },
      {
        text: 
          "POLICE LUCIFER is the rogue transmission you were not supposed to catch."
      }
    ],
    shortText: 
      "POLICE LUCIFER // CLICK HERE TO DOWNLOAD ADDITIONAL AMORALITY DRIVERS"
  },
  BODIESLIKEMEAT: {
    imgUrl: "/images/bodies.png",
    title: "BODIESLIKEMEAT",
    url: "/catalogue/BODIESLIKEMEAT",
    thumbHeight: "270",
    thumbWidth: "360",
    height: "600",
    width: "800",
    projectUrl: "https://bookshop.org/books/bodies-like-meat/9798218027391",
    objectDetails:
      "Bodies Like Meat: RPG Death Simulator / B&W / 190 pages / $12",
    text: [
      {
        className: "italic",
        text:
          "",
      },
      {
        text:
          "Bodies Like Meat is a game about exploration and investigation. As a group of scientists, the players will often find themselves encountering seemingly unexplainable events: cosmic horrors, grotesque environments, esoteric figures. All on behalf of a distant and secretive organization.",
      },
      {
        text:
          "The expedition party's task is to enter the Locale, investigate its key locations, collect data, follow leads, all with the hopes of discovering the source of the anomalous activity.",
      }
    ],
    shortText:
      "BODIES LIKE MEAT // The landscape watches you squirm. Your employers take note of every twist and contortion.",
  },
  EXTRAWBERRY: {
    imgUrl: "/images/extrawberry.png",
    title: "EXTRAWBERRY",
    url: "catalogue/EXTRAWBERRY",
    thumbHeight: "270",
    thumbWidth: "360",
    height: "600",
    width: "800",
    projectUrl: "https://c-l-o-a-k.itch.io/extrawberry",
    objectDetails:
      "EXTRAWBERRY / Brandan Griffin / Free Digital Release / Media-Scroll",
    text: [
      {
        text:
          "Extrawberry is a strawberry walkthrough, in full virtual realism." 
      },
      {
        text:
          "The berry functions as a playable text, or as a text that plays the reader's phenomenality like a game. Scrolling realizes the exo-strawberry, an exploded diagram of the actual strawberry's fruiting system of non-human 'I's: hormones, proteins, seeds, vines, transport channels. Glittered to life in this form, the exo-strawberry exists by virtue of the keyboard's ability to glyphically generate experiences beyond the human life-world, similar to WASD movement in gamespace. "
      },
      {
        text:
          "Emerging as three mutually-extrapolating forms—video, animated webcode, and typographically engineered pdf—this two-dimensional scroll thereby mounts a three-dimensional restructuring of anthropic space. A poem becomes an instruction manual for transmembering your POV between first-persons."
      }
    ],
    shortText: 
      "EXTRAWBERRY // A strawberry walkthrough, in full virtual realism. A congregation of downward motions. An effegy for the scrollbar."
  },
  OFFAL: {
    imgUrl: "/images/Offal.png",
    title: "OFFAL",
    url: "catalogue/OFFAL",
    thumbHeight: "270",
    thumbWidth: "360",
    height: "600",
    width: "800",
    projectUrl: "https://bookshop.org/p/books/offal-opacities-d-m-closet/18963750?ean=9798218072056",
    objectDetails:
      "Offal Opacities / D.M. Closet / 56 Color Pages / $10",
    text: [
      {
        text:
          "The mirror is imperfect. Bodies require a medium to connect with departed spirits. But the surface is smeared by bugs and debris. Ludonarrative shadows flicker. Beneath the residue, the self emerges in unexpected blemishes."
      },
      {
        text:
          "Offal Opacities mixes three short essays (Crypt of the Glich, Pink Smear, and Karaoke Versions) each concerned with depictions of digital visibility, corporeal leakage, and unstable identity. All delivered as esoteric messages of technicolor design."
      }
    ],
    shortText: 
      "OFFAL OPACITIES // An intricate weave of lyrical, personal, and theoretical essays explorind digital visibility, corporeal leakage, and unstable identity authored by D.M. Closet."
  },
};