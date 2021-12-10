const snails = [
    {
        name: 'Candy Cane Snail',
        scientificName: 'Liguus virgineus',
        image: 'https://top10animal.com/wp-content/uploads/2021/06/Ebh1LYEWkAIY2Yt.jpg',
        shellLength: '30–60 mm (1.2–2.4 in)',
        habitat: 'Carribean',
        info: 'Liguus virgineus, also known as the candy cane snail, is a species of tree-living snail native to the Caribbean. It has a distinctive conical shell of 30–60 mm (1.2–2.4 in). The background of the shell is white; there are typically 3–6 spiraling stripes of various colors, including brown, black, pink, green, purple, or light yellow. The shells are typically right-handed with seven or eight whorls. Though it spends most of its life in trees, it descends to lay its eggs in moist soil. It consumes various kinds of lichens throughout its life, as well as twigs and small branches. Its shells have been discovered in midden heaps in the Dominican Republic, indicating that it was a food resource for indigenous peoples. Early European explorers to Hispaniola brought the shells back to Europe, and it has been depicted in scientific illustrations since 1684, making it first neotropical land snail that was scientifically illustrated.',
    },
    {
        name: 'Giant African Land Snail',
        scientificName: 'Lissachatina fulica',
        image: 'https://a-z-animals.com/media/2019/11/Giant-African-land-snail-on-hand.jpg',
        shellLength: '198.12 mm (7.8 inches)',
        habitat: 'East Africa',
        info: 'This snail species has been considered a significant cause of pest issues around the world. Internationally, it is the most frequently occurring invasive species of snail. Outside of its native range, this snail thrives in many types of habitat in areas with mild climates. It feeds voraciously and is a vector for plant pathogens, causing severe damage to agricultural crops and native plants. It competes with native snail taxa, is a nuisance pest of urban areas, and spreads human disease. This snail is listed as one of the top 100 invasive species in the world.',
    },
    {
        name: 'Golden Elephant Snail',
        scientificName: 'Tylomelania Zemis',
        image: 'https://www.aquariadise.com/wp-content/uploads/2020/03/rabbit-snail.jpg',
        shellLength: '7.62 - 12.7 mm (3-5 inches)',
        habitat: 'Indonesia',
        info: 'Golden Elephant Snails, the scientific name Tylomelania, originate in Sulawesi, Indonesia, where they can be found in lakes in the mountains. The are also commonly refered to as "Rabbit Snails". Although there are approximately 50 different species of Rabbit Snails that have been identified, a limited number of these species, also known as Poso Snails and Elephant Snails, are available in the aquarium hobby.These freshwater snails differ from traditionally observed snails in that they are larger, more active, and spawn fewer babies than other snail species.',
    },
    {
        name: 'Melting Snail',
        scientificName: 'Megalobulimus capillaceus',
        image: 'https://featuredcreature.com/wp-content/uploads/2014/02/megalobulimus-capillaceus.gif',
        shellLength: '61 mm (2.4 inch)',
        habitat: 'South America',
        info: 'Flat-bodied South American snails are also called "melting" snails (Megalobulimus capillaceus) because their pancake-thin bodies appear to spill out like melting butter on all sides of their shells. They are air-breathing and endemic to San Martín, Huánuco, and Cusco, Peru, although some scientists define the Cusco population as a whole other species (Megalobulimus florezi).5 There are more than 50 species within the genus Megalobulimus, belonging to the subfamily Megalobuliminae.',
    },
    {
        name: 'Geography Cones',
        scientificName: 'Conus geographus',
        image: '',
        shellLength: '10 to 15 cm (4 to 6 in)',
        habitat: 'Red Sea, Indian Ocean, Indo-Pacific Reefs',
        info: " Its shell has a distinctive mottled appearance and is highly coveted among collectors, but what really sets it apart from other snails? It's the most venomous snail — and, in fact, one of the most venomous creatures — in the world. It fires a complex concoction of toxins via a harpoonlike tooth propelled from an extendable proboscis at speeds of up to 400 mph.",
    },
    {
        name: 'Violet Sea Snails',
        scientificName: 'Janthina janthina',
        image: 'https://inaturalist-open-data.s3.amazonaws.com/photos/11315809/large.jpg',
        shellLength: '3.5 cms (1.4 inches)',
        habitat: 'Worldwide',
        info: 'The beautiful purple shell of the violet sea snail (Janthina janthina) is only part of what makes this gastropod so interesting. Otherwise known as the bubble-raft snail, the critter collects bubbles in its mucus, then uses its bubbly concoction as a raft for long-distance ocean travel. Floating is their only means of transportation as they cannot swim. They can be found in warm tropical and temperate waters worldwide but high concentrations of them occur in the subtropical Atlantic, Indian, and Pacific oceans.',
    },
    {
        name: 'Minute Land Snail',
        scientificName: 'Opisthostoma vermiculum',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Plectostoma_obliquedentatum.jpg/1200px-Plectostoma_obliquedentatum.jpg',
        shellLength: '1.5 mm (0.059 in)',
        habitat: 'Malaysia',
        info: 'These snails are found only on limestone karsts. There is significant quarring activities in the area, and this makes the species particularly vulnerable to extinction. This is the first snail reported that has a shell which shows four discernible coiling axes. The body whorls of the shell thrice detach and twice reattach to preceding whorls without any support. The detached whorls coil around three secondary axes in addition to their primary teleoconch axis. All specimens showed these features in a homogeneous way.',
    },
    {
        name: 'Croatian Cave Snails',
        scientificName: 'Zospeum tholussum',
        image: 'https://www.sciencenews.org/wp-content/uploads/2013/11/notebook_introducing_primary.jpg',
        shellLength: '2 mm (0.08 in)',
        habitat: 'Croatia',
        info: 'This ghostly Croatian cave snail (Zospeum tholussum) was discovered deep in the Lukina Jama–Trojama cave system — the deepest cave in Croatia and 14th deepest in the world — in 2013. Apart from being so recently described, it is also particularly noteworthy for being almost entirely transparent — even its shell. Because the see-through gastropods spend their entire lives in extreme darkness, they have no sense of sight. The second whorl of their shells has a characteristic dome-like shape. They are also extremely slow-moving and may depend on passive transportation through running water or larger animals for dispersal.',
    },
    {
        name: "Hairy Triton's Trumpets",
        scientificName: 'Cymatium pileare',
        image: 'http://www.mollusca.co.nz/images_shells/3200/3118_Monoplex_parthenopeus_3.jpg',
        shellLength: ' 38–140 mm (1.5–5.5 in)',
        habitat: 'Worldwide',
        info: "This tropical benthic sea snails can be found at a depth range of 0 – 50 m. They mainly live on hard and coarse detritic bottoms, in coral reef areas. This species is widespread in the Atlantic, in the Red Sea and in the Indo-Western Pacific from East and South Africa, to eastern Polynesia, north to southern Japan and Hawaii and south to southern Queensland. Though it does have a rather voracious appetite, it's herbivorous and doesn't prey on other animals. Hairy triton's trumpets live in shallow water around coral.",
    },
]

module.exports = {
    snails,
}