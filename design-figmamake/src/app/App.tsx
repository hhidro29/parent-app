import { useState } from "react";
import HomePage from "@/app/components/HomePage";
import LearningPage from "@/app/components/LearningPage";
import ChatPage from "@/app/components/ChatPage";
import PaymentPage from "@/app/components/PaymentPage";
import MyChildPage from "@/app/components/MyChildPage";
import AuthPage from "@/app/components/AuthPage";
import RewardPage from "@/app/components/RewardPage";
import BottomNavigation from "@/app/components/BottomNavigation";

type NavigationPage = "home" | "learning" | "chat";
type AppView = NavigationPage | "payment" | "mychild" | "auth" | "reward";

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavigationPage>("home");
  const [currentView, setCurrentView] = useState<AppView>("home");
  const [authSourceView, setAuthSourceView] = useState<AppView>("home");
  const [rewardChildId, setRewardChildId] = useState<string | undefined>(undefined);

  const handleNavigate = (page: NavigationPage) => {
    setCurrentPage(page);
    setCurrentView(page);
  };

  const handleNavigateToPayment = () => {
    setCurrentView("payment");
  };

  const handleNavigateToMyChild = () => {
    setCurrentView("mychild");
  };

  const handleNavigateToReward = (childId?: string) => {
    setRewardChildId(childId);
    setCurrentView("reward");
  };

  const handleNavigateToAuth = () => {
    setAuthSourceView(currentView);
    setCurrentView("auth");
  };

  const handleBackFromPayment = () => {
    setCurrentView(currentPage);
  };

  const handleBackFromMyChild = () => {
    setCurrentView(currentPage);
  };

  const handleBackFromReward = () => {
    setCurrentView("mychild");
    setRewardChildId(undefined);
  };

  const handleBackFromAuth = () => {
    setCurrentView(authSourceView);
  };

  return (
    <div className="bg-[#f3fbfc] flex items-center justify-center min-h-screen w-full">
      {/* Mobile Container - Max 450px */}
      <div className="bg-[#f3fbfc] flex flex-col h-screen max-w-[450px] overflow-hidden relative w-full">
        {/* Page Content */}
        <div className="flex-1 overflow-y-auto pb-[70px]">
          {currentView === "home" && (
            <HomePage 
              onNavigateToPayment={handleNavigateToPayment}
              onNavigateToMyChild={handleNavigateToMyChild}
            />
          )}
          {currentView === "learning" && <LearningPage onNavigateToAuth={handleNavigateToAuth} />}
          {currentView === "chat" && <ChatPage />}
        </div>

        {/* Payment Page - Full screen overlay */}
        {currentView === "payment" && (
          <div className="absolute inset-0 z-50 bg-[#f7f9fd] overflow-y-auto">
            <PaymentPage onBack={handleBackFromPayment} />
          </div>
        )}

        {/* My Child Page - Full screen overlay */}
        {currentView === "mychild" && (
          <div className="absolute inset-0 z-50 bg-[#f7f9fd] overflow-y-auto">
            <MyChildPage 
              onBack={handleBackFromMyChild}
              onNavigateToAuth={handleNavigateToAuth}
              onNavigateToReward={handleNavigateToReward}
            />
          </div>
        )}

        {/* Reward Page - Full screen overlay */}
        {currentView === "reward" && (
          <div className="absolute inset-0 z-50 bg-[#f7f9fd] overflow-y-auto">
            <RewardPage onBack={handleBackFromReward} initialChildId={rewardChildId} />
          </div>
        )}

        {/* Auth Page - Full screen overlay */}
        {currentView === "auth" && (
          <div className="absolute inset-0 z-50 bg-[#f3fbfc] overflow-y-auto">
            <AuthPage onBack={handleBackFromAuth} />
          </div>
        )}

        {/* Bottom Navigation - hidden on payment, mychild, auth, and reward page */}
        {currentView !== "payment" && currentView !== "mychild" && currentView !== "auth" && currentView !== "reward" && (
          <BottomNavigation currentPage={currentPage} onNavigate={handleNavigate} />
        )}
      </div>
    </div>
  );
}
