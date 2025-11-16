import { User } from "lucide-react";

interface UserAvatarProps {
  initials?: string;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
};

const iconSizeMap = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

export function UserAvatar({
  initials = "T",
  icon,
  size = "md",
}: UserAvatarProps) {
  return (
    <div
      className={`${sizeMap[size]} rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-sm`}
    >
      {icon ? (
        <div className={iconSizeMap[size]}>{icon}</div>
      ) : (
        initials
      )}
    </div>
  );
}
