import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black-100">
      <div className="max-w-xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="mb-4">Could not find requested resource</p>
        <Link 
          href="/"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
