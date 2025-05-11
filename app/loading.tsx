const loadingMessages = [
  "Crafting digital experiences...",
  "Brewing creative ideas...",
  "Sprinkling some magic...",
  "Loading awesome content...",
  "Almost there..."
];

export default function Loading() {
  // Get a random message
  const message = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];

  return (
    <div className="min-h-screen w-full flex flex-col gap-6 items-center justify-center bg-black-100">
      <div className="relative">
        {/* Outer purple ring */}
        <div className="absolute -inset-4 rounded-full border-4 border-t-purple-500 border-r-purple-300 border-b-purple-200 border-l-transparent animate-[spin_3s_linear_infinite_reverse]" />
        {/* Blue glow effect */}
        <div className="absolute inset-0 blur-xl bg-blue-500/20 rounded-full animate-pulse" />
        {/* Inner blue spinner */}
        <div className="relative w-32 h-32 rounded-full border-4 border-t-blue-500 border-r-blue-300 border-b-blue-200 border-l-transparent animate-spin" />
      </div>
      <p className="text-lg md:text-xl font-medium text-blue-200/80 animate-fade-in">
        {message}
      </p>
    </div>
  );
}
