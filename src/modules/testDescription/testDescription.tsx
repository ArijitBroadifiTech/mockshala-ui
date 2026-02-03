import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AllTests from "./allTests.tsx";
import GroupByDifficulty from "./dificultyLevels.tsx/index.tsx";
import GroupByTestType from "./testTypes/index.tsx";
import HtmlSetter from "../home/components/htmlSetter.tsx";
import { useTestDescriptionStore } from "@/stores/testStore.ts";

function TestDescription() {
  const { testData } = useTestDescriptionStore();

  return (
    <div className="max-w-6xl w-full rounded-2xl border p-4 bg-white flex-col gap-3">
      <div>
        <Tabs defaultValue="All Tests" className="w-full">
          {/* Scrollable wrapper for TabsList */}
          <div className="relative -mx-4 px-4 overflow-x-auto scrollbar-hide lg:overflow-x-visible lg:mx-0 lg:px-0">
            <TabsList className="inline-flex w-auto min-w-full lg:min-w-0 lg:w-auto gap-1 md:gap-2 lg:gap-5">
              <TabsTrigger 
                value="All Tests"
                className="whitespace-nowrap shrink-0"
              >
                All Tests
              </TabsTrigger>
              <TabsTrigger 
                value="Group by difficulty level"
                className="whitespace-nowrap shrink-0"
              >
                Group by difficulty level
              </TabsTrigger>
              <TabsTrigger 
                value="Group by test type"
                className="whitespace-nowrap shrink-0"
              >
                Group by test type
              </TabsTrigger>
              <TabsTrigger 
                value="Test description"
                className="whitespace-nowrap shrink-0"
              >
                Test description
              </TabsTrigger>
            </TabsList>
          </div>

          {/* All Tests */}
          <TabsContent value="All Tests">
            <Card className="border-0 lg:border shadow-none lg:shadow">
              <CardHeader className="px-0 lg:px-6">
                <CardTitle className="text-card-header-darkblue ">{`Available Tests(${testData?.tests.length})`}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm px-0 lg:px-6">
                <AllTests />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Group by difficulty */}
          <TabsContent value="Group by difficulty level">
            <GroupByDifficulty />
          </TabsContent>

          {/* Group by test type */}
          <TabsContent value="Group by test type">
            <GroupByTestType />
          </TabsContent>

          <TabsContent value="Test description">
            <Card>
              <CardContent>
                <HtmlSetter html={testData?.description ?? ""} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default TestDescription;