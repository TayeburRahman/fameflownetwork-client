import React from 'react';

interface ModalProps {}

const ImageLoader: React.FC<ModalProps> = ({}) => {
  return (
    // <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
    <div className="animate-pulse rounded-sm border border-stroke ">
      {/* <div className="rounded-full bg-slate-200 h-10 w-10"></div> */}
      <div className="flex-1 space-y-6 h-full w-full">
        <div className=" h-full w-full ">
          <div className="h-80 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ImageLoader;
