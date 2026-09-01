/* ==========================================================================
   Milas Offshore product data
   Loaded as a plain script (not fetch/JSON) so the site also works when
   opened directly from disk (file://) with no local server running.
   Manage additional listings via /admin.html.
   ========================================================================== */

window.PRODUCTS_SEED = [
  /* ---- Ex-stock inventory, added from yard photos ---- */
  {
    id: "p2001",
    name: "HI-FOG Marioff SPUD4 Fire Pump Skid (Port)",
    category: "safety",
    condition: "used",
    featured: true,
    desc: "Diesel-driven HI-FOG water mist fire pump skid on a steel base frame, complete with radiator, control box and hose reel. Removed from a decommissioned unit, sold as seen.",
    specs: ["Manufacturer: Marioff (HI-FOG)", "Type: SPUD4", "Mfg. no: 601178", "Max working / test pressure: 140 / 210 bar", "Electric power: 24V DC", "Dry weight: 2,000 kg"],
    image: "images/products/hifog-spud4-port-1.jpg",
    images: ["images/products/hifog-spud4-port-1.jpg", "images/products/hifog-spud4-port-2.jpg", "images/products/hifog-spud4-port-3.jpg", "images/products/hifog-spud4-port-4.jpg"]
  },
  {
    id: "p2002",
    name: "HI-FOG Marioff SPUD4/STB Fire Pump Skid (Starboard)",
    category: "safety",
    condition: "used",
    featured: true,
    desc: "Sister unit to our SPUD4 port-side skid, same diesel-driven HI-FOG water mist fire pump arrangement on a red steel base frame. Sold as seen, untested.",
    specs: ["Manufacturer: Marioff (HI-FOG)", "Type: SPUD4/STB", "Mfg. no: 601179", "Max working / test pressure: 140 / 210 bar", "Electric power: 24V DC", "Dry weight: 2,000 kg"],
    image: "images/products/hifog-spud4-stb-1.jpg",
    images: ["images/products/hifog-spud4-stb-1.jpg", "images/products/hifog-spud4-stb-2.jpg", "images/products/hifog-spud4-stb-3.jpg", "images/products/hifog-spud4-stb-4.jpg"]
  },
  {
    id: "p2003",
    name: "Hydraulic Power Unit, Motor & Pump (STBD, Yellow Circuit)",
    category: "valve",
    condition: "used",
    featured: false,
    desc: "Complete hydraulic power unit with electric motor, pump and local control box, tagged for the starboard (yellow) circuit. Removed from service, sold as seen.",
    specs: ["Supply: 440V", "Control box: local start/stop", "Circuit tag: STBD Yellow", "Sold as seen, untested"],
    image: "images/products/hpu-stbd-yellow-1.jpg",
    images: ["images/products/hpu-stbd-yellow-1.jpg"]
  },
  {
    id: "p2004",
    name: "Hydraulic Power Unit, Motor & Pump (Port, Green Circuit)",
    category: "valve",
    condition: "used",
    featured: false,
    desc: "Complete hydraulic power unit with electric motor, pump and local control box, tagged for the port (green) circuit. Removed from service, sold as seen.",
    specs: ["Supply: 440V", "Control box: local start/stop", "Circuit tag: Port Green", "Sold as seen, untested"],
    image: "images/products/hpu-port-green-1.jpg",
    images: ["images/products/hpu-port-green-1.jpg"]
  },
  {
    id: "p2005",
    name: "Lister 3-Cylinder Marine Diesel Engine",
    category: "engine",
    condition: "used",
    featured: true,
    desc: "Lister 3-cylinder marine diesel engine, removed from a vessel during re-engining. Good for spares or rebuild, sold as seen.",
    specs: ["Manufacturer: Lister", "Cylinders: 3", "Cooling: Raw water, twin gauge panel", "Sold as seen, untested"],
    image: "images/products/lister-diesel-engine-1.jpg",
    images: ["images/products/lister-diesel-engine-1.jpg"]
  },
  {
    id: "p2006",
    name: "Offshore Crane Boom Section (Lattice Jib)",
    category: "deck",
    condition: "used",
    featured: false,
    desc: "Lattice-type boom section from an offshore crane jib, painted steel construction with pin connections at each end. Sold as seen.",
    specs: ["Type: Lattice jib section", "Construction: Painted steel", "Connections: Pinned end fittings", "Sold as seen, buyer to arrange transport"],
    image: "images/products/crane-boom-section-1.jpg",
    images: ["images/products/crane-boom-section-1.jpg", "images/products/crane-boom-section-2.jpg"]
  },
  {
    id: "p2007",
    name: "HB Hydraulic Engineering Control Panel Set (6x)",
    category: "electric",
    condition: "used",
    featured: true,
    desc: "Set of six HB Hydraulic Engineering local control panels with joystick command signal gauge, power/heater switches and oil filter and low oil level indicators. Sold as a set.",
    specs: ["Manufacturer: HB Hydraulic Engineering Ltd, Portsmouth UK", "Function: Joystick command signal / heater control", "Voltage: 400V danger label", "Quantity: 6 panels"],
    image: "images/products/hb-hydraulic-panels-1.jpg",
    images: ["images/products/hb-hydraulic-panels-1.jpg"]
  },
  {
    id: "p2008",
    name: "Marine Fire / Ballast Pump Unit, Vertical",
    category: "valve",
    condition: "used",
    featured: false,
    desc: "Vertical motor-driven fire or ballast pump unit, dome-top casing with dual pressure gauges. Removed from a platform for decommissioning, sold as seen.",
    specs: ["Type: Vertical centrifugal pump", "Drive: Direct-coupled electric motor", "Gauges: Dual pressure gauge", "Sold as seen, untested"],
    image: "images/products/fire-ballast-pump-1.jpg",
    images: ["images/products/fire-ballast-pump-1.jpg"]
  },
  {
    id: "p2009",
    name: "Twin Vertical Motor-Driven Pump Set",
    category: "valve",
    condition: "used",
    featured: false,
    desc: "Pair of matching vertical motor-driven pump units on a shared steel platform. Removed from service, sold as seen, priced per pair or individually.",
    specs: ["Configuration: Twin vertical units", "Drive: Direct-coupled electric motor", "Frame: Shared steel platform", "Sold as seen, untested"],
    image: "images/products/twin-vertical-pump-set-1.jpg",
    images: ["images/products/twin-vertical-pump-set-1.jpg"]
  },
  {
    id: "p2010",
    name: "Allweiler Pumpen Vertical Inline Pump",
    category: "valve",
    condition: "used",
    featured: true,
    desc: "Allweiler Pumpen vertical inline centrifugal pump with direct-coupled electric motor on a raised steel frame. Sold as seen.",
    specs: ["Manufacturer: Allweiler Pumpen", "Type: Vertical inline centrifugal", "Frame: Raised steel stand", "Sold as seen, untested"],
    image: "images/products/allweiler-pumpen-1.jpg",
    images: ["images/products/allweiler-pumpen-1.jpg"]
  },
  {
    id: "p2011",
    name: "Bosch Rexroth Axial Piston Pump AA11VLO260",
    category: "valve",
    condition: "used",
    featured: true,
    desc: "Bosch Rexroth variable axial piston hydraulic pump, factory packaged. Ideal spare for large hydraulic power units.",
    specs: ["Manufacturer: Bosch Rexroth", "Type: AA11VLO260LRDH2/11L", "Model no: R902064039", "Displacement: Vg = 260 cm³", "Max speed: n = 2,100 min⁻¹", "Max pressure: 400 bar"],
    image: "images/products/rexroth-piston-pump-1.jpg",
    images: ["images/products/rexroth-piston-pump-1.jpg", "images/products/rexroth-piston-pump-2.jpg"]
  },
  {
    id: "p2012",
    name: "ABB CI801 Profibus Remote I/O Module",
    category: "electric",
    condition: "used",
    featured: false,
    desc: "ABB CI801 Profibus communication interface module, ATEX-rated for hazardous areas. Removed from a control system upgrade, sold as seen.",
    specs: ["Manufacturer: ABB, Vasteras Sweden", "Part no: 3BSE022366R1", "Type: CI801 Profibus interface", "Rating: Ex nA IIC T5 Gc, ATEX 4370X"],
    image: "images/products/abb-ci801-module-1.jpg",
    images: ["images/products/abb-ci801-module-1.jpg", "images/products/abb-ci801-module-2.jpg"]
  },
  {
    id: "p2013",
    name: "Woodward Master Synchronizer and Load Control Unit",
    category: "electric",
    condition: "used",
    featured: true,
    desc: "Woodward Master Synchronizer and Load Control unit for generator paralleling and load sharing. Removed from an engine room panel during upgrade, sold as seen.",
    specs: ["Manufacturer: Woodward Governor Company", "Function: Master synchronizer and load control", "Part no: 9905-713 Rev E", "Supply: 18-40 VDC, 18 watts"],
    image: "images/products/woodward-sync-load-1.jpg",
    images: ["images/products/woodward-sync-load-1.jpg", "images/products/woodward-sync-load-2.jpg"]
  },
  {
    id: "p2014",
    name: "ARO / Ingersoll Rand Diaphragm Pump",
    category: "valve",
    condition: "used",
    featured: false,
    desc: "ARO (Ingersoll Rand) air-operated diaphragm pump, compact frame, still boxed. Sold as seen.",
    specs: ["Manufacturer: ARO / Ingersoll Rand", "Max working pressure: 120 psig / 8.3 bar", "Type: Air-operated diaphragm pump", "Condition: Boxed, unused/lightly used"],
    image: "images/products/aro-diaphragm-pump-1.jpg",
    images: ["images/products/aro-diaphragm-pump-1.jpg"]
  },
  {
    id: "p2015",
    name: "Grundfos CR Vertical Multistage Pump Set",
    category: "valve",
    condition: "used",
    featured: true,
    desc: "Set of Grundfos CR stainless steel vertical multistage pumps, matching units removed during a system upgrade. Priced per unit or as a set.",
    specs: ["Manufacturer: Grundfos", "Type: CRN10-02 B-P-G-E-HQQE", "Power: 1.50 kW, 440V", "Flow / head: 10 m³/h at 20.2m", "Quantity available: 6 units"],
    image: "images/products/grundfos-cr-pump-set-1.jpg",
    images: ["images/products/grundfos-cr-pump-set-1.jpg", "images/products/grundfos-cr-pump-set-2.jpg", "images/products/grundfos-cr-pump-set-3.jpg"]
  },
  {
    id: "p2016",
    name: "Hydraulic Motor & Thruster Spares Lot",
    category: "deck",
    condition: "used",
    featured: false,
    desc: "Warehouse lot of assorted hydraulic motors, thruster spares and gearbox components, factory-wrapped and shelved. Sold individually or as a lot, ask for the full inventory list.",
    specs: ["Contents: Hydraulic motors, thruster spares, gear sets", "Storage: Factory-wrapped, racked indoors", "Brands: Mixed (Akerkvaerner and others)", "Sold individually or as a lot"],
    image: "images/products/hydraulic-motor-lot-1.jpg",
    images: ["images/products/hydraulic-motor-lot-1.jpg"]
  },
  {
    id: "p2017",
    name: "Wärtsilä ESM-10 Engine Safety Module",
    category: "electric",
    condition: "used",
    featured: false,
    desc: "Wärtsilä ESM-10 engine safety and shutdown module, handles overspeed, temperature and pressure shutdown functions. Removed from an engine control system, sold as seen.",
    specs: ["Manufacturer: Wartsila", "Type: ESM-10 engine safety module", "Functions: Overspeed / HT / LO pressure shutdown, speed switch", "Speed switch settings: 820 rpm / 350 rpm"],
    image: "images/products/wartsila-esm10-1.jpg",
    images: ["images/products/wartsila-esm10-1.jpg"]
  },
  {
    id: "p2018",
    name: "VEM Industrial Electric Motor",
    category: "engine",
    condition: "used",
    featured: false,
    desc: "VEM Motors (Germany) industrial electric motor, removed from a pump drive. Sold as seen, nameplate details below.",
    specs: ["Manufacturer: VEM Motors GmbH, Wernigerode", "Type: K1IR 315 S4-LL", "Power: 55 kW, 440V, 1,780 rpm", "Protection: IP55, insulation class F", "Weight: 740 kg"],
    image: "images/products/vem-electric-motor-1.jpg",
    images: ["images/products/vem-electric-motor-1.jpg"]
  },
  {
    id: "p2019",
    name: "Marine Diesel Generator Set",
    category: "engine",
    condition: "used",
    featured: true,
    desc: "Compact marine diesel generator set with twin instrument gauges, removed from service. Good for spares or rebuild, sold as seen.",
    specs: ["Type: Marine diesel generator set", "Instrumentation: Twin gauge panel", "Cooling: Engine-mounted radiator", "Sold as seen, untested"],
    image: "images/products/diesel-genset-mint-1.jpg",
    images: ["images/products/diesel-genset-mint-1.jpg", "images/products/diesel-genset-mint-2.jpg"]
  },
  {
    id: "p2020",
    name: "Westfalia Separator OSB35 Purifier",
    category: "engine",
    condition: "used",
    featured: false,
    desc: "Westfalia Separator fuel or lube oil purifier, built 1997. Sold as seen, nameplate details below.",
    specs: ["Manufacturer: Westfalia Separator AG", "Type: OSB35-0136-066", "Built: 1997", "Bowl speed: 6,540 rpm"],
    image: "images/products/westfalia-separator-1.jpg",
    images: ["images/products/westfalia-separator-1.jpg"]
  },
  {
    id: "p2021",
    name: "Planetary Gearbox / Slew Drive Assortment",
    category: "deck",
    condition: "used",
    featured: false,
    desc: "Assortment of planetary reduction gearboxes and slew drive units in various sizes, used on cranes and winches. Sold individually, ask for the full list with part numbers.",
    specs: ["Type: Planetary reduction / slew drive gearboxes", "Application: Crane, winch and thruster drives", "Condition: Removed, various sizes", "Sold individually, part numbers on request"],
    image: "images/products/planetary-gearbox-lot-1.jpg",
    images: ["images/products/planetary-gearbox-lot-1.jpg"]
  },
  {
    id: "p2022",
    name: "MAN Diesel & Turbo DAU-11 Control Module",
    category: "electric",
    condition: "used",
    featured: false,
    desc: "MAN Diesel & Turbo DAU-11 electronic control module, removed from a main engine control system. Sold as seen.",
    specs: ["Manufacturer: MAN Diesel & Turbo", "Type: DAU-11 control module", "Application: Main engine control system", "Sold as seen, untested"],
    image: "images/products/man-dau11-module-1.jpg",
    images: ["images/products/man-dau11-module-1.jpg"]
  },
  {
    id: "p2023",
    name: "Binder / Kendrion Explosion-Proof Geared Motor",
    category: "engine",
    condition: "used",
    featured: false,
    desc: "Binder geared motor with Kendrion explosion-proof brake, EEx de IIC T5 rated for hazardous areas. Sold as seen.",
    specs: ["Manufacturer: Binder (motor), Kendrion (brake)", "Rating: EEx de IIC T5", "Supply: 3~ 380V", "Sold as seen, untested"],
    image: "images/products/binder-kendrion-motor-1.jpg",
    images: ["images/products/binder-kendrion-motor-1.jpg"]
  },
  {
    id: "p2024",
    name: "MAN B&W Holeby L27/38 Bearing Surveillance Module",
    category: "electric",
    condition: "used",
    featured: false,
    desc: "MAN B&W Holeby Diesel L27/38 bearing surveillance circuit module, removed from an auxiliary engine monitoring panel. Sold as seen.",
    specs: ["Manufacturer: MAN B&W Holeby Diesel", "Application: L27/38 bearing surveillance", "Type: Plug-in circuit module", "Sold as seen, untested"],
    image: "images/products/man-bw-surveillance-1.jpg",
    images: ["images/products/man-bw-surveillance-1.jpg"]
  },
  {
    id: "p2025",
    name: "Hydraulic Motor, Splined Shaft",
    category: "deck",
    condition: "used",
    featured: false,
    desc: "Compact hydraulic motor with splined output shaft, removed from a deck machinery drive. Sold as seen.",
    specs: ["Type: Hydraulic motor", "Output: Splined shaft", "Condition: Removed, untested", "Sold as seen"],
    image: "images/products/hydraulic-motor-splined-1.jpg",
    images: ["images/products/hydraulic-motor-splined-1.jpg"]
  },
  {
    id: "p2026",
    name: "David Brown Hydraulic Motors & Slew Drives Lot",
    category: "deck",
    condition: "used",
    featured: false,
    desc: "Warehouse lot of David Brown and other hydraulic motors and slew drives, factory-wrapped on pallets. Sold individually or as a lot, ask for the full inventory list.",
    specs: ["Brands: David Brown and others", "Contents: Hydraulic motors, slew drives", "Storage: Factory-wrapped, palletised", "Sold individually or as a lot"],
    image: "images/products/davidbrown-motor-lot-1.jpg",
    images: ["images/products/davidbrown-motor-lot-1.jpg"]
  },
  {
    id: "p2027",
    name: "Hydraulic Gearmotor Unit, Reverse Rotation",
    category: "deck",
    condition: "used",
    featured: false,
    desc: "Hydraulic gearmotor unit with reverse rotation tag, removed from a deck machinery drive. Sold as seen.",
    specs: ["Type: Hydraulic gearmotor", "Rotation: Reverse rotation tagged", "Condition: Removed, untested", "Sold as seen"],
    image: "images/products/hydraulic-gearmotor-1.jpg",
    images: ["images/products/hydraulic-gearmotor-1.jpg"]
  },
  {
    id: "p2028",
    name: "Rosemount 3051 Pressure Transmitter",
    category: "electric",
    condition: "used",
    featured: false,
    desc: "Rosemount 3051 series pressure transmitter, removed from an instrumentation upgrade. Sold as seen.",
    specs: ["Manufacturer: Rosemount", "Model: 3051CD4A02A1AB2M5", "Type: Differential pressure transmitter", "Sold as seen, untested"],
    image: "images/products/rosemount-transmitter-1.jpg",
    images: ["images/products/rosemount-transmitter-1.jpg", "images/products/rosemount-transmitter-2.jpg"]
  },
  {
    id: "p2029",
    name: "Woodward 723 PLUS Digital Control Unit",
    category: "electric",
    condition: "used",
    featured: false,
    desc: "Woodward 723 PLUS digital governor control unit, removed from an engine control panel during upgrade. Sold as seen.",
    specs: ["Manufacturer: Woodward Governor Company", "Type: 723 PLUS Digital Control", "Application: Engine / turbine governing", "Sold as seen, untested"],
    image: "images/products/woodward-723plus-1.jpg",
    images: ["images/products/woodward-723plus-1.jpg"]
  },
  {
    id: "p2030",
    name: "Maritime Hydraulics Racking Arm Slew Drive",
    category: "deck",
    condition: "used",
    featured: false,
    desc: "Maritime Hydraulics slew drive gearbox for a racking arm assembly, tagged with manufacturer part number. Sold as seen.",
    specs: ["Manufacturer: Maritime Hydraulics", "Application: Racking arm slew drive", "Part no: BA0054091", "Sold as seen, untested"],
    image: "images/products/maritime-hyd-slewdrive-1.jpg",
    images: ["images/products/maritime-hyd-slewdrive-1.jpg"]
  },
  {
    id: "p2031",
    name: "David Brown Benzlers Gearbox",
    category: "deck",
    condition: "used",
    featured: false,
    desc: "David Brown Benzlers reduction gearbox, removed from a deck machinery drive. Sold as seen, nameplate details below.",
    specs: ["Manufacturer: David Brown Benzlers", "Type: Reduction gearbox", "Condition: Removed, untested", "Sold as seen"],
    image: "images/products/davidbrown-benzlers-gb-1.jpg",
    images: ["images/products/davidbrown-benzlers-gb-1.jpg"]
  },
  {
    id: "p2032",
    name: "Woodward 721 Digital Control Unit",
    category: "electric",
    condition: "used",
    featured: false,
    desc: "Woodward 721 digital governor control unit, removed from an engine control panel during upgrade. Sold as seen.",
    specs: ["Manufacturer: Woodward Governor Company", "Type: 721 Digital Control", "Application: Engine / turbine governing", "Sold as seen, untested"],
    image: "images/products/woodward-721-unit-1.jpg",
    images: ["images/products/woodward-721-unit-1.jpg", "images/products/woodward-721-unit-2.jpg"]
  }
];

