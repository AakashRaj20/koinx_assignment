import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const OptionsTabs = () => {
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
    <Tabs defaultValue="account" className="bg-none">
      <TabsList className="grid w-full grid-cols-7">
        {TabTriggers.map((trigger, index) => (
          <TabsTrigger key={index} value={trigger.toLowerCase()}>
            {trigger}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="account"></TabsContent>
    </Tabs>
  );
};

export default OptionsTabs;
