# maraichage #
Outil d'aide à la gestion de la ferme en maraîchage diversifié

## Présentation ##

La gestion du temps est la plus grande préoccupation du maraîcher ! L'idée générale de l'application est un planning qui s'autoconstruit après avoir fait vos choix en début de saison. Souvent, ces choix sont mal maitrisés, l'outil pourra vous aider dans vos prises de décisions. Quelle planche de culture pour cette variété cette année ? L'application connait l"historique complet des planches et pourra vous proposer le meilleur choix en fonction de différents critères !

## Développement ##

Technologies :
- Nodejs : [Site Officiel](https://nodejs.org)
- Module NodeAtlas : [Site complet et détaillé](https://node-atlas.js.org/NodeAtlas/)
- Vue.js : [Site Officiel](https://vuejs.org/)
- Une base de données [MariaDB](https://mariadb.org/)

Actuellement nous avons : 
- La liste des plantes
- La liste des variétés
- Ajout de nouvelles plantes
- Modification des fiches plantes
- Gestion des rotations sur votre exploitation :
 - Cette page permet de gérer comment l'application va vous proposer les bonnes planches :
  - Ajouter des rotations favorables et défavorables à vos plantes
- Gestion des associations :
 - Cette page permet de gerer les associations favorables et défavorables pour chaque plante. Cela permettra, en fonction de vos choix et des problèmes de maladies ou ravageurs, vous proposez l'ajout de certaines plantes dans vos planches de culture.

En cours de développpement :
- Page : Ajout des variétés 
- Page : Affichage & Modification des variétés

Développement futur :
- Page : Ajout des planches de culture & Modification
- Page : Ajout des productions envisagées (Choix des variétés et rendement souhaité) & Modification -> Cela générera les quantités de semences nécessaires, vérification de l'espace disponible sur les planches.
- Page : Ajout des tâches qui pourront être associés aux variétés
- Pour chaque production, application du choix idéal de la planche et création du planning des tâches associés
...









