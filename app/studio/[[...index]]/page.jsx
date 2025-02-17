// pages/studio/[[...index]].jsx

export async function generateStaticParams() {
    return [
        { index: ['page-1'] },
        { index: ['page-2'] },
        { index: ['page-3'] }
    ];
}

export default function StudioPage({ params }) {
    console.log(params); // Для дебагу

    return (
        <div>
            <h1>Це сторінка зі статичними параметрами</h1>
            <p>Параметри: {JSON.stringify(params)}</p>
        </div>
    );
}
