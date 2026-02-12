import Image from "next/image";

export default function HeroTitle() {
  return (
    <div>
    <div className="relative">
      <div>
      <h1 style={{ fontSize: 20, fontFamily: "'Aeonick Pro', sans-serif", color: "rgba(0, 0, 0, 0.5)" }} className="font-bold">
        Join Thousands of Rejuve Meds Patients:
      </h1>
      <p style={{ fontSize: 72, fontFamily: "'Aeonick Pro', sans-serif", color: "#D3A059", marginTop: 15}} className="font-bold">
        Weight Loss,
      </p>
      <p style={{ fontSize: 72, fontFamily: "'Aeonick Pro', sans-serif", color: "black", marginTop: 5}} className="font-bold">
        Tailored to You.
      </p>
      </div>
      <div className="absolute flex flex-col gap-4" style={{ top: 0, right: 0}}>
        <div className="flex items-center gap-2" >
          <Image src="/images/dashboard/octicon_people-24.svg" alt="Members" width={30} height={30} />
          <span style={{ fontSize: 16, color: "#20514C", fontFamily: "'Aeonick Pro', sans-serif" }}>1000 + members</span>
        </div>
        <div className="flex items-center gap-2" style={{paddingTop:32}}>
          <Image src="/images/dashboard/Group.svg" alt="Shipping" width={49} height={33} />
          <span style={{ fontSize: 16, color: "#20514C", fontFamily: "'Aeonick Pro', sans-serif" }}>Free expedited shipping</span>
        </div>
        <div className="flex items-center gap-2" style={{paddingTop:32}}>
          <Image src="/images/dashboard/streamline_ecology-science-erlenmeyer-flask-experiment-lab-flask-science-chemistry-solution.svg" alt="FDA Labs" width={31} height={31} />
          <span style={{ fontSize: 16, color: "#20514C", fontFamily: "'Aeonick Pro', sans-serif" }}>FDA-registered labs</span>
        </div>
      </div>
      
      </div>
    </div>
  );
}
