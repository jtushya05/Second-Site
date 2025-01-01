import { Container } from '@/components/ui/container';

export default function Loading() {
  return (
    <div className="min-h-screen pt-32">
      <Container className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em]" />
        <p className="mt-4 text-gray-600">Loading...</p>
      </Container>
    </div>
  );
}