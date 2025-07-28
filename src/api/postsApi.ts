import axios from 'axios';
import { Post } from '../types/Post';

const API_URL = 'https://662029f13bf790e070af2cd8.mockapi.io/api/v1/posts';

// Local items for development purposes
const localPosts: Post[] = [
  {
    id: '1',
    createdAt: '2024-06-04T11:45:23.000Z',
    name: 'Marcos Benítez',
    avatar: 'https://i.pravatar.cc/150?img=11',
    description: 'Que hermosa vista desde aquí! 🌄',
    likes: 134,
    image: 'https://picsum.photos/640/480?random=1',
    comments: 543,
    liked: false,
    saved: true,
    location: 'Quito'
  },
  {
    id: '2',
    createdAt: '2024-07-10T18:12:05.000Z',
    name: 'Luisa Fernández',
    avatar: 'https://i.pravatar.cc/150?img=35',
    description: 'Logre mis 5 km diarios! 🏃‍♀️',
    likes: 87,
    image: 'https://picsum.photos/640/480?random=2',
    comments: 219,
    liked: true,
    saved: false,
    location: 'Medellín'
  },
  {
    id: '3',
    createdAt: '2024-05-20T09:33:10.000Z',
    name: 'Samuel Andrade',
    avatar: 'https://i.pravatar.cc/150?img=58',
    description: 'Escapando de la rutina en bici! 🚴‍♂️',
    likes: 198,
    image: 'https://picsum.photos/640/480?random=3',
    comments: 701,
    liked: false,
    saved: true,
    location: 'Lima'
  },
  {
    id: '4',
    createdAt: '2024-07-01T22:14:45.000Z',
    name: 'Catalina Ríos',
    avatar: 'https://i.pravatar.cc/150?img=47',
    description: '¿Cuanto tiempo lleva esto aqui? 🤔',
    likes: 56,
    image: 'https://picsum.photos/640/480?random=4',
    comments: 98,
    liked: true,
    saved: false,
    location: 'Buenos Aires'
  },
  {
    id: '5',
    createdAt: '2024-07-22T14:59:30.000Z',
    name: 'Esteban Molina',
    avatar: 'https://i.pravatar.cc/150?img=23',
    description: 'Se nota que este triciclo es de los 90s! 🚲',
    likes: 174,
    image: 'https://picsum.photos/640/480?random=5',
    comments: 812,
    liked: false,
    saved: true,
    location: 'Cusco'
  }
];

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(API_URL);
  return [...localPosts, ...response.data];
};