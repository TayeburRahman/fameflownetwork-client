import { useEffect, useState } from 'react';

interface UserDetailsProps {
  report: any;
  isLoading: boolean;
}
const PackageReport: React.FC<UserDetailsProps> = ({ report, isLoading }) => {
  const [totalSocial, setTotalSocial] = useState<number>(0);
  const [totalTraffic, setTotalTraffic] = useState<number>(0);

  useEffect(() => {
    if (report && report.length > 0) {
      let socialSum = 0;
      let trafficSum = 0;
      report.forEach((item: any) => {
        socialSum += parseInt(item.social);
        trafficSum += parseInt(item.traffic);
      });
      setTotalSocial(socialSum);
      setTotalTraffic(trafficSum);
    } else {
      setTotalSocial(0);
      setTotalTraffic(0);
    }
  }, [report]);

  // console.log(JSON.stringify(report));
  return (
    <section className="brightness-90  section-padding">
      <div className="grid grid-cols-4 gap-4 text-stone-600">
        <div className=" border border-stroke shadow-default  grid justify-center rounded align-center text-center py-10">
          <h2 className="text-3xl font-bold">
            {' '}
            {report ? report.length : '0'}
          </h2>
          <h5 className="text-1xl font-bold">Publications</h5>
        </div>
        <div className=" border border-stroke  shadow-default grid justify-center rounded align-center text-center py-10">
          <h2 className="text-3xl font-bold"> 440</h2>
          <h5 className="text-1xl font-bold"> News Sites</h5>
        </div>
        <div className=" border border-stroke   shadow-default grid justify-center rounded align-center text-center py-10">
          <h2 className="text-3xl font-bold"> {totalSocial}k</h2>
          <h5 className="text-1xl font-bold">Followers</h5>
        </div>

        <div className=" border border-stroke shadow-default grid justify-center rounded align-center text-center py-10">
          <h2 className="text-3xl font-bold"> {totalTraffic}k</h2>
          <h5 className="text-1xl font-bold">Monthly Readers</h5>
        </div>
      </div>
    </section>
  );
};

export default PackageReport;
