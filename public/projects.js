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
    <center>CLOAK: On the Textobject & its Concealment / Color / 22 pages / $10</center>,
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
  SLASHER: {
    imgUrl: "/images/slasher.png",
    title: "SLASHER",
    url: "/catalogue/SLASHER",
    thumbHeight: "270",
    thumbWidth: "360",
    height: "600",
    width: "800",
    projectUrl: "https://www.amazon.com/Slasher-Reduxxx-Snatch-Wydlen/dp/B0CT1YXYV8",
    objectDetails: 
    <center>SLASHER REDUXXX / Snatch Wylden / 300 Pages / $40</center>,
    text: [
      {
        text:
          "Enter the abstract narrative landscape of SLASHER REDUXXX. The newest work from Snatch Wylden, weaving avant-garde compositions with existential metafiction, philosophical horror, spectral dances, the enigmatic strands pulled from the fabric that separates dream and reality.",
      },
      {
        text:
        "Let the text lure you into its mirror maze, over every booby trap, towards each surfacing decoy. Traverse the recesses of an undisclosed consciousness. Slowly approach. Through the meshed masks of duality, persona, portrayal. Let the text pull you further into your subversive roles. Leave your narrator behind. The path from chaos to cohesion is attuned to the steps of the dreamer / slasher / the soul of the model.",
      },
      {
        text:
        " SLASHER REDUXXX bends experience into abstraction. It speaks through the disembodied voices of the void. Shattered strata. Pulled teeth. Nondescript viscera. In the spaces between words, submerged in warm blood, under cold earth.",
      },
      {
        text:
        "Not all books are meant to be read. Not all artifacts are meant to be coveted. Welcome to the otherside of the mirror. Where the light refracts and waltzes in the chiaroscuro of shadows.",
      },
      {
        text:
        <font color= "black">x</font>
      },
      {
        text:
        <font color= "#fcfc03">BLURBS</font>
      },
      {
        text:
        "This fucking thing, because it is a thing, A Thing, slowly wrings your mind like a lone clean-up rag at a murder scene, stained and threadbare, submissive and wishing for more. We want more, Wylden. - Christopher Norris, author of The Holy Day and Hunchback '88",
      },
      {
        text:
        "“There`s a body of water with no name that I visited.” Distressed and filmic, Slasher Reduxxx is a dark, depthless pool. When I say “depthless,” I mean it the first way: unfathomably deep. Joan Retallack says the future of writing is fractal, is written in multiple languages, acknowledges + de-/re-constructs the bounds of inherited speech. Snatch Wylden has composed a futurebook. I say composed because “written” can’t begin to define what the book contains, which is not only text but image, distortion, obfuscation, world, frame. Do you want to know what all the words say? Do you want to peel away the layers + (re-)assemble the shards? How will you translate “( suffocation; rust )”? Throughout an undeniably ruined-/ruin- scape, breathtaking images telescope + bloom like cancer spreading through flesh, like “lightning stabs…a crown of thorns…a length of barbed wire to wrap around the ribs of this city. Put your hand on the wall.” Slasher Reduxxx asks you to unsettle the surface and feel for what`s on the other side. - Danika Stegeman, author of Ablation",
      },
      {
        text:
        "With peerless freakshowmanship, Snatch Wylden presents Slasher Reduxxx, a malicious & exquisitely executed diablerie. The Slasher's relentless inward yammerings echo across reams of fuzz & fluid, as shards of text lodged in malignant folds of brain meat. It's disquieting, sure, aphasic, & pyrotechnic--but it's also dangerously intimate. Something unspeakable & personal is shed across these pages. Are you brave enough to behold it? You might not be. - Logan Berry, author of Casket Flare and (Run Off Sugar) Crystal Lake",
      },
      {
        text:
        <font color= "black">x</font>
      },
      {
        text:
        <a href="https://c-l-o-a-k.itch.io/slasher-digital-companion">CHECK OUT THE DIGITAL COMPANION HERE!</a>
      },
    ],
    shortText:
      "SLASHER REDUXXX //  SLASHER REDUXXX bends experience into abstraction. It speaks through the disembodied voices of the void. Shattered strata. Pulled teeth. Nondescript viscera. In the spaces between words, submerged in warm blood, under cold earth.",
    },
  EXITREALITY: {
    imgUrl: "/images/exitreality.png",
    title: "EXITREALITY",
    url: "/catalogue/EXITREALITY",
    thumbHeight: "270",
    thumbWidth: "360",
    height: "400",
    width: "550",
    projectUrl: "https://c-l-o-a-k.itch.io/exit-reality-a-diy-tutorial",
    objectDetails:
    <center>Exit Reality / A DIY Tutorial / Ryan Raymond Buell / Free Digital Release</center>,
    text: [
      {
        text:
          "EXIT REALITY reaches towards you / through the glow of the terminal screen / in corrupted but familiar tongues. How-to guides coalesce in sentient form. This is the path towards disappearance. Follow the instructions. Acquire the materials. Mirrors, cameras, video screens. Remap your perceptions. Leave reality behind for the bliss of non-being.",
      },
     
    ],
    shortText:
      "EXIT REALITY // Articulated through outdated technologies and rudimentary interfaces, Ryan Raymond Buell's work explores sousveillance and loneliness in the hyper-online zones of the digital world.",
    },
  NEWUTOPIA: {
    imgUrl: "/images/utopia.png",
    title: "NEWUTOPIA",
    url: "/catalogue/NEWUTOPIA",
    thumbHeight: "270",
    thumbWidth: "360",
    height: "600",
    width: "800",
    projectUrl: "https://bookshop.org/p/books/the-new-utopia-j-billings/20857942?ean=9798218302924",
    objectDetails:
    <center>The New Utopia / J. Billings / 96 Pages / $9</center>,
    text: [
      {
        text:
          "The New Utopia is a mosaic descent into the fringes of the underworld. Two detectives stalk through the reality of their own dreams. A murdering spiritualist converses with his victim. Street addresses go missing. Abandoned buildings speak to one another. Voyeuristic loners mythologize what they see in the shadows. And at the center of it all is one woman.",
      },
      {
        text:
          "In his debut novel, J. Billings catalogues the unseen alcoves of the subterranean. Staring back into the gaze of the surveillance camera, deciphering its memories, and opening a portal into the labyrinthine world just outside our grasp.",
      },
      {
        text:
          "It is too late to stop. The explosion of the universe has already happened. This is the mutation.",
      },
    ],
    shortText:
      "THE NEW UTOPIA // A mosaic descent into the fringes of the underworld. Two detectives stalk through the reality of their own dreams. A murdering spiritualist converses with his victim. Street addresses go missing. Abandoned buildings speak to one another. Voyeuristic loners mythologize what they see in the shadows. And at the center of it all is one woman.",
    },
  PANOPTICON: {
    imgUrl: "/images/panoptic.png",
    title: "PANOPTICON",
    url: "/catalogue/PANOPTICON",
    thumbHeight: "270",
    thumbWidth: "360",
    height: "600",
    width: "800",
    projectUrl: "https://bookshop.org/p/books/panopticon-fragments-jeremy-bentham/20536933?ean=9798218267605",
    objectDetails:
    <center>Panopticon [fragments] / 114 Pages / $9</center>,
    text: [
      {
        text:
          "For almost a quarter of a century, utilitarian philosopher Jeremy Bentham attempted to acquire funding and government assistance in building an unorthodox prison of ambiguous surveillance and guard. This new text captures fragments of his original proposal and the various correspondence he wrote throughout the years he spent campaigning for the prison's construction.",
      },
      {
        text:
          "Bentham's Panopticon is a compelling example of pre-modern thought around visibility and concealment, eventually acting as a central metaphor within Foucault's writings on society and control. Here, re-examined through the virulent design of the multidisciplinary publishing project, CLOAK.",
      },
    ],
    shortText:
      "PANOPTICON [fragments] / Bentham's Panopticon is a compelling example of pre-modern thought around visibility and surveillance. Here, re-examined through the virulent design of the multidisciplinary publishing project, CLOAK.",
    },
  DARKNESS: {
  imgUrl: "/images/DOUD-1.png",
  title: "DARKNESS",
  url: "/catalogue/DARKNESS",
  thumbHeight: "270",
  thumbWidth: "360",
  height: "600",
  width: "800",
  projectUrl: "https://bookshop.org/p/books/dance-of-utter-darkness-cloak/20123879?ean=9798218206352",
  objectDetails:
  <center>Dance of Utter Darkness / 36 Pages / $9</center>,
  text: [
    {
      text:
        "Dance of Utter Darkness is a book of subterranean violence and brutalist design. Marked by harsh cuts and dark alcoves.",
    },
    {
      text:
        "In the private void of the sewers, two cops scry new crime and punishment from the entrials of sacrified critters. Threading language from the exposed flesh into new systems of control.",
    },
    {
      text:
        "You do what you can and at the end Fanon's ghost will be waiting for you.",
    },
  ],
  shortText:
    "DANCE OF UTTER DARKNESS / Two cops scry new crime and punishment from the entrails of sacrified critters.",
  },
  UMBILICUS: {
    imgUrl: "/images/UMBILICUS.png",
    title: "UMBILICUS",
    url: "/catalogue/UMBILICUS",
    thumbHeight: "270",
    thumbWidth: "360",
    height: "600",
    width: "800",
    projectUrl: "https://c-l-o-a-k.itch.io/unto-the-umbilicus",
    objectDetails:
    <center>UNTO THE UMBILICUS / Snatch Wylden / Labyrinth of the Poor Image / Free Digital Release</center>,
    text: [
      {
        text:
          "INTO / THRU / BEYOND GRIEF",
      },
      {
        text:
          "After the death of his mother, Snatch Wylden was sent into a spiral of creativity as his brain worked to cope with the persistent numbing process.",
      },
      {
        text:
          "UNTO THE UMBILICUS is an early outcropping of that experience. It is a visual representation of both the physical processes and transcendental de-alignments within death. It is an exercise in (and) of the grief, atonement, and consolation an outsider-to-death must take on.",
      },
      {
        text:
          "Spatialized through the inherently sterility of the Windows file explorer, these hypervisual scenes rise as esoteric landmarks within the droning LEFT and RIGHT. Every fork in the path, another monument / effigy / altar into, through, beyond grief.",
      },
      {
        text: "There is always something more to find. Another turn unexamined or alcove unlit. Enter the UMBILICUS and feel for the language carved beyond the veil of your gaze. Embrace the poor image."
      },
    ],
    shortText:
      "UNTO THE UMBILICUS // There is always something more to find. Another turn unexamined or alcove unlit. Enter the UMBILICUS and feel for the language carved beyond the veil of your gaze. Embrace the poor image.",
  },
  HIDE: {
    imgUrl: "/images/hthab.png",
    title: "HIDE",
    url: "/catalogue/HIDE",
    thumbHeight: "270",
    thumbWidth: "360",
    height: "600",
    width: "800",
    projectUrl: "https://c-l-o-a-k.itch.io/how-to-hide-a-body",
    objectDetails:
    <center>how to hide a body / Wrath of Persephone / Neural Pathway / Free Digital Release</center>,
    text: [
      {
        text:
          "A cavernous text exploring themes of suicide, surveillance, and the right to disappear.",
      },
      {
        text:
          "how to hide a body takes form through a series of dark alcoves illuminated briefly by the narrator's voice.",
      },
      {
        text:
          "TW: Suicide",
      },
    ],
    shortText:
      "how to hide a body // In search of an escape from the totality of the geopolitical gaze",
  },
  THITHOGS: {
    imgUrl: "/images/THITHOGS.png",
    title: "THITHOGS",
    url: "/catalogue/THITHOGS",
    thumbHeight: "270",
    thumbWidth: "360",
    height: "600",
    width: "800",
    projectUrl: "https://bookshop.org/p/books/the-house-inside-the-house-of-gregor-schneider-gary-j-shipley/19794596?ean=9798218151829",
    objectDetails:
    <center>THE HOUSE INSIDE THE HOUSE OF GREGOR SCHNEIDER / Gary J. Shipley / 236 Pages / $12</center>,
    text: [
      {
        text:
          "A narrator is trapped inside a house, where their search for an exit ends up only adding to its walls, its ceilings, its floors, its rooms.",
      },
      {
        text:
          "The House Inside The House of Gregor Schneider is a conceptual nouveau roman constructed almost entirely from appropriated writings on the work of Gregor Schneider, primarily encounters with Die Familie Schneider and Haus u r.",
      },
      { 
        text: 
          "The texts come from various sources, including Schneider himself. All names and second-person references have been replaced with the first-person. Past and future tenses have become present-tense. ‘House’ is sometimes replaced by ‘room.’ Words have been pluralised, singularised, or erased wherever necessary." 
      },
      { 
        text: 
          "For both the conceptualist writer and practitioners of the nouveau roman, objects take on a position of prominence. For the former, words are objects. For the latter, objects come to the fore as plot and character are made subsidiary. In merging these theoretical standpoints (while also mirroring Schneider’s own artistic practice), THITHOGS places words/objects behind or in front of each other until they are no longer tools of orientation but disorientation. " 
      },
      { 
        text: 
          "There are only the objects and the narrator’s/artist’s subservience to them. There is only the coalescing of objects/words and our being lost inside them. There is no around or through or retreat, only deeper inside the ever-growing yet ever-shrinking surface." 
      },
      ,
      {
        text:
        <a href="https://www.full-stop.net/2023/07/03/reviews/soni-wadhwa/the-house-inside-the-house-of-gregor-schneider-gary-j-shipley/">REVIEW BY SONI WADHWA @ FULL STOP</a>,
      }
      ,
      {
        text:
        <a href="https://qboxo.substack.com/p/notes-on-isolationloneliness">REVIEW BY COREY QURESHI</a>,
      },
    ],
    shortText:
      "THE HOUSE INSIDE THE HOUSE OF GREGOR SCHNEIDER // A narrator is trapped inside a house, where their search for an exit ends up only adding to its walls, its ceilings, its floors, its rooms.",
  },
  SCRIMS: {
    imgUrl: "/images/scrims.png",
    title: "SCRIMS",
    url: "/catalogue/SCRIMS",
    thumbHeight: "270",
    thumbWidth: "360",
    height: "600",
    width: "800",
    projectUrl: "https://c-l-o-a-k.itch.io/scrims",
    objectDetails:
    <center>SCRIMS / Garett Strickland / Digital / Free Digital Release / Bard╽o╿ic Membrane</center>,
    text: [
      {
        className: "italic",
        text:
          "Reconstitutive",
      },
      {
        className: "italic",
        text:
          "bard╽o╿ic",
      },
      {
        className: "italic",
        text:
          "membrane",
      },
      {
        className: "italic",
        text:
          "echoes",
      },
      {
        text:
          "SCRIMS explores the inherently mysterious nature of digital artifacts. Presented as a downloadable folder of images, videos, audio files, pdfs, the materials begin to form an elusive zeitgeist.",
      },
      {
        text:
          "The text forms as the documents of your investigation, all of the information laid out in front of you, arranged by something just out of view.",
      },
      { 
        text: 
          "Access the SCRIMS, riffle through the folder, listen to the crooning voices and buzzing static." 
      },
    ],
    shortText:
      "SCRIMS // Access the SCRIMS, riffle through the folder, listen to the crooning voices and buzzing static.",
  },
  ASSETPAK: {
    imgUrl: "/images/ASSETPAK.jpg",
    title: "ASSETPAK",
    url: "catalogue/ASSETPAK",
    thumbHeight: "270",
    thumbWidth: "360",
    height: "600",
    width: "800",
    projectUrl: "https://c-l-o-a-k.itch.io/cloak-asset-pak",
    objectDetails:
    <center>CLOAK ASSET PAK / 150+ IN-HOUSE ASSETS / $1.00</center>,
    text: [
      {
        text:
          "The CLOAK ASSET PAK collects over 150 'OBJEKTS' and 'SKREENS' created and used by the CLOAK.WTF team to assemble digital and print releases."
      },
      {
        text:
          "Included assets range from crude 3d objects to distorted film stills to enigmatic wireframes. Many of which have appeared in past releases such as the Self-Titled and Bodies Like Meat."
      },
    ],
    shortText: 
      "CLOAK ASSET PAK // A collection of 150+ assets created and used by CLOAK to assemble our digital and print releases."
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
    <center>Offal Opacities / D.M. Closet / 56 Color Pages / $10</center>,
    text: [
      {
        text:
          "The mirror is imperfect. Bodies require a medium to connect with departed spirits. But the surface is smeared by bugs and debris. Ludonarrative shadows flicker. Beneath the residue, the self emerges in unexpected blemishes."
      },
      {
        text:
          "Offal Opacities mixes three short essays (Crypt of the Glich, Pink Smear, and Karaoke Versions) each concerned with depictions of digital visibility, corporeal leakage, and unstable identity. All delivered as esoteric messages of technicolor design."
      },
      {
        text:
          <a href="https://www.amazon.co.uk/Offal-Opacities-D-M-Closet/dp/B0BJYM3SXZ/ref=sr_1_1?crid=1BM0FTE9XUUL9&keywords=offal+opacities&qid=1667153913&sprefix=offal+opacitie%2Caps%2C153&sr=8-1">UK VERSION AVAILABLE HERE</a>
      },
      {
        text:
        <a href="https://fecundmag.com/dust-gathers-in-boils">REVIEW BY PHIL SPOTSWOOD</a>,
      },
    ],
    shortText: 
      "OFFAL OPACITIES // An intricate weave of lyrical, personal, and theoretical essays explorind digital visibility, corporeal leakage, and unstable identity authored by D.M. Closet."
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
    <center>EXTRAWBERRY / Brandan Griffin / Free Digital Release / Media-Scroll</center>,
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
    <center>Bodies Like Meat: RPG Death Simulator / B&W / 190 pages / $12</center>,
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
      },
      {
        text:
        <a href="https://fckyrbookclub.substack.com/p/lucifers-meat">REVIEW BY FCK YR BOOKCLUB</a>,
      },
    ],
    shortText:
      "BODIES LIKE MEAT // The landscape watches you squirm. Your employers take note of every twist and contortion.",
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
    <center>POLICE LUCIFER / William Watson / 44 pages / $8</center>,
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
      },
      {
        text:
        <a href="https://fckyrbookclub.substack.com/p/lucifers-meat">REVIEW BY FCK YR BOOKCLUB</a>,
      },
    ],
    shortText: 
      "POLICE LUCIFER // CLICK HERE TO DOWNLOAD ADDITIONAL AMORALITY DRIVERS"
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
    <center>RELENTLESS / Free Digital Release / Infinite Poem / Danika Stegeman</center>,
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
    <center>AN EXCHANGE IN DEMONOLOGY / Senia Hardwick / 92 Pages / $10</center>,
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
      },
      {
        text:
        <a href="https://c-l-o-a-k.itch.io/an-exchange-in-demonology">DIGITAL ZINE SUPPLEMENT AVAILABLE @ ITCH.IO</a>,
      },
    ],
    shortText: 
      "AN EXCHANGE IN DEMONOLOGY [Print Edition] // A series of zines exploring the relationship between demonology, political theory, and the erotic."
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
    <center>WRECKDOM / Free Digital Release / 31 Levels / Logan Berry</center>,
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