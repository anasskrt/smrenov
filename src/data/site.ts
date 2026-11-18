// Contenu du site — source unique.
// Les valeurs entre crochets (ou en XX) sont des emplacements à compléter :
// elles s'affichent en rouge sur le site tant qu'elles ne sont pas remplacées.

export const isTodo = (value: string) => /\[|XX/.test(value);

export const site = {
	name: 'smrenov24',
	legalName: 'SMRENOV24',
	url: 'https://smrenov24.fr',

	// Ville ciblée (zone de chalandise principale)
	city: 'Périgueux',
	department: 'Dordogne',

	// Coordonnées (NAP) : identiques partout, y compris sur la fiche Google Business Profile.
	phone: '06 27 02 72 86',
	phoneHref: 'tel:+33627027286',
	phoneIntl: '+33627027286',
	email: 'smrenov24@gmail.com',
	emailHref: 'mailto:smrenov24@gmail.com',
	whatsappHref: 'https://wa.me/33627027286',
	address: '11 allée de Sourbarie',
	postalCode: '24460',
	addressCity: "Château-l'Évêque",
	radiusKm: '100',
	experience: '20 ans',

	// Lien Google pour laisser un avis (fiche Google Business Profile).
	googleReviewsUrl: 'https://g.page/r/CRANlgASBZPYEBI/review',

	// Adresse d'envoi du formulaire de devis. Laisser vide tant que l'envoi n'est pas branché.
	formEndpoint: '',

	// Informations légales (mentions légales)
	legal: {
		owner: 'Mohammed SEDDIK',
		ownerDisplay: 'Mohammed Seddik',
		status: 'Entrepreneur individuel (micro-entreprise)',
		siret: '979 896 404 00014',
		siren: '979 896 404',
		vat: 'TVA non applicable, article 293 B du CGI',
		host: {
			name: 'IONOS SARL',
			address: '7 place de la Gare, BP 70109, 57200 Sarreguemines Cedex',
			phone: '09 70 80 89 11',
		},
	},
};

export const steps = [
	{ title: 'Vous nous contactez', text: 'Par téléphone ou avec le formulaire de devis.' },
	{ title: 'Nous prenons les cotes', text: 'Visite chez vous pour mesurer vos ouvertures.' },
	{ title: 'Vous recevez le devis', text: 'Détaillé, gratuit et sans engagement.' },
	{ title: 'Nous posons', text: 'Pose, réglages et finitions.' },
];

// Zone d'intervention : 100 km autour de Périgueux.
// `map` : affichée sur la carte schématique (coordonnées GPS approximatives du bourg).
export type Place = { name: string; group: 'proche' | 'dordogne' | 'limitrophe'; lat?: number; lon?: number; map?: boolean; main?: boolean; base?: boolean };

export const zone: Place[] = [
	{ name: 'Périgueux', group: 'proche', lat: 45.1846, lon: 0.7214, map: true, main: true },
	{ name: "Château-l'Évêque", group: 'proche', lat: 45.2444, lon: 0.6869, map: true, base: true },
	{ name: 'Trélissac', group: 'proche' },
	{ name: 'Boulazac Isle Manoire', group: 'proche' },
	{ name: 'Chancelade', group: 'proche' },
	{ name: 'Coulounieix-Chamiers', group: 'proche' },
	{ name: 'Marsac-sur-l’Isle', group: 'proche' },
	{ name: 'Champcevinel', group: 'proche' },
	{ name: 'Saint-Astier', group: 'dordogne', lat: 45.145, lon: 0.5281, map: true },
	{ name: 'Brantôme en Périgord', group: 'dordogne', lat: 45.3622, lon: 0.6497, map: true },
	{ name: 'Thiviers', group: 'dordogne', lat: 45.4153, lon: 0.9192, map: true },
	{ name: 'Nontron', group: 'dordogne', lat: 45.5292, lon: 0.6617, map: true },
	{ name: 'Ribérac', group: 'dordogne', lat: 45.25, lon: 0.3389, map: true },
	{ name: 'Mussidan', group: 'dordogne', lat: 45.0356, lon: 0.3622, map: true },
	{ name: 'Montpon-Ménestérol', group: 'dordogne', lat: 45.0094, lon: 0.1586, map: true },
	{ name: 'Bergerac', group: 'dordogne', lat: 44.851, lon: 0.482, map: true },
	{ name: 'Sarlat-la-Canéda', group: 'dordogne', lat: 44.889, lon: 1.2167, map: true },
	{ name: 'Terrasson-Lavilledieu', group: 'dordogne', lat: 45.13, lon: 1.3014, map: true },
	{ name: 'Brive-la-Gaillarde', group: 'limitrophe', lat: 45.1589, lon: 1.5331, map: true },
	{ name: 'Angoulême', group: 'limitrophe', lat: 45.6484, lon: 0.1562, map: true },
	{ name: 'Limoges', group: 'limitrophe', lat: 45.8336, lon: 1.2611, map: true },
	{ name: 'Libourne', group: 'limitrophe', lat: 44.9153, lon: -0.2439, map: true },
];

// Avis : uniquement de vrais avis clients (Google Business Profile). Ne jamais en inventer.
// Les avis ci-dessous sont des EXEMPLES de mise en page : ils restent entre crochets (affichés en rouge)
// et doivent être remplacés par de vrais avis, copiés tels quels, avant la mise en ligne.
export const rating = { score: '[4,9]', count: '[12]' };

export const reviews: { author: string; place: string; service: string; rating: number | null; text: string }[] = [
	{
		author: '[Exemple : Sophie M.]',
		place: '[Commune]',
		service: "Porte d'entrée",
		rating: 5,
		text: "[Exemple] Nous avons remplacé notre vieille porte d'entrée en bois. Prise de mesures sur place, bons conseils pour le choix du modèle et une pose très propre. La maison est bien plus chaude, nous sommes ravis.",
	},
	{
		author: '[Exemple : Jean-Pierre L.]',
		place: '[Commune]',
		service: 'Portail',
		rating: 5,
		text: '[Exemple] Portail posé comme prévu, travail soigné et chantier laissé propre. Artisan ponctuel, à l’écoute et de bon conseil. Je recommande sans hésiter.',
	},
	{
		author: '[Exemple : Nadia B.]',
		place: '[Commune]',
		service: 'Portes intérieures',
		rating: 4,
		text: "[Exemple] Changement de toutes les portes du couloir. Devis clair, bon contact et finitions impeccables : le couloir n'a plus rien à voir.",
	},
];