/* ==========================================================================
   Translations for product descriptions & specs (Turkish / Dutch).
   Product names and part numbers are kept as-is across languages, matching
   standard practice for industrial equipment listings. English is the
   fallback whenever a translation is missing (e.g. admin-added listings).
   ========================================================================== */
window.PRODUCTS_I18N = {
  p2001: {
    nl: { desc: "Dieselaangedreven HI-FOG watermist brandbluspompunit op een stalen basisframe, compleet met radiateur, bedieningskast en slanghaspel. Gedemonteerd van een uit dienst genomen unit, verkocht zoals gezien.",
      specs: ["Fabrikant: Marioff (HI-FOG)", "Type: SPUD4", "Fabricagenr.: 601178", "Max. bedrijfs-/testdruk: 140 / 210 bar", "Elektrisch vermogen: 24V DC", "Drooggewicht: 2.000 kg"] },
    fr: { desc: "Groupe motopompe incendie à brouillard d'eau HI-FOG entraîné au diesel, monté sur châssis en acier, avec radiateur, coffret de commande et dévidoir. Déposé d'une unité mise hors service, vendu en l'état.",
      specs: ["Fabricant : Marioff (HI-FOG)", "Type : SPUD4", "N° de fabrication : 601178", "Pression de service / d'essai max. : 140 / 210 bar", "Puissance électrique : 24V CC", "Poids à sec : 2 000 kg"] },
    de: { desc: "Dieselbetriebenes HI-FOG-Wassernebel-Feuerlöschpumpenaggregat auf Stahlgrundrahmen, komplett mit Kühler, Schaltkasten und Schlauchhaspel. Von einer außer Dienst gestellten Einheit ausgebaut, verkauft wie besichtigt.",
      specs: ["Hersteller: Marioff (HI-FOG)", "Typ: SPUD4", "Fabriknr.: 601178", "Max. Betriebs-/Prüfdruck: 140 / 210 bar", "Elektrische Leistung: 24V DC", "Trockengewicht: 2.000 kg"] }
  },
  p2002: {
    nl: { desc: "Zusterunit van onze SPUD4 bakboord-unit, dezelfde dieselaangedreven HI-FOG watermist brandbluspompopstelling op een rood stalen basisframe. Verkocht zoals gezien, niet getest.",
      specs: ["Fabrikant: Marioff (HI-FOG)", "Type: SPUD4/STB", "Fabricagenr.: 601179", "Max. bedrijfs-/testdruk: 140 / 210 bar", "Elektrisch vermogen: 24V DC", "Drooggewicht: 2.000 kg"] },
    fr: { desc: "Unité jumelle de notre groupe SPUD4 bâbord, même installation motopompe incendie à brouillard d'eau HI-FOG entraînée au diesel, sur châssis en acier rouge. Vendu en l'état, non testé.",
      specs: ["Fabricant : Marioff (HI-FOG)", "Type : SPUD4/STB", "N° de fabrication : 601179", "Pression de service / d'essai max. : 140 / 210 bar", "Puissance électrique : 24V CC", "Poids à sec : 2 000 kg"] },
    de: { desc: "Schwestereinheit unseres SPUD4-Backbord-Aggregats, dieselbe dieselbetriebene HI-FOG-Wassernebel-Feuerlöschpumpenanordnung auf rotem Stahlgrundrahmen. Verkauft wie besichtigt, nicht geprüft.",
      specs: ["Hersteller: Marioff (HI-FOG)", "Typ: SPUD4/STB", "Fabriknr.: 601179", "Max. Betriebs-/Prüfdruck: 140 / 210 bar", "Elektrische Leistung: 24V DC", "Trockengewicht: 2.000 kg"] }
  },
  p2003: {
    nl: { desc: "Complete hydraulische aandrijfunit met elektromotor, pomp en lokale bedieningskast, gelabeld voor het stuurboord- (gele) circuit. Uit dienst genomen, verkocht zoals gezien.",
      specs: ["Voeding: 440V", "Bedieningskast: lokaal start/stop", "Circuitlabel: Stuurboord Geel", "Verkocht zoals gezien, niet getest"] },
    fr: { desc: "Groupe hydraulique complet avec moteur électrique, pompe et coffret de commande local, étiqueté pour le circuit tribord (jaune). Mis hors service, vendu en l'état.",
      specs: ["Alimentation : 440V", "Coffret de commande : marche/arrêt local", "Étiquette de circuit : Tribord Jaune", "Vendu en l'état, non testé"] },
    de: { desc: "Komplettes Hydraulikaggregat mit Elektromotor, Pumpe und lokalem Schaltkasten, gekennzeichnet für den Steuerbord- (gelben) Kreislauf. Außer Dienst gestellt, verkauft wie besichtigt.",
      specs: ["Versorgung: 440V", "Schaltkasten: lokaler Start/Stopp", "Kreislaufkennzeichnung: Steuerbord Gelb", "Verkauft wie besichtigt, nicht geprüft"] }
  },
  p2004: {
    nl: { desc: "Complete hydraulische aandrijfunit met elektromotor, pomp en lokale bedieningskast, gelabeld voor het bakboord- (groene) circuit. Uit dienst genomen, verkocht zoals gezien.",
      specs: ["Voeding: 440V", "Bedieningskast: lokaal start/stop", "Circuitlabel: Bakboord Groen", "Verkocht zoals gezien, niet getest"] },
    fr: { desc: "Groupe hydraulique complet avec moteur électrique, pompe et coffret de commande local, étiqueté pour le circuit bâbord (vert). Mis hors service, vendu en l'état.",
      specs: ["Alimentation : 440V", "Coffret de commande : marche/arrêt local", "Étiquette de circuit : Bâbord Vert", "Vendu en l'état, non testé"] },
    de: { desc: "Komplettes Hydraulikaggregat mit Elektromotor, Pumpe und lokalem Schaltkasten, gekennzeichnet für den Backbord- (grünen) Kreislauf. Außer Dienst gestellt, verkauft wie besichtigt.",
      specs: ["Versorgung: 440V", "Schaltkasten: lokaler Start/Stopp", "Kreislaufkennzeichnung: Backbord Grün", "Verkauft wie besichtigt, nicht geprüft"] }
  },
  p2005: {
    nl: { desc: "Lister 3-cilinder scheepsdieselmotor, gedemonteerd van een schip tijdens een motorwissel. Geschikt voor onderdelen of revisie, verkocht zoals gezien.",
      specs: ["Fabrikant: Lister", "Cilinders: 3", "Koeling: Ruw water, dubbel meterpaneel", "Verkocht zoals gezien, niet getest"] },
    fr: { desc: "Moteur diesel marin Lister 3 cylindres, déposé d'un navire lors d'un remplacement moteur. Convient pour pièces détachées ou révision, vendu en l'état.",
      specs: ["Fabricant : Lister", "Cylindres : 3", "Refroidissement : eau de mer, tableau à double manomètre", "Vendu en l'état, non testé"] },
    de: { desc: "Lister 3-Zylinder-Schiffsdieselmotor, bei einem Motorwechsel von einem Schiff ausgebaut. Geeignet für Ersatzteile oder Überholung, verkauft wie besichtigt.",
      specs: ["Hersteller: Lister", "Zylinder: 3", "Kühlung: Seewasser, Doppelanzeigetafel", "Verkauft wie besichtigt, nicht geprüft"] }
  },
  p2006: {
    nl: { desc: "Vakwerk giekgedeelte van een offshore-kraanarm, geverfde stalen constructie met pinverbindingen aan beide uiteinden. Verkocht zoals gezien.",
      specs: ["Type: Vakwerk giekgedeelte", "Constructie: Geverfd staal", "Verbindingen: Gepende eindstukken", "Verkocht zoals gezien, koper regelt transport"] },
    fr: { desc: "Section de flèche en treillis provenant du bras d'une grue offshore, structure en acier peint avec liaisons à broches aux deux extrémités. Vendu en l'état.",
      specs: ["Type : section de flèche en treillis", "Structure : acier peint", "Liaisons : embouts à broches", "Vendu en l'état, transport à la charge de l'acheteur"] },
    de: { desc: "Gitterausleger-Sektion eines Offshore-Kranauslegers, lackierte Stahlkonstruktion mit Bolzenverbindungen an beiden Enden. Verkauft wie besichtigt.",
      specs: ["Typ: Gitterausleger-Sektion", "Konstruktion: lackierter Stahl", "Verbindungen: gebolzte Endstücke", "Verkauft wie besichtigt, Transport durch Käufer"] }
  },
  p2007: {
    nl: { desc: "Set van zes HB Hydraulic Engineering lokale bedieningspanelen met joystick-commandosignaalmeter, vermogen-/verwarmingsschakelaars en oliefilter- en laag-oliepeilindicatoren. Verkocht als set.",
      specs: ["Fabrikant: HB Hydraulic Engineering Ltd, Portsmouth VK", "Functie: Joystick-commandosignaal / verwarmingsregeling", "Spanning: 400V gevarenlabel", "Aantal: 6 panelen"] },
    fr: { desc: "Lot de six panneaux de commande locaux HB Hydraulic Engineering avec indicateur de signal de commande joystick, interrupteurs puissance/réchauffeur et voyants de filtre à huile et de niveau d'huile bas. Vendu en lot.",
      specs: ["Fabricant : HB Hydraulic Engineering Ltd, Portsmouth Royaume-Uni", "Fonction : signal de commande joystick / régulation du réchauffeur", "Tension : étiquette de danger 400V", "Quantité : 6 panneaux"] },
    de: { desc: "Satz von sechs HB Hydraulic Engineering Vor-Ort-Bedienfeldern mit Joystick-Befehlssignalanzeige, Leistungs-/Heizungsschaltern sowie Ölfilter- und Niedrigölstandanzeigen. Als Satz verkauft.",
      specs: ["Hersteller: HB Hydraulic Engineering Ltd, Portsmouth UK", "Funktion: Joystick-Befehlssignal / Heizungssteuerung", "Spannung: 400V Gefahrenkennzeichnung", "Anzahl: 6 Bedienfelder"] }
  },
  p2008: {
    nl: { desc: "Verticale motoraangedreven brand- of ballastpompunit, koepelvormige behuizing met dubbele drukmeters. Gedemonteerd van een platform bij ontmanteling, verkocht zoals gezien.",
      specs: ["Type: Verticale centrifugaalpomp", "Aandrijving: Direct gekoppelde elektromotor", "Meters: Dubbele drukmeter", "Verkocht zoals gezien, niet getest"] },
    fr: { desc: "Groupe motopompe incendie ou de ballast vertical à entraînement moteur, carter en forme de dôme avec double manomètre. Déposé d'une plateforme lors d'un démantèlement, vendu en l'état.",
      specs: ["Type : pompe centrifuge verticale", "Entraînement : moteur électrique à couplage direct", "Manomètres : double manomètre", "Vendu en l'état, non testé"] },
    de: { desc: "Vertikales motorgetriebenes Feuerlösch- oder Ballastpumpenaggregat, kuppelförmiges Gehäuse mit doppelten Druckmessern. Bei einer Plattformstilllegung ausgebaut, verkauft wie besichtigt.",
      specs: ["Typ: vertikale Kreiselpumpe", "Antrieb: direkt gekoppelter Elektromotor", "Anzeigen: doppeltes Manometer", "Verkauft wie besichtigt, nicht geprüft"] }
  },
  p2009: {
    nl: { desc: "Paar bijeenhorende verticale motoraangedreven pompunits op een gedeeld stalen platform. Uit dienst genomen, verkocht zoals gezien, geprijsd per paar of afzonderlijk.",
      specs: ["Configuratie: Twee verticale units", "Aandrijving: Direct gekoppelde elektromotor", "Frame: Gedeeld stalen platform", "Verkocht zoals gezien, niet getest"] },
    fr: { desc: "Paire de groupes motopompes verticaux assortis sur une plateforme en acier commune. Mis hors service, vendu en l'état, prix à la paire ou à l'unité.",
      specs: ["Configuration : deux unités verticales", "Entraînement : moteur électrique à couplage direct", "Châssis : plateforme en acier commune", "Vendu en l'état, non testé"] },
    de: { desc: "Zusammengehöriges Paar vertikaler motorgetriebener Pumpenaggregate auf gemeinsamer Stahlplattform. Außer Dienst gestellt, verkauft wie besichtigt, Preis pro Paar oder einzeln.",
      specs: ["Konfiguration: zwei vertikale Einheiten", "Antrieb: direkt gekoppelter Elektromotor", "Rahmen: gemeinsame Stahlplattform", "Verkauft wie besichtigt, nicht geprüft"] }
  },
  p2010: {
    nl: { desc: "Allweiler Pumpen verticale inline centrifugaalpomp met direct gekoppelde elektromotor op een verhoogd stalen frame. Verkocht zoals gezien.",
      specs: ["Fabrikant: Allweiler Pumpen", "Type: Verticaal inline centrifugaal", "Frame: Verhoogd stalen onderstel", "Verkocht zoals gezien, niet getest"] },
    fr: { desc: "Pompe centrifuge verticale en ligne Allweiler Pumpen avec moteur électrique à couplage direct sur châssis en acier surélevé. Vendu en l'état.",
      specs: ["Fabricant : Allweiler Pumpen", "Type : centrifuge en ligne vertical", "Châssis : support en acier surélevé", "Vendu en l'état, non testé"] },
    de: { desc: "Allweiler Pumpen vertikale Inline-Kreiselpumpe mit direkt gekoppeltem Elektromotor auf erhöhtem Stahlrahmen. Verkauft wie besichtigt.",
      specs: ["Hersteller: Allweiler Pumpen", "Typ: vertikal, inline, Kreiselpumpe", "Rahmen: erhöhtes Stahlgestell", "Verkauft wie besichtigt, nicht geprüft"] }
  },
  p2011: {
    nl: { desc: "Bosch Rexroth variabele axiale plunjerpomp, fabrieksverpakt. Ideaal reserveonderdeel voor grote hydraulische aandrijfunits.",
      specs: ["Fabrikant: Bosch Rexroth", "Type: AA11VLO260LRDH2/11L", "Modelnr.: R902064039", "Verplaatsing: Vg = 260 cm³", "Max. toerental: n = 2.100 min⁻¹", "Max. druk: 400 bar"] },
    fr: { desc: "Pompe à pistons axiaux à cylindrée variable Bosch Rexroth, encore sous emballage d'origine. Pièce de rechange idéale pour les grands groupes hydrauliques.",
      specs: ["Fabricant : Bosch Rexroth", "Type : AA11VLO260LRDH2/11L", "N° de modèle : R902064039", "Cylindrée : Vg = 260 cm³", "Vitesse max. : n = 2 100 tr/min", "Pression max. : 400 bar"] },
    de: { desc: "Bosch Rexroth Axialkolben-Verstellpumpe, werksverpackt. Ideales Ersatzteil für große Hydraulikaggregate.",
      specs: ["Hersteller: Bosch Rexroth", "Typ: AA11VLO260LRDH2/11L", "Modellnr.: R902064039", "Fördervolumen: Vg = 260 cm³", "Max. Drehzahl: n = 2.100 min⁻¹", "Max. Druck: 400 bar"] }
  },
  p2012: {
    nl: { desc: "ABB CI801 Profibus-communicatie-interfacemodule, ATEX-gecertificeerd voor gevaarlijke zones. Gedemonteerd bij een upgrade van een besturingssysteem, verkocht zoals gezien.",
      specs: ["Fabrikant: ABB, Västerås Zweden", "Onderdeelnr.: 3BSE022366R1", "Type: CI801 Profibus-interface", "Classificatie: Ex nA IIC T5 Gc, ATEX 4370X"] },
    fr: { desc: "Module d'interface de communication Profibus ABB CI801, certifié ATEX pour zones dangereuses. Déposé lors d'une mise à niveau d'un système de contrôle, vendu en l'état.",
      specs: ["Fabricant : ABB, Västerås Suède", "N° de pièce : 3BSE022366R1", "Type : interface Profibus CI801", "Certification : Ex nA IIC T5 Gc, ATEX 4370X"] },
    de: { desc: "ABB CI801 Profibus-Kommunikationsschnittstellenmodul, ATEX-zertifiziert für explosionsgefährdete Bereiche. Bei einem Steuerungssystem-Upgrade ausgebaut, verkauft wie besichtigt.",
      specs: ["Hersteller: ABB, Västerås Schweden", "Teilenr.: 3BSE022366R1", "Typ: CI801 Profibus-Schnittstelle", "Zertifizierung: Ex nA IIC T5 Gc, ATEX 4370X"] }
  },
  p2013: {
    nl: { desc: "Woodward Master Synchronizer en Load Control-unit voor het parallelschakelen en de lastverdeling van generatoren. Gedemonteerd van een machinekamerpaneel tijdens een upgrade, verkocht zoals gezien.",
      specs: ["Fabrikant: Woodward Governor Company", "Functie: Master synchronizer en lastregeling", "Onderdeelnr.: 9905-713 Rev E", "Voeding: 18-40 VDC, 18 watt"] },
    fr: { desc: "Unité Woodward Master Synchronizer et Load Control pour le couplage en parallèle et la répartition de charge des générateurs. Déposée d'un tableau de salle des machines lors d'une mise à niveau, vendue en l'état.",
      specs: ["Fabricant : Woodward Governor Company", "Fonction : synchronisation maître et répartition de charge", "N° de pièce : 9905-713 Rev E", "Alimentation : 18-40 VCC, 18 watts"] },
    de: { desc: "Woodward Master Synchronizer- und Load-Control-Einheit für die Parallelschaltung und Lastverteilung von Generatoren. Bei einem Upgrade von einer Maschinenraumtafel ausgebaut, verkauft wie besichtigt.",
      specs: ["Hersteller: Woodward Governor Company", "Funktion: Master-Synchronisierung und Lastregelung", "Teilenr.: 9905-713 Rev E", "Versorgung: 18-40 VDC, 18 Watt"] }
  },
  p2014: {
    nl: { desc: "ARO (Ingersoll Rand) pneumatisch bediende membraanpomp, compact frame, nog in doos. Verkocht zoals gezien.",
      specs: ["Fabrikant: ARO / Ingersoll Rand", "Max. bedrijfsdruk: 120 psig / 8,3 bar", "Type: Pneumatisch bediende membraanpomp", "Staat: In doos, ongebruikt/licht gebruikt"] },
    fr: { desc: "Pompe à membrane pneumatique ARO (Ingersoll Rand), châssis compact, encore en boîte. Vendu en l'état.",
      specs: ["Fabricant : ARO / Ingersoll Rand", "Pression de service max. : 120 psig / 8,3 bar", "Type : pompe à membrane pneumatique", "État : en boîte, non utilisé/peu utilisé"] },
    de: { desc: "ARO (Ingersoll Rand) druckluftbetriebene Membranpumpe, kompakter Rahmen, noch originalverpackt. Verkauft wie besichtigt.",
      specs: ["Hersteller: ARO / Ingersoll Rand", "Max. Betriebsdruck: 120 psig / 8,3 bar", "Typ: druckluftbetriebene Membranpumpe", "Zustand: originalverpackt, ungebraucht/wenig benutzt"] }
  },
  p2015: {
    nl: { desc: "Set Grundfos CR roestvrijstalen verticale meertrapspompen, bijeenhorende units gedemonteerd tijdens een systeemupgrade. Geprijsd per stuk of als set.",
      specs: ["Fabrikant: Grundfos", "Type: CRN10-02 B-P-G-E-HQQE", "Vermogen: 1,50 kW, 440V", "Debiet / opvoerhoogte: 10 m³/u bij 20,2m", "Beschikbaar aantal: 6 units"] },
    fr: { desc: "Lot de pompes verticales multicellulaires en inox Grundfos CR, unités assorties déposées lors d'une mise à niveau du système. Prix à l'unité ou en lot.",
      specs: ["Fabricant : Grundfos", "Type : CRN10-02 B-P-G-E-HQQE", "Puissance : 1,50 kW, 440V", "Débit / hauteur : 10 m³/h à 20,2 m", "Quantité disponible : 6 unités"] },
    de: { desc: "Satz Grundfos CR vertikale mehrstufige Edelstahlpumpen, zusammengehörige Einheiten bei einem Systemupgrade ausgebaut. Preis pro Stück oder als Satz.",
      specs: ["Hersteller: Grundfos", "Typ: CRN10-02 B-P-G-E-HQQE", "Leistung: 1,50 kW, 440V", "Durchfluss / Förderhöhe: 10 m³/h bei 20,2m", "Verfügbare Anzahl: 6 Einheiten"] }
  },
  p2016: {
    nl: { desc: "Magazijnpartij van diverse hydraulische motoren, thruster-onderdelen en tandwielkastcomponenten, fabrieksverpakt en op stellingen opgeslagen. Afzonderlijk of als partij te koop, vraag naar de volledige voorraadlijst.",
      specs: ["Inhoud: Hydraulische motoren, thruster-onderdelen, tandwielsets", "Opslag: Fabrieksverpakt, binnen op stellingen", "Merken: Gemengd (Akerkvaerner en anderen)", "Afzonderlijk of als partij te koop"] },
    fr: { desc: "Lot d'entrepôt composé de divers moteurs hydrauliques, pièces de propulseur et composants de boîte de vitesses, sous emballage d'origine et stockés sur étagères. Vendu à l'unité ou en lot, demandez la liste complète des stocks.",
      specs: ["Contenu : moteurs hydrauliques, pièces de propulseur, jeux d'engrenages", "Stockage : emballage d'origine, sur étagères en intérieur", "Marques : mixtes (Akerkvaerner et autres)", "Vendu à l'unité ou en lot"] },
    de: { desc: "Lagerposten aus diversen Hydraulikmotoren, Thruster-Ersatzteilen und Getriebekomponenten, werksverpackt und auf Regalen gelagert. Einzeln oder als Posten verkäuflich, vollständige Bestandsliste auf Anfrage.",
      specs: ["Inhalt: Hydraulikmotoren, Thruster-Ersatzteile, Zahnradsätze", "Lagerung: werksverpackt, im Innenbereich auf Regalen", "Marken: gemischt (Akerkvaerner u. a.)", "Einzeln oder als Posten verkäuflich"] }
  },
  p2017: {
    nl: { desc: "Wärtsilä ESM-10 motorveiligheids- en uitschakelmodule, verzorgt overtoerental-, temperatuur- en drukuitschakelfuncties. Gedemonteerd van een motorbesturingssysteem, verkocht zoals gezien.",
      specs: ["Fabrikant: Wärtsilä", "Type: ESM-10 motorveiligheidsmodule", "Functies: Overtoerental / HT-/LO-drukuitschakeling, toerenschakelaar", "Instellingen toerenschakelaar: 820 tpm / 350 tpm"] },
    fr: { desc: "Module de sécurité et d'arrêt moteur Wärtsilä ESM-10, gère les fonctions d'arrêt sur survitesse, température et pression. Déposé d'un système de contrôle moteur, vendu en l'état.",
      specs: ["Fabricant : Wärtsilä", "Type : module de sécurité moteur ESM-10", "Fonctions : arrêt sur survitesse / pression HT/BP, interrupteur de vitesse", "Réglages interrupteur de vitesse : 820 tr/min / 350 tr/min"] },
    de: { desc: "Wärtsilä ESM-10 Motorsicherheits- und Abschaltmodul, steuert Überdrehzahl-, Temperatur- und Druckabschaltfunktionen. Von einem Motorsteuerungssystem ausgebaut, verkauft wie besichtigt.",
      specs: ["Hersteller: Wärtsilä", "Typ: ESM-10 Motorsicherheitsmodul", "Funktionen: Überdrehzahl / HT-/ND-Druckabschaltung, Drehzahlschalter", "Einstellungen Drehzahlschalter: 820 U/min / 350 U/min"] }
  },
  p2018: {
    nl: { desc: "VEM Motors (Duitsland) industriële elektromotor, gedemonteerd van een pompaandrijving. Verkocht zoals gezien, typeplaatgegevens hieronder.",
      specs: ["Fabrikant: VEM Motors GmbH, Wernigerode", "Type: K1IR 315 S4-LL", "Vermogen: 55 kW, 440V, 1.780 tpm", "Beschermingsklasse: IP55, isolatieklasse F", "Gewicht: 740 kg"] },
    fr: { desc: "Moteur électrique industriel VEM Motors (Allemagne), déposé d'un entraînement de pompe. Vendu en l'état, données de plaque signalétique ci-dessous.",
      specs: ["Fabricant : VEM Motors GmbH, Wernigerode", "Type : K1IR 315 S4-LL", "Puissance : 55 kW, 440V, 1 780 tr/min", "Indice de protection : IP55, classe d'isolation F", "Poids : 740 kg"] },
    de: { desc: "VEM Motors (Deutschland) Industrie-Elektromotor, von einem Pumpenantrieb ausgebaut. Verkauft wie besichtigt, Typenschilddaten unten.",
      specs: ["Hersteller: VEM Motors GmbH, Wernigerode", "Typ: K1IR 315 S4-LL", "Leistung: 55 kW, 440V, 1.780 U/min", "Schutzart: IP55, Isolationsklasse F", "Gewicht: 740 kg"] }
  },
  p2019: {
    nl: { desc: "Compact scheepsdieselgeneratorset met dubbele instrumentmeters, uit dienst genomen. Geschikt voor onderdelen of revisie, verkocht zoals gezien.",
      specs: ["Type: Scheepsdieselgeneratorset", "Instrumentatie: Dubbel meterpaneel", "Koeling: Op de motor gemonteerde radiateur", "Verkocht zoals gezien, niet getest"] },
    fr: { desc: "Groupe électrogène diesel marin compact à double tableau d'instruments, mis hors service. Convient pour pièces détachées ou révision, vendu en l'état.",
      specs: ["Type : groupe électrogène diesel marin", "Instrumentation : double tableau de manomètres", "Refroidissement : radiateur monté sur moteur", "Vendu en l'état, non testé"] },
    de: { desc: "Kompaktes Schiffsdiesel-Generatoraggregat mit doppelter Instrumentenanzeige, außer Dienst gestellt. Geeignet für Ersatzteile oder Überholung, verkauft wie besichtigt.",
      specs: ["Typ: Schiffsdiesel-Generatoraggregat", "Instrumentierung: doppelte Anzeigetafel", "Kühlung: motormontierter Kühler", "Verkauft wie besichtigt, nicht geprüft"] }
  },
  p2020: {
    nl: { desc: "Westfalia Separator brandstof- of smeerolie-zuiveraar, bouwjaar 1997. Verkocht zoals gezien, typeplaatgegevens hieronder.",
      specs: ["Fabrikant: Westfalia Separator AG", "Type: OSB35-0136-066", "Bouwjaar: 1997", "Trommeltoerental: 6.540 tpm"] },
    fr: { desc: "Purificateur de carburant ou d'huile de lubrification Westfalia Separator, année de fabrication 1997. Vendu en l'état, données de plaque signalétique ci-dessous.",
      specs: ["Fabricant : Westfalia Separator AG", "Type : OSB35-0136-066", "Année de fabrication : 1997", "Vitesse du bol : 6 540 tr/min"] },
    de: { desc: "Westfalia Separator Kraftstoff- oder Schmierölreiniger, Baujahr 1997. Verkauft wie besichtigt, Typenschilddaten unten.",
      specs: ["Hersteller: Westfalia Separator AG", "Typ: OSB35-0136-066", "Baujahr: 1997", "Trommeldrehzahl: 6.540 U/min"] }
  },
  p2021: {
    nl: { desc: "Assortiment planetaire reductietandwielkasten en zwenkaandrijvingen in diverse maten, gebruikt op kranen en lieren. Afzonderlijk te koop, vraag naar de volledige lijst met onderdeelnummers.",
      specs: ["Type: Planetaire reductie-/zwenkaandrijftandwielkasten", "Toepassing: Kraan-, lier- en thrusteraandrijvingen", "Staat: Gedemonteerd, diverse maten", "Afzonderlijk te koop, onderdeelnummers op aanvraag"] },
    fr: { desc: "Assortiment de réducteurs planétaires et d'entraînements d'orientation de diverses tailles, utilisés sur grues et treuils. Vendu à l'unité, demandez la liste complète avec numéros de pièce.",
      specs: ["Type : réducteurs planétaires / boîtes d'entraînement d'orientation", "Application : entraînements de grue, treuil et propulseur", "État : déposés, diverses tailles", "Vendu à l'unité, numéros de pièce sur demande"] },
    de: { desc: "Sortiment aus Planetenuntersetzungsgetrieben und Drehantrieben in verschiedenen Größen, eingesetzt an Kränen und Winden. Einzeln verkäuflich, vollständige Liste mit Teilenummern auf Anfrage.",
      specs: ["Typ: Planetenuntersetzungs-/Drehantriebsgetriebe", "Anwendung: Kran-, Winden- und Thrusterantriebe", "Zustand: ausgebaut, verschiedene Größen", "Einzeln verkäuflich, Teilenummern auf Anfrage"] }
  },
  p2022: {
    nl: { desc: "MAN Diesel & Turbo DAU-11 elektronische besturingsmodule, gedemonteerd van een hoofdmotorbesturingssysteem. Verkocht zoals gezien.",
      specs: ["Fabrikant: MAN Diesel & Turbo", "Type: DAU-11 besturingsmodule", "Toepassing: Hoofdmotorbesturingssysteem", "Verkocht zoals gezien, niet getest"] },
    fr: { desc: "Module de commande électronique MAN Diesel & Turbo DAU-11, déposé d'un système de contrôle du moteur principal. Vendu en l'état.",
      specs: ["Fabricant : MAN Diesel & Turbo", "Type : module de commande DAU-11", "Application : système de contrôle du moteur principal", "Vendu en l'état, non testé"] },
    de: { desc: "MAN Diesel & Turbo DAU-11 elektronisches Steuermodul, von einem Hauptmotorsteuerungssystem ausgebaut. Verkauft wie besichtigt.",
      specs: ["Hersteller: MAN Diesel & Turbo", "Typ: DAU-11 Steuermodul", "Anwendung: Hauptmotorsteuerungssystem", "Verkauft wie besichtigt, nicht geprüft"] }
  },
  p2023: {
    nl: { desc: "Binder tandwielmotor met Kendrion explosieveilige rem, EEx de IIC T5 gecertificeerd voor gevaarlijke zones. Verkocht zoals gezien.",
      specs: ["Fabrikant: Binder (motor), Kendrion (rem)", "Classificatie: EEx de IIC T5", "Voeding: 3~ 380V", "Verkocht zoals gezien, niet getest"] },
    fr: { desc: "Motoréducteur Binder avec frein antidéflagrant Kendrion, certifié EEx de IIC T5 pour zones dangereuses. Vendu en l'état.",
      specs: ["Fabricant : Binder (moteur), Kendrion (frein)", "Certification : EEx de IIC T5", "Alimentation : 3~ 380V", "Vendu en l'état, non testé"] },
    de: { desc: "Binder-Getriebemotor mit Kendrion-Explosionsschutzbremse, EEx de IIC T5-zertifiziert für explosionsgefährdete Bereiche. Verkauft wie besichtigt.",
      specs: ["Hersteller: Binder (Motor), Kendrion (Bremse)", "Zertifizierung: EEx de IIC T5", "Versorgung: 3~ 380V", "Verkauft wie besichtigt, nicht geprüft"] }
  },
  p2024: {
    nl: { desc: "MAN B&W Holeby Diesel L27/38 lagerbewakingscircuitmodule, gedemonteerd van een bewakingspaneel voor een hulpmotor. Verkocht zoals gezien.",
      specs: ["Fabrikant: MAN B&W Holeby Diesel", "Toepassing: L27/38 lagerbewaking", "Type: Insteekbare circuitmodule", "Verkocht zoals gezien, niet getest"] },
    fr: { desc: "Module de circuit de surveillance de paliers MAN B&W Holeby Diesel L27/38, déposé d'un tableau de surveillance d'un moteur auxiliaire. Vendu en l'état.",
      specs: ["Fabricant : MAN B&W Holeby Diesel", "Application : surveillance de paliers L27/38", "Type : module de circuit enfichable", "Vendu en l'état, non testé"] },
    de: { desc: "MAN B&W Holeby Diesel L27/38 Lagerüberwachungs-Schaltungsmodul, von einer Überwachungstafel eines Hilfsmotors ausgebaut. Verkauft wie besichtigt.",
      specs: ["Hersteller: MAN B&W Holeby Diesel", "Anwendung: L27/38 Lagerüberwachung", "Typ: steckbares Schaltungsmodul", "Verkauft wie besichtigt, nicht geprüft"] }
  },
  p2025: {
    nl: { desc: "Compacte hydraulische motor met spie-uitgaande as, gedemonteerd van een dekmachineaandrijving. Verkocht zoals gezien.",
      specs: ["Type: Hydraulische motor", "Uitgang: Spie-as", "Staat: Gedemonteerd, niet getest", "Verkocht zoals gezien"] },
    fr: { desc: "Moteur hydraulique compact à arbre de sortie cannelé, déposé d'un entraînement de machine de pont. Vendu en l'état.",
      specs: ["Type : moteur hydraulique", "Sortie : arbre cannelé", "État : déposé, non testé", "Vendu en l'état"] },
    de: { desc: "Kompakter Hydraulikmotor mit Keilwellenausgang, von einem Deckmaschinenantrieb ausgebaut. Verkauft wie besichtigt.",
      specs: ["Typ: Hydraulikmotor", "Ausgang: Keilwelle", "Zustand: ausgebaut, nicht geprüft", "Verkauft wie besichtigt"] }
  },
  p2026: {
    nl: { desc: "Magazijnpartij van David Brown en andere hydraulische motoren en zwenkaandrijvingen, fabrieksverpakt op pallets. Afzonderlijk of als partij te koop, vraag naar de volledige voorraadlijst.",
      specs: ["Merken: David Brown en anderen", "Inhoud: Hydraulische motoren, zwenkaandrijvingen", "Opslag: Fabrieksverpakt, op pallets", "Afzonderlijk of als partij te koop"] },
    fr: { desc: "Lot d'entrepôt de moteurs hydrauliques et entraînements d'orientation David Brown et autres marques, sous emballage d'origine sur palettes. Vendu à l'unité ou en lot, demandez la liste complète des stocks.",
      specs: ["Marques : David Brown et autres", "Contenu : moteurs hydrauliques, entraînements d'orientation", "Stockage : emballage d'origine, sur palettes", "Vendu à l'unité ou en lot"] },
    de: { desc: "Lagerposten aus David Brown und anderen Hydraulikmotoren und Drehantrieben, werksverpackt auf Paletten. Einzeln oder als Posten verkäuflich, vollständige Bestandsliste auf Anfrage.",
      specs: ["Marken: David Brown und andere", "Inhalt: Hydraulikmotoren, Drehantriebe", "Lagerung: werksverpackt, auf Paletten", "Einzeln oder als Posten verkäuflich"] }
  },
  p2027: {
    nl: { desc: "Hydraulische tandwielmotorunit met label voor omgekeerde draairichting, gedemonteerd van een dekmachineaandrijving. Verkocht zoals gezien.",
      specs: ["Type: Hydraulische tandwielmotor", "Draairichting: Gelabeld als omgekeerd", "Staat: Gedemonteerd, niet getest", "Verkocht zoals gezien"] },
    fr: { desc: "Motoréducteur hydraulique à pignons avec étiquette de sens de rotation inversé, déposé d'un entraînement de machine de pont. Vendu en l'état.",
      specs: ["Type : motoréducteur hydraulique", "Sens de rotation : étiqueté inversé", "État : déposé, non testé", "Vendu en l'état"] },
    de: { desc: "Hydraulischer Zahnradmotor mit Kennzeichnung für umgekehrte Drehrichtung, von einem Deckmaschinenantrieb ausgebaut. Verkauft wie besichtigt.",
      specs: ["Typ: hydraulischer Zahnradmotor", "Drehrichtung: als umgekehrt gekennzeichnet", "Zustand: ausgebaut, nicht geprüft", "Verkauft wie besichtigt"] }
  },
  p2028: {
    nl: { desc: "Rosemount 3051-serie druktransmitter, gedemonteerd bij een instrumentatie-upgrade. Verkocht zoals gezien.",
      specs: ["Fabrikant: Rosemount", "Model: 3051CD4A02A1AB2M5", "Type: Differentieeldruktransmitter", "Verkocht zoals gezien, niet getest"] },
    fr: { desc: "Transmetteur de pression série Rosemount 3051, déposé lors d'une mise à niveau d'instrumentation. Vendu en l'état.",
      specs: ["Fabricant : Rosemount", "Modèle : 3051CD4A02A1AB2M5", "Type : transmetteur de pression différentielle", "Vendu en l'état, non testé"] },
    de: { desc: "Rosemount 3051-Serie Druckmessumformer, bei einem Instrumentierungs-Upgrade ausgebaut. Verkauft wie besichtigt.",
      specs: ["Hersteller: Rosemount", "Modell: 3051CD4A02A1AB2M5", "Typ: Differenzdruck-Messumformer", "Verkauft wie besichtigt, nicht geprüft"] }
  },
  p2029: {
    nl: { desc: "Woodward 723 PLUS digitale toerenregelaar-besturingsunit, gedemonteerd van een motorbesturingspaneel tijdens een upgrade. Verkocht zoals gezien.",
      specs: ["Fabrikant: Woodward Governor Company", "Type: 723 PLUS Digital Control", "Toepassing: Motor-/turbineregeling", "Verkocht zoals gezien, niet getest"] },
    fr: { desc: "Unité de régulation numérique Woodward 723 PLUS, déposée d'un tableau de commande moteur lors d'une mise à niveau. Vendu en l'état.",
      specs: ["Fabricant : Woodward Governor Company", "Type : régulation numérique 723 PLUS", "Application : régulation de vitesse moteur/turbine", "Vendu en l'état, non testé"] },
    de: { desc: "Woodward 723 PLUS digitale Drehzahlreglereinheit, bei einem Upgrade von einer Motorsteuertafel ausgebaut. Verkauft wie besichtigt.",
      specs: ["Hersteller: Woodward Governor Company", "Typ: 723 PLUS Digital Control", "Anwendung: Motor-/Turbinendrehzahlregelung", "Verkauft wie besichtigt, nicht geprüft"] }
  },
  p2030: {
    nl: { desc: "Maritime Hydraulics zwenkaandrijftandwielkast voor een racking arm-samenstel, gelabeld met fabrikantonderdeelnummer. Verkocht zoals gezien.",
      specs: ["Fabrikant: Maritime Hydraulics", "Toepassing: Zwenkaandrijving racking arm", "Onderdeelnr.: BA0054091", "Verkocht zoals gezien, niet getest"] },
    fr: { desc: "Boîte d'entraînement d'orientation Maritime Hydraulics pour un ensemble de bras de racking, étiquetée avec le numéro de pièce du fabricant. Vendu en l'état.",
      specs: ["Fabricant : Maritime Hydraulics", "Application : entraînement d'orientation de bras de racking", "N° de pièce : BA0054091", "Vendu en l'état, non testé"] },
    de: { desc: "Maritime Hydraulics Drehantriebsgetriebe für eine Racking-Arm-Baugruppe, mit Herstellerteilenummer gekennzeichnet. Verkauft wie besichtigt.",
      specs: ["Hersteller: Maritime Hydraulics", "Anwendung: Drehantrieb Racking Arm", "Teilenr.: BA0054091", "Verkauft wie besichtigt, nicht geprüft"] }
  },
  p2031: {
    nl: { desc: "David Brown Benzlers reductietandwielkast, gedemonteerd van een dekmachineaandrijving. Verkocht zoals gezien, typeplaatgegevens hieronder.",
      specs: ["Fabrikant: David Brown Benzlers", "Type: Reductietandwielkast", "Staat: Gedemonteerd, niet getest", "Verkocht zoals gezien"] },
    fr: { desc: "Réducteur David Brown Benzlers, déposé d'un entraînement de machine de pont. Vendu en l'état, données de plaque signalétique ci-dessous.",
      specs: ["Fabricant : David Brown Benzlers", "Type : réducteur", "État : déposé, non testé", "Vendu en l'état"] },
    de: { desc: "David Brown Benzlers Untersetzungsgetriebe, von einem Deckmaschinenantrieb ausgebaut. Verkauft wie besichtigt, Typenschilddaten unten.",
      specs: ["Hersteller: David Brown Benzlers", "Typ: Untersetzungsgetriebe", "Zustand: ausgebaut, nicht geprüft", "Verkauft wie besichtigt"] }
  },
  p2032: {
    nl: { desc: "Woodward 721 digitale toerenregelaar-besturingsunit, gedemonteerd van een motorbesturingspaneel tijdens een upgrade. Verkocht zoals gezien.",
      specs: ["Fabrikant: Woodward Governor Company", "Type: 721 Digital Control", "Toepassing: Motor-/turbineregeling", "Verkocht zoals gezien, niet getest"] },
    fr: { desc: "Unité de régulation numérique Woodward 721, déposée d'un tableau de commande moteur lors d'une mise à niveau. Vendu en l'état.",
      specs: ["Fabricant : Woodward Governor Company", "Type : régulation numérique 721", "Application : régulation de vitesse moteur/turbine", "Vendu en l'état, non testé"] },
    de: { desc: "Woodward 721 digitale Drehzahlreglereinheit, bei einem Upgrade von einer Motorsteuertafel ausgebaut. Verkauft wie besichtigt.",
      specs: ["Hersteller: Woodward Governor Company", "Typ: 721 Digital Control", "Anwendung: Motor-/Turbinendrehzahlregelung", "Verkauft wie besichtigt, nicht geprüft"] }
  }
};
