/**
 * Automatische Generierung der kompletten cities.csv für alle 90 NRW-Städte
 * Inkl. SEO-Texte, Stadtteile und alle 30 Felder
 */

import * as fs from 'fs';
import * as path from 'path';
import { manualDistricts } from './manual-districts-update';

interface BaseCityData {
  slug: string;
  name: string;
  lat: string;
  lng: string;
  postalCode: string;
  street: string;
  district: string;
}

interface FullCityData extends BaseCityData {
  h1: string;
  title: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  serviceArea1: string;
  serviceArea2: string;
  serviceArea3: string;
  serviceArea4: string;
  serviceArea5: string;
  stadtteil1: string;
  stadtteil2: string;
  stadtteil3: string;
  keyword1: string;
  keyword2: string;
  keyword3: string;
  keyword4: string;
  keyword5: string;
  imageKeyword: string;
  imageAlt: string;
  aboutText: string;
  ctaText: string;
  schemaBusinessName: string;
}

/**
 * Stadtteile-Mapping für die größten NRW-Städte
 * stadtteil1-3 = Featured-Stadtteile (direkt neben/in der Stadt)
 */
const cityDistricts: Record<string, { service: string[], featured: string[] }> = {
  'Köln': {
    service: ['Bayenthal', 'Bickendorf', 'Bilderstöckchen', 'Braunsfeld', 'Buchforst'],
    featured: ['Buchheim', 'Deutz', 'Ehrenfeld']
  },
  'Düsseldorf': {
    service: ['Altstadt', 'Augustinusviertel', 'Baumberg', 'Berghausen', 'Bilk'],
    featured: ['Carlstadt', 'Derendorf', 'Düsseltal']
  },
  'Dortmund': {
    service: ['Alt-Scharnhorst', 'Barop', 'Benninghofen', 'Berghofen', 'Bittermark'],
    featured: ['Brackel', 'Brechten', 'Brünninghausen']
  },
  'Essen': {
    service: ['Altendorf', 'Altenessen', 'Altstadt', 'Bedingrade', 'Bergeborbeck'],
    featured: ['Bergerhausen', 'Bochold', 'Borbeck-Mitte']
  },
  'Duisburg': {
    service: ['Alt-Walsum', 'Altstadt', 'Angerhausen', 'Asterlagen', 'Baerl'],
    featured: ['Beeck', 'Beeckerwerth', 'Bergheim']
  },
  'Bochum': {
    service: ['Altenbochum', 'Altenhöfen', 'Bergen', 'Dahlhausen', 'Eickel'],
    featured: ['Eppendorf', 'Gerthe', 'Grumme']
  },
  'Wuppertal': {
    service: ['Arrenberg', 'Barmen', 'Brill', 'Cronenberg', 'Dönberg'],
    featured: ['Dornap', 'Eckbusch', 'Elberfeld']
  },
  'Bielefeld': {
    service: ['Brackwede', 'Dornberg', 'Gadderbaum', 'Heepen', 'Jöllenbeck'],
    featured: ['Mitte', 'Schildesche', 'Senne']
  },
  'Bonn': {
    service: ['Bad Godesberg', 'Beuel', 'Hangelar', 'Hardtberg', 'Niederberg'],
    featured: ['Niederdollendorf', 'Oberdollendorf', 'Römlinghoven']
  },
  'Münster': {
    service: ['Aaseestadt', 'Alt-Coerde', 'Angelmodde', 'Angelmodde-Waldsiedlung', 'Bahnhof'],
    featured: ['Berg Fidel', 'Coerde', 'Geistviertel']
  },
  'Mönchengladbach': {
    service: ['Dahl', 'Eicken', 'Geistenbeck', 'Giesenkirchen', 'Hamern'],
    featured: ['Hardterbroich-Pesch', 'Hehn', 'Hockstein']
  },
  'Gelsenkirchen': {
    service: ['Altstadt', 'Beckhausen', 'Bismarck', 'Buer', 'Bulmke-Hüllen'],
    featured: ['Erle', 'Feldmark', 'Hassel']
  },
  'Aachen': {
    service: ['Afden', 'Atsch', 'Bardenberg', 'Bettendorf', 'Beverau'],
    featured: ['Brand', 'Burtscheid', 'Büsbach']
  },
  'Krefeld': {
    service: ['Bockum', 'Cracau', 'Dießem', 'Elfrath', 'Fischeln'],
    featured: ['Forstwald', 'Gartenstadt', 'Gatherhof']
  },
  'Oberhausen': {
    service: ['Alsfeld', 'Alstaden', 'Borbeck', 'Buschhausen', 'Hamborn'],
    featured: ['Hiesfeld', 'Holten', 'Klosterhardt']
  },
  'Hagen': {
    service: ['Altenhagen', 'Bathey', 'Berchum', 'Bissingheim', 'Boele'],
    featured: ['Boelerheide', 'Boloh', 'Braschoß']
  },
  'Hamm': {
    service: ['Anrath', 'Beberich', 'Berge', 'Bockert', 'Bockum'],
    featured: ['Braam-Ostwennemar', 'Daberg', 'Eicken']
  },
  'Mülheim an der Ruhr': {
    service: ['Broich', 'Dümpten', 'Eppinghofen', 'Heimaterde', 'Heißen'],
    featured: ['Holthausen', 'Menden', 'Mintard']
  },
  'Leverkusen': {
    service: ['Alkenrath', 'Bergisch Neukirchen', 'Bürrig', 'Fixheide', 'Hitdorf'],
    featured: ['Küppersteg', 'Lützenkirchen', 'Manfort']
  },
  'Solingen': {
    service: ['Aufderhöhe', 'Burg', 'Central', 'Gräfrath', 'Höhscheid'],
    featured: ['Merscheid', 'Mitte', 'Ohligs-Mitte']
  },
  'Herne': {
    service: ['Altenhöfen', 'Baukau', 'Börnig', 'Eickel', 'Holsterhausen'],
    featured: ['Holthausen', 'Röhlinghausen', 'Sodingen']
  },
  'Neuss': {
    service: ['Augustinusviertel', 'Barbaraviertel', 'Dreikönigenviertel', 'Erfttal', 'Furth-Mitte'],
    featured: ['Furth-Nord', 'Furth-Süd', 'Gnadental']
  },
  'Paderborn': {
    service: ['Elsen', 'Marienloh', 'Mastbruch', 'Stadtmitte', 'Stadtmitte'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
  'Bottrop': {
    service: ['Batenbrock', 'Boy', 'Ebel', 'Eigen', 'Fuhlenbrock'],
    featured: ['Holthausen', 'Overhagen', 'Vonderort']
  },
  'Recklinghausen': {
    service: ['Alt-Marl', 'Auf dem großen Bruch', 'Berghausen', 'Brassert', 'Drewer'],
    featured: ['Essel', 'Grullbad', 'Hamm']
  },
  'Remscheid': {
    service: ['Lennep', 'Lüttringhausen', 'Reinshagen', 'Stadtmitte', 'Stadtmitte'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
  'Bergisch Gladbach': {
    service: ['Alt-Frankenforst', 'Bensberg', 'Frankenforst', 'Gronau', 'Hand'],
    featured: ['Hebborn', 'Heidkamp', 'Kippekausen']
  },
  'Moers': {
    service: ['Asberg', 'Bornheim', 'Eick Ost', 'Eick West', 'Genend'],
    featured: ['Hochstraß', 'Hülsdonk', 'Hülshorst']
  },
  'Siegen': {
    service: ['Aue', 'Birlenbach', 'Bürbach', 'Dillnhütten', 'Eiserfeld'],
    featured: ['Eisern', 'Geisweid', 'Gosenbach']
  },
  'Gütersloh': {
    service: ['Avenwedde', 'Blankenhagen', 'Ebbesloh', 'Friedrichsdorf', 'Hollen'],
    featured: ['Isselhorst', 'Kattenstroth', 'Niehorst']
  },
  'Witten': {
    service: ['Annen', 'Auf dem Schnee', 'Bommern', 'Eichlinghofen', 'Ende'],
    featured: ['Herbede', 'Heven', 'Kley']
  },
  'Iserlohn': {
    service: ['Bredenbruch', 'Gerlingsen', 'Grüne', 'Hombruch', 'Ihmert'],
    featured: ['Iserlohner Heide', 'Iserlohnerheide', 'Letmathe']
  },
  'Düren': {
    service: ['Rölsdorf', 'Stadtmitte', 'Stadtmitte', 'Stadtmitte', 'Stadtmitte'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
  'Ratingen': {
    service: ['Lintorf', 'Ost', 'Süd', 'Tiefenbroich', 'West'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
  'Lünen': {
    service: ['Alstedde', 'Beckinghausen', 'Brambauer', 'Gahmen', 'Geistviertel'],
    featured: ['Horstmar', 'Lippholthausen', 'Lünen-Süd']
  },
  'Marl': {
    service: ['Alt-Marl', 'Brassert', 'Drewer', 'Hamm', 'Hüls'],
    featured: ['Lenkerbeck', 'Scherlebeck', 'Sinsen']
  },
  'Velbert': {
    service: ['Am Berg', 'Birth', 'Bonsfeld', 'Frohnberg', 'Heidhausen'],
    featured: ['Hopscheiderberg', 'Kocherscheidt', 'Kostenberg']
  },
  'Minden': {
    service: ['Aminghausen', 'Bärenkämpen', 'Barkhausen', 'Bölhorst', 'Dankersen'],
    featured: ['Dützen', 'Grille', 'Haddenhausen']
  },
  'Troisdorf': {
    service: ['Altenrath', 'Bergheim', 'Brückberg', 'Dreesch', 'Eschmar'],
    featured: ['Friedrich-Wilhelms-Hütte', 'Hangelar', 'Kriegsdorf']
  },
  'Viersen': {
    service: ['Anrath', 'Beberich', 'Bockert', 'Helenabrunn', 'Hoser'],
    featured: ['Hülsdonk', 'Neersen', 'Rahser']
  },
  'Rheine': {
    service: ['Altenrheine', 'Bentlage', 'Dorenkamp', 'Dutum', 'Eschendorf'],
    featured: ['Gellendorf', 'Kanalhafen', 'Rodde']
  },
  'Lüdenscheid': {
    service: ['Ahelle', 'Augustenthal', 'Baukloh', 'Bierbaum', 'Born'],
    featured: ['Brügge', 'Brügger Höh', 'Brüninghausen']
  },
  'Castrop-Rauxel': {
    service: ['Becklem', 'Beckum', 'Behringhausen', 'Bladenhorst', 'Castrop'],
    featured: ['Deininghausen', 'Dingen', 'Frohlinde']
  },
  'Gladbeck': {
    service: ['Brauck', 'Butendorf', 'Ellinghorst', 'Rentfort', 'Rosenhügel'],
    featured: ['Schultendorf', 'Zweckel', 'Zentrum']
  },
  'Dorsten': {
    service: ['Alt-Wulfen', 'Altstadt', 'Barkenberg', 'Feldmark', 'Hardt'],
    featured: ['Hervest', 'Holsterhausen', 'Zentrum']
  },
  'Detmold': {
    service: ['Heidenoldendorf', 'Hiddesen', 'Jerxen', 'Klüt', 'Nienhagen'],
    featured: ['Orbke', 'Pivitsheide V. H.', 'Pivitsheide V. L.']
  },
  'Arnsberg': {
    service: ['Rusch', 'Wiehagen', 'Stadtmitte', 'Stadtmitte', 'Stadtmitte'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
  'Bocholt': {
    service: ['Biemenhorst', 'Feldmark', 'Holtwick', 'Lowick', 'Mussum'],
    featured: ['Stenern', 'Zentrum', 'Zentrum']
  },
  'Lippstadt': {
    service: ['Stadtmitte', 'Innenstadt', 'Altstadt', 'Neustadt', 'Zentrum'],
    featured: ['Nord', 'Süd', 'West']
  },
  'Dinslaken': {
    service: ['Averbruch', 'Blumenviertel', 'Bruch', 'Eppinghoven', 'Hagenviertel'],
    featured: ['Hiesfeld', 'Lohberg', 'Oberlohberg']
  },
  'Lübbecke': {
    service: ['Ahmserort', 'Aminghausen', 'Bad Holzhausen', 'Bärenkämpen', 'Barkhausen'],
    featured: ['Blasheim', 'Bölhorst', 'Dankersen']
  },
  'Kerpen': {
    service: ['Stadtmitte', 'Innenstadt', 'Altstadt', 'Neustadt', 'Zentrum'],
    featured: ['Nord', 'Süd', 'West']
  },
  'Wesel': {
    service: ['Bislich', 'Feldmark', 'Flüren', 'Fusternberg', 'Lackhausen'],
    featured: ['Obrighoven', 'Schepersfeld', 'Wittenberg']
  },
  'Grevenbroich': {
    service: ['Elsen', 'Gewerbegebiet Ost', 'Hemmerden', 'Kapellen', 'Laach'],
    featured: ['Neu-Elfgen', 'Neuenhausen', 'Noithausen']
  },
  'Herten': {
    service: ['Bertlich', 'Disteln', 'Langenbochum', 'Scherlebeck', 'Stadtmitte'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
  'Bergheim': {
    service: ['Asberg', 'Asterlagen', 'Essenberg', 'Friemersheim', 'Hochemmerich'],
    featured: ['Hochstraß', 'Hohenbudberg', 'Homberg']
  },
  'Dormagen': {
    service: ['Dormagen-Mitte', 'Hackenbroich', 'Horrem', 'Stadtmitte', 'Stadtmitte'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
  'Unna': {
    service: ['Afferde', 'Alte Heide', 'Buderuskolonie', 'Kessebüren', 'Königsborn'],
    featured: ['Lünern', 'Massen', 'Mühlhausen']
  },
  'Langenfeld': {
    service: ['Berghausen', 'Immigrath', 'Reusrath', 'Richrath', 'Wiescheid'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
  'Willich': {
    service: ['Anrath', 'Neersen', 'Schiefbahn', 'Stadtmitte', 'Stadtmitte'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
  'Hürth': {
    service: ['Alstädten-Burbach', 'Alt-Hürth', 'Braunsfeld', 'Efferen', 'Hermülheim'],
    featured: ['Kalscheuren', 'Klettenberg', 'Lindenthal']
  },
  'Hilden': {
    service: ['Forstbach', 'Kalstert', 'Karnap', 'Kleef', 'Meide'],
    featured: ['Pungshaus', 'Strauch', 'Zentrum']
  },
  'Meerbusch': {
    service: ['Bösinghoven', 'Bovert', 'Büderich', 'Lank-Latum', 'Necklenbroich'],
    featured: ['Niederdonk', 'Ossum', 'Osterath']
  },
  'Pulheim': {
    service: ['Stadtmitte', 'Innenstadt', 'Altstadt', 'Neustadt', 'Zentrum'],
    featured: ['Nord', 'Süd', 'West']
  },
  'Wesseling': {
    service: ['Berzdorf', 'Keldenich', 'Stadtmitte', 'Stadtmitte', 'Stadtmitte'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
  'Euskirchen': {
    service: ['Stadtmitte', 'Innenstadt', 'Altstadt', 'Neustadt', 'Zentrum'],
    featured: ['Nord', 'Süd', 'West']
  },
  'Niederkassel': {
    service: ['Mondorf', 'Rheidt', 'Stadtmitte', 'Stadtmitte', 'Stadtmitte'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
  'Erkelenz': {
    service: ['Stadtmitte', 'Innenstadt', 'Altstadt', 'Neustadt', 'Zentrum'],
    featured: ['Nord', 'Süd', 'West']
  },
  'Sankt Augustin': {
    service: ['Hangelar', 'Menden', 'Mülldorf', 'Niederberg', 'Niederpleis'],
    featured: ['Ort', 'Schmerbroich', 'Zentrum']
  },
  'Königswinter': {
    service: ['Niederdollendorf', 'Oberdollendorf', 'Römlinghoven', 'Stadtmitte', 'Stadtmitte'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
  'Brühl': {
    service: ['Badorf', 'Heide', 'Kierberg', 'Pingsdorf', 'Vochem'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
  'Siegburg': {
    service: ['Braschoß', 'Brückberg', 'Deichhaus', 'Dreesch', 'Kaldauen'],
    featured: ['Schneffelrath', 'Schreck', 'Seligenthal']
  },
  'Hennef': {
    service: ['Braschoß', 'Deichhaus', 'Edgoven', 'Geisbach', 'Geistingen'],
    featured: ['Kaldauen', 'Niederpleis', 'Schmerbroich']
  },
  'Kleve': {
    service: ['Unterstadt', 'Stadtmitte', 'Stadtmitte', 'Stadtmitte', 'Stadtmitte'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
  'Frechen': {
    service: ['Bachem', 'Benzelrath', 'Buschbell', 'Grube Carl', 'Hücheln'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
  'Übach-Palenberg': {
    service: ['Boscheln', 'Holthausen', 'Palenberg', 'Rimburg', 'Übach'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
  'Kamp-Lintfort': {
    service: ['Kamp', 'Niersenbruch', 'Saalhoff', 'Stadtmitte', 'Stadtmitte'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
  'Erkrath': {
    service: ['Alt-Erkrath', 'Hochdahl', 'Unterfeldhaus', 'Stadtmitte', 'Stadtmitte'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
  'Meckenheim': {
    service: ['Merl', 'Stadtmitte', 'Stadtmitte', 'Stadtmitte', 'Stadtmitte'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
  'Mettmann': {
    service: ['Alt-Erkrath', 'Am Berg', 'Aprath', 'Birth', 'Düssel'],
    featured: ['Forstbach', 'Goldberg', 'Hassel']
  },
  'Rheinbach': {
    service: ['Stadtmitte', 'Innenstadt', 'Altstadt', 'Neustadt', 'Zentrum'],
    featured: ['Nord', 'Süd', 'West']
  },
  'Gevelsberg': {
    service: ['Asbeck', 'Berge', 'Klostermark', 'Silschede', 'Stadtmitte'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
  'Emsdetten': {
    service: ['Berge', 'Detten', 'Dorfbauernschaft', 'Hollingen', 'Westum'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
  'Schwerte': {
    service: ['Ergste', 'Geisecke', 'Holzen-Rosen', 'Villigst', 'Wandhofen'],
    featured: ['Westhofen', 'Zentrum', 'Zentrum']
  },
  'Erftstadt': {
    service: ['Stadtmitte', 'Innenstadt', 'Altstadt', 'Neustadt', 'Zentrum'],
    featured: ['Nord', 'Süd', 'West']
  },
  'Rheda-Wiedenbrück': {
    service: ['Batenhorst', 'Bosfeld', 'Lintel', 'Rheda', 'St. Vit'],
    featured: ['Wiedenbrück', 'Zentrum', 'Zentrum']
  },
  'Bünde': {
    service: ['Ahle', 'Bustedt', 'Dünne', 'Ennigloh', 'Hüffen'],
    featured: ['Hunnebrock', 'Mitte', 'Muckum']
  },
  'Kaarst': {
    service: ['Büttgen', 'Driesch', 'Holzbüttgen', 'Linning', 'Vorst'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
  'Meschede': {
    service: ['Bockum', 'Stadtmitte', 'Stadtmitte', 'Stadtmitte', 'Stadtmitte'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
  'Schwelm': {
    service: ['Linderhausen', 'Loh', 'Möllenkotten', 'Stadtmitte', 'Stadtmitte'],
    featured: ['Zentrum', 'Zentrum', 'Zentrum']
  },
};

/**
 * Generiert realistische Stadtteile basierend auf Stadt-Größe
 */
function generateDistricts(cityName: string): { service: string[], featured: string[] } {
  // PROFI: Prüfe zuerst manuelle Overrides (für Städte mit fehlenden Nominatim-Daten)
  if (manualDistricts[cityName]) {
    return manualDistricts[cityName];
  }
  
  // Check ob wir spezifische Stadtteile von Nominatim haben
  if (cityDistricts[cityName]) {
    return cityDistricts[cityName];
  }
  
  // Generische Stadtteile für kleinere Städte (sollte nicht mehr vorkommen!)
  const genericService = [
    'Stadtmitte',
    'Innenstadt',
    'Altstadt',
    'Neustadt',
    'Zentrum'
  ];
  
  const genericFeatured = [
    'Nord',
    'Süd',
    'Bahnhofsviertel'
  ];
  
  return {
    service: genericService,
    featured: genericFeatured
  };
}

/**
 * Liest die Base-CSV und parsed sie
 */
function readBaseCsv(filePath: string): BaseCityData[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n').filter(line => line.trim());
  
  const cities: BaseCityData[] = [];
  
  // Skip header
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    
    // Parse CSV-Line (mit Quotes für street)
    const parts: string[] = [];
    let inQuotes = false;
    let current = '';
    
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        parts.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    parts.push(current);
    
    if (parts.length >= 7) {
      cities.push({
        slug: parts[0],
        name: parts[1],
        lat: parts[2],
        lng: parts[3],
        postalCode: parts[4],
        street: parts[5],
        district: parts[6]
      });
    }
  }
  
  return cities;
}

/**
 * Generiert rotierende Title-Varianten für bessere SEO
 */
function generateTitle(cityName: string, index: number): string {
  const titles = [
    `Gebäudereinigung ${cityName} | Schmitter – Hygiene für Büro & Praxis`,
    `Gebäudereinigung ${cityName} | Schmitter – sauber. pünktlich. fair.`,
    `Gebäudereinigung ${cityName} | Schmitter – für Unternehmen & Praxen`,
    `Gebäudereinigung ${cityName} | Schmitter – Fenster`,
    `Gebäudereinigung ${cityName} | Schmitter – zuverlässig & gründlich`,
    `Gebäudereinigung ${cityName} | Schmitter – Start in 5–7 Werktagen`,
    `Gebäudereinigung ${cityName} | Schmitter – fair & transparent`,
    `Gebäudereinigung ${cityName} | Schmitter – effizient & günstig`
  ];
  
  return titles[index % titles.length];
}

/**
 * Generiert rotierende H1-Überschriften (8 Varianten)
 */
function generateH1(cityName: string, index: number): string {
  const h1Variants = [
    `Gebäudereinigung ${cityName} – professionell & planbar`,
    `Gebäudereinigung in ${cityName} für Unternehmen & Praxen`,
    `Professionelle Gebäudereinigung in ${cityName}`,
    `Gebäudereinigung ${cityName}: sauber, pünktlich, fair`,
    `Büro- & Unterhaltsreinigung in ${cityName}`,
    `Gebäudereinigung ${cityName} – zuverlässig & gründlich`,
    `Nachhaltige Gebäudereinigung in ${cityName}`,
    `Gebäudereinigung ${cityName} mit Festpreisen`
  ];
  
  return h1Variants[index % h1Variants.length];
}

/**
 * Generiert rotierende Hero-Subtitles (12 Varianten)
 */
function generateHeroSubtitle(cityName: string, index: number): string {
  const subtitles = [
    `Reinigungsservice für Büros & Praxen in ${cityName} – feste Turnusse, dokumentierte Qualität, schnelle Starttermine.`,
    `Sauberkeit mit System: planbare Turnusse, klare Checklisten und faire Konditionen in ${cityName}.`,
    `Effizient & budgetfreundlich – transparente Festpreise, zuverlässige Teams und messbare Qualität in ${cityName}.`,
    `Nachhaltig reinigen in ${cityName}: ökologische Mittel, geschulte Teams und lückenlose QS-Dokumentation.`,
    `Für Unternehmen & Praxen in ${cityName}: verlässlich, gründlich, terminsicher – inklusive Qualitätskontrolle.`,
    `Mehr Wert fürs Budget: optimierte Reinigungsabläufe, klare Angebote und schnelle Verfügbarkeit in ${cityName}.`,
    `Green Cleaning in ${cityName}: ressourcenschonend, materialverträglich und wirksam – ohne Kompromisse bei der Hygiene.`,
    `Planbar sauber: feste Ansprechpartner, definierte Leistungsverzeichnisse und faire Preise in ${cityName}.`,
    `Schneller Start in ${cityName}: Besichtigung, Fixpreis-Angebot, Übergabe an ein eingespieltes Team.`,
    `Ökologisch & effizient – reduzierte Chemie, smarte Prozesse und konstante Ergebnisse in ${cityName}.`,
    `Transparente Reinigung für ${cityName}: dokumentierte Leistungen, nachvollziehbare Kosten, messbare Qualität.`,
    `Hygiene für Büro & Praxis in ${cityName} – verlässlich, budgetbewusst und nachhaltig umgesetzt.`
  ];
  
  return subtitles[index % subtitles.length];
}

/**
 * Generiert rotierende Meta Descriptions (16 Varianten)
 */
function generateMetaDescription(cityName: string, index: number): string {
  const descriptions = [
    `Gebäudereinigung in ${cityName} für höchste Ansprüche: planbare Abläufe, dokumentierte Qualität, feste Ansprechpartner. Jetzt unverbindlich beraten lassen.`,
    `Sauberkeit mit Methode in ${cityName}: klare Leistungsverzeichnisse, messbare Ergebnisse, zuverlässige Teams. Besichtigung kostenlos anfragen.`,
    `Professionelle Gebäudereinigung ${cityName}: diskret, gründlich, terminsicher. Transparente Angebote und schnelle Starttermine für Unternehmen & Praxen.`,
    `Gebäudereinigung ${cityName} – fair kalkuliert: effiziente Prozesse, klare Festpreise, verlässliche Ergebnisse. Angebot in kurzer Zeit erhalten.`,
    `Mehr Leistung fürs Budget: Reinigung in ${cityName} mit nachvollziehbaren Kosten und konstanter Qualität. Jetzt Fixpreis-Angebot sichern.`,
    `Nachhaltige Gebäudereinigung in ${cityName}: materialschonend, wirkungsstark, ressourcensensibel. Green Cleaning ohne Abstriche bei der Hygiene.`,
    `Ökologisch reinigen in ${cityName}: reduzierte Chemie, geschulte Teams, konstante Qualität. Verantwortungsvoll sauber – für Büro & Praxis.`,
    `Büro- & Praxisreinigung in ${cityName}: hohe Hygienestandards, diskrete Abläufe, verlässliche Dokumentation. Ideal für den geregelten Alltag.`,
    `Industrielle Reinigung ${cityName}: robuste Prozesse, sichere Durchführung, klare Ergebnisse. Sauberkeit, die Produktion nicht ausbremst.`,
    `Planbar sauber in ${cityName}: Besichtigung, Leistungsverzeichnis, regelmäßige Qualitätskontrollen. Transparente Kommunikation von Start bis Abschluss.`,
    `Strukturiert reinigen in ${cityName}: definierte Zuständigkeiten, messbare Qualität, kurze Wege zum Angebot. Jetzt Termin reservieren.`,
    `Schnell startklar in ${cityName}: zügiger Angebotsweg, festes Team, reibungsloser Übergang. Sauberkeit ohne Mehraufwand.`,
    `Gebäudereinigung ${cityName} ohne Umwege: verständliche Pakete, planbare Termine, verlässliche Resultate. Anfrage in wenigen Klicks.`,
    `Risikoarm zur konstanten Hygiene in ${cityName}: geprüfte Abläufe, dokumentierte Leistungen, feste Ansprechpartner. Jetzt informieren.`,
    `Verlässliche Gebäudereinigung ${cityName}: gründlich, termintreu, nachvollziehbar. Perfekt für Unternehmen mit hohen Anforderungen.`,
    `Gebäudereinigung ${cityName}: planbar, gründlich, fair. Klare Angebote & schnelle Starttermine – jetzt Besichtigung anfragen.`
  ];
  
  return descriptions[index % descriptions.length];
}

/**
 * Erweitert Base-Daten zu vollständigen City-Daten
 */
function enrichCityData(baseCity: BaseCityData, index: number): FullCityData {
  const districts = generateDistricts(baseCity.name);
  
  return {
    ...baseCity,
    h1: generateH1(baseCity.name, index),
    title: generateTitle(baseCity.name, index),
    metaDescription: generateMetaDescription(baseCity.name, index),
    heroTitle: `Ihre Gebäudereinigung in ${baseCity.name}`,
    heroSubtitle: generateHeroSubtitle(baseCity.name, index),
    serviceArea1: districts.service[0],
    serviceArea2: districts.service[1],
    serviceArea3: districts.service[2],
    serviceArea4: districts.service[3],
    serviceArea5: districts.service[4],
    stadtteil1: districts.featured[0],
    stadtteil2: districts.featured[1],
    stadtteil3: districts.featured[2],
    keyword1: `Gebäudereinigung ${baseCity.name}`,
    keyword2: `Büroreinigung ${baseCity.name}`,
    keyword3: `Reinigungsfirma ${baseCity.name}`,
    keyword4: `Reinigungsservice ${baseCity.name}`,
    keyword5: `Industriereinigung ${baseCity.name}`,
    imageKeyword: `Gebäudereinigung ${baseCity.name}`,
    imageAlt: `Schmitter Gebäudereinigung in ${baseCity.name} – Professioneller Reinigungsservice`,
    aboutText: `Schmitter ist Ihr zuverlässiger Partner für professionelle Gebäudereinigung in ${baseCity.name}. Mit über 15 Jahren Erfahrung bieten wir maßgeschneiderte Reinigungslösungen für Unternehmen aller Größen. Unsere zertifizierten Reinigungskräfte sorgen für Sauberkeit und Hygiene in Ihren Räumlichkeiten.`,
    ctaText: `Jetzt kostenloses Angebot für ${baseCity.name} anfragen`,
    schemaBusinessName: `Schmitter Gebäudereinigung ${baseCity.name}`
  };
}

/**
 * Schreibt Full-City-Daten in CSV
 */
function writeCitiesCsv(cities: FullCityData[], outputPath: string): void {
  let csv = 'slug,name,lat,lng,postalCode,street,district,h1,title,metaDescription,heroTitle,heroSubtitle,serviceArea1,serviceArea2,serviceArea3,serviceArea4,serviceArea5,stadtteil1,stadtteil2,stadtteil3,keyword1,keyword2,keyword3,keyword4,keyword5,imageKeyword,imageAlt,aboutText,ctaText,schemaBusinessName\n';
  
  cities.forEach(city => {
    const row = [
      city.slug,
      city.name,
      city.lat,
      city.lng,
      city.postalCode,
      `"${city.street}"`,
      city.district,
      `"${city.h1}"`,
      `"${city.title}"`,
      `"${city.metaDescription}"`,
      `"${city.heroTitle}"`,
      `"${city.heroSubtitle}"`,
      city.serviceArea1,
      city.serviceArea2,
      city.serviceArea3,
      city.serviceArea4,
      city.serviceArea5,
      city.stadtteil1,
      city.stadtteil2,
      city.stadtteil3,
      `"${city.keyword1}"`,
      `"${city.keyword2}"`,
      `"${city.keyword3}"`,
      `"${city.keyword4}"`,
      `"${city.keyword5}"`,
      `"${city.imageKeyword}"`,
      `"${city.imageAlt}"`,
      `"${city.aboutText}"`,
      `"${city.ctaText}"`,
      `"${city.schemaBusinessName}"`
    ];
    
    csv += row.join(',') + '\n';
  });
  
  fs.writeFileSync(outputPath, csv, 'utf-8');
}

/**
 * Hauptfunktion
 */
async function main() {
  console.log('🏗️  Schmitter - Gebäudereinigung - Vollständige Städte-CSV Generator\n');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  const baseCsvPath = path.join(process.cwd(), 'data', 'nrw-cities-90-base.csv');
  const outputCsvPath = path.join(process.cwd(), 'data', 'cities.csv');
  
  // Base-Daten lesen
  console.log('📖 Lese Base-Daten...');
  const baseCities = readBaseCsv(baseCsvPath);
  console.log(`✅ ${baseCities.length} Städte geladen\n`);
  
  // Erweitern
  console.log('🔨 Erweitere Stadt-Daten...\n');
  const fullCities: FullCityData[] = [];
  
  baseCities.forEach((baseCity, index) => {
    const progress = `[${String(index + 1).padStart(2, '0')}/${baseCities.length}]`;
    process.stdout.write(`${progress} 🏙️  ${baseCity.name.padEnd(25)}... `);
    
    const fullCity = enrichCityData(baseCity, index);
    fullCities.push(fullCity);
    
    console.log(`✅ ${fullCity.serviceArea1}, ${fullCity.serviceArea2}, ${fullCity.serviceArea3}`);
  });
  
  // Schreiben
  console.log('\n💾 Schreibe cities.csv...');
  writeCitiesCsv(fullCities, outputCsvPath);
  
  console.log(`✅ Gespeichert: ${outputCsvPath}\n`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  console.log('📊 STATISTIK:\n');
  console.log(`   ✅ Städte: ${fullCities.length}`);
  console.log(`   ✅ Felder pro Stadt: 30`);
  console.log(`   ✅ Gesamt-Datenzeilen: ${fullCities.length * 30}`);
  console.log(`   ✅ SEO-Texte: ${fullCities.length * 5} (h1, title, description, etc.)`);
  console.log(`   ✅ Stadtteile: ${fullCities.length * 8} (5 Service + 3 Featured)`);
  console.log('\n🎯 NÄCHSTE SCHRITTE:\n');
  console.log('   1. Führe aus: npm run generate:cities');
  console.log('   2. Starte Dev-Server: npm run dev');
  console.log('   3. Teste: http://localhost:3001/einsatzgebiete/koln');
  console.log('   4. Build für Production: npm run build\n');
  console.log('🚀 90 Stadt-Landingpages sind bereit!\n');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

main().catch(error => {
  console.error('\n❌ Fehler:', error);
  process.exit(1);
});

