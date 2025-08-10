import { motion } from "motion/react";
import Lottie from "lottie-react";
import { Card, CardContent } from "@/components/ui/card";
import expiredAnimation from "@/assets/animation/Empty Box - Empty Search.json";
import emptyFridgeAnimation from "@/assets/animation/Empty Box.json";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function NearlyExpiredEmptyState({ caseType }) {
  const navigate = useNavigate();

  // caseType can be "expired" or "empty"
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card className=" w-full shadow-lg">
        <CardContent className="flex flex-col items-center text-center p-6">
          {caseType === "expired" ? (
            <>
              <Lottie
                animationData={expiredAnimation}
                loop={true}
                className="w-48 h-48"
              />
              <h2 className="text-xl font-bold text-red-600 mt-4">
                All tracked food has expired! ⚠️
              </h2>
              <p className="text-gray-500 mt-2">
                Don’t worry — add your fresh items now so we can alert you next
                time.
              </p>
              <Button className="mt-5" onClick={() => navigate("/add-food")}>
                Add Fresh Food
              </Button>
            </>
          ) : (
            <>
              <Lottie
                animationData={emptyFridgeAnimation}
                loop={true}
                className="w-48 h-48"
              />
              <h2 className="text-xl font-bold text-green-600 mt-4">
                No food tracked yet 🍎
              </h2>
              <p className="text-gray-500 mt-2">
                Start by adding your groceries so we can help you keep them
                fresh.
              </p>
              <Button className="mt-5" onClick={() => navigate("/add-food")}>
                Add Your First Item
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
