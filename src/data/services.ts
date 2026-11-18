// Prestations — une page est générée pour chacune sur /prestations/[slug].
// Règle de rédaction : décrire le métier et les options, sans promesse chiffrée (délais, prix, garanties)
// tant qu'elle n'est pas confirmée par l'artisan.

export type Service = {
	slug: string;
	title: string;
	shortTitle: string;
	short: string;
	h1: string;
	metaTitle: string;
	metaDescription: string;
	photo: string;
	/** Proportion du cadre de la photo d'en-tête (largeur, hauteur) */
	cotes: [number, number];
	intro: [string, string];
	optionsTitle: string;
	options: { title: string; text: string }[];
	faq: { q: string; a: string }[];
};

export const services: Service[] = [
	{
		slug: 'portes-entree',
		title: "Portes d'entrée",
		shortTitle: "Portes d'entrée",
		short: "Portes d'entrée sécurisées et esthétiques, pour protéger votre maison et soigner son entrée.",
		h1: "Pose de porte d'entrée à Périgueux",
		metaTitle: "Porte d'entrée à Périgueux, pose et remplacement | smrenov24",
		metaDescription:
			"Pose et remplacement de portes d'entrée à Périgueux et alentours : modèles isolants, sécurisés et accordés à votre façade. Prise de cotes et devis gratuit.",
		photo: "Photo d'une porte d'entrée posée",
		cotes: [1000, 2150],
		intro: [
			"La porte d'entrée est la première chose que l'on voit de votre maison. C'est aussi l'un de ses points faibles face au froid et aux tentatives d'effraction.",
			"Nous remplaçons votre ancienne porte par un modèle choisi avec vous : plus isolant, plus sûr, et accordé au style de la façade. De la dépose de l'ancienne porte jusqu'aux finitions, nous nous occupons de tout.",
		],
		optionsTitle: 'Une porte choisie selon vos priorités',
		options: [
			{ title: 'Isolation', text: "Un vantail isolé et des joints performants limitent les courants d'air et les pertes de chaleur par l'entrée." },
			{ title: 'Sécurité', text: 'Serrure multipoints, cylindre renforcé, paumelles anti-dégondage : le niveau de protection se choisit avec vous.' },
			{ title: 'Style', text: 'Porte pleine ou vitrée, moderne ou traditionnelle, coloris et poignée : la porte s’accorde à votre façade.' },
			{ title: 'Sur mesure', text: "Chaque porte est commandée aux cotes exactes de votre ouverture, relevées lors de la visite." },
		],
		faq: [
			{
				q: "Faut-il refaire la maçonnerie pour changer une porte d'entrée ?",
				a: "Dans la plupart des cas, non : la nouvelle porte est fabriquée aux dimensions de l'ouverture existante. Si l'ouverture doit être modifiée, nous vous le signalons dès la visite, avant le devis.",
			},
			{
				q: 'Comment choisir le niveau de sécurité ?',
				a: "Il dépend de l'exposition de la maison et de vos habitudes : nombre de points de fermeture, type de cylindre, vitrage feuilleté pour une porte vitrée. Nous vous présentons les options lors de la visite.",
			},
		],
	},
	{
		slug: 'fenetres',
		title: 'Fenêtres, portes-fenêtres et baies vitrées',
		shortTitle: 'Fenêtres et baies vitrées',
		short: "Fenêtres et portes-fenêtres en bois, PVC ou aluminium, ainsi que des baies vitrées pour ouvrir vos pièces sur l'extérieur.",
		h1: 'Pose de fenêtres et baies vitrées à Périgueux',
		metaTitle: 'Fenêtres et baies vitrées à Périgueux | smrenov24',
		metaDescription:
			'Fenêtres, portes-fenêtres et baies vitrées en bois, PVC ou aluminium à Périgueux et alentours. Remplacement ou pose en neuf, prise de cotes à domicile, devis gratuit.',
		photo: "Photo d'une fenêtre ou d'une baie vitrée posée",
		cotes: [1450, 2150],
		intro: [
			"Des fenêtres qui ferment mal, de la condensation sur les vitres, une pièce bruyante ou trop sombre : changer ses fenêtres transforme le confort d'une maison au quotidien.",
			"Nous posons des fenêtres et portes-fenêtres en bois, PVC ou aluminium, ainsi que des baies vitrées pour ouvrir vos pièces sur le jardin ou la terrasse. Chaque menuiserie est fabriquée sur mesure, aux cotes relevées chez vous.",
		],
		optionsTitle: 'Bois, PVC ou aluminium',
		options: [
			{ title: 'Bois', text: "Chaleureux et naturellement isolant, il s'accorde aux maisons anciennes et aux façades en pierre. Il demande un entretien régulier." },
			{ title: 'PVC', text: "Bon isolant thermique, sans entretien et le plus accessible en prix. Il convient à la grande majorité des rénovations." },
			{ title: 'Aluminium', text: 'Des profilés fins pour plus de vitrage et de lumière, très résistants dans le temps. Le choix privilégié pour les grandes ouvertures.' },
			{ title: 'Baies vitrées', text: 'Coulissantes ou à frappe, elles agrandissent l’ouverture sur l’extérieur et font entrer la lumière dans les pièces de vie.' },
		],
		faq: [
			{
				q: 'Rénovation ou dépose totale : quelle différence ?',
				a: "En rénovation, la nouvelle fenêtre est posée sur l'ancien dormant conservé : c'est plus rapide et sans travaux de maçonnerie, mais on perd un peu de surface vitrée. La dépose totale retire l'ancien cadre pour retrouver toute la surface de vitrage. Nous vous conseillons la bonne solution lors de la visite.",
			},
			{
				q: 'Quel matériau choisir pour une maison en pierre ?',
				a: "Le bois s'intègre naturellement aux maisons anciennes du Périgord. L'aluminium et le PVC existent aussi dans des teintes et des profils adaptés : le choix dépend de votre budget, de l'entretien souhaité et du style de la façade.",
			},
			{
				q: 'Double ou triple vitrage ?',
				a: 'Le double vitrage convient à la plupart des maisons. Le triple vitrage se justifie surtout sur les façades nord ou très exposées au froid.',
			},
		],
	},
	{
		slug: 'vitrage',
		title: 'Changement de vitrage',
		shortTitle: 'Changement de vitrage',
		short: 'Remplacement du vitrage : simple, double ou triple vitrage selon votre besoin.',
		h1: 'Changement de vitrage à Périgueux',
		metaTitle: 'Changement de vitrage à Périgueux | smrenov24',
		metaDescription:
			'Remplacement de vitrage à Périgueux et alentours : simple, double ou triple vitrage. Gardez vos menuiseries, changez seulement la vitre. Devis gratuit.',
		photo: "Photo d'un vitrage remplacé",
		cotes: [1100, 1250],
		intro: [
			"Une vitre fendue, un double vitrage embué entre ses deux faces, ou des fenêtres en bon état mais trop peu isolantes : il n'est pas toujours nécessaire de changer toute la fenêtre.",
			'Quand le cadre est sain, nous remplaçons uniquement le vitrage, en choisissant avec vous le type adapté à la pièce et à son exposition.',
		],
		optionsTitle: 'Simple, double ou triple vitrage',
		options: [
			{ title: 'Simple vitrage', text: 'Pour les dépendances non chauffées, les ateliers ou les menuiseries anciennes à conserver à l’identique.' },
			{ title: 'Double vitrage', text: "Le standard pour une pièce chauffée : bonne isolation thermique et meilleur confort acoustique qu'un simple vitrage." },
			{ title: 'Triple vitrage', text: 'Une isolation renforcée pour les façades nord et les pièces exposées au froid. Plus lourd, il demande une menuiserie capable de le porter.' },
			{ title: 'Vitre cassée', text: 'Remplacement d’une vitre fendue ou brisée, aux dimensions exactes de la feuillure.' },
		],
		faq: [
			{
				q: 'Mon double vitrage est embué entre les deux vitres, que faire ?',
				a: "La buée entre les deux vitres signale que le joint d'étanchéité du vitrage a cédé : il a perdu une partie de son pouvoir isolant. Il faut remplacer le vitrage, pas forcément la fenêtre.",
			},
			{
				q: 'Peut-on mettre un double vitrage sur une ancienne fenêtre ?',
				a: "Cela dépend de la profondeur de la feuillure et de l'état du bois. Nous vérifions sur place si la menuiserie peut recevoir un vitrage plus épais ou s'il vaut mieux la remplacer.",
			},
		],
	},
	{
		slug: 'fenetres-de-toit',
		title: 'Fenêtres de toit',
		shortTitle: 'Fenêtres de toit',
		short: 'Pose de fenêtres de toit pour un apport en lumière naturelle.',
		h1: 'Pose de fenêtres de toit à Périgueux',
		metaTitle: 'Pose de fenêtres de toit à Périgueux | smrenov24',
		metaDescription:
			'Pose et remplacement de fenêtres de toit à Périgueux et alentours : plus de lumière naturelle sous les combles. Prise de cotes et devis gratuit.',
		photo: "Photo d'une fenêtre de toit posée",
		cotes: [780, 980],
		intro: [
			"Des combles aménagés sombres, une salle de bain sans fenêtre, une chambre sous les toits mal ventilée : une fenêtre de toit apporte la lumière là où une fenêtre classique est impossible.",
			'Nous posons des fenêtres de toit en création ou en remplacement d’un ancien modèle, avec le raccord d’étanchéité adapté à votre couverture.',
		],
		optionsTitle: 'Une fenêtre de toit adaptée à la pièce',
		options: [
			{ title: 'Ouverture', text: 'À rotation, pratique au quotidien, ou à projection pour dégager la vue et l’espace sous la fenêtre.' },
			{ title: 'Occultation', text: 'Store intérieur ou volet roulant extérieur pour assombrir une chambre et limiter la chaleur en été.' },
			{ title: 'Étanchéité', text: 'Un raccord adapté à votre couverture, tuiles ou ardoises, pour une pose étanche dans la durée.' },
			{ title: 'Remplacement', text: "Un ancien modèle qui fuit ou ferme mal peut être remplacé, souvent sans reprendre l'ouverture dans la toiture." },
		],
		faq: [
			{
				q: 'Faut-il une autorisation pour poser une fenêtre de toit ?',
				a: "Créer une fenêtre de toit modifie l'aspect extérieur de la maison : une déclaration préalable de travaux en mairie est en général nécessaire, avec des règles particulières en secteur protégé. Le remplacement à l'identique n'en demande généralement pas.",
			},
			{
				q: 'Peut-on poser une fenêtre de toit dans une pièce déjà aménagée ?',
				a: "Oui. La pose se fait par l'extérieur pour la partie couverture, puis l'habillage intérieur est repris autour de la fenêtre.",
			},
		],
	},
	{
		slug: 'volets',
		title: 'Volets roulants et volets battants',
		shortTitle: 'Volets',
		short: 'Des volets roulants et battants pour plus de confort et de sécurité.',
		h1: 'Volets roulants et battants à Périgueux',
		metaTitle: 'Volets roulants et battants à Périgueux | smrenov24',
		metaDescription:
			'Pose de volets roulants et de volets battants à Périgueux et alentours, pour plus de confort et de sécurité. Prise de cotes à domicile et devis gratuit.',
		photo: 'Photo de volets posés',
		cotes: [1400, 1250],
		intro: [
			'Des volets protègent du soleil en été, gardent la chaleur en hiver et ajoutent une barrière contre les intrusions.',
			'Nous posons des volets roulants, discrets une fois ouverts, et des volets battants, qui gardent le caractère des façades traditionnelles. Ils sont fabriqués aux dimensions de chaque ouverture.',
		],
		optionsTitle: 'Roulants ou battants',
		options: [
			{ title: 'Volets roulants', text: 'Coffre extérieur, intérieur ou intégré : la solution la plus simple à manœuvrer, idéale pour les grandes ouvertures.' },
			{ title: 'Volets battants', text: 'Le volet traditionnel des maisons de la région, pour garder le cachet de la façade.' },
			{ title: 'Manœuvre', text: "Manivelle, sangle ou moteur électrique : un volet motorisé s'ouvre d'un geste, à l'interrupteur ou à la télécommande." },
			{ title: 'Sécurité', text: 'Lames résistantes et verrous anti-relevage pour les volets roulants, barres et espagnolettes pour les battants.' },
		],
		faq: [
			{
				q: 'Peut-on motoriser des volets roulants existants ?',
				a: "C'est souvent possible si le coffre et le tablier sont en bon état : le moteur remplace la manivelle ou la sangle. Nous vérifions la faisabilité lors de la visite.",
			},
			{
				q: 'Volet roulant ou battant pour une maison ancienne ?',
				a: 'Les volets battants respectent le style des façades traditionnelles et sont parfois imposés en secteur protégé. Le volet roulant reste possible avec un coffre discret : nous vous orientons selon la maison.',
			},
		],
	},
	{
		slug: 'portails',
		title: 'Portails',
		shortTitle: 'Portails',
		short: "Portails manuels ou motorisés, selon l'usage que vous en avez.",
		h1: 'Pose de portail à Périgueux',
		metaTitle: 'Pose de portail manuel ou motorisé à Périgueux | smrenov24',
		metaDescription:
			'Pose de portails battants ou coulissants, manuels ou motorisés, à Périgueux et alentours. Étude de votre entrée sur place et devis gratuit.',
		photo: "Photo d'un portail posé",
		cotes: [3500, 1600],
		intro: [
			"Un portail se choisit autant pour l'usage que pour l'allure : voiture qui passe plusieurs fois par jour, accès piéton, terrain en pente ou allée courte.",
			'Nous posons des portails manuels ou motorisés, battants ou coulissants, adaptés à la configuration de votre entrée.',
		],
		optionsTitle: "Selon l'usage que vous en avez",
		options: [
			{ title: 'Battant', text: "Deux vantaux qui s'ouvrent vers l'intérieur : la solution classique quand l'allée offre assez de recul." },
			{ title: 'Coulissant', text: 'Il glisse le long de la clôture et libère tout le passage, idéal pour une allée courte ou en pente.' },
			{ title: 'Manuel ou motorisé', text: "La motorisation s'ouvre depuis la voiture avec une télécommande, un vrai confort pour un usage quotidien." },
			{ title: 'Portillon', text: 'Un portillon assorti pour l’accès piéton, sans ouvrir le grand portail.' },
		],
		faq: [
			{
				q: 'Portail battant ou coulissant ?',
				a: "Le battant demande un espace libre derrière le portail pour l'ouverture des vantaux, le coulissant une longueur de clôture dégagée sur le côté. La configuration de votre entrée décide souvent pour vous : nous l'étudions lors de la visite.",
			},
			{
				q: 'Peut-on motoriser un portail existant ?',
				a: "Oui dans de nombreux cas, si le portail est en bon état et ses gonds bien alignés. Sinon, il est préférable de remplacer l'ensemble.",
			},
			{
				q: 'Faut-il une autorisation pour installer un portail ?',
				a: "Selon la commune et son règlement d'urbanisme, l'installation d'un portail peut demander une déclaration préalable. Renseignez-vous en mairie avant les travaux.",
			},
		],
	},
	{
		slug: 'portes-garage',
		title: 'Portes de garage',
		shortTitle: 'Portes de garage',
		short: 'Portes de garage enroulables ou battantes, manuelles ou motorisées, posées sur mesure.',
		h1: 'Pose de porte de garage à Périgueux',
		metaTitle: 'Porte de garage à Périgueux, pose et remplacement | smrenov24',
		metaDescription:
			'Pose et remplacement de portes de garage enroulables ou battantes, manuelles ou motorisées, à Périgueux et alentours. Prise de cotes sur place et devis gratuit.',
		photo: "Photo d'une porte de garage posée",
		cotes: [2400, 2100],
		intro: [
			"Une porte de garage sert tous les jours : elle doit s'ouvrir sans effort, bien fermer et s'accorder avec la façade.",
			"Nous posons des portes de garage enroulables ou battantes, y compris dans des ouvertures cintrées ou hors standard, après une prise de cotes sur place.",
		],
		optionsTitle: 'Selon votre garage',
		options: [
			{ title: 'Enroulable', text: "Le tablier s'enroule dans un coffre au-dessus de l'ouverture : rien ne déborde devant ni dans le garage." },
			{ title: 'Battante', text: "Des vantaux qui s'ouvrent comme une porte, une solution simple qui s'adapte bien aux ouvertures anciennes ou cintrées." },
			{ title: 'Manuelle ou motorisée', text: "La motorisation permet d'ouvrir depuis la voiture avec une télécommande." },
			{ title: 'Sur mesure', text: "Les dimensions sont relevées chez vous pour que la porte s'adapte exactement à l'ouverture, même lorsqu'elle n'est pas standard." },
		],
		faq: [
			{
				q: 'Porte enroulable ou battante ?',
				a: "L'enroulable libère tout l'espace devant et dans le garage, mais demande un peu de hauteur au-dessus de l'ouverture pour le coffre. La battante convient bien aux ouvertures cintrées ou basses. Nous vous conseillons lors de la visite.",
			},
			{
				q: 'Peut-on poser une porte de garage dans une ouverture cintrée ?',
				a: "Oui, la porte est réalisée sur mesure pour suivre la forme de l'arc.",
			},
			{
				q: 'Faut-il une autorisation pour changer de porte de garage ?',
				a: "Si l'aspect de la façade change (couleur, forme, matériau), une déclaration préalable peut être demandée selon la commune. Renseignez-vous en mairie avant les travaux.",
			},
		],
	},
	{
		slug: 'portes-interieures',
		title: 'Portes intérieures',
		shortTitle: 'Portes intérieures',
		short: 'Des portes intérieures pour harmoniser vos espaces.',
		h1: 'Pose de portes intérieures à Périgueux',
		metaTitle: 'Pose de portes intérieures à Périgueux | smrenov24',
		metaDescription:
			'Pose et remplacement de portes intérieures à Périgueux et alentours : battantes, coulissantes ou à galandage, pour harmoniser vos pièces. Devis gratuit.',
		photo: 'Photo de portes intérieures posées',
		cotes: [830, 2040],
		intro: [
			'Changer les portes intérieures suffit souvent à rafraîchir toute une maison : des portes assorties, qui ferment bien et suivent la décoration.',
			'Nous posons des portes intérieures en remplacement de portes existantes ou en création, avec leurs huisseries et leurs finitions.',
		],
		optionsTitle: 'Des portes qui harmonisent vos espaces',
		options: [
			{ title: 'Battantes', text: "Le modèle classique, en bloc-porte complet ou en remplacement du seul vantail sur une huisserie conservée." },
			{ title: 'Coulissantes', text: 'Une porte qui glisse le long du mur, pour gagner la place du débattement.' },
			{ title: 'À galandage', text: 'La porte disparaît dans la cloison : idéal pour les petites pièces et les passages étroits.' },
			{ title: 'Finitions', text: "Poignées, coloris et vitrages assortis d'une pièce à l'autre pour un ensemble cohérent." },
		],
		faq: [
			{
				q: "Faut-il changer l'huisserie avec la porte ?",
				a: "Pas toujours. Si l'huisserie est saine et aux bonnes dimensions, seul le vantail peut être remplacé. Sinon, un bloc-porte complet est posé. Nous vous indiquons la solution lors de la visite.",
			},
			{
				q: 'Peut-on poser une porte à galandage dans un mur existant ?',
				a: 'Il faut ouvrir la cloison pour y intégrer le châssis. C’est simple dans une cloison légère, plus délicat dans un mur porteur : nous évaluons la faisabilité sur place.',
			},
		],
	},
	{
		slug: 'serrures',
		title: 'Serrures',
		shortTitle: 'Serrures',
		short: 'Pose ou remplacement de serrures.',
		h1: 'Pose et remplacement de serrures à Périgueux',
		metaTitle: 'Pose et remplacement de serrures à Périgueux | smrenov24',
		metaDescription:
			'Pose et remplacement de serrures à Périgueux et alentours : cylindre, serrure multipoints, serrure en applique. Renforcez la sécurité de vos portes. Devis gratuit.',
		photo: "Photo d'une serrure posée",
		cotes: [1000, 2150],
		intro: [
			"Une clé perdue, un emménagement, une serrure qui force ou une tentative d'effraction : autant de raisons de changer une serrure.",
			"Nous posons et remplaçons les serrures des portes d'entrée, des portes intérieures et des portes de service, avec un niveau de sécurité adapté à chacune.",
		],
		optionsTitle: 'Le bon niveau de sécurité',
		options: [
			{ title: 'Cylindre', text: 'Changer seulement le cylindre, ou barillet, suffit souvent après une perte de clés ou un emménagement.' },
			{ title: 'Serrure multipoints', text: "Plusieurs points de verrouillage sur la hauteur de la porte pour mieux résister à l'effraction." },
			{ title: 'Serrure en applique', text: 'Posée sur la face intérieure de la porte, elle renforce une porte existante sans la remplacer.' },
			{ title: 'Serrures intérieures', text: 'Serrures à condamnation pour la salle de bain et les toilettes, ou à clé pour un bureau.' },
		],
		faq: [
			{
				q: 'Faut-il changer toute la serrure ou seulement le cylindre ?',
				a: "Si le mécanisme fonctionne bien, remplacer le cylindre suffit à rendre les anciennes clés inutilisables. Une serrure usée, qui force ou qui a subi une effraction doit en revanche être remplacée entièrement.",
			},
			{
				q: "Qu'est-ce qu'un cylindre certifié A2P ?",
				a: "C'est une certification qui atteste la résistance à l'effraction, notée de une à trois étoiles. Certains assureurs en tiennent compte dans leurs contrats.",
			},
		],
	},
	{
		slug: 'stores-bannes',
		title: 'Stores bannes',
		shortTitle: 'Stores bannes',
		short: 'Des stores bannes pour profiter pleinement de votre extérieur à l’ombre.',
		h1: 'Pose de stores bannes à Périgueux',
		metaTitle: 'Pose de stores bannes à Périgueux | smrenov24',
		metaDescription:
			'Pose de stores bannes à Périgueux et alentours pour profiter de votre terrasse à l’ombre. Prise de cotes sur place et devis gratuit.',
		photo: "Photo d'un store banne posé",
		cotes: [4000, 3000],
		intro: [
			"Une terrasse en plein soleil devient vite inutilisable l'après-midi, et la chaleur entre dans la maison par les baies vitrées.",
			"Un store banne crée de l'ombre à la demande et se replie quand vous n'en avez plus besoin. Nous le posons sur votre façade ou sous l'avancée de toit, aux dimensions de la terrasse.",
		],
		optionsTitle: 'Un store adapté à votre terrasse',
		options: [
			{ title: 'Avec ou sans coffre', text: 'Le coffre protège la toile et le mécanisme une fois le store replié, pour une plus longue durée de vie.' },
			{ title: 'Manœuvre', text: 'Manivelle ou moteur, avec la possibilité d’ajouter un capteur de vent qui replie le store automatiquement.' },
			{ title: 'Toile', text: 'Coloris et motifs au choix, dans une toile résistante aux UV et aux intempéries.' },
			{ title: 'Fixation', text: 'En façade, en plafond ou sous chevrons, selon la configuration de la maison.' },
		],
		faq: [
			{
				q: 'Quelle avancée choisir ?',
				a: "Elle dépend de la profondeur de la terrasse et de l'orientation : plus le soleil est bas en fin de journée, plus l'avancée doit être grande pour garder l'ombre. Nous la déterminons avec vous lors de la visite.",
			},
			{
				q: 'Peut-on laisser le store sorti par vent fort ?',
				a: 'Non : un store banne doit être replié par vent fort. Sur un store motorisé, un capteur de vent le fait automatiquement.',
			},
		],
	},
	{
		slug: 'agencement',
		title: 'Agencement intérieur et menuiserie',
		shortTitle: 'Agencement intérieur',
		short: 'Aménagements sur mesure et travaux de menuiserie pour optimiser vos pièces et soigner les finitions.',
		h1: 'Agencement intérieur et menuiserie sur mesure à Périgueux',
		metaTitle: 'Agencement intérieur sur mesure à Périgueux | smrenov24',
		metaDescription:
			'Agencement intérieur et menuiserie sur mesure à Périgueux : rangements, placards, habillages et finitions pour optimiser vos pièces. Devis gratuit.',
		photo: "Photo d'un aménagement intérieur réalisé",
		cotes: [2400, 2500],
		intro: [
			"Un recoin perdu sous l'escalier, une chambre sans rangement, un mur qui mériterait une bibliothèque : le sur-mesure tire parti de chaque centimètre.",
			'Nous réalisons des aménagements adaptés à vos pièces et à vos besoins, ainsi que les travaux de menuiserie qui soignent les finitions.',
		],
		optionsTitle: "Des exemples d'aménagements",
		options: [
			{ title: 'Placards et dressings', text: 'Des rangements pensés pour la pièce, du sol au plafond, avec portes battantes ou coulissantes.' },
			{ title: 'Espaces perdus', text: 'Sous un escalier, sous les combles ou dans une niche : les formes irrégulières sont faites pour le sur-mesure.' },
			{ title: 'Meubles intégrés', text: 'Bibliothèques, bancs, plans de travail ou meubles encastrés, à la dimension exacte de l’espace.' },
			{ title: 'Finitions', text: 'Habillages, plinthes, encadrements et tablettes pour un intérieur soigné jusque dans les détails.' },
		],
		faq: [
			{
				q: "Comment se passe un projet d'agencement ?",
				a: 'Nous venons relever les dimensions et parler de vos besoins, puis nous vous proposons une solution chiffrée avant de réaliser l’aménagement.',
			},
			{
				q: 'Peut-on aménager sous un escalier ou sous les combles ?',
				a: 'Oui, ce sont justement les espaces où le sur-mesure est le plus utile : les formes irrégulières y rendent les meubles standards difficiles à intégrer.',
			},
		],
	},
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
