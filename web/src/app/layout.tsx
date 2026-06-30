import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./styles/global.css";

export const metadata: Metadata = {
  title: "제때 출발",
  description: "도착 희망 시간을 기준으로 대중교통 출발 시간을 알려주는 서비스",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
