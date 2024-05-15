import { Link, Outlet } from 'react-router-dom';

const Payment = () => {
  return (
    <div className="">
      <div className="heading-text space-y-7 max-md:space-y-3 col-span-3 pe-14 max-md:pe-2">
        <div>
          <img src="" />
        </div>
        <div className=""></div>
        <div className="">
          <div className="flex">
            <Link to="" className="nav_link">
              Order Form{' '}
            </Link>
            <Link to="" className="nav_link">
              Review
            </Link>
            <Link to="" className="nav_link">
              Payment
            </Link>
          </div>
          <div></div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
