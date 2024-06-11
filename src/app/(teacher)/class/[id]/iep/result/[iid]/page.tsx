import IepResult from "@/components/class/iep/result/result";

export default function Result({ params }: { params: { iid: string } }) {
  return <IepResult params={params} url={process.env.URL} />;
}
