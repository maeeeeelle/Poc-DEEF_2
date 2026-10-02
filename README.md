# Carte de vœux DEEF — 2027

Projet de carte de vœux digitale réalisé dans le cadre du projet DEEF / eikon.

L’expérience se découvre progressivement au fil du scroll. Des points, une ligne, des formes, des images et des textes apparaissent successivement pour construire une composition finale.

## Technologies

- HTML
- CSS
- JavaScript
- GSAP
- ScrollTrigger
- Parcel

## Prérequis

- Git
- Node.js
- NPM

## Installation

Cloner le repository GitHub :

```bash
git clone <https://github.com/maeeeeelle/Poc-DEEF_2.git>
```

Entrer dans le dossier créé par Git :

```bash
cd <NOM-DU-DOSSIER>
```

Installer les dépendances :

```bash
npm install
```

## Développement

Lancer le serveur de développement :

```bash
npm run dev
```

Le projet est alors disponible sur l’adresse indiquée dans le terminal.

## Build

Créer la version de production :

```bash
npm run build
```

Le résultat est généré dans le dossier :

```text
dist/
```

## Structure du projet

```text
projet/
├── src/
│   ├── index.html
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   └── script.js
│   └── images/
│
├── package.json
├── package-lock.json
└── README.md
```

## Animation

L’animation principale est réalisée avec GSAP et ScrollTrigger.

Le fichier principal de l’animation est :

```text
src/js/script.js
```

Il contrôle notamment :

- les apparitions des points
- les apparitions des formes
- les apparitions des textes
- les déplacements du monde
- les zooms
- le dessin progressif de la ligne
- la composition finale

Les marqueurs de ScrollTrigger sont actuellement cachés.

```js
markers: true;
```

Ils peuvent être supprimés avant la mise en ligne.

## Images

Les images du projet sont stockées dans :

```text
src/images/
```

Les images peuvent être remplacées ou modifiées directement depuis ce dossier.

## Composition finale

La composition finale utilise plusieurs images superposées :

```text
final1.png
final2.png
final3.png
final4.png
```

Elles apparaissent progressivement à la fin de l’animation.

## Carte imprimée

Une version imprimable de la carte peut être ajoutée avec un pdf.

Les fichiers peuvent être placés dans :

```text
src/images/
```

Par exemple :

```text
carte.pdf
```

## Partage du projet

Pour travailler sur le projet depuis un autre ordinateur :

```bash
git clone <https://github.com/maeeeeelle/Poc-DEEF_2.git>
cd <NOM-DU-DOSSIER>
npm install
npm run dev
```

Le dossier `node_modules` n’a pas besoin d’être partagé : il est recréé avec `npm install`.

## Mise en ligne

Pour générer la version destinée à la production :

```bash
npm run build
```

Le contenu généré dans `dist/` peut ensuite être utilisé pour la mise en ligne.
