StarrySky ✨
Un composant React élégant et performant pour créer un magnifique ciel étoilé animé. Ce composant génère un ciel nocturne avec 1000 étoiles qui scintillent et se déplacent à des vitesses différentes, créant une ambiance immersive.
📋 Caractéristiques
🌟 Génère 1000 étoiles avec propriétés aléatoires (taille, position, vitesse, scintillement)
🚀 Optimisé pour les performances avec React.memo et useMemo
🎨 Entièrement personnalisable (nombre d'étoiles, couleurs, vitesses, etc.)
📱 Responsive et s'adapte à toutes les tailles d'écran
🧩 Facile à intégrer dans n'importe quel projet React

🚀 Installation
bashCopy# Clonez le dépôt
git clone https://github.com/TPietquin/StarrySky.git

# Naviguez dans le dossier du projet
cd StarrySky

# Installez les dépendances
npm install

# Lancez l'application
npm start
Ou, pour utiliser le composant dans votre propre projet React :
bashCopy# Copiez simplement le fichier StarrySky.js dans votre projet
cp StarrySky/src/components/StarrySky.js votre-projet/src/components/
💻 Utilisation
jsxCopyimport React from 'react';
import StarrySky from './components/StarrySky';

function App() {
  return (
    <div className="App">
      {/* Ajoutez le composant StarrySky */}
      <StarrySky />
      
      {/* Votre contenu ici, au-dessus du ciel étoilé */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        padding: '2rem',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <h1>Votre contenu ici</h1>
        <p>Ce texte apparaîtra au-dessus du ciel étoilé</p>
      </div>
    </div>
  );
}

export default App;
⚙️ Personnalisation
Vous pouvez personnaliser le comportement des étoiles en modifiant les valeurs dans l'objet ANIMATION_CONFIG :
javascriptCopy// Modifier la vitesse de mouvement
ANIMATION_CONFIG.movement.slow = { min: 20, max: 25 };

// Changer l'intensité du scintillement
ANIMATION_CONFIG.twinkle.intensity.medium = { minOpacity: 0.2, maxOpacity: 0.8 };

// Ajuster le nombre d'étoiles
const numStars = 500; // Dans le composant StarrySky
🔍 Comment ça marche
Le composant utilise :

CSS pour les animations (scintillement et mouvement des étoiles)
JavaScript pour générer aléatoirement les propriétés de chaque étoile
React.memo pour optimiser les rendus des étoiles individuelles
useMemo pour éviter de recalculer les étoiles à chaque rendu

Pour plus de détails, consultez le tutoriel YouTube qui explique pas à pas la création de ce composant.
🤝 Contribution
Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

Forkez le projet
Créez votre branche de fonctionnalité (git checkout -b feature/amazing-feature)
Committez vos changements (git commit -m 'Add some amazing feature')
Poussez vers la branche (git push origin feature/amazing-feature)
Ouvrez une Pull Request

📄 Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
📱 Contact
X : https://x.com/TanguyPietquin
Email : tanguy@tanguypietquin.dev
Créé avec ❤️ par TPietquin
