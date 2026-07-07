import type { RoutineItem } from "./types";

export const mockRoutines: RoutineItem[] = [
  {
    id: "commute",
    title: "출근",
    summary: "집 → 강남 사무실 · 평일 9:00",
    departureTime: "8:17",
    departurePeriod: "오전 출발",
    enabled: true,
    accent: "green",
  },
  {
    id: "gym",
    title: "헬스장",
    summary: "집 → 합정역 · 화목 7:00",
    departureTime: "6:40",
    departurePeriod: "오전 출발",
    enabled: false,
    accent: "mint",
  },
  {
    id: "meeting",
    title: "약속",
    summary: "집 → 홍대입구역 · 토 14:00",
    departureTime: "13:22",
    departurePeriod: "오후 출발",
    enabled: false,
    accent: "violet",
  },
];
