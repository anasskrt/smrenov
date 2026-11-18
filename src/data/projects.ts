// Réalisations — les 6 premières apparaissent sur la page d'accueil (la 1re en grand : photo paysage de préférence).
// `service` doit correspondre au slug d'une prestation (src/data/services.ts).
// `place` : commune du chantier (utile pour le SEO local), à compléter.
// `image` : photo dans src/assets/realisations/ (Astro la redimensionne et la convertit en WebP).
// `focus` : cadrage quand la photo est recadrée (valeur CSS object-position), centré par défaut.
// `before` : photo « avant travaux », affichée en vignette sur la carte.
// La 1re réalisation de chaque prestation sert aussi de photo en tête de sa page.

import type { ImageMetadata } from 'astro';

import portailMotif from '../assets/realisations/portail-battant-anthracite-motif.jpg';
import porteBlancheApres from '../assets/realisations/porte-entree-blanche-apres.jpg';
import porteBoisAvant from '../assets/realisations/porte-entree-bois-avant.jpg';
import portesInterieures from '../assets/realisations/portes-interieures-bois.jpg';
import portesInterieuresAvant from '../assets/realisations/portes-interieures-avant.jpg';
import fenetrePierre from '../assets/realisations/fenetre-anthracite-facade-pierre.jpg';
import garageCintre from '../assets/realisations/porte-garage-cintree-blanche.jpg';
import portailPortillon from '../assets/realisations/portail-portillon-anthracite.jpg';
import portailBleu from '../assets/realisations/portail-battant-bleu.jpg';
import porteGrise from '../assets/realisations/porte-entree-grise.jpg';
import fenetrePetitsBois from '../assets/realisations/fenetre-petits-bois-blanche.jpg';
import fenetreToit from '../assets/realisations/fenetre-de-toit.jpg';
import portailBlanc from '../assets/realisations/portail-blanc-ajoure.jpg';
import porteVitree from '../assets/realisations/porte-entree-vitree-anthracite.jpg';
import garageAnthracite from '../assets/realisations/porte-garage-enroulable-anthracite.jpg';
import porteBlanche from '../assets/realisations/porte-entree-blanche.jpg';
import garageBlanc from '../assets/realisations/porte-garage-enroulable-blanche.jpg';
import porteFenetre from '../assets/realisations/porte-fenetre-petits-bois.jpg';

export type Project = {
	title: string;
	service: string;
	place: string;
	image: ImageMetadata;
	focus?: string;
	before?: ImageMetadata;
};

export const projects: Project[] = [
	{ title: 'Portail battant anthracite à motif', service: 'portails', place: '[Commune]', image: portailMotif },
	{
		title: "Remplacement d'une porte d'entrée",
		service: 'portes-entree',
		place: '[Commune]',
		image: porteBlancheApres,
		before: porteBoisAvant,
	},
	{
		title: 'Portes intérieures en bois',
		service: 'portes-interieures',
		place: '[Commune]',
		image: portesInterieures,
		before: portesInterieuresAvant,
	},
	{ title: 'Fenêtre anthracite sur façade en pierre', service: 'fenetres', place: '[Commune]', image: fenetrePierre, focus: 'center 35%' },
	{ title: 'Porte de garage cintrée', service: 'portes-garage', place: '[Commune]', image: garageCintre, focus: 'center 60%' },
	{ title: 'Portail et portillon anthracite', service: 'portails', place: '[Commune]', image: portailPortillon, focus: 'center 35%' },
	{ title: 'Portail battant bleu', service: 'portails', place: '[Commune]', image: portailBleu },
	{ title: "Porte d'entrée grise vitrée", service: 'portes-entree', place: '[Commune]', image: porteGrise },
	{ title: 'Fenêtre à petits bois', service: 'fenetres', place: '[Commune]', image: fenetrePetitsBois },
	{ title: 'Fenêtre de toit', service: 'fenetres-de-toit', place: '[Commune]', image: fenetreToit, focus: 'center 40%' },
	{ title: 'Portail blanc ajouré', service: 'portails', place: '[Commune]', image: portailBlanc, focus: 'center 45%' },
	{ title: "Porte d'entrée vitrée anthracite", service: 'portes-entree', place: '[Commune]', image: porteVitree },
	{ title: 'Porte de garage enroulable anthracite', service: 'portes-garage', place: '[Commune]', image: garageAnthracite },
	{ title: "Porte d'entrée blanche", service: 'portes-entree', place: '[Commune]', image: porteBlanche },
	{ title: 'Porte de garage enroulable blanche', service: 'portes-garage', place: '[Commune]', image: garageBlanc },
	{ title: 'Porte-fenêtre à petits bois', service: 'fenetres', place: '[Commune]', image: porteFenetre, focus: 'left 45%' },
];

/** Photo principale d'une prestation : celle de sa première réalisation. */
export const coverFor = (service: string) => projects.find((project) => project.service === service);
