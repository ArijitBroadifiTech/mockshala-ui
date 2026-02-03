import { Card, CardContent } from "@/components/ui/card";
import { Tabs, } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTestDescriptionStore } from "@/stores/testStore";
import { Clock, BookOpen, Award, Lock, LockKeyholeOpen, Play } from "lucide-react";
import { useState } from "react";
import { formatName } from "@/utils/formatting/formatName";
import { formattingWord } from "@/utils/formatting/formattingWord";

function TestDescriptionMobile() {
  const { testData } = useTestDescriptionStore();
  const [activeFilter, setActiveFilter] = useState("All Tests");

  const difficultyColors: Record<string, string> = {
    beginner: "text-green-600 bg-green-50",
    intermediate: "text-orange-500 bg-orange-50",
    pro: "text-red-600 bg-red-50",
  };

  const formatDuration = (minutes: number): string => {
    if (!minutes || minutes <= 0) return "0 min";

    const hours = Math.floor(minutes / 60);

    const remainingMinutes = minutes % 60;

    if (hours === 0) return `${remainingMinutes} min`;
    if (remainingMinutes === 0) return `${hours} hr`;
    return `${hours} hr ${remainingMinutes} min`;
  };

  // Filter tests based on active filter
  const getFilteredTests = () => {
    if (!testData?.tests) return [];
    
    switch (activeFilter) {
      case "Difficulty":
        // Group by difficulty - for now showing all, you can implement grouping logic
        return testData.tests;
      case "Test Type":
        // Group by test type
        return testData.tests;
      case "Description":
        // Sort by newest
        return [...testData.tests].reverse();
      default:
        return testData.tests;
    }
  };

  const filteredTests = getFilteredTests();

  return (
    <div className="max-w-6xl w-full  py-4 lg:py-6">
      <Tabs defaultValue="all" className="w-full">
        {/* Filter Tabs */}
        <div className="mb-6">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            <Button
              variant={activeFilter === "All Tests" ? "default" : "outline"}
              className={`rounded-full whitespace-nowrap ${
                activeFilter === "All Tests"
                  ? "bg-blue-600 hover:bg-blue-700"
                  : ""
              }`}
              onClick={() => setActiveFilter("All Tests")}
            >
              All Tests
            </Button>
            <Button
              variant={activeFilter === "Difficulty" ? "default" : "outline"}
              className={`rounded-full whitespace-nowrap ${
                activeFilter === "Difficulty"
                  ? "bg-blue-600 hover:bg-blue-700"
                  : ""
              }`}
              onClick={() => setActiveFilter("Difficulty")}
            >
              Difficulty
            </Button>
            <Button
              variant={activeFilter === "Test Type" ? "default" : "outline"}
              className={`rounded-full whitespace-nowrap ${
                activeFilter === "Test Type"
                  ? "bg-blue-600 hover:bg-blue-700"
                  : ""
              }`}
              onClick={() => setActiveFilter("Test Type")}
            >
              Test Type
            </Button>
            <Button
              variant={activeFilter === "Description" ? "default" : "outline"}
              className={`rounded-full whitespace-nowrap ${
                activeFilter === "Description"
                  ? "bg-blue-600 hover:bg-blue-700"
                  : ""
              }`}
              onClick={() => setActiveFilter("Description")}
            >
              Description
            </Button>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Available Tests ({filteredTests.length})
          </h2>
          {/* <Button variant="link" className="text-blue-600 p-0 h-auto">
            View All
          </Button> */}
        </div>

        {/* Test Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredTests.map((test) => (
            <Card
              key={test._id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-200 border-gray-200"
            >
              <CardContent className="px-4">
                {/* Badges */}
                <div className="flex items-center gap-2 mb-3">
                  <Badge
                    className={`${
                      difficultyColors[test.difficultyLevel.toLowerCase()] ??
                      "text-gray-600 bg-gray-50"
                    } uppercase`}
                    variant="secondary"
                  >
                    {test.difficultyLevel}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-50 text-button-sky uppercase"
                  >
                    {formattingWord(test.testType)}
                  </Badge>
                </div>

                {/* Test Name */}
                <div className="mb-4 flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-gray-900 leading-tight">
                    {formatName(test.name)}
                  </h3>
                  {test.isOpen ?  
                    (<div className="bg-gray-100 p-2 rounded-lg">
                        <LockKeyholeOpen className="text-green-600 shrink-0" size={18}/>
                    </div> ) :
                    (
                        <div className="bg-gray-100 p-2 rounded-lg">
                         <Lock className="text-gray-400 shrink-0" size={18} />
                    </div>
                       
                    )}
                </div>

                {/* Test Stats */}
                <div className="flex items-center gap-4 mb-4 text-xs text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <BookOpen size={16} className="text-gray-400" />
                    <span>{test.totalQuestions} Qs</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={16} className="text-gray-400" />
                    <span>{formatDuration(test.time)}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award size={16} className="text-gray-400" />
                    <span>{test.highestScore} Marks</span>
                  </div>
                </div>

                {/* Action Button */}
                {test.isOpen ? (
                  <Button className="w-full bg-gradient-to-r from-button-sky to-button-blue  text-white font-semibold rounded-lg h-10">
                    <Play  size={18} className="mr-1" />
                    Start Test
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full  border-button-blue text-button-blue hover:bg-blue-50 font-semibold rounded-lg h-10"
                  >
                    Unlock Now
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No tests message */}
        {filteredTests.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No tests available</p>
          </div>
        )}
      </Tabs>


    </div>
  );
}

export default TestDescriptionMobile;