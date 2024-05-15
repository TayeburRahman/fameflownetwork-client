import { Link, Outlet, useLocation } from 'react-router-dom';
import './index.css';

const OrderLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className=" container mx-auto">
      <div className="grid grid-cols-12   mt-[17vh]">
        <div className="col-span-7 px-10">
          <div>
            <img src="" />
          </div>
          <div className="">
            <h4 className="text_h3">Get Featured in the News</h4>
            <p className="text_p">
              Just fill out the form below to get featured on top news outlets
              in just 7 days.
            </p>
          </div>
          <div className="mt-5">
            <div className="flex text_p">
              <Link
                className="nav_link me-3"
                to="/packages/order"
                id={`${pathname === '/packages/order' && 'nav_link'}`}
              >
                Order Form{' '}
              </Link>{' '}
              {' > '}
              <Link
                className="nav_link me-3 ms-3"
                to="/packages/review"
                id={`${pathname === '/packages/review' && 'nav_link'}`}
              >
                Review
              </Link>{' '}
              {' > '}
              <Link
                className="nav_link me-3 ms-3"
                to="/packages/payment"
                id={`${pathname === '/packages/payment' && 'nav_link'}`}
              >
                Payment
              </Link>
            </div>
            <div></div>
            <div>
              <Outlet />
            </div>
          </div>
        </div>
        <div className="col-span-5 px-10 border_left" style={{ width: '100%' }}>
          <h4 className="text_h4">Order Details</h4>
          <div>
            <div className="">
              <p className="mt-5">Order Summary</p>
            </div>
            <div className="order_box_xs">
              <div className="box_svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>{' '}
                Upload Your Own Story
              </div>
              <p>FREE</p>
            </div>
            <div className="order_box_xs">
              <div className="box_svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
                Publishing on 250+ Limited News Outlets
              </div>
              <p>$165.00</p>
            </div>
            <div className="order_box_xs">
              <div className="box_svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
                Publishing on Minyanville & Financial Content
              </div>
              <p>Included</p>
            </div>
            <div className="order_box_xs">
              <div className="box_svg">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>{' '}
                Upload Your Own Story
              </div>
              <p>FREE</p>
            </div>

            <div className="order_box_xs">
              <div> Publishing on 250+ Limited News Outlets</div>
              <p>$165.00</p>
            </div>
            <div className="text_price">
              <div> Total Price</div>
              <p>$165.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderLayout;
