// Генерація статичних параметрів для маршруту
export async function generateStaticParams() {
  return [
    { index: 'page-1' },
    { index: 'page-2' },
    { index: 'page-3' },
  ];
}

// Сторінка Studio
export default function StudioPage({ params }) {
  return (
      <div>
        Це сторінка для:
        {params.index ? params.index : 'без параметрів'}
      </div>
  );
}
