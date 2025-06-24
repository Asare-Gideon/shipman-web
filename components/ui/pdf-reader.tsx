"use client";
import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.mjs`;
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

interface Props {
  pdfUrl: string;
}

const PdfReader: React.FC<Props> = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageWidth, setPageWidth] = useState(600);

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(Math.min(600, window.innerWidth - 64));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) =>
      Math.min(Math.max(1, prevPageNumber + offset), numPages || 1)
    );
  }

  return (
    <div className="mt-4 flex flex-col items-center min-h-[80vh]">
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        className="max-w-full"
      >
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="max-w-full"
          width={pageWidth}
        />
      </Document>

      <div className="mt-4 flex items-center justify-between w-full max-w-md">
        <Button
          onClick={() => changePage(-1)}
          disabled={pageNumber <= 1}
          variant="outline"
          size="icon"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous page</span>
        </Button>
        <p className="text-sm">
          Page {pageNumber} of {numPages}
        </p>
        <Button
          onClick={() => changePage(1)}
          disabled={numPages !== null && pageNumber >= numPages}
          variant="outline"
          size="icon"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next page</span>
        </Button>
      </div>
    </div>
  );
};

export default PdfReader;
