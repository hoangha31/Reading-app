import { useSetPageHeader } from "@/contexts/HeaderContext";
import { ProgressSection } from "@/components/ProgressSection";
import { GamesSection } from "@/components/GamesSection";
import { LibrarySection } from "@/components/LibrarySection";

export default function Index() {
  useSetPageHeader({
    title: "Xin chào! 👋",
    subtitle: "Hôm nay bạn sẽ học gì?",
    userName: "T",
    streakCount: 5,
  });

  return (
    <div className="animate-fade-in">
      <ProgressSection />
      <GamesSection />
      <LibrarySection />
    </div>
  );
}
