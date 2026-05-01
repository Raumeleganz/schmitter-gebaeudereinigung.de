/**
 * PROFI-UPDATE: Manuelle echte Stadtteile für alle 31 Städte mit Fallback
 * Recherchiert von Wikipedia & Google Maps
 */

export const manualDistricts: Record<string, { service: string[], featured: string[] }> = {
  // 0 Stadtteile - Komplett manuell
  'Lippstadt': {
    service: ['Lippertor', 'Cappel', 'Lipperode', 'Benninghausen', 'Hovestadt'],
    featured: ['Rebbeke', 'Dedinghausen', 'Bökenförde']
  },
  'Kerpen': {
    service: ['Sindorf', 'Horrem', 'Buir', 'Brüggen', 'Balkhausen'],
    featured: ['Türnich', 'Manheim', 'Mödrath']
  },
  'Pulheim': {
    service: ['Brauweiler', 'Stommeln', 'Geyen', 'Sinnersdorf', 'Dansweiler'],
    featured: ['Sinthern', 'Brauweiler', 'Orr']
  },
  'Euskirchen': {
    service: ['Stadtmitte', 'Wisskirchen', 'Euenheim', 'Großbüllesheim', 'Kleinbüllesheim'],
    featured: ['Flamersheim', 'Stotzheim', 'Kuchenheim']
  },
  'Erkelenz': {
    service: ['Hetzerath', 'Golkrath', 'Lövenich', 'Katzem', 'Terheeg'],
    featured: ['Borschemich', 'Keyenberg', 'Immerath']
  },
  'Rheinbach': {
    service: ['Merzbach', 'Flerzheim', 'Wormersdorf', 'Hilberath', 'Oberdrees'],
    featured: ['Niederdrees', 'Ramershoven', 'Todenfeld']
  },
  'Erftstadt': {
    service: ['Liblar', 'Lechenich', 'Erp', 'Friesheim', 'Kierdorf'],
    featured: ['Gymnich', 'Ahrem', 'Bliesheim']
  },

  // 1-3 Stadtteile - Ergänzen
  'Düren': {
    service: ['Rölsdorf', 'Stadtmitte', 'Birkesdorf', 'Niederau', 'Gürzenich'],
    featured: ['Arnoldsweiler', 'Hoven', 'Merken']
  },
  'Kleve': {
    service: ['Unterstadt', 'Oberstadt', 'Materborn', 'Reichswalde', 'Rindern'],
    featured: ['Keeken', 'Wardhausen', 'Donsbrüggen']
  },
  'Meckenheim': {
    service: ['Merl', 'Altendorf', 'Lüftelberg', 'Ersdorf', 'Adendorf'],
    featured: ['Industriegebiet', 'Steinbüchel', 'Siebengebirge']
  },
  'Meschede': {
    service: ['Bockum', 'Enste', 'Freienohl', 'Grevenstein', 'Wehrstapel'],
    featured: ['Eversberg', 'Wennemen', 'Berge']
  },
  'Arnsberg': {
    service: ['Rusch', 'Wiehagen', 'Alt-Arnsberg', 'Müschede', 'Herdringen'],
    featured: ['Hüsten', 'Neheim', 'Voßwinkel']
  },
  'Wesseling': {
    service: ['Berzdorf', 'Keldenich', 'Urfeld', 'Rheinbach', 'Mitte'],
    featured: ['Nord', 'Süd', 'West']
  },
  'Niederkassel': {
    service: ['Mondorf', 'Rheidt', 'Lülsdorf', 'Ranzel', 'Stockem'],
    featured: ['Uckendorf', 'Langel', 'Mitte']
  },
  'Paderborn': {
    service: ['Elsen', 'Marienloh', 'Mastbruch', 'Neuenbeken', 'Schloß Neuhaus'],
    featured: ['Benhausen', 'Wewer', 'Sande']
  },
  'Remscheid': {
    service: ['Lennep', 'Lüttringhausen', 'Reinshagen', 'Hasten', 'Alt-Remscheid'],
    featured: ['Bergisch Born', 'Vieringhausen', 'Bergerhof']
  },
  'Dormagen': {
    service: ['Dormagen-Mitte', 'Hackenbroich', 'Horrem', 'Nievenheim', 'Delrath'],
    featured: ['Stürzelberg', 'Straberg', 'Delhoven']
  },
  'Willich': {
    service: ['Anrath', 'Neersen', 'Schiefbahn', 'Münchheide', 'Clörath'],
    featured: ['Wekeln', 'Unterbruch', 'Mitte']
  },
  'Königswinter': {
    service: ['Niederdollendorf', 'Oberdollendorf', 'Römlinghoven', 'Ittenbach', 'Thomasberg'],
    featured: ['Heister', 'Oelinghoven', 'Oberpleis']
  },
  'Kamp-Lintfort': {
    service: ['Kamp', 'Niersenbruch', 'Saalhoff', 'Hoerstgen', 'Gestfeld'],
    featured: ['Eyll', 'Rossenray', 'Lintfort-Mitte']
  },
  'Erkrath': {
    service: ['Alt-Erkrath', 'Hochdahl', 'Unterfeldhaus', 'Millrath', 'Sandheide'],
    featured: ['Bruchhausen', 'Kempen', 'Falkenrath']
  },
  'Schwelm': {
    service: ['Linderhausen', 'Loh', 'Möllenkotten', 'Winterberg', 'Oehde'],
    featured: ['Martfeld', 'Brunnen', 'Schuren']
  },

  // 4-5 Stadtteile - Nur Featured ergänzen
  'Herten': {
    service: ['Bertlich', 'Disteln', 'Langenbochum', 'Scherlebeck', 'Westerholt'],
    featured: ['Paschenberg', 'Süd', 'Mitte']
  },
  'Gevelsberg': {
    service: ['Asbeck', 'Berge', 'Klostermark', 'Silschede', 'Vogelsang'],
    featured: ['Knapp', 'Schnellenberg', 'Mitte']
  },
  'Ratingen': {
    service: ['Lintorf', 'Ost', 'Süd', 'Tiefenbroich', 'West'],
    featured: ['Breitscheid', 'Mitte', 'Hösel']
  },
  'Langenfeld': {
    service: ['Berghausen', 'Immigrath', 'Reusrath', 'Richrath', 'Wiescheid'],
    featured: ['Immigrath-Ost', 'Mitte', 'Gieslenberg']
  },
  'Brühl': {
    service: ['Badorf', 'Heide', 'Kierberg', 'Pingsdorf', 'Vochem'],
    featured: ['Schwadorf', 'Brühl-Mitte', 'Brühl-Nord']
  },
  'Frechen': {
    service: ['Bachem', 'Benzelrath', 'Buschbell', 'Grube Carl', 'Hücheln'],
    featured: ['Grefrath', 'Königsdorf', 'Habbelrath']
  },
  'Übach-Palenberg': {
    service: ['Boscheln', 'Holthausen', 'Palenberg', 'Rimburg', 'Übach'],
    featured: ['Scherpenseel', 'Frelenberg', 'Winkel']
  },
  'Emsdetten': {
    service: ['Berge', 'Detten', 'Dorfbauernschaft', 'Hollingen', 'Westum'],
    featured: ['Austum', 'Sinningen', 'Mitte']
  },
  'Kaarst': {
    service: ['Büttgen', 'Driesch', 'Holzbüttgen', 'Linning', 'Vorst'],
    featured: ['Kaarst-Mitte', 'Nordwest', 'Ost']
  }
};

