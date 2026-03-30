export interface Testimonial {
  id: string;
  author: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    author: 'Priya S.',
    location: 'Asheville, NC',
    quote: 'Copperline completely changed how I think about coffee. I used to buy whatever was on sale. Now I look forward to my morning cup like nothing else. The Yirgacheffe is otherworldly.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    id: 't2',
    author: 'James R.',
    location: 'Charlotte, NC',
    quote: 'I\'ve tried dozens of specialty roasters. Copperline hits the sweet spot of quality, price, and consistency. The Huila Washed is my year-round staple — I buy it by the 5lb bag.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    id: 't3',
    author: 'Claire M.',
    location: 'Durham, NC',
    quote: 'The packaging alone makes this feel like a premium experience. But the coffee inside lives up to every bit of the presentation. Fast shipping, always fresh, and the notes are spot-on.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80',
  },
  {
    id: 't4',
    author: 'Owen B.',
    location: 'Atlanta, GA',
    quote: 'As someone who spent years in specialty coffee, I\'m hard to impress. Copperline impressed me. The Kenya AA is one of the best lots I\'ve tasted this year, full stop.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  },
];
