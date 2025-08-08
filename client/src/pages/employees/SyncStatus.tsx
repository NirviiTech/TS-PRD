import React from "react";

type SyncStatusProps = {
  status: "idle" | "syncing" | "success" | "error";
};

export default function SyncStatus({ status }: SyncStatusProps) {
  const statusMap: Record<typeof status, { text: string; color: string }> = {
    idle: { text: "Idle", color: "text-gray-500" },
    syncing: { text: "Syncing...", color: "text-blue-500" },
    success: { text: "Sync Complete", color: "text-green-500" },
    error: { text: "Sync Failed", color: "text-red-500" },
  };

  return <p className={`font-medium ${statusMap[status].color}`}>{statusMap[status].text}</p>;
}
