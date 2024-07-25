
<h1 align="center">
  Zelda Battle Game
</h1>

<p align="center">
  <img src="https://github.com/faudotrina/Zelda-Battle-Game/blob/main/image/zelda.jpg" alt="Zelda Battle Game" />
</p>

Un jeu de combat textuel où vous incarnez Link et affrontez des ennemis redoutables comme les Bokoblins et Ganon pour sauver Hyrule !

<h1 align="center">
🎮 Fonctionnalités
</h1>

<ul>
  <li><strong>Combat Textuel</strong> : Engagez des combats dynamiques en prenant des décisions simples.</li>
  <li><strong>Options de Combat</strong> : Choisissez d'attaquer ou de vous soigner pendant les combats.</li>
  <li><strong>Affrontement Final</strong> : Un combat épique contre Ganon pour la sauvegarde d'Hyrule.</li>
</ul>

<h1 align="center">
  📋 Prérequis
</h1>

<ul>
  <li><a href="https://nodejs.org">Node.js</a> (version 12.x ou ultérieure)</li>
</ul>

<h1 align="center">
  🚀 Installation
</h1>

<ol>
  <li><strong>Clonez le dépôt</strong> :
    <pre><code>git clone https://github.com/faudotrina/Zelda-Battle-Game.git</code></pre>
  </li>
  <li><strong>Accédez au répertoire du projet</strong> :
    <pre><code>cd zelda-battle-game</code></pre>
  </li>
  <li><strong>Installez les dépendances</strong> :
    <pre><code>npm install</code></pre>
  </li>
</ol>

<h1 align="center">
  ▶️ Exécution
</h1>

Pour lancer le jeu, exécutez la commande suivante :

<pre><code>node hyrule_castle.js</code></pre>

<h1 align="center">
  📂 Structure du Code
</h1>

Le projet est organisé comme suit :

<ul>
  <li><strong><code>base_game/</code></strong> : Contient les fichiers sources du projet.
    <ul>
      <li><code>hyrule_castle.ts</code> : Gère la boucle de combat et les interactions utilisateur.</li>
      <li><code>interfaces/characters.interfaces.ts</code> : Définit les interfaces pour les personnages.</li>
      <li><code>characters/</code> :
        <ul>
          <li><code>Link.ts</code> : Définit les caractéristiques du personnage Link.</li>
          <li><code>Bokoblin.ts</code> : Définit les caractéristiques du Bokoblin.</li>
          <li><code>Ganon.ts</code> : Définit les caractéristiques de Ganon.</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><strong><code>package.json</code></strong> : Gère les dépendances et les scripts du projet.</li>
</ul>

<h1 align="center">
  📦 Dépendances
</h1>

<ul>
  <li><a href="https://nodejs.org/api/readline.html">readline</a> : Pour gérer les entrées utilisateur.</li>
  <li><a href="https://www.npmjs.com/package/align-text">align-text</a> : Pour aligner le texte.</li>
  <li><a href="https://www.npmjs.com/package/figlet">figlet</a> : Pour générer des messages en texte ASCII stylisé.</li>
</ul>
