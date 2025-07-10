import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'BufferBrain',
    description: 'Browser extension that displays a popup when YouTube videos play to prevent mindless YouTube binging.',
    longDescription: 'BufferBrain is a browser extension built with Plasmo, React, and Tailwind CSS that helps users break the cycle of mindless YouTube consumption. When a YouTube video starts playing, the extension displays an interruption popup that promotes productive time usage and encourages users to be more conscious about their viewing habits. This simple yet effective tool has helped many users regain control over their digital consumption patterns.',
    techStack: ['Plasmo', 'React', 'Tailwind CSS', 'TypeScript', 'Browser APIs'],
    category: 'web',
    image: '/bufferbrain.png',
    liveUrl: 'https://www.youtube.com/watch?v=fPBAQmo5GFI',
    githubUrl: 'https://github.com/prathamdupare/bufferbrain',
    featured: true,
  },
  {
    id: '2',
    title: 'TeaThree',
    description: 'T3 Chat Clone - AI chat application built with React Native and Expo, supporting multiple LLMs.',
    longDescription: 'TeaThree is a comprehensive AI chat application that works seamlessly across iOS, Android, and web platforms. Built with React Native and Expo, it features support for multiple Large Language Models including OpenAI, Claude, Deepseek, and Google. The app includes user authentication, chat history synchronization, and real-time data sync using Convex as the database. This project demonstrates modern cross-platform development with a focus on AI integration and user experience.',
    techStack: ['React Native', 'Expo', 'TypeScript', 'Convex', 'OpenAI API', 'Claude API'],
    category: 'web',
    image: '/t3chat.png',
    liveUrl: 'https://tea3--tea-three.expo.app',
    githubUrl: 'https://github.com/prathamdupare/teathree',
    featured: true,
  },
  {
    id: '3',
    title: 'Ethik',
    description: 'Open-source gym app for creating and managing weekly workouts with privacy-focused local data storage.',
    longDescription: 'Ethik is an upcoming open-source fitness application designed with privacy as a core principle. All user data stays local on the device, ensuring complete privacy and control over personal fitness information. The app enables users to create and manage weekly workout routines, track exercises, and monitor progress over time. Built with modern technologies and focusing on user experience, Ethik aims to provide a comprehensive fitness tracking solution without compromising user privacy.',
    techStack: ['React Native', 'TypeScript', 'SQLite', 'Expo', 'Local Storage'],
    category: 'mobile',
    image: '/ethik.jpg',
    githubUrl: 'https://github.com/prathamdupare/ethik',
    featured: true,
  },
]; 