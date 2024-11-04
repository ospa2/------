import { create } from 'zustand';
import { getTodos } from '@/app/api/f2later';

interface Todo {
  id: number;
  post: string | null;
  createdAt: string;
  updatedAt: string;
}

interface TodoStore {
  posts: string[];
  addPost: (newPost: string) => void;
  deletePost: (index: number) => void;
  updatePost: (index: number, newText: string) => void;
}

interface cnt {
  count: any
  setC: (value: any) => void
}
export const useStore = create<cnt>((set) => ({
  count: null,
  setC: (value: any) => set({ count: value}),
}));

export const useTodo = create<TodoStore>((set) => ({
  posts: [], // Изначально пустой массив

  addPost: (newPost: string) => set((state) => ({
    posts: [...state.posts, newPost],
  })),

  deletePost: (index: number) => set((state) => ({
    posts: state.posts.filter((_, i) => i !== index),
  })),

  updatePost: (index: number, newText: string) => set((state) => ({
    posts: state.posts.map((post, i) => (i === index ? newText : post)),
  })),
}));

// Функция для загрузки постов
const loadInitialPosts = async () => {
  const initialPosts: Todo[] = await getTodos();
  const posts = initialPosts.map(post => post.post).filter(post => post !== null); // Извлекаем только поля 'post'
  useTodo.setState({ posts }); // Устанавливаем начальные посты
};

// Загружаем посты при первом использовании
loadInitialPosts().catch(console.error);
