import React, { useMemo } from 'react';

// Configuration des animations
const ANIMATION_CONFIG = {
    movement: {
        verySlow: { min: 25, max: 30 },
        slow: { min: 15, max: 20 },
        medium: { min: 10, max: 15 },
        fast: { min: 5, max: 8 }
    },
    twinkle: {
        speed: {
            slow: { min: 8, max: 12 },
            medium: { min: 4, max: 7 },
            fast: { min: 1.5, max: 3 }
        },
        intensity: {
            soft: { minOpacity: 0.4, maxOpacity: 0.7 },
            medium: { minOpacity: 0.3, maxOpacity: 0.9 },
            intense: { minOpacity: 0.1, maxOpacity: 1 }
        }
    }
};

// Styles globaux
const globalStyles = `
    .starry-sky-container {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(to bottom, #1b2735, #090a0f);
        overflow: hidden;
        z-index: -10;
    }
    
    .star {
        position: absolute;
        background-color: white;
        border-radius: 50%;
    }

    @keyframes move {
        from { transform: translateY(0) translateX(0); }
        to { transform: translateY(-50px) translateX(50px); }
    }
`;

// Fonction utilitaire pour générer la config d'une étoile
const generateStarConfig = (id) => {
    const size = Math.random() * 2 + 1;
    const top = Math.random() * 100;
    const left = Math.random() * 100;

    // Sélection aléatoire de la vitesse de mouvement
    const speedCategories = Object.keys(ANIMATION_CONFIG.movement);
    const randomSpeedCategory = speedCategories[Math.floor(Math.random() * speedCategories.length)];
    const moveConfig = ANIMATION_CONFIG.movement[randomSpeedCategory];
    const moveDuration = Math.random() * (moveConfig.max - moveConfig.min) + moveConfig.min;

    // Configuration du clignotement
    const twinkleSpeedConfig = ANIMATION_CONFIG.twinkle.speed.medium;
    const twinkleIntensityConfig = ANIMATION_CONFIG.twinkle.intensity.medium;
    const twinkleDuration = Math.random() * (twinkleSpeedConfig.max - twinkleSpeedConfig.min) + twinkleSpeedConfig.min;

    const animationDelay = -Math.random() * 20;
    const minOpacity = twinkleIntensityConfig.minOpacity;
    const maxOpacity = twinkleIntensityConfig.maxOpacity;

    return {
        id,
        size,
        top,
        left,
        moveDuration,
        twinkleDuration,
        animationDelay,
        minOpacity,
        maxOpacity,
    };
};

const Star = React.memo(({ star }) => {
    // Création d'une animation unique pour chaque étoile
    const twinkleKeyframes = `
        @keyframes twinkle-${star.id} {
            0%, 100% { opacity: ${star.minOpacity}; }
            50% { opacity: ${star.maxOpacity}; }
        }
    `;

    return (
        <div
            className="star"
            style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                top: `${star.top}%`,
                left: `${star.left}%`,
                animation: `twinkle-${star.id} ${star.twinkleDuration}s infinite ease-in-out, move ${star.moveDuration}s linear infinite`,
                animationDelay: `${star.animationDelay}s, ${star.animationDelay}s`,
            }}
        >
            <style>{twinkleKeyframes}</style>
        </div>
    );
});

const StarrySky = () => {
    // Utilisation de useMemo pour éviter de régénérer les étoiles à chaque rendu
    const stars = useMemo(() => {
        const generatedStars = [];
        const numStars = 1000;

        for (let i = 0; i < numStars; i++) {
            generatedStars.push(generateStarConfig(i));
        }

        return generatedStars;
    }, []);

    return (
        <div className="starry-sky-container">
            <style>{globalStyles}</style>
            {stars.map(star => <Star key={star.id} star={star} />)}
        </div>
    );
};

export default StarrySky;