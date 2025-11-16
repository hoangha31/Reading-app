import { useNavigate } from "react-router-dom";
import { Settings, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { UserAvatar } from "./UserAvatar";

interface AvatarMenuProps {
  initials?: string;
  userName?: string;
}

export function AvatarMenu({ initials = "T", userName = "T" }: AvatarMenuProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded-full">
          <UserAvatar initials={initials} size="md" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem
          onClick={() => {
            // Navigate to settings page (placeholder for now)
            console.log("Settings clicked");
          }}
          className="cursor-pointer gap-2"
        >
          <Settings className="w-4 h-4" />
          <span>Cài đặt</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer gap-2 text-destructive focus:text-destructive"
        >
          <LogOut className="w-4 h-4" />
          <span>Đăng xuất</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
