type StoreButtonsProps = {
  ios?: string;
  android?: string;
};

export function StoreButtons({ ios, android }: StoreButtonsProps) {
  if (!ios && !android) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {ios ? (
        <a
          href={ios}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center gap-2.5 rounded-xl bg-white px-4 text-black transition-opacity hover:opacity-90"
        >
          <AppleIcon />
          <span className="text-left leading-tight">
            <span className="block text-[10px] text-black/55">Download on the</span>
            <span className="block text-sm font-semibold">App Store</span>
          </span>
        </a>
      ) : null}
      {android ? (
        <a
          href={android}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center gap-2.5 rounded-xl bg-white px-4 text-black transition-opacity hover:opacity-90"
        >
          <PlayIcon />
          <span className="text-left leading-tight">
            <span className="block text-[10px] text-black/55">GET IT ON</span>
            <span className="block text-sm font-semibold">Google Play</span>
          </span>
        </a>
      ) : null}
    </div>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-current">
      <path d="M16.37 12.73c.03 3.24 2.84 4.32 2.87 4.33-.02.08-.45 1.54-1.48 3.05-.89 1.3-1.82 2.6-3.28 2.63-1.43.03-1.9-.85-3.54-.85-1.65 0-2.16.82-3.52.88-1.41.06-2.49-1.41-3.39-2.71C2.2 17.3.86 13.07 2.7 10.22c.91-1.41 2.54-2.31 4.31-2.33 1.35-.03 2.62.91 3.54.91.92 0 2.64-1.12 4.45-.96.76.03 2.88.3 4.25 2.31-.11.07-2.54 1.48-2.88 3.58ZM14.7 6.96c.73-.88 1.22-2.11 1.09-3.33-1.05.04-2.32.7-3.08 1.58-.68.78-1.27 2.03-1.11 3.23 1.17.09 2.37-.6 3.1-1.48Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6">
      <path fill="#EA4335" d="M3.5 2.6 13.8 12 3.5 21.4c-.4-.3-.6-.8-.6-1.3V3.9c0-.5.2-1 .6-1.3Z" />
      <path fill="#FBBC04" d="m20.3 10.4-4.4-2.5-3.2 3.1 3.2 3.1 4.4-2.5c.9-.5.9-1.8 0-2.2Z" />
      <path fill="#4285F4" d="M20.3 13.6 13.8 12 10.6 15.1l5.3 3.1c.8.5 1.8-.1 2.2-.7.3-.5.8-2.3 2.2-3.9Z" />
      <path fill="#34A853" d="M3.5 21.4 10.6 15.1 13.8 12 3.5 2.6c-.7.4-1.1 1.2-.8 2 .8 2.6 1.3 10.6.8 16.8Z" />
    </svg>
  );
}
