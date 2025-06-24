import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";
import DotLoader from "./dot_loader";

interface props {
  open: boolean;
  setOpen: (val: boolean) => void;
}
const ContentLoader: React.FC<props> = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[200px] rounded-md w-[65%]  dialog-bg ">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center mb-2 text-center">
            <h1 className="text-sm text-center text-gray-200  leading-6">
              Track Info Loading
            </h1>
          </DialogTitle>
          <div className="w-full flex justify-center items-center">
            <DotLoader />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ContentLoader;
