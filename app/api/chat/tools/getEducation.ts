import { tool } from 'ai';
import { z } from 'zod';

export const getEducation = tool({
  description: 'Show education background of Adi Vamsi Sai',
  inputSchema: z.object({}),
  execute: async () => {
    return {
      degrees: [
        {
          degree: 'Master of Science — Information Technology',
          school: 'Webster University',
          period: 'Jan 2023 – Jan 2025',
          location: 'San Antonio, TX',
          gpa: '3.8',
          distinction: true,
          summary:
            'Graduate work that strengthened my systems thinking across AI, data, and software architecture.',
          focus: ['Advanced computing', 'AI systems', 'Data engineering', 'Software architecture', 'Information systems'],
        },
        {
          degree: 'Bachelor of Engineering — Computer Science',
          school: 'GITAM Deemed University',
          period: 'June 2016 – June 2020',
          location: 'Visakhapatnam, India',
          summary:
            'Computer science foundation in core engineering concepts that still shapes how I approach system design and implementation.',
          focus: ['Algorithms', 'Data structures', 'OS', 'Software engineering', 'Databases', 'Distributed systems'],
        },
      ],
      note:
        'My academic path combines strong software engineering fundamentals with more recent applied AI and systems work.',
    };
  },
});
