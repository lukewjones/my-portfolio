type Reference = {
  name: string;
  description: string;
  affiliation: string;
}

type Icon = {
  svg: JSX.Element; 
  name: string;
}

type Proj = {
  img: string; 
  name: string;
  type: string;
}

export const references: Reference[] = [
  {
    name: "Levi Jones",
    description: "something nice about me so I can put it on my website",
    affiliation: "Name seen in post by Soren Iveson - Rising standup comedian"
  },
  {
    name: "Seth Kasten",
    description: "His attention to detail and quality is outstanding. Working with Luke is an absolute pleasure every time I get the opportunity!",
    affiliation: "rising developer"
  },
  {
    name: "Ezekiel Augustin Murphy",
    description: "I liked your sweatshirt last night",
    affiliation: "Sweatshirt aficionado - cancer survivor"
  },
  {
    name: "Luke Jones",
    description: "You really should hire me",
    affiliation: "Great friend - Even less great developer"
  },
  {
    name: "Brandon McConnell",
    description: "Luke is a great friend and even less great developer, but he’s working on it! Be nice to him. He has feelings too.",
    affiliation: "Best known for his design + photography work"
  },
  {
    name: "Noah Jones",
    description: "VROOOOOOM RRRRNNNNGGGG EEEEEEEEERRRRR!!! Cool, huh? so cool... it broke the road",
    affiliation: "Professional professional"
  },
]


export const icons: Icon[] = [
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>react</title><path d="M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M13.03,18.3C14.62,19.8 16,20.38 16.62,20C17.26,19.65 17.45,18.18 16.94,16.04C16.17,16.2 15.36,16.32 14.54,16.4C14.06,17.07 13.55,17.71 13.03,18.3M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M10.97,5.7C9.38,4.2 8,3.62 7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7Z" /></svg>
    ),
    name: "React",
  },
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>language-javascript</title><path d="M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86Z" /></svg>
    ),
    name: "JavaScript",
  },
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>language-css3</title><path d="M5,3L4.35,6.34H17.94L17.5,8.5H3.92L3.26,11.83H16.85L16.09,15.64L10.61,17.45L5.86,15.64L6.19,14H2.85L2.06,18L9.91,21L18.96,18L20.16,11.97L20.4,10.76L21.94,3H5Z" /></svg>
    ),
    name: "CSS",
  },
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M14 95.8C14 42.9 56.9 0 109.8 0H274.2C327.1 0 370 42.9 370 95.8C370 129.3 352.8 158.8 326.7 175.9C352.8 193 370 222.5 370 256C370 308.9 327.1 351.8 274.2 351.8H272.1C247.3 351.8 224.7 342.4 207.7 326.9V415.2C207.7 468.8 163.7 512 110.3 512C57.5 512 14 469.2 14 416.2C14 382.7 31.2 353.2 57.2 336.1C31.2 319 14 289.5 14 256C14 222.5 31.2 193 57.2 175.9C31.2 158.8 14 129.3 14 95.8zM176.3 191.6H109.8C74.2 191.6 45.4 220.4 45.4 256C45.4 291.4 74 320.2 109.4 320.4C109.5 320.4 109.7 320.4 109.8 320.4H176.3V191.6zM207.7 256C207.7 291.6 236.5 320.4 272.1 320.4H274.2C309.7 320.4 338.6 291.6 338.6 256C338.6 220.4 309.7 191.6 274.2 191.6H272.1C236.5 191.6 207.7 220.4 207.7 256zM109.8 351.8C109.7 351.8 109.5 351.8 109.4 351.8C74 352 45.4 380.8 45.4 416.2C45.4 451.7 74.6 480.6 110.3 480.6C146.6 480.6 176.3 451.2 176.3 415.2V351.8H109.8zM109.8 31.4C74.2 31.4 45.4 60.2 45.4 95.8C45.4 131.4 74.2 160.2 109.8 160.2H176.3V31.4H109.8zM207.7 160.2H274.2C309.7 160.2 338.6 131.4 338.6 95.8C338.6 60.2 309.7 31.4 274.2 31.4H207.7V160.2z"/></svg>
    ),
    name: "Figma",
  },
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>tailwind</title><path d="M12 6C9.33 6 7.67 7.33 7 10C8 8.67 9.17 8.17 10.5 8.5C11.26 8.69 11.81 9.24 12.41 9.85C13.39 10.85 14.5 12 17 12C19.67 12 21.33 10.67 22 8C21 9.33 19.83 9.83 18.5 9.5C17.74 9.31 17.2 8.76 16.59 8.15C15.61 7.15 14.5 6 12 6M7 12C4.33 12 2.67 13.33 2 16C3 14.67 4.17 14.17 5.5 14.5C6.26 14.69 6.8 15.24 7.41 15.85C8.39 16.85 9.5 18 12 18C14.67 18 16.33 16.67 17 14C16 15.33 14.83 15.83 13.5 15.5C12.74 15.31 12.2 14.76 11.59 14.15C10.61 13.15 9.5 12 7 12Z" /></svg>
    ),
    name: "Tailwind",
  },
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>language-typescript</title><path d="M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z" /></svg>
    ),
    name: "Typescript",
  },
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>github</title><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>
    ),
    name: "GitHub",
  },
]

export const projects: Proj[] = [
  {
    img: "src/imgs/habit-tracker.jpg",
    name: "Habit Tracker",
    type: "idea",
  },
  {
    img: "src/imgs/password-generator.jpg",
    name: "Password Generator",
    type: "scrimba",
  },
  {
    img: "src/imgs/shopping-list.jpg",
    name: "Shopping List",
    type: "scrimba",
  },
]

export const socials = [
  {
    platform: 'X',
    handle: '@lvke_j',
    link: 'https://x.com/lvke_j',
  },
  {
    platform: 'LinkedIn',
    handle: 'Luke Jones',
    link: 'https://www.linkedin.com/in/luke-w-jones',
  },
  {
    platform: 'Email',
    handle: 'lukewjones2004@gmail.com',
    link: 'lukewjones2004@gmail.com',
  },
  {
    platform: 'Resumé',
    handle: 'Download',
    link: '',
  },
]