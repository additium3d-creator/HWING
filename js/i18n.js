/* ES is the HTML source of truth (also what crawlers see). EN overrides live here. */
(function () {
  "use strict";

  var EN = {
    "skip": "Skip to content",
    "nav.build": "How it's made",
    "nav.wall": "0.5 mm wall",
    "nav.levers": "What you get",
    "nav.spec": "Spec sheet",
    "nav.cta": "Book 30 min",

    "hero.alt": "Render of the Additium3D H-WING UAV",
    "hud.1": "PA12S · MJF",
    "hud.2": "Folding wings",
    "hud.3": "0.5 mm wall",
    "hud.4": "CFD aerodynamics",
    "render": "Concept render",
    "hero.eyebrow": "Additium3D · Technology demonstrator",
    "hero.sub": "A complete UAV, 100 % printed in MJF.",
    "hero.lede": "Structure, hinges and housings come out of the same machine. Two aircraft per build. No moulds, no tooling.",
    "hero.cta1": "See how it's made",
    "hero.s2n": "0.5 mm",
    "hero.s2": "minimum wall",
    "hero.s3": "aircraft per build",
    "hero.s4n": "6 wks",
    "hero.s4": "concept to aircraft",
    "hero.scroll": "Scroll",
    "ticker": "100 % MJF · PA12S &nbsp;—&nbsp; 0.5 mm wall &nbsp;—&nbsp; Print-in-place &nbsp;—&nbsp; 2 drones per build &nbsp;—&nbsp; €0 tooling &nbsp;—&nbsp; 3–6 days per batch &nbsp;—&nbsp; 5 iterations in 6 weeks &nbsp;—&nbsp;",

    "c.eyebrow": "01 · By the numbers",
    "c.title": "A whole drone.<br><em>One single technology.</em>",
    "c.1": "of the structure, printed in MJF with PA12S. Not a single structural part made any other way.",
    "c.k2": "Minimum wall",
    "c.2": "verified on parts we have manufactured and tested ourselves.",
    "c.k3": "Per machine cycle",
    "c.u3": "drones",
    "c.3": "complete aircraft, with all their parts, in a single 380 × 284 × 380 mm build.",
    "c.k4": "Concept → aircraft",
    "c.u4": "wks",
    "c.4": "and five iterations to get a complete aircraft, manufactured and assembled.",

    "m.eyebrow": "03 · From build to drone",
    "m.title": "Designed for MJF.<br><em>Printed.<br>Assembled.</em>",
    "m.s1.t": "Design",
    "m.s1.d": "Conceived for MJF from the first line: a four-part fuselage that nests, integrated hinges and planned-in carbon stiffening.",
    "m.s2.t": "Printing",
    "m.s2.d": "Two complete aircraft, with all their parts, in a single 380 × 284 × 380 mm build. One cycle and zero tooling.",
    "m.s3.t": "Assembly",
    "m.s3.d": "The four parts click together, the hinges already come printed into the part and the carbon rod slides into the seat designed for it.",
    "m.s4.t": "Deployment",
    "m.s4.d": "Folding wings and tail: a compact cylinder for the canister and an open configuration once deployed.",
    "m.aria": "Schematic animation of the H-WING assembly",
    "m.v1": "Phase 01 · CAD design",
    "m.v2": "Phase 02 · MJF build",
    "m.v3": "Phase 03 · Assembly",
    "m.v4": "Phase 04 · Deployment",
    "svg.nose": "01 · Nose",
    "svg.mid": "02 · Center section",
    "svg.rear": "03 · Rear section",
    "svg.tail": "04 · Tail cone",
    "svg.hinge": "Printed hinge",
    "svg.wing": "Folding wing",
    "svg.rod": "Carbon rod",
    "m.cuba.alt": "Two complete H-WINGs nested in one MJF build",
    "m.printing": "Printing",
    "m.note": "Illustrative schematic and animation",

    "d.eyebrow": "04 · Folded ↔ Deployed",
    "d.title": "From cylinder<br><em>to wing.</em>",
    "d.lede": "Drag to open the H-WING: compact for canister launch, complete once deployed.",
    "d.a1": "Render of the H-WING folded",
    "d.a2": "Render of the H-WING deployed",
    "d.folded": "Folded",
    "d.deployed": "Deployed",
    "d.range": "Folded / Deployed",
    "d.b1.t": "Hinges printed into the part",
    "d.b1.chip": "Zero assembly",
    "d.b1.d": "Wings, tail and ailerons come off the printer already assembled, with their range of motion built in: the hinges are printed articulated inside the part itself. Nothing to assemble for them to move.",
    "d.b2.t": "Cylindrical fuselage",
    "d.b2.d": "Designed for canister launch: the fuselage sections nest in the build and click together afterwards.",
    "d.b3.t": "In-house canister",
    "d.b3.d": "We printed it too, in FDM with ABS-GF, to validate the complete system and not just the aircraft.",

    "w.vid.aria": "Thin MJF-printed wall flexed by hand",
    "g.made": "Made",
    "w.video": "Thin MJF-printed wall: it flexes by hand",
    "w.eyebrow": "05 · Wall limit",
    "w.title": "of wall. A real structure.",
    "w.p1": "MJF lets us take walls down to 0.5 mm on parts we have manufactured and tested ourselves. That is where powder beats fibre on weight: a light structure with no lay-up and no mould.",
    "w.p2": "Stiffness comes from geometry and a carbon rod seated by design: the thin wall works exactly where it needs to.",
    "w.safe": "Safe minimum wall",
    "w.r.mjf": "MJF · H-WING",
    "w.r.mjf.v": "0.5 mm",
    "w.r.cmp": "Composite (carbon laminate)",
    "w.r.cmp.v": "0.8 mm",
    "w.r.inj": "Injection moulding",
    "w.r.inj.v": "1.0 mm",
    "w.note": "Indicative safe-design values, not each process's absolute limit: they vary with material and geometry.",
    "w.scale": "To scale · 0 – 1.5 mm",
    "mm05": "0.5 mm",

    "j.eyebrow": "06 · Why MJF",
    "j.title": "A process that <em>makes what the design asks for.</em>",
    "j.lede": "HP Multi Jet Fusion fuses powder layer by layer with print agents and heat. No supports, no mould, and near-identical properties in all three axes.",
    "j.aria": "Animation of the Multi Jet Fusion process",
    "j.part": "PART",
    "j.powder": "PA12S POWDER BED",
    "j.carriage": "FUSING + DETAILING AGENTS",
    "j.lamp": "FUSING LAMP",
    "j.c1": "1 · Recoat the powder",
    "j.c2": "2 · Fusing and detailing agents",
    "j.c3": "3 · Lamp: fuse",
    "j.c4": "4 · Lower and repeat",
    "fu.tag": "Video · 1:11",
    "fu.title": "Fusi explains it <em>in one minute.</em>",
    "fu.text": "Fusi is the HP MJF 5620 at our plant in Beniparrell. Watch it turn powder into end-use parts: spread, draw, fuse and repeat.",
    "fu.fs": "Expand",
    "fu.scrub": "Video position",
    "fu.aria": "Animation: Fusi, Additium3D's HP MJF 5620, explains the Multi Jet Fusion process",
    "j.r1.t": "No supports",
    "j.r1.d": "Internal channels, closed cells and consolidated assemblies: the powder itself supports the part while it prints.",
    "j.r2.t": "Same in X, Y and Z",
    "j.r2.d": "Almost no weak layer direction. That is the condition for trusting structure to additive, not just housings.",
    "j.r3.t": "Ready-to-assemble surface",
    "j.r3.d": "No layer lines; it can be dyed, bead-blasted or vapour-smoothed with no rework.",
    "j.r4.t": "Predictable scaling",
    "j.r4.d": "Part 1 and part 500 are the same: ±0.25–0.45 mm across the whole 380 × 284 × 380 mm chamber.",

    "l.eyebrow": "07 · What you get",
    "l.title": "Six things <em>no other process</em> does at once.",
    "l.1.t": "Ultra-thin walls",
    "l.1.d": "A light structure without lay-up or mould, with the wall verified on our own parts.",
    "l.2.u": "part",
    "l.2.t": "Print-in-place",
    "l.2.d": "A hinge or latch that comes out of the machine already assembled and working. What used to be an assembly is a single part.",
    "l.3.t": "Minimum weight",
    "l.3.d": "Lattice, isogrid ribbing and internal cells. Thanks to MJF there are cases, such as a UAV kit redesigned with DfAM, where 425 g have been removed: 29 % of its weight.",
    "l.4.u": "kits / wk",
    "l.4.t": "High productivity",
    "l.4.d": "Two aircraft per build and continuous 24/7 production. Doubling output means adding builds, not buying a mould.",
    "l.5.t": "Low series cost",
    "l.5.d": "Complete set of 25 parts in PA12S (1.5 kg) and €0 tooling. Production-batch pricing from the very first order.",
    "l.6.u": "days",
    "l.6.t": "Lightning-fast iterations",
    "l.6.d": "A batch in 3–6 days. The H-WING went through five iterations in six weeks.",

    "i.eyebrow": "08 · Time",
    "i.title": "Be wrong ten times <em>before the deadline.</em>",
    "i.lede": "An injection mould takes 4 to 6 months to deliver the first good part, and every geometry change resets the clock. In carbon composite, every change needs new tooling, lay-up and curing: around 50 days per round. One of our iterations —redesign, print and test— is fifteen days.",
    "i.live": "Calendar simulation",
    "i.day": "Day",
    "i.mold": "Injection mould",
    "i.mold.r": "150 days to the first good part",
    "i.cf": "Carbon composite",
    "i.cf.r": "3 iterations: tooling, lay-up and curing every time",
    "i.am": "Additive manufacturing",
    "i.am.r": "10 iterations in the same time",
    "i.axis": "150 days",
    "i.note": "H-WING: five iterations and a complete aircraft in six weeks.",
    "i.foot": "Average values; every project is quoted from its real file.",
    "i.replay": "Replay",
    "cx.eyebrow": "09 · Versus composites",
    "cx.title": "The best of carbon fibre, <em>cheaper, faster and at series scale.</em>",
    "cx.lede": "It is not MJF against carbon. Carbon fibre has an extraordinary stiffness-to-weight ratio, and the H-WING makes use of it. Each material does its own job.",
    "cx.lede2": "PA12, printed in MJF, gives the shape and the support: every component has its housing in the fuselage itself. Carbon rods give the stiffness, and only go where it is needed. No moulds. No lay-up.",
    "cx.aria": "Diagram: a 0.5 mm PA12 skin is flexible; with a carbon rod, the structure is stiff",
    "cx.l.skin": "PA12 · skin",
    "cx.l.rod": "Carbon · rod",
    "cx.d1k": "Skin · PA12 printed in MJF",
    "cx.d1t": "0.5 mm skin",
    "cx.d1s": "Flexible",
    "cx.d2k": "Rod · carbon fibre",
    "cx.d2t": "Housed rod",
    "cx.d2s": "Only where stiffness is needed",
    "cx.d3k": "H-WING",
    "cx.d3t": "Assembled structure",
    "cx.d3s": "Stiff",
    "cx.foot": "Illustrative diagram.",
    "wx.head": "The wing, in sections",
    "wx.1.tag": "MJF · PA12",
    "wx.1.t": "Wing in sections",
    "wx.1.d": "PA12 skin parts printed in MJF and split into sections that fit the machine (down to 0.5 mm thick).",
    "wx.1.alt": "H-WING wing split into three PA12 sections with the carbon rods between them",
    "wx.2.tag": "Carbon",
    "wx.2.t": "Continuous spar",
    "wx.2.d": "Carbon-fibre rods that run through and tie together all the sections, providing the main stiffness.",
    "wx.2.alt": "Three carbon-fibre rods of different diameters",
    "wx.3.tag": "H-WING · Wing",
    "wx.3.t": "Wing joined in parts",
    "wx.3.d": "A light, stiff, modular structure that combines the design freedom of MJF with the strength of carbon.",
    "wx.3.alt": "Assembled H-WING wing with the carbon spar running through every section",
    "cx.1.u": "× lower cost",
    "cx.1.t": "Price",
    "cx.1.d": "No moulds to amortise and no hours of hand lay-up. Between 2 and 3 times lower cost per structure in short and medium runs. The first unit needs no upfront investment.",
    "cx.2.u": "min to assemble",
    "cx.2.t": "Manufacturing speed",
    "cx.2.d": "From file to aircraft in days, not weeks of mould making. Two complete drones per build and assembly in under 10 minutes.",
    "cx.3.v": "Real",
    "cx.3.u": "series production",
    "cx.3.t": "Scalability",
    "cx.3.d": "Scaling a laminate takes more moulds and more skilled labour. With MJF you just run more print cycles, and every unit comes out identical to the last.",
    "cx.4.u": "in 6 weeks",
    "cx.4.t": "Iteration speed",
    "cx.4.d": "Changing the design means changing the file. The H-WING went through 5 iterations in 6 weeks to a complete aircraft, manufactured and assembled. The part you test is the part you build in series.",
    "cx.5.t": "Fewer parts, more functions",
    "cx.5.d": "Internal mounts and a housing for every component, printed into the fuselage itself. Walls with only the material that is needed, and nested sections: less material, fewer parts and less assembly.",
    "cx.6.u": "transparent",
    "cx.6.t": "Integrated antennas",
    "cx.6.d": "Carbon fibre is conductive and blocks radio signals. PA12 is transparent to radio frequency: GNSS, data link and video antennas sit inside the fuselage, protected and with no aerodynamic penalty.",
    "cx.cmp.aria": "Comparison between the H-WING and traditional composites",
    "cx.c1": "H-WING (MJF + carbon)",
    "cx.c2": "Traditional composite",
    "cx.r1": "Moulds and tooling",
    "cx.r1a": "No moulds, no tooling",
    "cx.r1b": "Moulds and lay-up tooling",
    "cx.r2": "Cost per structure",
    "cx.r2a": "Between 2 and 3 times lower in short and medium runs",
    "cx.r2b": "Higher starting cost in short and medium runs",
    "cx.r3": "Time to first aircraft",
    "cx.r3a": "Days: from file to aircraft",
    "cx.r3b": "Weeks, including mould making",
    "cx.r4": "How it scales",
    "cx.r4a": "More print cycles; every unit identical",
    "cx.r4b": "More moulds and more skilled labour",
    "cx.r5": "Cost of a design change",
    "cx.r5a": "Change the file",
    "cx.r5b": "Rebuild the moulds",
    "cx.r6": "Parts and assembly",
    "cx.r6a": "Fewer parts: housings and mounts printed into the fuselage",
    "cx.r6b": "More parts and later assembly",
    "cx.r7": "Antennas",
    "cx.r7a": "Inside the fuselage: PA12 is RF-transparent",
    "cx.r7b": "Outside or behind windows: carbon blocks the signal",
    "cx.quote": "It is not just another drone. It is what happens when you design for how it will be made from minute one.",
    "cx.sub": "We take this same approach to projects in the air, on land and at sea.",

    "r.1.u": "layer plane",
    "r.1.t": "Critical features in the layer plane",
    "r.1.d": "Holes and pins with their diameter in the XY plane, where resolution is highest. Main loads also in XY, and hinges and clips never loaded along Z.",
    "r.2.u": "aspect ratio",
    "r.2.t": "Mind the slender parts",
    "r.2.d": "Above 10:1 a part tends to warp. We thicken, lighten with lattice, smooth thickness changes and avoid ribs on large flat areas.",
    "r.3.u": "mm between parts",
    "r.3.t": "Spread mass and air",
    "r.3.d": "Even spacing, parts centred and low, large masses away from thin ones. If needed, sacrificial parts around them act as a thermal cage.",
    "r.4.u": "of rotation",
    "r.4.t": "Rotate the flat parts",
    "r.4.d": "Rotating flat parts avoids abrupt jumps in cross-section between layers and spreads the lamp heat more evenly.",
    "r.5.u": "microns per layer",
    "r.5.t": "Layer height is chosen per part",
    "r.5.d": "Thin layers for snap-fits and print-in-place mechanisms; thick layers to gain productivity when detail is not the priority. Between one end and the other, print time changes by around 15 % (order of magnitude).",
    "r.6.u": "consistent",
    "r.6.t": "Careful cleaning",
    "r.6.d": "Thin parts are cleaned with care: a nozzle too close, or too long on the same area, leaves colour marks. We design and process with that in mind.",
    "r.eyebrow": "10 · Designing for MJF",
    "r.sum": "Orientation, thickness and spacing are decided in the design. Our build-volume, thin-wall and defect rules, in a separate guide.",
    "r.sum.btn": "See the design guide",
    "r.sum.1": "The build",
    "r.sum.1d": "Orientation and spacing of the parts.",
    "r.sum.2": "Thin walls",
    "r.sum.2d": "Weight-sensitivity calculator.",
    "r.sum.3": "Nine defects",
    "r.sum.3d": "How to avoid them, one by one.",
    "c.cuba.alt": "H-WING build volume with the parts of two complete aircraft",
    "c.cuba.cap": "<b>2</b> complete aircraft · one build",
    "c.lede": "Structure, hinges and housings are printed together, with no moulds or tooling. A single build holds the parts of two complete aircraft.",
    "dp.eyebrow": "MJF design guide",
    "dp.nav.cuba": "The build",
    "dp.nav.wall": "Thin walls",
    "dp.nav.def": "Defects",
    "dp.back": "The H-WING",
    "dp.next": "Next step",
    "r.title": "Designing for MJF means <em>thinking about the build from the first sketch.</em>",
    "r.lede": "Orientation, thickness, spacing and layer height are decided at design time, not at the printer. These are the rules we apply, in line with the guidelines the technology maker itself publishes for producing drones in MJF.",
    "r.cb.tag": "Our build",
    "r.cb.t": "What an H-WING build looks like",
    "r.cb.1": "Vertical parts: thin walls print vertically, with layers stacked along the fuselage.",
    "r.cb.2": "Even spacing between sections, so none heats its neighbour.",
    "r.cb.3": "Everything in one cycle: the sections of two aircraft share a build.",
    "r.cb.alt": "H-WING build volume with the fuselage sections nested upright",
    "r.wc.tag": "Calculator",
    "r.wc.t": "The thinner, the more sensitive",
    "r.wc.p": "Move the wall thickness and the contour deviation: on a thin wall, a few microns are a huge share of the part. That is why thin walls are calibrated with representative parts.",
    "r.wc.l1": "Wall thickness",
    "r.wc.l2": "Contour deviation",
    "r.wc.out": "weight variation, approx.",
    "r.wc.m1": "Thick wall: the deviation barely shows in the weight.",
    "r.wc.m2": "Thin wall: it shows. Worth calibrating with representative parts.",
    "r.wc.m3": "Very sensitive: here, process calibration decides everything.",
    "r.wc.foot": "Geometric approximation (both wall faces shift): variation ≈ 2 × deviation ÷ thickness. Order of magnitude, not a guarantee.",
    "r.wc.aria": "Cross-section of a wall with its deviation",
    "r.dg.tag": "Defect guide",
    "r.dg.t": "Nine things that can go wrong, and how to avoid them",
    "r.dg.risk": "Risk",
    "r.dg.fix": "How to avoid it",
    "r.dg.cost": "Trade-off",
    "r.dg.aria": "Defect types",
    "r.d.warp.n": "Warpage",
    "r.d.warp.r": "Distorted parts: assembly problems and cosmetic rejection.",
    "r.d.warp.f": "Avoid aspect ratios above 10:1, lighten with lattices or hollowing, place parts central and low, surround them with sacrificial parts and let them cool slowly.",
    "r.d.warp.c": "Longer cycle time and some build volume dedicated to it.",
    "r.d.pore.n": "Pores and bubbles",
    "r.d.pore.r": "Internal voids in thin walls: shorter fatigue life and weak spots.",
    "r.d.pore.f": "Controlled ambient humidity, up-to-date thermal calibration, small features at the centre and facing downwards, and avoiding thin walls printed horizontal or inclined.",
    "r.d.pore.c": "In severe cases an extra wait between layers lengthens the build.",
    "r.d.stair.n": "Stair stepping",
    "r.d.stair.r": "Visible layer lines on sloped or curved surfaces.",
    "r.d.stair.f": "Orient to avoid shallow angles on large flat faces looking upwards, and move the effect to the least visible side. A thinner layer softens it.",
    "r.d.stair.c": "Thinner layer: more time and more cost per part. It is not removed, it is moved.",
    "r.d.dim.n": "Dimensional accuracy",
    "r.d.dim.r": "Deviations that prevent assembly or create interference.",
    "r.d.dim.f": "Hole and shaft diameters in the XY plane, machine calibration with representative parts and, in repeated series, part-by-part adjustment.",
    "r.d.dim.c": "More metrology and set-up time before the series.",
    "r.d.mech.n": "Mechanical properties",
    "r.d.mech.r": "Strength or elasticity below specification.",
    "r.d.mech.f": "Main loads in the XY plane, nothing critical loaded along Z, short builds and fine thermal tuning.",
    "r.d.mech.c": "More temperature can degrade the powder or mark the surface: the aim is balance.",
    "r.d.color.n": "Colour uniformity",
    "r.d.color.r": "Uneven tones between parts or zones: cosmetic rejection.",
    "r.d.color.f": "Group parts of similar size and thickness, same orientation, even gaps and controlled cleaning.",
    "r.d.color.c": "Less freedom when nesting in the build.",
    "r.d.therm.n": "Thermal defects",
    "r.d.therm.r": "Degradation or deformation from excess heat, with loss of properties.",
    "r.d.therm.f": "Even mass distribution in the build and thermal calibration with parts similar to the real ones.",
    "r.d.therm.c": "Prior trials to fine-tune the calibration.",
    "r.d.clean.n": "Cleanability",
    "r.d.clean.r": "Trapped or adhered powder: more post-processing time.",
    "r.d.clean.f": "Tune energy and agents to avoid over-fusing or leaving half-fused powder, and clean with a standard, controlled process.",
    "r.d.clean.c": "Needs trials so surface quality is not lost.",
    "r.d.cost.n": "Cost",
    "r.d.cost.r": "A part that does not pay off does not get made.",
    "r.d.cost.f": "Thicker layers when detail is not the priority, a tuned fresh/recycled powder mix, lightening parts and packing the build well.",
    "r.d.cost.c": "It can affect finish or properties: it must be validated.",
    "r.ml.tag": "Inside every build",
    "r.ml.t": "Five recipes, one single build",
    "r.ml.p": "The technology lets you split one build into height bands and try a different process setup in each: thermal, agents, layer height. The parts are compared and the best recipe is picked without spending five builds.",
    "r.ml.l": "Level",
    "w.p3": "It is territory the industry itself recognises as special: the technology maker publishes dedicated process recipes for walls of 0.3 to 0.9 mm.",
    "t.mods": "In those 30 minutes we cover:",
    "t.m1": "Design for MJF",
    "t.m2": "Nesting in the build",
    "t.m3": "Thin walls",
    "t.m4": "Calibration and post-processing",
    "f.eyebrow": "11 · Spec sheet",
    "f.title": "H-WING <em>· data</em>",
    "f.1l": "Type", "f.1v": "Fixed-wing UAV · technology demonstrator",
    "f.2l": "Technology",
    "f.3l": "Material",
    "f.4l": "Structure", "f.4v": "100 % MJF",
    "f.5l": "Minimum wall", "f.5v": "0.5 mm (verified)",
    "f.6l": "Stiffening", "f.6v": "Carbon rod seated by design",
    "f.7l": "Fuselage", "f.7v": "Cylindrical, for canister launch",
    "f.8l": "Wings and tail", "f.8v": "Folding, with integrated hinges",
    "f.9l": "MJF build volume",
    "f.10l": "Aircraft per cycle",
    "f.11l": "Complete set", "f.11v": "25 parts · 1.5 kg of PA12S",
    "f.12l": "Series cost", "f.12v": "€500 per complete set",
    "f.13l": "Tooling",
    "f.14l": "Productivity", "f.14v": "&gt; 50 kits / week",
    "f.15l": "Lead time per batch", "f.15v": "3–6 days",
    "f.16l": "Development", "f.16v": "6 weeks · 5 iterations",
    "f.17l": "Aerodynamics", "f.17v": "Validated by CFD simulation",
    "f.18l": "Launch canister", "f.18v": "In-house · FDM · ABS-GF",

    "g.eyebrow": "02 · Made on our floor",
    "g.hint": "Tap to enlarge · swipe →",
    "g.title": "The real parts, <em>up close.</em>",
    "g.a1": "Wing root and hinges of the H-WING",
    "g.a2": "Fuselage section printed in MJF",
    "g.a3": "Inside of a fuselage section with lightening features",
    "g.a4": "H-WING displayed at the Additium3D stand",
    "g.a5": "Inside of a fuselage section with integrated housings",
    "g.a6": "Fuselage section with internal ribs",
    "g.a7": "H-WING at the UNVEX stand",
    "g.c1": "Wing root and integrated hinges",
    "g.c2": "Fuselage section: overview",
    "g.c3": "H-WING · deployed configuration",
    "g.c4": "Lightened, ribbed interior of a section",
    "g.c5": "At our UNVEX stand",
    "g.c6": "Integrated housings and reinforcements",
    "g.c7": "H-WING · folded configuration",
    "g.c8": "Internal ribs that support the thin wall",
    "g.c9": "The H-WING, ready to be shown",

    "t.eyebrow": "12 · Next step",
    "t.t1": "Want to learn how to design",
    "t.t2": "100 % MJF drones?",
    "t.p": "Thirty minutes with our technical team: we show you how we thought through the H-WING and how to take your design to MJF. No cost, no commitment.",
    "t.btn": "Book 30 minutes",
    "t.nda": "NDA before anything else: we sign it before you show us a single specification.",
    "t.mail": "Email",
    "t.tel": "Phone",

    "ft.loc": "Beniparrell · Valencia, Spain",
    "ft.rights": "© 2026 Additium3D. All rights reserved.",
    "ft.tm": "HP and Multi Jet Fusion are trademarks of HP Development Company, L.P. This site is independent of HP."
  };

  var META = {
    es: {
      title: "H-WING · UAV 100 % MJF | Additium3D",
      desc: "H-WING: un UAV completo diseñado y fabricado por Additium3D al 100 % en HP Multi Jet Fusion. Paredes de 0,5 mm, print-in-place, dos aeronaves por cuba y cinco iteraciones en seis semanas."
    },
    en: {
      title: "H-WING · 100 % MJF UAV | Additium3D",
      desc: "H-WING: a complete UAV designed and manufactured by Additium3D 100 % in HP Multi Jet Fusion. 0.5 mm walls, print-in-place, two aircraft per build and five iterations in six weeks."
    }
  };
  var LB = {
    es: { close: "Cerrar", prev: "Anterior", next: "Siguiente", gal: "Galería" },
    en: { close: "Close", prev: "Previous", next: "Next", gal: "Gallery" }
  };

  var ATTRS = [["data-i-alt", "alt", "esAlt"], ["data-i-aria", "aria-label", "esAria"]];

  function collect() {
    document.querySelectorAll("[data-i]").forEach(function (el) {
      if (el.dataset.es === undefined) el.dataset.es = el.innerHTML;
    });
    ATTRS.forEach(function (a) {
      document.querySelectorAll("[" + a[0] + "]").forEach(function (el) {
        if (el.dataset[a[2]] === undefined) el.dataset[a[2]] = el.getAttribute(a[1]) || "";
      });
    });
  }

  function apply(lang) {
    collect();
    var en = lang === "en";
    document.querySelectorAll("[data-i]").forEach(function (el) {
      var k = el.getAttribute("data-i");
      el.innerHTML = en && EN[k] !== undefined ? EN[k] : el.dataset.es;
    });
    ATTRS.forEach(function (a) {
      document.querySelectorAll("[" + a[0] + "]").forEach(function (el) {
        var k = el.getAttribute(a[0]);
        el.setAttribute(a[1], en && EN[k] !== undefined ? EN[k] : el.dataset[a[2]]);
      });
    });
    document.documentElement.lang = lang;
    document.title = META[lang].title;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", META[lang].desc);
    ["og:title"].forEach(function (p) { var m = document.querySelector('meta[property="' + p + '"]'); if (m) m.setAttribute("content", META[lang].title); });
    var od = document.querySelector('meta[property="og:description"]');
    if (od) od.setAttribute("content", META[lang].desc);
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    var L = LB[lang];
    var x = document.getElementById("lbX"), p = document.getElementById("lbP"), n = document.getElementById("lbN"), d = document.getElementById("lb");
    if (x) x.setAttribute("aria-label", L.close);
    if (p) p.setAttribute("aria-label", L.prev);
    if (n) n.setAttribute("aria-label", L.next);
    if (d) d.setAttribute("aria-label", L.gal);
    window.I18N.lang = lang;
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
  }

  function detect() {
    var q = null;
    try { q = new URLSearchParams(location.search).get("lang"); } catch (e) {}
    if (q === "en" || q === "es") return q;
    var s = null;
    try { s = localStorage.getItem("hwing-lang"); } catch (e) {}
    if (s === "en" || s === "es") return s;
    var nav = (navigator.language || "es").toLowerCase();
    return nav.indexOf("es") === 0 ? "es" : "en";
  }

  window.I18N = {
    lang: "es",
    set: function (lang) {
      try { localStorage.setItem("hwing-lang", lang); } catch (e) {}
      try {
        var u = new URL(location.href);
        u.searchParams.set("lang", lang);
        history.replaceState(null, "", u.toString());
      } catch (e) {}
      apply(lang);
    },
    init: function () {
      collect();
      var l = detect();
      if (l !== "es") apply(l); else { window.I18N.lang = "es"; }
      document.querySelectorAll(".lang button").forEach(function (b) {
        b.addEventListener("click", function () { window.I18N.set(b.getAttribute("data-lang")); });
      });
    }
  };
})();
