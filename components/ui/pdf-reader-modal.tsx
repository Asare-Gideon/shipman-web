"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";
import PdfReader from "./pdf-reader";

interface PDFReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

export default function PDFReaderModal({
  isOpen,
  onClose,
  pdfUrl,
}: PDFReaderModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="!max-w-4xl !w-[95vw] !max-h-[90vh] md:!min-w-[640px] overflow-y-auto z-[999] text-black bg-blue-50"
        noDefaultClose
      >
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>PDF Viewer</DialogTitle>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open(pdfUrl, "_blank")}
            >
              <Download className="h-4 w-4" />
              <span className="sr-only">Download PDF</span>
            </Button>
            <Button variant="outline" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </DialogHeader>

        <PdfReader pdfUrl={pdfUrl} />
      </DialogContent>
    </Dialog>
  );
}
