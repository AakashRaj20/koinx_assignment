import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Performance from "./Performance";
import Sentiment from "./Sentiment";
import Team from "./Team";
import Tokenomics from "./Tokenomics";

const OptionsTabs = ({ coinData }) => {
  const TabTriggers = [
    "Overview",
    "Fundamentals",
    "News Insights",
    "Sentiments",
    "Teams",
    "Technicals",
    "Tokenomics",
  ];

  return (
    <Tabs defaultValue="overview" className="bg-none">
      <TabsList className="grid w-full grid-flow-col gap-x-10 overflow-x-auto md:overflow-hidden justify-start p-0">
        {TabTriggers.map((trigger, index) => (
          <TabsTrigger key={index} value={trigger.toLowerCase()}>
            {trigger}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="overview">
        <Performance coinData={coinData} />
      </TabsContent>
      <TabsContent value="fundamentals">
        <div className="bg-white flex flex-col p-10 gap-y-6 rounded-lg mt-8">
          <h1 className="text-4xl font-bold">Fundamentals</h1>
        </div>
      </TabsContent>
      <TabsContent value="news insights">
        <div className="bg-white flex flex-col p-10 gap-y-6 rounded-lg mt-8">
          <h1 className="text-4xl font-bold">News Insights</h1>
        </div>
      </TabsContent>
      <TabsContent value="sentiment">
        <Sentiment />
      </TabsContent>
      <TabsContent value="teams">
        <Team />
      </TabsContent>
      <TabsContent value="technicals">
        <div className="bg-white flex flex-col p-10 gap-y-6 rounded-lg mt-8">
          <h1 className="text-4xl font-bold">Technical</h1>
        </div>
      </TabsContent>
      <TabsContent value="tokenomics">
        <Tokenomics />
      </TabsContent>
    </Tabs>
  );
};

export default OptionsTabs;
