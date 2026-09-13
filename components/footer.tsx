import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-8 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © 2026 {profile.nameEn}. All rights reserved.
        </p>
        <p>{profile.title}</p>
      </div>
    </footer>
  );
}
