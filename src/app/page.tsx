import CatalogView from '@/features/catalog/CatalogView';

export default function Home() {
  return (
    <main className="p-8">
      { <CatalogView /> }
    </main>
  );
}