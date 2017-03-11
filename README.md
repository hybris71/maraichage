# maraichage #
Outil d'aide à la gestion de la ferme en maraîchage diversifié

## Présentation ##

La gestion du temps est la plus grande préoccupation du maraîcher ! L'idée générale de l'application est un planning qui s'autoconstruit après avoir fait vos choix en début de saison. Souvent, ces choix sont mal maitrisés, l'outil pourra vous aider dans vos prises de décisions. Quelle planche de culture pour cette variété cette année ? L'application connait l"historique complet des planches et pourra vous proposer le meilleur choix en fonction de différents critères !

## Développement ##

Technologies :
- Exécutable Node.js : [Site Officiel](https://nodejs.org/)
- Module NPM NodeAtlas : [Site Officiel](https://node-atlas.js.org/)
- Librairie JS Vue : [Site Officiel](https://fr.vuejs.org/)
- Base de données SQL MariaDB [Site Officiel](https://mariadb.org/)

Actuellement nous avons : 
- La liste des plantes
- La liste des variétés
- Ajout de nouvelles plantes
- Ajout d'une variété et de ses itinéraires techniques.
- Modification des fiches plantes
- Gestion des rotations sur l'exploitation :
 - Cette page permet de gérer comment l'application va vous proposer les bonnes planches :
  - Ajouter des rotations favorables et défavorables à vos plantes
- Gestion des associations :
 - Cette page permet de gérer les associations favorables et défavorables pour chaque plante. Cela permettra, en fonction de vos choix et des problèmes de maladies ou ravageurs, vous proposez l'ajout de certaines plantes dans vos planches de culture.

En cours de développpement :
- Page : Ajout des variétés 
- Page : Affichage & Modification des variétés

Suite du développement :
- Page : Ajout des planches de culture & Modification
- Page : Ajout des productions envisagées (Choix des variétés et rendement souhaité) & Modification -> Cela générera les quantités de semences nécessaires, vérification de l'espace disponible sur les planches etc...
- Page : Ajout des tâches qui pourront être associés aux planches ?
- Pour chaque production, application du choix idéal de la planche et création du planning des tâches associées
...

To-do :

- Ajouter le Rendement espéré dans l'itinéaire du semi :
	- Reflexions pour l'intégration :
		- Rendement par mètre carré/par hectare ?
		- En fonction de la densité du semi et du temps de récolte ?

- Ajouter les plages de recoltes :
	- Reflexions pour l'intégration :
		- Calculer avec un temps de croissance jusqu'à maturité ?
		- Durée de la récolte : en semaine ? 

- Ajouter les tâches de progression de la culture : tâches qui s'ajouteront au planning réel après avoir réaliser le semi et que l'application connait la planche et la date du semi réel :
	- Exemple le buttage d'une planche de poireau ou le tuteurage d'une planche de tomate
	- Tâches de tuteurage, tailles
	- Buttages
	- Déherbage lié à la variété
	- Tâches diverses

- Ajouter choix serre ou plein champ

- Supprimer la plage de date pour le repiquage : supprimer fin_repi

- Reflexion : Ajouter la possibilité de préremplir les champs d'un itinéraire technique avec les informations d'une autre variété.

- Travail du sol : En réflexion :
	- Les travaux du sol sont-ils à réaliser en fonction de la variété ? En fonction de la planche ? Une seule fois dans l'année pour une planche ? 
	- Pour le moment, je m'arrête sur avant la mise en production d'une culture sur la planche, ils auront une page dédié avec des temps négatifs et seront ajouté au planning à partir de la mise en production de la variété sur une planche (le formulaire des variétés pourraient peut-êtré intégré les travaux mimimun du sol à réaliser)

- Ajouter le stockage à l'itinéraire de la variété

- Ajouter la validation "between" pour les données chiffrés dans les formulaires

- Ajouter des boutons "Annuler" pour les modifications.

- A Corriger : 
	- Formulaire Ajout d'une variété : Suppression du tableau repiquages quand un changement de modalité de semi à lieu après une première sélection 

- Modification d'une plante :
	- Modification des champs : Engrais vert / Compagne à faire

- AddPlante : Ajouter une liste pour le cycle de la plante (nouvelle table)

- Correction : Quand une variété ne contient pas d'itinéraire, ne pas afficher le tableau.




## Installation ##

**Installer nodejs**

**Récupérer la dernière version du projet** 

Depuis une console.

```bash
git clone https://github.com/hybris71/maraichage.git
``` 

**Installer les modules**

Entrer dans le répertoire du projet et taper depuis une console :

```bash
npm install
```

**Installer MySQL**

**Créer la base**

Depuis mysql.

```bash
mysql> CREATE DATABASE <DBNAME>
```

**Importer les tables**

Depuis une console.

```bash
mysql --user=<USERNAME> --host=<HOSTNAME> --password=<PASSWORD> <DBNAME> < maraichage.sql
```

**Configurer l'application**

Créer un fichier `mysql-config.json` à la racine du projet :

```js
{
    "connectionLimit":"1000",
    "host": "<HOSTNAME>",
    "user": "<USERNAME>",
    "password": "<PASSWORD>",
    "database": "<DBNAME>"
}
```

Et autant de `mysql-config.json` sur chaque environnement qu'il y a de base de données aux accès différents.

**Lancer l'application**

Depuis une console.

```bash
node server.js --browse
```