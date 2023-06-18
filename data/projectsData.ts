/*
0 - profesonal
1 - personal
2 - game jam
3 - university

// make the description 2-3 lines of chracters to make it look nice
*/
const projectsData = [
  {
    type: 1,
    title: 'This Website',
    description: `My website, created to showcase all of the projects i have made in one place, as well as to serve as my personal
    blog, and portfolio.`,
    imgSrc: '/static/images/projects/website.png',
    github: 'https://github.com/UpSideDownGitHub/portfolio',
    //itch: 'https://kryptedstudios.itch.io/space-yam',
    //blog: '',
    tools: ['Next.js', 'TailwindCSS', 'MDX', 'TSX'],
  },
  {
    type: 2,
    title: 'BERNIE’s BULLDOG',
    description: `Introducing BERNIE’s BULLDOG
    As part of a bi-yearly “Game Jam” type event held at the University Of Northampton, We were challenged to make a 
    multiplayer video game for the famous Northampton Saints Rugby team’s Jumbotron. 
    Select your character from four players from the Saint's Rugby team, and get to the other side of the pitch each 
    time with increasing difficulty. Caught players will join Bernie's team as AI and help the mascot catch the remaining players.`,
    imgSrc: '/static/images/projects/pamfest.png',
    github: 'https://github.com/UpSideDownGitHub/pamfest',
    itch: 'https://upsidedownitch.itch.io/bernies-bulldog',
    //blog: '',
    tools: ['C#', 'Unity', 'Group'],
  },
  {
    type: 2,
    title: 'Space Yam',
    description: `Space Yam is an arcade-like wave based shooter built for the Sinden Lightgun.
    Defeat 3 waves of enemies before being faced with the boss battle...The Master Yam.
    Every wave the enemies increase in difficulty and more enemies are spawned.
    All you can do is Survive.`,
    imgSrc: '/static/images/projects/Space Yam.png',
    github: 'https://github.com/UpSideDownGitHub/Space-Yam',
    itch: 'https://kryptedstudios.itch.io/space-yam',
    //blog: '',
    tools: ['Unity', 'C#', 'Group'],
  },
  {
    type: 1,
    title: 'Visual Basic Pong',
    description: `Created in a day as a competition with a freind, pong remade in Visual Basic, there are two game modes, 1v1 and
    1vAI, with simple pause menu and main menu`,
    imgSrc: '/static/images/projects/Pong.png',
    github: 'https://github.com/UpSideDownGitHub/Pong-VisualBasic',
    //itch: 'https://upsidedownitch.itch.io/galaxy-survivor',
    //blog: '',
    tools: ['Visual Basic', '.NET', 'Visual Studio'],
  },
  {
    type: 3,
    title: 'Galaxy Survivor',
    description: `fast paced, bullet hell like action game inspired by vampire survivors, zombocalypse, and geometry wars.
    Survive:
    you spawn with nothing and you must fight your way though hordes of enemies leveling up and forming the strongest character possible.
    
    Upgrade:
    upgrade your character, unlocking new weapons, abilities, and shapes as you smash and blast your way through the hordes of enemies.
    
    Specialize:
    Specialize your character to your preferred playstyle using perks to boost your stats, taking your character to the next level.
    
    Progress:
    fight through hordes of enemies to progress through the maps to find your way to the safe side of the galaxy.`,
    imgSrc: '/static/images/projects/Galaxy Survivor.png',
    //github: 'https://github.com/UpSideDownGitHub/MobileAppas2',
    itch: 'https://upsidedownitch.itch.io/galaxy-survivor',
    //blog: '',
    tools: ['Unity', 'C#', 'Krita'],
  },
  {
    type: 3,
    title: 'Kwesi James Online Store',
    description: `Mobile shopping application, with user registration, item sorting, basket, and order tracking, as well as 
    having an admin side which will let the admin control all of the items in the store`,
    imgSrc: '/static/images/projects/Mobile Apps 2.jpg',
    github: 'https://github.com/UpSideDownGitHub/MobileAppas2',
    //itch: 'https://upsidedownitch.itch.io/coldcurve-denham',
    //blog: '',
    tools: ['Java', 'Android Studio'],
  },
  {
    type: 3,
    title: 'OpenGL Morpher Game',
    description: `Simple game produced in C++ using GLUT that will give the user a shape and they must draw the shape and see how 
    close they can get`,
    imgSrc: '/static/images/projects/Open GL.png',
    github: 'https://github.com/UpSideDownGitHub/OpenGL-Morphing',
    //itch: 'https://upsidedownitch.itch.io/coldcurve-denham',
    //blog: '',
    tools: ['C++', 'GLUT', 'Visual Studio'],
  },
  {
    type: 3,
    title: 'Learning Application',
    description: `Learning focuseed application for android devices built with android studio. It contains login screen,
    notes application, 4 quiz variations, calculator, and dice.`,
    imgSrc: '/static/images/projects/Mobile Apps 1.jpg',
    github: 'https://github.com/UpSideDownGitHub/Mobile-App',
    //itch: 'https://upsidedownitch.itch.io/coldcurve-denham',
    //blog: '',
    tools: ['Java', 'Android Studio', 'Krita'],
  },
  {
    type: 1,
    title: 'Lengthy',
    description: `Custom Esolang where the length of the characters determines the instruction that will be done.`,
    imgSrc: '/static/images/projects/lengthy.png',
    github: 'https://github.com/UpSideDownGitHub/Lengthy',
    //itch: 'https://upsidedownitch.itch.io/coldcurve-denham',
    //blog: '',
    tools: ['C#', '.NET', 'Visual Studio', 'Translation', 'Compilation'],
  },
  {
    type: 3,
    title: 'ColdCurve Denham',
    description: `Leave a trail of blood as you clear through levels floor by floor with nothing but you shear will to cause 
    ultimate bloodshed. Hotline Miami inspired game but with a 3D perspective, fast paced action with a lot of blood and a lot 
    of deaths.`,
    imgSrc: '/static/images/projects/Native.png',
    github: 'https://github.com/UpSideDownGitHub/Native-Programming-Compilation-Assignment',
    itch: 'https://upsidedownitch.itch.io/coldcurve-denham',
    //blog: '',
    tools: ['Unity', 'C#'],
  },
  {
    type: 3,
    title: '1942 Clone',
    description: `Clone of the classic Arcade game 1942 created by Capcom in 1984. 1942 is set in the pacific theatre of world war 2, 
    and is loosely based on the battle of midway, you have to defeat waves of enemy ships as you travel to Tokyo to destroy the 
    Japanese air fleet.`,
    imgSrc: '/static/images/projects/1942.png',
    github: 'https://github.com/UpSideDownGitHub/1942-Clone',
    itch: 'https://upsidedownitch.itch.io/1942-clone',
    //blog: '',
    tools: ['C++', 'SFML', 'Visual Studio'],
  },
  
  {
    type: 3,
    title: 'Destructive Dave',
    description: `In Destructive Dave you play as Dave, An Angry man who's going around destryoing a small city for his own reasons. 
    Weild: The Rocket Launcher, Pistol, Baseball Bat and a Frying Pan to destroy buildings, "Knockout" police and gain as many points 
    as you can in 2 mintues. With ragdolls and satisfying destruction physics and Emotes, Destructive Dave can be an amusing game, a 
    boredom killer, something to just play and come back to at any time.`,
    imgSrc: '/static/images/projects/Destructive Dave.png',
    //github: '',
    itch: 'https://arker-entertainment.itch.io/destructive-dave',
    //blog: '',
    tools: ['C#', 'Unity', 'Group Project'],
  },
  {
    type: 3,
    title: 'Pirate Plunderers',
    description: `Play as a lowly forgotten pirate trying to make it in the plundering world, defeat encampments on the 
    shore & pirates in the sea to earn loot. buy upgrades, and improve your ship to become the king of the 7 seas.
    defeat bosses to traverse to new areas and truly become a master of the seas.`,
    imgSrc: '/static/images/projects/pirate plunderers.png',
    github: 'https://github.com/UpSideDownGitHub/Pirate-Plunderers',
    itch: 'https://upsidedownitch.itch.io/pirate-plunderers',
    //blog: '',
    tools: ['C#', 'Unity', 'Group Project'],
  },
  {
    type: 3,
    title: 'Bouncing Balls',
    description: `Recreation of the Bouncing Balls game where the goal is to remove all of the balls in a grid by connecting 3 
    or more balls using the cannon, before you get crushed.`,
    imgSrc: '/static/images/projects/Bouncing Balls.png',
    //github: '',
    itch: 'https://upsidedownitch.itch.io/bouncing-balls',
    //blog: '',
    tools: ['C++', 'SFML', 'Visual Studio'],
  },
  {
    type: 2,
    title: 'Memorsium',
    description: `my second ever game made in the brackeys game jam 2022.1, memory based platformer where the player has a given 
    amount of time to memorize the map then they must traverse it with the map not there (this is how I fit it with the theme of 
    it is not real as the platforms are not real?). there are 20 levels in the game each with best times`,
    imgSrc: '/static/images/projects/Mermorsium.png',
    //github: '',
    itch: 'https://upsidedownitch.itch.io/memorsium',
    //blog: '',
    tools: ['Unity', 'C#', 'Solo'],
  },
  {
    type: 2,
    title: 'Inconspicuous',
    description: `this is a painful to play game that i made for the unpredictable game jam and is also the first game I have ever 
    made(and my first game jam)`,
    imgSrc: '/static/images/projects/inconspicuious.png',
    //github: '',
    itch: 'https://upsidedownitch.itch.io/inconspicuous',
    //blog: '',
    tools: ['Unity', 'C#', 'Solo'],
  },
]

export default projectsData
