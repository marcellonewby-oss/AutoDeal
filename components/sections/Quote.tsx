export function Quote() {
  return (
    <section className="py-40 bg-surface flex items-center justify-center text-center px-6">
      <div className="max-w-4xl">
        {/* Decorative quote mark */}
        <div className="flex justify-center mb-10">
          <svg
            width="48"
            height="40"
            viewBox="0 0 48 40"
            fill="none"
            className="text-primary opacity-60"
          >
            <path
              d="M0 40V24C0 10.745 8.053 3.2 24.16 0l2.88 4.8C19.627 6.507 15.787 10.24 14.4 16H22V40H0Zm26 0V24c0-13.255 8.053-20.8 24.16-24l2.88 4.8C45.627 6.507 41.787 10.24 40.4 16H48V40H26Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <blockquote className="font-headline text-4xl md:text-5xl italic font-normal leading-tight text-on-surface mb-12">
          &ldquo;AutoLead didn&rsquo;t just fill our pipeline — they built a
          machine that runs itself. Within 90 days we had more qualified
          conversations than the entire previous year. This is the only way to
          scale outbound.&rdquo;
        </blockquote>

        <cite className="not-italic">
          <span className="block font-bold text-on-surface text-lg">
            Rafael Moreno
          </span>
          <span className="block font-label text-neutral-500 text-xs uppercase tracking-widest mt-1">
            CEO, Meridian Growth Partners
          </span>
        </cite>
      </div>
    </section>
  );
}
