import { useState } from "react";
import { Check } from "lucide-react";
import { AvatarMenu } from "./AvatarMenu";
import { StreakBadge } from "./StreakBadge";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  userName?: string;
  streakCount?: number;
  onCheckIn?: () => void;
}

export function PageHeader({
  title,
  subtitle,
  userName = "T",
  streakCount = 5,
  onCheckIn,
}: PageHeaderProps) {
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  const handleCheckIn = () => {
    setIsCheckedIn(true);
    onCheckIn?.();
  };

  return (
    <div className="flex items-start justify-between gap-8">
      {/* Left: Title and Subtitle */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-muted-foreground mt-2">{subtitle}</p>
        )}
      </div>

      {/* Right: User Profile Area */}
      <div className="flex items-center gap-4 flex-shrink-0">
        {/* Avatar with Dropdown Menu */}
        <AvatarMenu initials={userName} userName={userName} />

        {/* Streak Badge */}
        <StreakBadge count={streakCount} />

        {/* Check-in Button */}
        <button
          onClick={handleCheckIn}
          disabled={isCheckedIn}
          className={cn(
            "px-6 py-2 rounded-full font-semibold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center gap-2 whitespace-nowrap",
            isCheckedIn
              ? "bg-warning text-foreground hover:opacity-90 focus:ring-warning disabled:cursor-default"
              : "bg-muted text-muted-foreground hover:opacity-90 focus:ring-primary disabled:opacity-50"
          )}
          aria-label={isCheckedIn ? "Checked in" : "Check in daily"}
        >
          {isCheckedIn && <Check className="w-4 h-4" aria-hidden="true" />}
          <span>{isCheckedIn ? "Đã điểm danh" : "Điểm danh"}</span>
        </button>
      </div>
    </div>
  );
}
