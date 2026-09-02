/* ==========================================================================
   Milas Offshore i18n
   Default language: English. Persists user choice in localStorage.
   ========================================================================== */

const I18N = (function () {
  const STORAGE_KEY = "milasoffshore_lang";
  const DEFAULT_LANG = "en";
  const SUPPORTED = ["en", "nl", "fr", "de"];

  const dict = {
    en: {
      meta_title: "Milas Offshore | Marine & Offshore Equipment Supplier",
      nav: { home: "Home", products: "Products", about: "About", contact: "Contact", quote: "Request a Quote", admin: "Admin" },
      hero: {
        badge: "Based in Turkey, shipping worldwide",
        title_a: "Reliable marine &",
        title_em: "offshore",
        title_b: "equipment, sourced fast.",
        lead: "We supply inspected, ready to ship marine and offshore spare parts and equipment to shipowners, yards and operators, and we turn quotes around fast.",
        cta_browse: "Browse inventory",
        cta_quote: "Request a quote",
        stat1_n: "60+", stat1_l: "Countries served",
        stat2_n: "<24h", stat2_l: "Average quote time",
        scroll: "Scroll to explore",
        float1: "Quote sent", float1_sub: "Within hours",
        float2: "Quality checked", float2_sub: "Every item inspected"
      },
      marquee: { m1: "Fast quotation", m2: "Global shipping", m3: "Inspected equipment", m4: "Wide inventory", m5: "Trusted across Europe", m6: "Rotterdam based", m7: "Multilingual team" },
      features: {
        eyebrow: "Why Milas Offshore",
        title: "Sourcing marine equipment, made simple",
        sub: "We handle inspection, documentation and logistics, so you get the right part on time.",
        f1_t: "Fast quotation", f1_d: "Send us your enquiry and receive a detailed quote, usually within 24 hours.",
        f2_t: "Global shipping", f2_d: "Door to door logistics from our Netherlands hub to ports and yards worldwide.",

        f4_t: "Wide inventory", f4_d: "New arrivals added constantly: engines, deck gear, navigation, safety and more."
      },
      products: {
        eyebrow: "Inventory", title: "Featured equipment", sub: "A selection of what's currently in stock. Full catalogue available on request.",
        view_all: "View full catalogue", request: "Request quote", condition: "Condition",
        page_title: "Product catalogue", page_lead: "Browse our current marine and offshore inventory. Can't find what you need? Send us a request and we'll source it.",
        search_ph: "Search parts, brands, categories...",
        cat_all: "All categories", cat_engine: "Engines & Generators", cat_deck: "Deck Machinery", cat_nav: "Navigation & Electronics",
        cat_safety: "Safety & Life-Saving", cat_valve: "Valves & Pumps", cat_electric: "Electrical & Panels",
        empty_title: "No matching parts found", empty_sub: "Try a different search term or category, or send us a direct request.",
        loc: "Netherlands", detail_back: "Back to catalogue", detail_specs: "Specifications", detail_cta: "Ask about this item", whatsapp_cta: "Chat on WhatsApp",
        cond_used: "Used, inspected", cond_refurb: "Refurbished", cond_new: "New / Unused"
      },
      steps: {
        eyebrow: "How it works", title: "From enquiry to confirmation",
        s1_t: "Send your enquiry", s1_d: "Tell us what you need: part number, make, or just a description.",
        s2_t: "Get a fast quote", s2_d: "Our team sources and prices the item, usually within a day.",
        s3_t: "Confirm & inspect", s3_d: "We confirm the order and inspect and prepare the part for shipping."
      },
      about_teaser: {
        eyebrow: "About us", title: "A Turkish maritime heritage, based in Europe",
        p1: "Milas Offshore is the European representative office of our parent company, headquartered on Turkey's Aegean coast. We bring a maritime trading heritage spanning decades to shipowners, yards and operators across Europe and beyond.",
        c1: "Sourced and inspected marine equipment", c2: "Fast, transparent quotations", c3: "Reliable worldwide logistics", c4: "A team that speaks your language: EN, NL, FR, DE",
        cta: "More about us"
      },
      cta_banner: { title: "Have equipment to source, or to sell?", sub: "Tell us what you're looking for, or what you have available. We'll get back to you fast.", cta1: "Request a quote", cta2: "Contact us" },
      footer: {
        links_t: "Quick links", company_t: "Company", contact_t: "Contact",
        l_home: "Home", l_products: "Products", l_about: "About", l_contact: "Contact", l_admin: "Admin login",
        c_terms: "Terms & Conditions", c_privacy: "Privacy Policy", c_rfq: "Request for Quote",
        addr: "Rotterdam area, The Netherlands", phone: "+31 686183850", email: "info@milasoffshore.nl",
        tagline: "Marine & offshore equipment and spare parts, supplied through our European office in the Netherlands.",
        rights: "All rights reserved."
      },
      about_page: {
        title: "About Milas Offshore", lead: "The European representative office of our Turkey-based parent company, connecting a deep maritime trading heritage with the ports and yards of Europe.",
        s1_t: "Who we are", s1_p1: "Milas Offshore is the European representative office of our parent company, headquartered in Milas, on Turkey's Aegean coast. Our head office has spent decades sourcing, refurbishing and exporting marine and offshore equipment from one of the region's busiest maritime trading hubs.",
        s1_p2: "Operating as the European arm of that business gives us direct access to a vast, constantly renewed inventory, while our presence here in the Netherlands means faster communication, local documentation and quicker delivery for clients across the continent.",
        s2_t: "What we do", s2_p1: "From engines and generators to deck machinery, navigation electronics, safety equipment and valves — much of it drawn straight from our parent company's stock in Turkey — we help clients find the right part fast, backed by clear documentation and honest condition reporting.",
        mv_t: "Mission & values", m_t: "Our mission", m_p: "To make sourcing marine and offshore equipment fast, transparent and reliable, by connecting our Turkish supply network directly with clients across Europe.",
        v_t: "Our values", v1: "Transparency in every quote and condition report", v2: "Speed, because downtime is expensive", v3: "Long-term relationships over one-off sales",
        staff_t: "Our Team", staff_role_talha: "CEO / Sales Executive", staff_role_burak: "Sales Manager", staff_role_handan: "HR",
        team_t: "Multilingual, hands-on team", team_p: "Our team works across English, Dutch, French and German, with a direct line to our headquarters in Turkey, so communication is never the bottleneck when you need a part fast."
      },
      contact_page: {
        title: "Contact & Request a Quote", lead: "Tell us what you need: a part number, a description, or a photo, and we'll come back with a quote fast.",
        form_t: "Send an enquiry", name: "Full name", company: "Company", email: "Email address", phone: "Phone (optional)",
        subject: "What are you looking for?", subject_ph: "e.g. Marine diesel generator, 200kW",
        message: "Message / specifications", message_ph: "Part number, make/model, quantity, condition preference, delivery port...",
        submit: "Send enquiry", note: "Your enquiry is sent straight to our team — we usually reply within 24 hours.",
        info_t: "Get in touch", addr_l: "Location", addr_v: "Rotterdam area, The Netherlands",
        phone_l: "Phone", phone_v: "+31 686183850", email_l: "Email", email_v: "info@milasoffshore.nl",
        hours_l: "Response time", hours_v: "Within 24 hours, Monday to Friday", whatsapp_cta: "Chat on WhatsApp", success: "Thanks, your enquiry has been sent. We'll be in touch shortly.", error: "Something went wrong sending your enquiry. Please try again or email us directly."
      },
      admin: {
        login_title: "Admin sign in", login_sub: "Manage your product catalogue.", pass_label: "Access code", pass_ph: "Enter access code",
        login_btn: "Sign in", login_hint: "Demo access code: milasoffshore2026", login_error: "Incorrect code, try again.",
        dash: "Dashboard", listings: "Listings", add_new: "Add new listing", logout: "Log out",
        stat_total: "Total listings", stat_month: "Added this session", stat_cat: "Categories", stat_lang: "Site languages",
        table_t: "All listings", th_name: "Name", th_cat: "Category", th_cond: "Condition", th_status: "Status", th_actions: "Actions",
        form_t: "Add a new listing", f_name: "Part name", f_name_ph: "e.g. Marine diesel generator 200kW",
        f_cat: "Category", f_cond: "Condition",
        f_desc: "Short description", f_desc_ph: "Brief description shown on the catalogue card...",
        f_specs: "Specifications", f_specs_ph: "One per line, e.g.\nPower: 200kW\nVoltage: 400V\nHours run: 3,200h",
        save: "Save listing", cancel: "Cancel", saved_toast: "Listing added to the catalogue.",
        deleted_toast: "Listing removed.", empty: "No listings yet. Add your first one.",
        note_t: "About this admin panel", note_p: "This is a working demo: listings you add are saved in your browser (localStorage) so you can try the full flow. For a live site, this should be connected to a small backend or database so listings sync for every visitor and every device. Ask and we'll set that up next."
      },
      brand: { name: "Milas Offshore", sub: "Marine & Offshore Supply" }
    },

    nl: {
      meta_title: "Milas Offshore | Leverancier Maritieme en Offshore Uitrusting",
      nav: { home: "Home", products: "Producten", about: "Over ons", contact: "Contact", quote: "Offerte aanvragen", admin: "Beheer" },
      hero: {
        badge: "Gevestigd in Turkije, wereldwijde verzending",
        title_a: "Betrouwbare maritieme en", title_em: "offshore", title_b: "uitrusting, snel geleverd.",
        lead: "Wij leveren gekeurde, verzendklare maritieme en offshore onderdelen en uitrusting aan rederijen, werven en operators, en wij werken met snelle offertes.",
        cta_browse: "Bekijk voorraad", cta_quote: "Offerte aanvragen",
        stat1_n: "60+", stat1_l: "Landen bediend",
        stat2_n: "<24u", stat2_l: "Gemiddelde offertetijd",
        scroll: "Scroll om te ontdekken", float1: "Offerte verzonden", float1_sub: "Binnen enkele uren",
        float2: "Kwaliteit gecontroleerd", float2_sub: "Elk onderdeel geïnspecteerd"
      },
      marquee: { m1: "Snelle offerte", m2: "Wereldwijde verzending", m3: "Geïnspecteerde uitrusting", m4: "Breed assortiment", m5: "Vertrouwd in Europa", m6: "Gevestigd in Rotterdam", m7: "Meertalig team" },
      features: {
        eyebrow: "Waarom Milas Offshore", title: "Maritieme uitrusting inkopen, eenvoudig gemaakt",
        sub: "Wij regelen inspectie, documentatie en logistiek, zodat u het juiste onderdeel op tijd ontvangt.",
        f1_t: "Snelle offerte", f1_d: "Stuur uw aanvraag en ontvang meestal binnen 24 uur een gedetailleerde offerte.",
        f2_t: "Wereldwijde verzending", f2_d: "Deur tot deur logistiek vanuit onze hub in Nederland naar havens en werven wereldwijd.",

        f4_t: "Breed assortiment", f4_d: "Voortdurend nieuwe aanwas: motoren, dekuitrusting, navigatie, veiligheid en meer."
      },
      products: {
        eyebrow: "Voorraad", title: "Uitgelichte uitrusting", sub: "Een selectie van wat nu op voorraad is. Volledige catalogus op aanvraag.",
        view_all: "Volledige catalogus bekijken", request: "Offerte aanvragen", condition: "Staat",
        page_title: "Productcatalogus", page_lead: "Bekijk onze actuele maritieme en offshore voorraad. Niet gevonden wat u zoekt? Stuur een aanvraag en wij zoeken het voor u.",
        search_ph: "Zoek onderdelen, merken, categorieën...",
        cat_all: "Alle categorieën", cat_engine: "Motoren & Generatoren", cat_deck: "Dekmachines", cat_nav: "Navigatie & Elektronica",
        cat_safety: "Veiligheid & Reddingsmiddelen", cat_valve: "Kleppen & Pompen", cat_electric: "Elektrisch & Panelen",
        empty_title: "Geen onderdelen gevonden", empty_sub: "Probeer een andere zoekterm of categorie, of stuur direct een aanvraag.",
        loc: "Nederland", detail_back: "Terug naar catalogus", detail_specs: "Specificaties", detail_cta: "Vraag naar dit item", whatsapp_cta: "Chat via WhatsApp",
        cond_used: "Gebruikt, geïnspecteerd", cond_refurb: "Gereviseerd", cond_new: "Nieuw / Ongebruikt"
      },
      steps: {
        eyebrow: "Hoe het werkt", title: "Van aanvraag tot bevestiging",
        s1_t: "Stuur uw aanvraag", s1_d: "Laat ons weten wat u nodig heeft: onderdeelnummer, merk of gewoon een omschrijving.",
        s2_t: "Snel een offerte", s2_d: "Ons team zoekt en prijst het onderdeel, meestal binnen een dag.",
        s3_t: "Bevestiging & inspectie", s3_d: "Wij bevestigen de order en inspecteren en bereiden het onderdeel voor verzending voor."
      },
      about_teaser: {
        eyebrow: "Over ons", title: "Een Turkse maritieme traditie, gevestigd in Europa",
        p1: "Milas Offshore is het Europese vertegenwoordigingskantoor van ons moederbedrijf, met hoofdkantoor aan de Egeïsche kust van Turkije. Wij brengen een maritieme handelstraditie van decennia naar rederijen, werven en operators in heel Europa en daarbuiten.",
        c1: "Ingekochte en geïnspecteerde uitrusting", c2: "Snelle, transparante offertes", c3: "Betrouwbare wereldwijde logistiek", c4: "Een team dat uw taal spreekt: EN, NL, FR, DE",
        cta: "Meer over ons"
      },
      cta_banner: { title: "Zoekt u uitrusting, of heeft u iets te koop?", sub: "Laat ons weten wat u zoekt of wat u heeft. Wij reageren snel.", cta1: "Offerte aanvragen", cta2: "Neem contact op" },
      footer: {
        links_t: "Snelle links", company_t: "Bedrijf", contact_t: "Contact",
        l_home: "Home", l_products: "Producten", l_about: "Over ons", l_contact: "Contact", l_admin: "Beheerlogin",
        c_terms: "Algemene voorwaarden", c_privacy: "Privacybeleid", c_rfq: "Offerteaanvraag",
        addr: "Regio Rotterdam, Nederland", phone: "+31 686183850", email: "info@milasoffshore.nl",
        tagline: "Maritieme en offshore-uitrusting en onderdelen, geleverd via ons Europese kantoor in Nederland.",
        rights: "Alle rechten voorbehouden."
      },
      about_page: {
        title: "Over Milas Offshore", lead: "Het Europese vertegenwoordigingskantoor van ons in Turkije gevestigde moederbedrijf, dat een diepgewortelde maritieme handelstraditie verbindt met de havens en werven van Europa.",
        s1_t: "Wie wij zijn", s1_p1: "Milas Offshore is het Europese vertegenwoordigingskantoor van ons moederbedrijf, met hoofdkantoor in Milas, aan de Egeïsche kust van Turkije. Ons hoofdkantoor koopt al decennialang maritieme en offshore uitrusting in, reviseert en exporteert deze vanuit een van de drukste maritieme handelsknooppunten van de regio.",
        s1_p2: "Als Europese tak van dat bedrijf hebben wij rechtstreeks toegang tot een omvangrijke, voortdurend vernieuwde voorraad, terwijl onze aanwezigheid hier in Nederland zorgt voor snellere communicatie, lokale documentatie en snellere levering aan klanten in heel Europa.",
        s2_t: "Wat wij doen", s2_p1: "Van motoren en generatoren tot dekmachines, navigatie-elektronica, veiligheidsuitrusting en kleppen — veel daarvan rechtstreeks uit de voorraad van ons moederbedrijf in Turkije — wij helpen klanten snel het juiste onderdeel te vinden, met duidelijke documentatie en eerlijke conditierapportage.",
        mv_t: "Missie & waarden", m_t: "Onze missie", m_p: "Het inkopen van maritieme en offshore uitrusting snel, transparant en betrouwbaar maken, door ons Turkse toeleveringsnetwerk rechtstreeks te verbinden met klanten in heel Europa.",
        v_t: "Onze waarden", v1: "Transparantie in elke offerte en conditierapport", v2: "Snelheid, want stilstand is kostbaar", v3: "Langetermijnrelaties boven eenmalige verkoop",
        staff_t: "Ons team", staff_role_talha: "CEO / Sales Executive", staff_role_burak: "Sales Manager", staff_role_handan: "HR",
        team_t: "Meertalig, betrokken team", team_p: "Ons team werkt in het Engels, Nederlands, Frans en Duits, met een directe lijn naar ons hoofdkantoor in Turkije, zodat communicatie nooit de bottleneck is als u snel een onderdeel nodig heeft."
      },
      contact_page: {
        title: "Contact & Offerteaanvraag", lead: "Laat ons weten wat u nodig heeft: een onderdeelnummer, omschrijving of foto, en wij komen snel met een offerte.",
        form_t: "Stuur een aanvraag", name: "Volledige naam", company: "Bedrijf", email: "E-mailadres", phone: "Telefoon (optioneel)",
        subject: "Wat zoekt u?", subject_ph: "bijv. Marine dieselgenerator, 200kW",
        message: "Bericht / specificaties", message_ph: "Onderdeelnummer, merk/model, aantal, gewenste staat, leveringshaven...",
        submit: "Aanvraag versturen", note: "Uw aanvraag wordt rechtstreeks naar ons team gestuurd — meestal reageren wij binnen 24 uur.",
        info_t: "Neem contact op", addr_l: "Locatie", addr_v: "Regio Rotterdam, Nederland",
        phone_l: "Telefoon", phone_v: "+31 686183850", email_l: "E-mail", email_v: "info@milasoffshore.nl",
        hours_l: "Reactietijd", hours_v: "Binnen 24 uur, maandag tot en met vrijdag", whatsapp_cta: "Chat via WhatsApp", success: "Bedankt, uw aanvraag is verzonden. We nemen spoedig contact met u op.", error: "Er is iets misgegaan bij het verzenden. Probeer het opnieuw of mail ons rechtstreeks."
      },
      admin: {
        login_title: "Beheerder inloggen", login_sub: "Beheer uw productcatalogus.", pass_label: "Toegangscode", pass_ph: "Voer toegangscode in",
        login_btn: "Inloggen", login_hint: "Demo toegangscode: milasoffshore2026", login_error: "Onjuiste code, probeer opnieuw.",
        dash: "Dashboard", listings: "Advertenties", add_new: "Nieuwe advertentie toevoegen", logout: "Uitloggen",
        stat_total: "Totaal aantal advertenties", stat_month: "Toegevoegd deze sessie", stat_cat: "Categorieën", stat_lang: "Sitetalen",
        table_t: "Alle advertenties", th_name: "Naam", th_cat: "Categorie", th_cond: "Staat", th_status: "Status", th_actions: "Acties",
        form_t: "Nieuwe advertentie toevoegen", f_name: "Onderdeelnaam", f_name_ph: "bijv. Marine dieselgenerator 200kW",
        f_cat: "Categorie", f_cond: "Staat",
        f_desc: "Korte omschrijving", f_desc_ph: "Korte omschrijving zichtbaar op de kaart in de catalogus...",
        f_specs: "Specificaties", f_specs_ph: "Eén per regel, bijv.\nVermogen: 200kW\nSpanning: 400V\nDraaiuren: 3.200u",
        save: "Advertentie opslaan", cancel: "Annuleren", saved_toast: "Advertentie toegevoegd aan de catalogus.",
        deleted_toast: "Advertentie verwijderd.", empty: "Nog geen advertenties. Voeg de eerste toe.",
        note_t: "Over dit beheerpaneel", note_p: "Dit is een werkende demo: toegevoegde advertenties worden opgeslagen in uw browser (localStorage) zodat u de volledige flow kunt uitproberen. Voor een live site moet dit gekoppeld worden aan een kleine backend of database zodat advertenties synchroon lopen voor elke bezoeker en elk apparaat. Geef het aan en we zetten dat als volgende stap op."
      },
      brand: { name: "Milas Offshore", sub: "Maritieme & Offshore Levering" }
    },

    fr: {
      meta_title: "Milas Offshore | Fournisseur d'équipements maritimes et offshore",
      nav: { home: "Accueil", products: "Produits", about: "À propos", contact: "Contact", quote: "Demander un devis", admin: "Admin" },
      hero: {
        badge: "Basés en Turquie, expéditions dans le monde entier",
        title_a: "Équipements maritimes et", title_em: "offshore", title_b: "fiables, livrés rapidement.",
        lead: "Nous fournissons des pièces détachées et équipements maritimes et offshore inspectés et prêts à expédier aux armateurs, chantiers et opérateurs, avec des devis établis rapidement.",
        cta_browse: "Parcourir le stock", cta_quote: "Demander un devis",
        stat1_n: "60+", stat1_l: "Pays desservis",
        stat2_n: "<24h", stat2_l: "Délai moyen de devis",
        scroll: "Faites défiler pour explorer", float1: "Devis envoyé", float1_sub: "En quelques heures",
        float2: "Qualité contrôlée", float2_sub: "Chaque pièce est inspectée"
      },
      marquee: { m1: "Devis rapide", m2: "Expédition internationale", m3: "Équipement inspecté", m4: "Large stock", m5: "Reconnus dans toute l'Europe", m6: "Basés à Rotterdam", m7: "Équipe multilingue" },
      features: {
        eyebrow: "Pourquoi Milas Offshore",
        title: "L'approvisionnement en équipement maritime simplifié",
        sub: "Nous prenons en charge l'inspection, la documentation et la logistique, pour que vous receviez la bonne pièce à temps.",
        f1_t: "Devis rapide", f1_d: "Envoyez-nous votre demande et recevez un devis détaillé, généralement sous 24 heures.",
        f2_t: "Expédition internationale", f2_d: "Logistique porte-à-porte depuis notre hub aux Pays-Bas vers les ports et chantiers du monde entier.",

        f4_t: "Large stock", f4_d: "De nouvelles arrivées en continu : moteurs, équipements de pont, navigation, sécurité et plus encore."
      },
      products: {
        eyebrow: "Stock", title: "Équipements phares", sub: "Une sélection de ce qui est actuellement en stock. Catalogue complet sur demande.",
        view_all: "Voir le catalogue complet", request: "Demander un devis", condition: "État",
        page_title: "Catalogue produits", page_lead: "Parcourez notre stock maritime et offshore actuel. Vous ne trouvez pas ce qu'il vous faut ? Envoyez-nous une demande et nous le trouverons pour vous.",
        search_ph: "Rechercher pièces, marques, catégories...",
        cat_all: "Toutes les catégories", cat_engine: "Moteurs & Générateurs", cat_deck: "Équipements de pont", cat_nav: "Navigation & Électronique",
        cat_safety: "Sécurité & Sauvetage", cat_valve: "Vannes & Pompes", cat_electric: "Électrique & Tableaux",
        empty_title: "Aucune pièce correspondante trouvée", empty_sub: "Essayez un autre terme de recherche ou une autre catégorie, ou envoyez-nous une demande directe.",
        loc: "Pays-Bas", detail_back: "Retour au catalogue", detail_specs: "Caractéristiques", detail_cta: "Demander des informations", whatsapp_cta: "Discuter sur WhatsApp",
        cond_used: "Occasion, inspecté", cond_refurb: "Reconditionné", cond_new: "Neuf / Jamais utilisé"
      },
      steps: {
        eyebrow: "Comment ça marche", title: "De la demande à la confirmation",
        s1_t: "Envoyez votre demande", s1_d: "Indiquez-nous ce dont vous avez besoin : référence, marque, ou simplement une description.",
        s2_t: "Recevez un devis rapide", s2_d: "Notre équipe trouve et chiffre la pièce, généralement en une journée.",
        s3_t: "Confirmation & inspection", s3_d: "Nous confirmons la commande, inspectons et préparons la pièce pour l'expédition."
      },
      about_teaser: {
        eyebrow: "À propos", title: "Un héritage maritime turc, basé en Europe",
        p1: "Milas Offshore est le bureau de représentation européen de notre maison mère, dont le siège se trouve sur la côte égéenne de la Turquie. Nous apportons un héritage commercial maritime vieux de plusieurs décennies aux armateurs, chantiers et opérateurs à travers l'Europe et au-delà.",
        c1: "Équipements maritimes sourcés et inspectés", c2: "Devis rapides et transparents", c3: "Logistique mondiale fiable", c4: "Une équipe qui parle votre langue : EN, NL, FR, DE",
        cta: "En savoir plus sur nous"
      },
      cta_banner: { title: "Un équipement à faire sourcer, ou à vendre ?", sub: "Dites-nous ce que vous recherchez, ou ce dont vous disposez. Nous vous répondrons rapidement.", cta1: "Demander un devis", cta2: "Nous contacter" },
      footer: {
        links_t: "Liens rapides", company_t: "Entreprise", contact_t: "Contact",
        l_home: "Accueil", l_products: "Produits", l_about: "À propos", l_contact: "Contact", l_admin: "Connexion admin",
        c_terms: "Conditions générales", c_privacy: "Politique de confidentialité", c_rfq: "Demande de devis",
        addr: "Région de Rotterdam, Pays-Bas", phone: "+31 686183850", email: "info@milasoffshore.nl",
        tagline: "Équipements et pièces détachées maritimes et offshore, fournis via notre bureau européen aux Pays-Bas.",
        rights: "Tous droits réservés."
      },
      about_page: {
        title: "À propos de Milas Offshore", lead: "Le bureau de représentation européen de notre maison mère basée en Turquie, reliant un riche héritage commercial maritime aux ports et chantiers d'Europe.",
        s1_t: "Qui sommes-nous", s1_p1: "Milas Offshore est le bureau de représentation européen de notre maison mère, dont le siège se trouve à Milas, sur la côte égéenne de la Turquie. Notre siège s'approvisionne, remet à neuf et exporte depuis des décennies des équipements maritimes et offshore depuis l'un des pôles commerciaux maritimes les plus actifs de la région.",
        s1_p2: "En tant que branche européenne de cette entreprise, nous avons un accès direct à un stock vaste et sans cesse renouvelé, tandis que notre présence ici, aux Pays-Bas, garantit une communication plus rapide, une documentation locale et une livraison plus rapide pour nos clients à travers le continent.",
        s2_t: "Ce que nous faisons", s2_p1: "Des moteurs et générateurs aux équipements de pont, à l'électronique de navigation, aux équipements de sécurité et aux vannes — une grande partie provenant directement du stock de notre maison mère en Turquie — nous aidons nos clients à trouver rapidement la bonne pièce, avec une documentation claire et un compte-rendu honnête de l'état.",
        mv_t: "Mission & valeurs", m_t: "Notre mission", m_p: "Rendre l'approvisionnement en équipements maritimes et offshore rapide, transparent et fiable, en connectant directement notre réseau d'approvisionnement turc avec des clients à travers l'Europe.",
        v_t: "Nos valeurs", v1: "Transparence dans chaque devis et rapport d'état", v2: "Rapidité, car les temps d'arrêt coûtent cher", v3: "Des relations durables plutôt que des ventes ponctuelles",
        staff_t: "Notre équipe", staff_role_talha: "CEO / Sales Executive", staff_role_burak: "Responsable des ventes", staff_role_handan: "RH",
        team_t: "Une équipe multilingue et impliquée", team_p: "Notre équipe travaille en anglais, néerlandais, français et allemand, avec une ligne directe vers notre siège en Turquie, afin que la communication ne soit jamais un frein lorsque vous avez besoin d'une pièce rapidement."
      },
      contact_page: {
        title: "Contact & Demande de devis", lead: "Indiquez-nous ce dont vous avez besoin : une référence, une description ou une photo, et nous reviendrons rapidement vers vous avec un devis.",
        form_t: "Envoyer une demande", name: "Nom complet", company: "Entreprise", email: "Adresse e-mail", phone: "Téléphone (facultatif)",
        subject: "Que recherchez-vous ?", subject_ph: "ex. Générateur diesel marin, 200kW",
        message: "Message / spécifications", message_ph: "Référence, marque/modèle, quantité, état souhaité, port de livraison...",
        submit: "Envoyer la demande", note: "Votre demande est envoyée directement à notre équipe — nous répondons généralement sous 24 heures.",
        info_t: "Contactez-nous", addr_l: "Localisation", addr_v: "Région de Rotterdam, Pays-Bas",
        phone_l: "Téléphone", phone_v: "+31 686183850", email_l: "E-mail", email_v: "info@milasoffshore.nl",
        hours_l: "Délai de réponse", hours_v: "Sous 24 heures, du lundi au vendredi", whatsapp_cta: "Discuter sur WhatsApp", success: "Merci, votre demande a été envoyée. Nous vous recontacterons sous peu.", error: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou nous écrire directement."
      },
      admin: {
        login_title: "Connexion admin", login_sub: "Gérez votre catalogue de produits.", pass_label: "Code d'accès", pass_ph: "Entrez le code d'accès",
        login_btn: "Se connecter", login_hint: "Code d'accès de démo : milasoffshore2026", login_error: "Code incorrect, veuillez réessayer.",
        dash: "Tableau de bord", listings: "Annonces", add_new: "Ajouter une annonce", logout: "Se déconnecter",
        stat_total: "Total des annonces", stat_month: "Ajoutées cette session", stat_cat: "Catégories", stat_lang: "Langues du site",
        table_t: "Toutes les annonces", th_name: "Nom", th_cat: "Catégorie", th_cond: "État", th_status: "Statut", th_actions: "Actions",
        form_t: "Ajouter une nouvelle annonce", f_name: "Nom de la pièce", f_name_ph: "ex. Générateur diesel marin 200kW",
        f_cat: "Catégorie", f_cond: "État",
        f_desc: "Description courte", f_desc_ph: "Brève description affichée sur la fiche du catalogue...",
        f_specs: "Caractéristiques", f_specs_ph: "Une par ligne, ex.\nPuissance : 200kW\nTension : 400V\nHeures de fonctionnement : 3 200h",
        save: "Enregistrer l'annonce", cancel: "Annuler", saved_toast: "Annonce ajoutée au catalogue.",
        deleted_toast: "Annonce supprimée.", empty: "Aucune annonce pour le moment. Ajoutez la première.",
        note_t: "À propos de ce panneau d'administration", note_p: "Ceci est une démonstration fonctionnelle : les annonces que vous ajoutez sont enregistrées dans votre navigateur (localStorage) afin que vous puissiez tester le flux complet. Pour un site en production, cela devrait être connecté à un petit backend ou à une base de données afin que les annonces soient synchronisées pour chaque visiteur et chaque appareil. Faites-le-nous savoir et nous mettrons cela en place ensuite."
      },
      brand: { name: "Milas Offshore", sub: "Fourniture maritime & offshore" }
    },

    de: {
      meta_title: "Milas Offshore | Anbieter für Marine- & Offshore-Ausrüstung",
      nav: { home: "Startseite", products: "Produkte", about: "Über uns", contact: "Kontakt", quote: "Angebot anfordern", admin: "Admin" },
      hero: {
        badge: "Ansässig in der Türkei, weltweiter Versand",
        title_a: "Zuverlässige Marine- und", title_em: "Offshore", title_b: "Ausrüstung, schnell beschafft.",
        lead: "Wir liefern geprüfte, versandbereite Marine- und Offshore-Ersatzteile und -Ausrüstung an Reeder, Werften und Betreiber und erstellen unsere Angebote schnell.",
        cta_browse: "Bestand durchsuchen", cta_quote: "Angebot anfordern",
        stat1_n: "60+", stat1_l: "Belieferte Länder",
        stat2_n: "<24Std.", stat2_l: "Durchschnittliche Angebotszeit",
        scroll: "Zum Entdecken scrollen", float1: "Angebot gesendet", float1_sub: "Innerhalb weniger Stunden",
        float2: "Qualität geprüft", float2_sub: "Jedes Teil wird inspiziert"
      },
      marquee: { m1: "Schnelles Angebot", m2: "Weltweiter Versand", m3: "Geprüfte Ausrüstung", m4: "Großes Lager", m5: "Vertrauenswürdig in ganz Europa", m6: "Ansässig in Rotterdam", m7: "Mehrsprachiges Team" },
      features: {
        eyebrow: "Warum Milas Offshore",
        title: "Beschaffung von Schiffsausrüstung, einfach gemacht",
        sub: "Wir übernehmen Inspektion, Dokumentation und Logistik, damit Sie das richtige Teil pünktlich erhalten.",
        f1_t: "Schnelles Angebot", f1_d: "Senden Sie uns Ihre Anfrage und erhalten Sie in der Regel innerhalb von 24 Stunden ein detailliertes Angebot.",
        f2_t: "Weltweiter Versand", f2_d: "Tür-zu-Tür-Logistik von unserem Standort in den Niederlanden zu Häfen und Werften weltweit.",

        f4_t: "Großes Lager", f4_d: "Ständig neue Zugänge: Motoren, Deckausrüstung, Navigation, Sicherheit und mehr."
      },
      products: {
        eyebrow: "Lagerbestand", title: "Ausgewählte Ausrüstung", sub: "Eine Auswahl dessen, was aktuell auf Lager ist. Vollständiger Katalog auf Anfrage.",
        view_all: "Gesamten Katalog ansehen", request: "Angebot anfordern", condition: "Zustand",
        page_title: "Produktkatalog", page_lead: "Durchsuchen Sie unseren aktuellen Marine- und Offshore-Bestand. Nicht gefunden, was Sie suchen? Senden Sie uns eine Anfrage, wir beschaffen es für Sie.",
        search_ph: "Teile, Marken, Kategorien suchen...",
        cat_all: "Alle Kategorien", cat_engine: "Motoren & Generatoren", cat_deck: "Deckmaschinen", cat_nav: "Navigation & Elektronik",
        cat_safety: "Sicherheit & Rettungsmittel", cat_valve: "Ventile & Pumpen", cat_electric: "Elektrik & Schalttafeln",
        empty_title: "Keine passenden Teile gefunden", empty_sub: "Versuchen Sie einen anderen Suchbegriff oder eine andere Kategorie, oder senden Sie uns eine direkte Anfrage.",
        loc: "Niederlande", detail_back: "Zurück zum Katalog", detail_specs: "Technische Daten", detail_cta: "Nach diesem Artikel fragen", whatsapp_cta: "Per WhatsApp chatten",
        cond_used: "Gebraucht, geprüft", cond_refurb: "Aufgearbeitet", cond_new: "Neu / Unbenutzt"
      },
      steps: {
        eyebrow: "So funktioniert es", title: "Von der Anfrage zur Bestätigung",
        s1_t: "Anfrage senden", s1_d: "Teilen Sie uns mit, was Sie benötigen: Teilenummer, Hersteller oder einfach eine Beschreibung.",
        s2_t: "Schnelles Angebot erhalten", s2_d: "Unser Team beschafft und kalkuliert das Teil, in der Regel innerhalb eines Tages.",
        s3_t: "Bestätigung & Prüfung", s3_d: "Wir bestätigen die Bestellung, prüfen das Teil und bereiten es für den Versand vor."
      },
      about_teaser: {
        eyebrow: "Über uns", title: "Türkisches maritimes Erbe, ansässig in Europa",
        p1: "Milas Offshore ist die europäische Repräsentanz unserer Muttergesellschaft mit Hauptsitz an der türkischen Ägäisküste. Wir bringen jahrzehntelange maritime Handelstradition zu Reedern, Werften und Betreibern in ganz Europa und darüber hinaus.",
        c1: "Beschaffte und geprüfte Schiffsausrüstung", c2: "Schnelle, transparente Angebote", c3: "Zuverlässige weltweite Logistik", c4: "Ein Team, das Ihre Sprache spricht: EN, NL, FR, DE",
        cta: "Mehr über uns"
      },
      cta_banner: { title: "Haben Sie Ausrüstung zu beschaffen oder zu verkaufen?", sub: "Teilen Sie uns mit, wonach Sie suchen oder was Sie anzubieten haben. Wir melden uns schnell bei Ihnen.", cta1: "Angebot anfordern", cta2: "Kontaktieren Sie uns" },
      footer: {
        links_t: "Schnellzugriff", company_t: "Unternehmen", contact_t: "Kontakt",
        l_home: "Startseite", l_products: "Produkte", l_about: "Über uns", l_contact: "Kontakt", l_admin: "Admin-Login",
        c_terms: "Allgemeine Geschäftsbedingungen", c_privacy: "Datenschutzrichtlinie", c_rfq: "Angebotsanfrage",
        addr: "Region Rotterdam, Niederlande", phone: "+31 686183850", email: "info@milasoffshore.nl",
        tagline: "Marine- und Offshore-Ausrüstung und Ersatzteile, geliefert über unser europäisches Büro in den Niederlanden.",
        rights: "Alle Rechte vorbehalten."
      },
      about_page: {
        title: "Über Milas Offshore", lead: "Die europäische Repräsentanz unserer in der Türkei ansässigen Muttergesellschaft, die ein tief verwurzeltes maritimes Handelserbe mit den Häfen und Werften Europas verbindet.",
        s1_t: "Wer wir sind", s1_p1: "Milas Offshore ist die europäische Repräsentanz unserer Muttergesellschaft mit Hauptsitz in Milas, an der türkischen Ägäisküste. Unser Stammhaus beschafft, arbeitet seit Jahrzehnten auf und exportiert Marine- und Offshore-Ausrüstung von einem der geschäftigsten maritimen Handelsknotenpunkte der Region.",
        s1_p2: "Als europäischer Zweig dieses Unternehmens haben wir direkten Zugang zu einem umfangreichen, ständig erneuerten Lagerbestand, während unsere Präsenz hier in den Niederlanden für schnellere Kommunikation, lokale Dokumentation und schnellere Lieferung an Kunden in ganz Europa sorgt.",
        s2_t: "Was wir tun", s2_p1: "Von Motoren und Generatoren über Deckmaschinen, Navigationselektronik, Sicherheitsausrüstung bis hin zu Ventilen — vieles davon direkt aus dem Lagerbestand unserer Muttergesellschaft in der Türkei — helfen wir Kunden, schnell das richtige Teil zu finden, unterstützt durch klare Dokumentation und ehrliche Zustandsberichte.",
        mv_t: "Mission & Werte", m_t: "Unsere Mission", m_p: "Die Beschaffung von Marine- und Offshore-Ausrüstung schnell, transparent und zuverlässig zu gestalten, indem wir unser türkisches Beschaffungsnetzwerk direkt mit Kunden in ganz Europa verbinden.",
        v_t: "Unsere Werte", v1: "Transparenz bei jedem Angebot und Zustandsbericht", v2: "Geschwindigkeit, denn Stillstand ist teuer", v3: "Langfristige Beziehungen statt Einmalverkäufe",
        staff_t: "Unser Team", staff_role_talha: "CEO / Sales Executive", staff_role_burak: "Sales Manager", staff_role_handan: "Personalwesen",
        team_t: "Mehrsprachiges, praxisnahes Team", team_p: "Unser Team arbeitet auf Englisch, Niederländisch, Französisch und Deutsch, mit einer direkten Verbindung zu unserem Hauptsitz in der Türkei, sodass Kommunikation nie zum Engpass wird, wenn Sie schnell ein Teil benötigen."
      },
      contact_page: {
        title: "Kontakt & Angebotsanfrage", lead: "Teilen Sie uns mit, was Sie benötigen: eine Teilenummer, eine Beschreibung oder ein Foto, und wir melden uns schnell mit einem Angebot zurück.",
        form_t: "Anfrage senden", name: "Vollständiger Name", company: "Unternehmen", email: "E-Mail-Adresse", phone: "Telefon (optional)",
        subject: "Wonach suchen Sie?", subject_ph: "z. B. Marine-Dieselgenerator, 200kW",
        message: "Nachricht / technische Daten", message_ph: "Teilenummer, Marke/Modell, Menge, gewünschter Zustand, Lieferhafen...",
        submit: "Anfrage senden", note: "Ihre Anfrage wird direkt an unser Team gesendet — wir antworten in der Regel innerhalb von 24 Stunden.",
        info_t: "Kontaktieren Sie uns", addr_l: "Standort", addr_v: "Region Rotterdam, Niederlande",
        phone_l: "Telefon", phone_v: "+31 686183850", email_l: "E-Mail", email_v: "info@milasoffshore.nl",
        hours_l: "Antwortzeit", hours_v: "Innerhalb von 24 Stunden, Montag bis Freitag", whatsapp_cta: "Per WhatsApp chatten", success: "Vielen Dank, Ihre Anfrage wurde gesendet. Wir melden uns in Kürze bei Ihnen.", error: "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt."
      },
      admin: {
        login_title: "Admin-Anmeldung", login_sub: "Verwalten Sie Ihren Produktkatalog.", pass_label: "Zugangscode", pass_ph: "Zugangscode eingeben",
        login_btn: "Anmelden", login_hint: "Demo-Zugangscode: milasoffshore2026", login_error: "Falscher Code, bitte erneut versuchen.",
        dash: "Übersicht", listings: "Angebote", add_new: "Neues Angebot hinzufügen", logout: "Abmelden",
        stat_total: "Angebote insgesamt", stat_month: "In dieser Sitzung hinzugefügt", stat_cat: "Kategorien", stat_lang: "Website-Sprachen",
        table_t: "Alle Angebote", th_name: "Name", th_cat: "Kategorie", th_cond: "Zustand", th_status: "Status", th_actions: "Aktionen",
        form_t: "Neues Angebot hinzufügen", f_name: "Teilename", f_name_ph: "z. B. Marine-Dieselgenerator 200kW",
        f_cat: "Kategorie", f_cond: "Zustand",
        f_desc: "Kurzbeschreibung", f_desc_ph: "Kurze Beschreibung, die auf der Katalogkarte angezeigt wird...",
        f_specs: "Technische Daten", f_specs_ph: "Eine pro Zeile, z. B.\nLeistung: 200kW\nSpannung: 400V\nBetriebsstunden: 3.200h",
        save: "Angebot speichern", cancel: "Abbrechen", saved_toast: "Angebot zum Katalog hinzugefügt.",
        deleted_toast: "Angebot entfernt.", empty: "Noch keine Angebote. Fügen Sie das erste hinzu.",
        note_t: "Über dieses Admin-Panel", note_p: "Dies ist eine funktionierende Demo: Von Ihnen hinzugefügte Angebote werden in Ihrem Browser (localStorage) gespeichert, damit Sie den gesamten Ablauf ausprobieren können. Für eine Live-Website sollte dies mit einem kleinen Backend oder einer Datenbank verbunden werden, damit Angebote für jeden Besucher und jedes Gerät synchronisiert werden. Sagen Sie uns Bescheid, dann richten wir das als Nächstes ein."
      },
      brand: { name: "Milas Offshore", sub: "Marine- & Offshore-Lieferung" }
    }
  };

  function getLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.includes(saved)) return saved;
    } catch (e) {}
    return DEFAULT_LANG;
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    apply(lang);
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  function t(key, lang) {
    lang = lang || getLang();
    const parts = key.split(".");
    let node = dict[lang];
    for (const p of parts) { if (!node) break; node = node[p]; }
    if (node === undefined) {
      // fallback to english
      node = dict.en;
      for (const p of parts) { if (!node) break; node = node[p]; }
    }
    return node === undefined ? key : node;
  }

  function apply(lang) {
    lang = lang || getLang();
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key, lang);
      if (typeof val === "string") el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      const val = t(key, lang);
      if (typeof val === "string") el.innerHTML = val;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const key = el.getAttribute("data-i18n-ph");
      const val = t(key, lang);
      if (typeof val === "string") el.setAttribute("placeholder", val);
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      const val = t(key, lang);
      if (typeof val === "string") document.title = val;
    });

    // language switch UI state
    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang-btn") === lang);
    });
    document.querySelectorAll("[data-lang-label]").forEach((el) => {
      el.textContent = lang.toUpperCase();
    });
  }

  function init() {
    apply(getLang());
    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang-btn")));
    });
  }

  return { getLang, setLang, t, apply, init, SUPPORTED };
})();

document.addEventListener("DOMContentLoaded", I18N.init);
