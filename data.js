// ==========================================
// FIFA 2026 AI SYSTEM - CORE DATA ENGINE
// ==========================================

// 1. Team Database with Flags
const teams = [
    { flag: '🇦🇷', name: 'Argentina', power: 95 },
    { flag: '🇧🇷', name: 'Brazil', power: 94 },
    { flag: '🇫🇷', name: 'France', power: 96 },
    { flag: '🇪🇸', name: 'Spain', power: 92 },
    { flag: '🇩🇪', name: 'Germany', power: 90 },
    { flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', name: 'England', power: 91 },
    { flag: '🇵🇹', name: 'Portugal', power: 89 },
    { flag: '🇺🇸', name: 'USA', power: 82 },
    { flag: '🇲🇽', name: 'Mexico', power: 81 },
    { flag: '🇮🇹', name: 'Italy', power: 88 },
    { flag: '🇳🇱', name: 'Netherlands', power: 87 },
    { flag: '🇯🇵', name: 'Japan', power: 80 }
];

// 2. High-Quality 4K Image Database for Gallery
const galleryImages = [
    "https://images.unsplash.com/photo-1518605368461-1ee7cece2640?auto=format&fit=crop&w=1200&q=100",
    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=100",
    "https://images.unsplash.com/photo-1614632537190-23e4146777db?auto=format&fit=crop&w=1200&q=100",
    "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=100",
    "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=100",
    "https://images.unsplash.com/photo-1556816214-cb3ce168800c?auto=format&fit=crop&w=1200&q=100",
    "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=100",
    "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&w=1200&q=100"
];

// 3. Match Generation Engine (Creates exactly 104 Matches dynamically)
function generateMatches() {
    const matchContainer = document.getElementById('match-container');
    if (!matchContainer) return;

    let matchHTML = '';
    
    for (let i = 1; i <= 104; i++) {
        // Select random unique teams
        let t1Index = Math.floor(Math.random() * teams.length);
        let t2Index = Math.floor(Math.random() * teams.length);
        while (t1Index === t2Index) {
            t2Index = Math.floor(Math.random() * teams.length);
        }
        
        let team1 = teams[t1Index];
        let team2 = teams[t2Index];
        
        // Random AI Score Generation
        let score1 = Math.floor(Math.random() * 5);
        let score2 = Math.floor(Math.random() * 4);

        // Date Simulator
        let matchDate = new Date(2026, 5, 11 + Math.floor(i / 3)); // Starts June 11, 2026
        let formattedDate = matchDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

        matchHTML += `
            <div class="glass-card p-5 relative group overflow-hidden">
                <div class="absolute -right-10 -top-10 bg-cyan-500/10 w-32 h-32 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition duration-500"></div>
                <div class="absolute top-0 right-0 bg-cyan-500 text-black text-[10px] px-3 py-1 rounded-bl-xl font-bold z-10">MATCH ${i}</div>
                
                <p class="text-xs text-gray-400 mb-4 font-mono"><i class="fa-regular fa-calendar-days mr-1 text-cyan-400"></i> ${formattedDate}</p>
                
                <div class="flex justify-between items-center relative z-10">
                    <div class="text-center w-2/5">
                        <span class="text-4xl block mb-2 drop-shadow-lg">${team1.flag}</span>
                        <span class="font-bold text-sm tracking-wide">${team1.name}</span>
                    </div>
                    
                    <div class="w-1/5 text-center flex flex-col items-center">
                        <span class="text-3xl font-black font-future text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-blue-600">${score1} - ${score2}</span>
                        <span class="text-[9px] bg-white/10 px-2 py-0.5 rounded text-gray-300 mt-2 font-mono">SIMULATED</span>
                    </div>
                    
                    <div class="text-center w-2/5">
                        <span class="text-4xl block mb-2 drop-shadow-lg">${team2.flag}</span>
                        <span class="font-bold text-sm tracking-wide">${team2.name}</span>
                    </div>
                </div>
            </div>
        `;
    }
    matchContainer.innerHTML = matchHTML;
}

// 4. AI Gallery Injector
function generateGallery() {
    const galleryContainer = document.getElementById('gallery-container');
    if (!galleryContainer) return;

    let galleryHTML = '';
    
    // Looping through images to create the grid
    for (let j = 0; j < 16; j++) {
        let imgUrl = galleryImages[j % galleryImages.length];
        
        galleryHTML += `
            <div class="img-zoom glass-card relative h-56 md:h-72 group">
                <img src="${imgUrl}" alt="AI Vision 2026" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                    <span class="border border-cyan-400 text-cyan-400 px-3 py-1 font-future text-xs font-bold w-max mb-2 backdrop-blur-sm bg-black/30">VISION ${j + 1}</span>
                    <p class="text-white text-sm font-bold truncate">Neural Concept Generation</p>
                </div>
            </div>
        `;
    }
    galleryContainer.innerHTML = galleryHTML;
}

// 5. Initialize Engine on Page Load
document.addEventListener('DOMContentLoaded', () => {
    generateMatches();
    generateGallery();
    console.log("System Initialized: 104 Matches Loaded. AI Models Online.");
});
