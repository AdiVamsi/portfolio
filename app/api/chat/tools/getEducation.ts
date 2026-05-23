import { tool } from 'ai';
import { z } from 'zod';

export const getEducation = tool({
  description: 'Show education background of Adi Vamsi Sai',
  inputSchema: z.object({}),
  execute: async () => {
    return {
      degrees: [
        {
          degree: 'Master’s degree, Information Technology',
          school: 'Webster University',
          period: 'Jan 2023 – May 2024',
          location: 'San Antonio, TX',
          gpa: '3.6/4.0',
          summary:
            'Graduate work focused on information technology, systems thinking, software delivery, and applied technical problem solving.',
          focus: ['Information Technology', 'Software systems', 'Data and analytics', 'IT management'],
        },
        {
          degree: 'Bachelor’s degree, Computer Science Engineering',
          school: 'GITAM Deemed University',
          period: 'Jun 2016 – Jun 2020',
          location: 'Hyderabad, India',
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
