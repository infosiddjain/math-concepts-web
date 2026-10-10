import { LogoMark } from "@/components/brand/LogoMark";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Loading">
      <span className="rounded-3xl bg-[#0D5C63] p-4 ring-1 ring-steel-400/25">
        <LogoMark animated className="h-16 w-16" />
      </span>
    </div>
  );
}
