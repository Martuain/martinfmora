import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="section-shell grid min-h-[70vh] place-items-center py-20 text-center">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">404</p>
        <h1 className="mt-4 font-serif text-6xl text-ink">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-lg leading-8 text-ink/68">
          This page is not available, but the main site has the signal you are looking for.
        </p>
        <div className="mt-8">
          <Button href="/">Return home</Button>
        </div>
      </div>
    </main>
  );
}
