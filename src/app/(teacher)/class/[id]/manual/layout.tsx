import ClassHeader from "@/components/class/header/header";
import ClassWrap from "@/components/class/wrap/wrap";



export default function Manual({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  
  return (
    <ClassWrap>
      <ClassHeader content="대처 매뉴얼" />
      <div>
          {children}
      </div>
    </ClassWrap>
  );
}
