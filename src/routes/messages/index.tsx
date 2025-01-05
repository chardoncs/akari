import { useBlueskyStore } from '@/lib/bluesky/store';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/messages/')({
  beforeLoad: async () => {
    const isAuthenticated = useBlueskyStore.getState().isAuthenticated;
    if (!isAuthenticated) throw redirect({ to: '/login', search: { redirect: '/messages/' } });
  },
});