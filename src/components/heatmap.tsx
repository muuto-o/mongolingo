import CalendarHeatmap from "react-calendar-heatmap";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { subDays } from "date-fns";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { GetYearlyActivity } from "@/services/questions";

// const data = [
//   { date: "2025-04-20", count: 1 },
//   { date: "2025-04-21", count: 3 },
//   { date: "2025-04-22", count: 2 },
//   { date: "2025-03-10", count: 1 },
//   { date: "2025-02-15", count: 2 },
//   { date: "2025-01-01", count: 3 },
// ];

export default function ActivityHeatmap({ userId }: { userId: string }) {
  const endDate = new Date();
  const startDate = subDays(endDate, 365);

  const { data: activityData, isLoading } = useQuery({
    queryKey: ["activity"],
    queryFn: () => GetYearlyActivity(userId),
  });

  // useEffect(() => {
  //   const months = document.querySelectorAll(".react-calendar-heatmap-month");
  //   months.forEach((month, index) => {
  //     (month as HTMLElement).style.setProperty(
  //       "--month-index",
  //       index.toString()
  //     );
  //   });
  // }, []);

  if (isLoading) return <p>Loading activity...</p>;

  const heatmapData = activityData.map(
    (day: { date: string; count: number }) => ({
      date: day.date,
      count: day.count,
    })
  );

  return (
    <Card className="w-full max-w-5xl border border-gray-100 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold text-gray-800">
          <span className="text-blue-600">Идэвхийн</span> диаграм
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto pb-1">
          <CalendarHeatmap
            startDate={startDate}
            endDate={endDate}
            values={heatmapData}
            classForValue={(value) => {
              if (!value) return "color-empty";
              if (value.count >= 3) return "color-scale-3";
              if (value.count === 2) return "color-scale-2";
              if (value.count === 1) return "color-scale-1";
              return "color-empty";
            }}
            tooltipDataAttrs={(value): Record<string, string> => {
              if (!value || !value.date) return {};
              return {
                "data-tooltip-content": `${value.date}: ${value.count} ${
                  value.count === 1 ? "activity" : "activities"
                }`,
                "data-tooltip-id": "activity-tooltip",
              };
            }}
            showWeekdayLabels
            weekdayLabels={["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Ня"]}
            monthLabels={[
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
            ]}
            gutterSize={3}
          />
        </div>

        <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
          <span className="font-medium">Идэвх бага</span>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm bg-blue-200" />
            <div className="w-3 h-3 rounded-sm bg-blue-300" />
            <div className="w-3 h-3 rounded-sm bg-blue-400" />
            <div className="w-3 h-3 rounded-sm bg-blue-500" />
          </div>
          <span className="font-medium">Идэвх их</span>
        </div>
      </CardContent>
      <ReactTooltip
        id="activity-tooltip"
        className="!bg-gray-800 !text-white !rounded !px-2 !py-1 !text-xs !shadow-lg"
        place="top"
      />
    </Card>
  );
}
