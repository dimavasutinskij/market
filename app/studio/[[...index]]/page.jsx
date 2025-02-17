// pages/studio/[[...index]].jsx

export async function generateStaticParams() {
  return [
    { index: 'page-1' },
    { index: 'page-2' },
    { index: 'page-3' }
  ];
}

export default function StudioPage() {
  return <div>Це сторінка зі статичними параметрами.</div>;
}
