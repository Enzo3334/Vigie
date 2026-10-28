import { UserCheck, Activity, FileText, ClipboardList } from 'lucide-react'
import { SEANCES_URL } from './config.js'

// Contenu des manuels publiés sur le site.
// Source : Kit de lancement (vérifié sur l'app le 22/10/2026) et Guide Séances & ressources v1 (oct. 2026).
// Les points encore marqués « À VÉRIFIER » dans le kit ne sont volontairement pas repris.
//
// Une section peut contenir : intro, steps, items, table, tip, note.
// Ne jamais publier ici le détail des niveaux de la grille d'évaluation (protection du concept).

const homeScreenTable = {
  head: ['Appareil', 'Comment faire'],
  rows: [
    ['iPhone (Safari)', 'Partager → « Sur l’écran d’accueil » → Ajouter'],
    ['Android (Chrome)', 'Menu ⋮ → « Ajouter à l’écran d’accueil »'],
    ['Ordinateur', 'Ctrl/Cmd + D pour l’ajouter aux favoris'],
  ],
}

export const guides = [
  {
    slug: 'entraineur',
    icon: UserCheck,
    audience: 'Entraîneurs',
    title: 'Guide entraîneur',
    summary: 'Ouvrir VIGIE, évaluer un joueur, les bonnes pratiques terrain.',
    intro:
      "Tout ce qu'il faut savoir pour évaluer vos joueurs dans VIGIE : simplement, en quelques minutes, directement sur le terrain.",
    sections: [
      {
        id: 'en-1-minute',
        title: 'VIGIE en 1 minute',
        items: [
          ['Ça sert à quoi ?', 'Noter un joueur pour générer son bilan individuel, situé par rapport à sa génération.'],
          ['Votre accès', 'Évaluation joueurs, tests physiques, ressources et aide.'],
          ['Combien de temps ?', '5 à 10 minutes par joueur. Pas de calcul : VIGIE compare tout seul.'],
          ['La logique', "J'observe → l'app compare → le bilan est prêt pour le club."],
        ],
        note: 'Les joueurs évalués sont mineurs. Ne montrez jamais un écran contenant leur nom ou leur date de naissance en dehors du cadre autorisé. Chaque club ne reçoit que ses propres licenciés.',
      },
      {
        id: 'ouvrir',
        title: 'Ouvrir VIGIE',
        intro: "VIGIE s'ouvre dans un navigateur, sans rien télécharger : un lien suffit, sur téléphone comme sur ordinateur.",
        steps: [
          'Ouvrez le lien VIGIE transmis par le Comité (ou scannez le QR code de l’affiche).',
          'Touchez Se connecter (compte existant) ou S’inscrire (première fois), en haut à droite.',
          'Ajoutez VIGIE à votre écran d’accueil pour l’ouvrir comme une app (tableau ci-dessous).',
        ],
        table: homeScreenTable,
        tip: "Vous arrivez d'Instagram ? Ouvrez d'abord le lien dans Safari ou Chrome (menu ··· → « Ouvrir dans le navigateur ») : le navigateur d'Instagram ne permet pas l'ajout à l'écran d'accueil.",
      },
      {
        id: 'onglets',
        title: 'Les 4 onglets',
        table: {
          head: ['Onglet', 'Je l’utilise pour…'],
          rows: [
            ['Évaluation joueurs', 'Noter un joueur après une séance ou un match'],
            ['Tests physiques', 'Saisir les mesures d’un test (temps, distances)'],
            ['Ressources', 'Créer une séance, consulter les documents du Comité'],
            ['Aide', 'Guide PDF, tutoriels vidéo, contacter l’assistance'],
          ],
        },
        tip: 'Le chemin le plus court : lien → Évaluation joueurs → je choisis le joueur → je note → Soumettre.',
      },
      {
        id: 'evaluer',
        title: 'Évaluer un joueur',
        intro: 'Une évaluation comporte 6 notes : la morphologie et 5 critères notés de 0 à 5.',
        steps: [
          'Ouvrez l’onglet Évaluation joueurs.',
          'Choisissez le joueur dans Nom puis Prénom. Tapez les 3 ou 4 premières lettres pour filtrer.',
          'Renseignez la date du jour.',
          'Saisissez la note de chaque critère en suivant la grille affichée au-dessus du champ.',
          'Descendez tout en bas et touchez Soumettre.',
        ],
      },
      {
        id: 'criteres',
        title: 'Les critères',
        intro:
          "L'évaluation porte sur la morphologie et 5 critères : mental / combativité, entraînabilité, perceptivo-décisionnel, qualité physique et habiletés motrices. Chaque critère se note de 1 à 5 (0 = non noté).",
        note: "Le détail de chaque niveau de la grille est réservé aux entraîneurs : il s'affiche dans l'app, au-dessus de chaque champ, une fois connecté.",
      },
      {
        id: 'bonnes-pratiques',
        title: 'Bonnes pratiques terrain',
        items: [
          ['À chaud', 'Notez juste après la séance ou le match.'],
          ['Critère non observé ?', 'Mettez 0 (non noté) plutôt qu’une note au hasard.'],
          ["Ce que vous voyez aujourd'hui", 'Notez le niveau observé, pas le potentiel supposé.'],
        ],
      },
      {
        id: 'aide',
        title: "Besoin d'aide ?",
        items: [
          ['Je ne trouve pas mon joueur.', 'Tapez les 3 ou 4 premières lettres et vérifiez la génération. Toujours rien ? Signalez-le via le formulaire d’assistance.'],
          ["Ma note ne s'enregistre pas.", 'Tous les champs marqués « Requis » doivent être remplis. Descendez jusqu’à Soumettre et vérifiez votre connexion.'],
          ['Un autre souci ?', 'Onglet Aide → Contacter l’assistance, ou écrivez au responsable détection (adresse en bas de page).'],
        ],
      },
    ],
  },
  {
    slug: 'tests',
    icon: Activity,
    audience: 'Entraîneurs',
    title: 'Tests physiques',
    summary: 'La batterie de tests, les protocoles et les conditions pour des mesures comparables.',
    intro:
      "Les tests physiques donnent des mesures standardisées, comparables d'un club à l'autre, à condition de suivre le protocole affiché dans l'app.",
    sections: [
      {
        id: 'saisir',
        title: 'Saisir un test',
        steps: [
          'Ouvrez l’onglet Tests physiques.',
          'Choisissez le joueur (Nom) et renseignez la date du test.',
          'Faites passer le test en suivant le schéma et le protocole affichés.',
          'Saisissez la valeur mesurée (secondes ou centimètres), puis touchez Soumettre.',
        ],
      },
      {
        id: 'batterie',
        title: 'La batterie de tests',
        table: {
          head: ['Famille', 'Test', 'Unité', 'Protocole (résumé)'],
          rows: [
            ['Course', 'Sprint 20 m', 'secondes', 'Départ les deux pieds derrière la ligne ; arrêt du chrono au franchissement de la ligne'],
            ['Course', '10 m aller-retour en dribble', 'secondes', 'Au moins un pied doit dépasser le repère pour le demi-tour'],
            ['Saut', 'Saut 2 pieds', 'cm', 'Deux pieds derrière le repère ; mesure valide si la réception est contrôlée'],
            ['Saut', 'Multibond 2 pieds', 'cm', '3 sauts, temps de contact au sol minimal, réception contrôlée à la fin'],
            ['Saut', '1 pied gauche / 1 pied droit', 'cm', 'Mêmes règles, sur un pied'],
            ['Force', 'Poussée médecine-ball', '—', 'Protocole et schéma affichés dans l’app'],
            ['Mobilité', 'Souplesse', '—', 'Protocole et schéma affichés dans l’app'],
          ],
        },
      },
      {
        id: 'conditions',
        title: 'Des mesures comparables',
        items: [
          ['Mêmes conditions', 'Même échauffement, même surface, mêmes chaussures, à chaque passage.'],
          ['Au bon moment', 'En début de séance, jamais après un travail épuisant.'],
          ['Même protocole partout', 'C’est ce qui permet de comparer les clubs et de suivre un joueur dans le temps.'],
        ],
      },
    ],
  },
  {
    slug: 'bilans',
    icon: FileText,
    audience: 'Entraîneurs et clubs',
    title: 'Bilans individuels',
    summary: 'Comment le bilan est produit, comment le lire et comment l’utiliser avec le joueur.',
    intro:
      "Le bilan est la récompense de l'évaluation : chaque joueur évalué obtient une fiche individuelle qui situe ses notes par rapport à sa génération. L'entraîneur n'a aucun calcul à faire.",
    sections: [
      {
        id: 'circuit',
        title: 'Le circuit',
        steps: [
          'Les entraîneurs saisissent les évaluations et les tests dans VIGIE.',
          "L'équipe technique du Comité génère les fiches bilan au format PDF, une par joueur.",
          'Les fiches sont classées par club, puis par catégorie.',
          'Chaque club reçoit uniquement les fiches de ses propres licenciés.',
        ],
      },
      {
        id: 'lire',
        title: 'Lire une fiche bilan',
        items: [
          ['Notes sur 5', 'Les évaluations 2025-2026, saisies sur 10, ont été ramenées sur 5.'],
          ['Face à la génération', 'Chaque critère est comparé à la moyenne de la génération du joueur.'],
        ],
      },
      {
        id: 'utiliser',
        title: 'Utiliser le bilan avec le joueur',
        items: [
          ['Un point fort d’abord', 'Commencez par ce qui va bien, puis proposez un seul axe de travail prioritaire.'],
          ['Une photo, pas un verdict', 'Le bilan décrit une observation à un instant donné : on réévalue plus tard dans la saison.'],
          ['En individuel', 'Partagez-le avec le joueur et sa famille, jamais en affichage collectif.'],
        ],
      },
    ],
  },
  {
    slug: 'seances',
    icon: ClipboardList,
    audience: 'Entraîneurs',
    title: 'Séances & ressources',
    summary: 'Créer une séance, dessiner la planche tactique, imprimer ou animer, utiliser la bibliothèque.',
    pdf: '/guides/guide-seances-ressources-vigie.pdf',
    appUrl: SEANCES_URL,
    appLabel: 'Ouvrir Séances & ressources',
    intro:
      "Séances & ressources est l'espace de VIGIE pour préparer vos entraînements : vous composez vos séances, vous les imprimez ou les animez depuis votre téléphone, et vous puisez dans la bibliothèque du Comité.",
    sections: [
      {
        id: 'en-1-minute',
        title: 'En 1 minute',
        items: [
          ['Ça sert à quoi ?', 'Créer une séance en blocs et exercices, dessiner la planche tactique et obtenir une fiche PDF prête à imprimer.'],
          ['Votre accès', 'Un compte personnel (e-mail et mot de passe), ouvert depuis l’onglet Ressources de VIGIE.'],
          ['Sur quel appareil ?', 'Ordinateur, tablette ou téléphone : vos séances sont synchronisées et vous suivent partout.'],
          ['Qui voit mes séances ?', 'Vous seul·e. Rien n’est publié dans la bibliothèque sans validation du Comité.'],
        ],
        table: {
          head: ['Menu', 'Ce que j’y trouve'],
          rows: [
            ['Accueil', 'Le bouton ＋ Créer une séance, mes dernières séances (« Reprendre ») et les nouveautés de la bibliothèque'],
            ['Mes séances', 'Toutes mes séances, avec leur statut (brouillon, terminée, publiée…)'],
            ['Bibliothèque', 'Les séances validées par le Comité, les vidéos, les parcours et les ressources pédagogiques'],
            ['Groupes', 'Mon club ou ma formation : séances partagées et annotations des formateurs'],
            ['Profil', 'Mes informations (prénom, club) et la déconnexion'],
          ],
        },
        tip: 'Tout est enregistré automatiquement : l’indicateur « Enregistré » s’affiche en haut de l’écran.',
      },
      {
        id: 'compte',
        title: 'Créer mon compte',
        intro: 'Une seule fois, en deux minutes.',
        steps: [
          'Dans VIGIE, onglet Ressources → « Créateur de séance et ressources ».',
          'Choisissez Créer un compte : prénom, nom, e-mail et mot de passe, puis Créer mon compte.',
          'Les fois suivantes : onglet Connexion, e-mail, mot de passe, Se connecter.',
          'Dans Profil, complétez votre club puis touchez Enregistrer.',
        ],
        items: [
          ['Mot de passe oublié ?', '« Mot de passe oublié ? » sous le bouton de connexion : un lien vous est envoyé par e-mail.'],
          ['Des séances sur cet appareil ?', 'Si vous aviez créé des séances avant d’avoir un compte, l’outil propose de les importer (Accueil ou Profil).'],
        ],
      },
      {
        id: 'creer',
        title: 'Créer une séance',
        intro: 'Une séance est faite de blocs (échauffement, technique, jeu…) qui contiennent des exercices. Vous partez d’un modèle, puis vous adaptez tout.',
        steps: [
          'Sur l’Accueil, touchez ＋ Créer une séance.',
          'Choisissez un point de départ (tableau ci-dessous) : tout reste modifiable.',
          'Donnez un titre et ouvrez Informations générales : catégorie, public, niveau, date, nombre de joueurs, thème, objectif principal, matériel.',
          'Organisez le déroulé : chaque bloc a un nom et une durée ; ＋ Ajouter un exercice, ou Depuis la bibliothèque pour copier un exercice du Comité.',
        ],
        table: {
          head: ['Point de départ', 'Contenu'],
          rows: [
            ['Séance vierge', 'Partir de zéro'],
            ['Séance 1h', 'Échauffement 10 min · Technique 15 · Situation 20 · Jeu 10 · Bilan 5'],
            ['Séance 1h30', 'Accueil 5 · Échauffement 15 · Travail GB 10 · Technique 15 · Tactique collective 25 · Jeu 15 · Retour au calme 5'],
            ['Séance 2h', 'Séance complète'],
            ['BabyHand 3-5 ans', 'Une histoire dans un univers : entrée, 3 ateliers, rangement, thème du jour'],
            ['Mes modèles', 'Vos propres séances enregistrées comme modèles'],
          ],
        },
        tip: 'La durée prévue et le matériel nécessaire se calculent tout seuls à partir des exercices.',
      },
      {
        id: 'exercice',
        title: 'Décrire un exercice',
        intro: 'Touchez un exercice pour l’ouvrir. Aucun champ n’est obligatoire à part le nom : objectif, thème, durée, joueurs, ballons, espace, organisation, vidéos…',
        table: {
          head: ['Onglet', 'Ce que j’y écris'],
          rows: [
            ['Consignes', 'Principale, secondaire, fonctionnement, sécurité'],
            ['Réalisation', 'Les critères de réalisation : orientation du corps, prise d’information, timing…'],
            ['Réussite', 'Les critères de réussite (« 4 tirs réussis sur 6 ») et les comportements attendus'],
            ['Matériel', 'Ballons, chasubles, plots, coupelles, jalons…'],
            ['Faire évoluer', 'Variables simplifiantes et complexifiantes, points de vigilance, régulations'],
            ['Plus facile / évoluer', 'La progression et la régression'],
          ],
        },
        tip: '« Ajouter un travail GB » ajoute au même exercice un objectif, des consignes, des critères de réussite et un schéma propres au gardien de but.',
      },
      {
        id: 'planche',
        title: 'Dessiner la planche tactique',
        intro: 'Le schéma se dessine au doigt, à la souris ou à l’Apple Pencil. Il apparaît ensuite sur la fiche et dans le PDF.',
        steps: [
          'Dans l’exercice, ouvrez la planche tactique et choisissez la vue : ½ terrain, Terrain, Zone GB ou Espace libre.',
          'Choisissez un élément dans la palette (joueurs, ballon, passes, déplacements, tirs, zones, texte, matériel), puis touchez le terrain.',
          'Touchez un élément posé pour le modifier : type d’action, ordre, ligne droite ou courbe, couleur, taille…',
          'Touchez ✓ Valider quand le schéma est prêt.',
        ],
        items: [
          ['Placements rapides', '＋ Dispositifs… pose en une fois une défense 0-6, une défense 1-5 ou une attaque placée.'],
          ['Plusieurs étapes', 'Étape suivante décrit l’enchaînement ; Continuer l’action repart de la fin des déplacements.'],
          ['Une erreur ?', 'Annuler (ou Ctrl+Z) défait la dernière action. Deux doigts pour zoomer, Recadrer pour revenir.'],
        ],
      },
      {
        id: 'terrain',
        title: 'Fiche PDF et mode séance',
        items: [
          ['Sur papier', 'En bas de la séance : Aperçu fiche & PDF → vérifiez la fiche → Imprimer ou ⬇ PDF.'],
          ['Sur le terrain', 'Démarrer la séance : exercice en cours, chronomètre, critères de réussite, organisation, matériel et exercice suivant.'],
          ['En fin de séance', 'Terminer la séance compare, pour chaque étape, la durée prévue et la durée réelle.'],
        ],
        tip: 'Le mode séance est pensé pour le téléphone posé sur le banc. Ajoutez Séances & ressources à l’écran d’accueil pour l’ouvrir d’un geste.',
      },
      {
        id: 'partager',
        title: 'Partager avec le Comité',
        intro: 'Une séance réussie peut enrichir la bibliothèque. Elle est toujours relue par un administrateur avant d’être publiée.',
        steps: [
          'Brouillon : visible par vous seul·e. Touchez « ✓ Marquer comme terminée ».',
          'Touchez Soumettre à la bibliothèque et confirmez : la séance passe en attente, verrouillée pendant la relecture.',
          'Si le Comité demande une modification, son message s’affiche sur l’Accueil et dans la séance : corrigez, puis soumettez à nouveau.',
          'Publiée : une copie figée apparaît dans la bibliothèque. Votre séance reste privée et modifiable.',
        ],
      },
      {
        id: 'bibliotheque',
        title: 'La bibliothèque du Comité',
        steps: [
          'Ouvrez Bibliothèque et cherchez : « prise d’information », « montée de balle », « -13 »…',
          'Affinez avec les filtres : type, catégorie, public, niveau, durée maximale.',
          'Ouvrez la ressource : résumé, objectif, aperçu ou PDF.',
          'Ajouter à mes séances crée une copie modifiable dans vos séances.',
        ],
        items: [
          ['Parcours du Comité', 'Des séries de ressources à suivre dans l’ordre, par exemple un cycle de plusieurs séances.'],
          ['★ Mes favoris', 'Touchez ☆ sur une ressource pour la retrouver ici.'],
          ['Proposer une ressource', 'Elle reste privée jusqu’à sa validation par le Comité ; suivez-la dans Mes propositions.'],
        ],
      },
      {
        id: 'groupes',
        title: 'Groupes et aide',
        items: [
          ['Rejoindre un groupe', 'Menu Groupes → Rejoindre un groupe, avec le code d’invitation transmis par votre responsable.'],
          ['Partager une séance', 'Dans la séance, touchez 👥 Partager et choisissez le groupe. Sans partage, elle reste privée.'],
          ['Je ne peux plus modifier ma séance.', 'Elle est en attente de validation : Retirer de la validation pour la reprendre.'],
          ['Mes séances ne sont pas sur mon autre appareil.', 'Connectez-vous avec le même compte (même e-mail).'],
        ],
      },
    ],
  },
]
