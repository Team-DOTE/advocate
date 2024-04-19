import styles from "@/app/class/[id]/students/[sid]/page.module.css";

export default function StudentDetail({ params }: { params: { sid: string } }) {
  return <div>{params.sid}</div>;
}
