"use client";

import { CheckCircle, AlertTriangle } from "lucide-react";
import React from "react";
import { toast } from "sonner";

const toastBaseClass =
  "flex items-center gap-2 bg-white border border-gray-200 rounded-md shadow-sm px-4 py-3 text-sm text-gray-800";

export enum ToastType {
  Success = "success",
  Error = "error",
}

interface ToastNotificationOptions {
  type: ToastType;
  message: string;
}

export const showToast = ({ type, message }: ToastNotificationOptions) => {
  const icon =
    type === ToastType.Success ? (
      <CheckCircle className="h-4 w-4 text-gray-500" />
    ) : (
      <AlertTriangle className="h-4 w-4 text-gray-500" />
    );

  toast(message, {
    icon,
    unstyled: true,
    className: toastBaseClass,
  });
};
