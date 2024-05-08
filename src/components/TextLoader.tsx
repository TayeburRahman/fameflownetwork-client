import React from 'react';

interface ModalProps {}

const TextLoader: React.FC<ModalProps> = ({}) => {
  return (
    // <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
    <div className="animate-pulse flex space-x-4">
      {/* <div className="rounded-full bg-slate-200 h-10 w-10"></div> */}
      <div className="flex-1 space-y-6 py-1">
        <div className="space-y-3">
          {/* <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
          </div> */}
          <div className="h-8 bg-slate-200 w-70 rounded"></div>
          <div className="h-10 bg-slate-200 w-100 rounded"></div>
          <div className="h-6 bg-slate-200 w-100 rounded"></div>
          <div className="h-6 bg-slate-200 w-100 rounded"></div>
          <div className="h-6 bg-slate-200 w-100 rounded"></div>
          <div className="h-6 bg-slate-200 w-100 rounded"></div>
          <div className="h-6 bg-slate-200 w-100 rounded"></div>
          <div className="h-6 bg-slate-200 w-100 rounded"></div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default TextLoader;