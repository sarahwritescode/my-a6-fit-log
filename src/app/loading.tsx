
export default function Loading() {
  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white md:px-8">
      <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <span className="loading loading-spinner loading-lg text-[#ccff00]"></span>

          <p className="text-sm font-medium text-zinc-400">
            Loading workouts...
          </p>
        </div>
      </div>
    </main>
  );
}