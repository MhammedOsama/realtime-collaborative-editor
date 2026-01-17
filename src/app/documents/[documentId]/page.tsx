import Editor from "./editor";

interface DocumentIdProps {
  params: Promise<{ documentId: string }>;
}

export default async function DocumentId({ params }: DocumentIdProps) {
  // const { documentId } = await params;

  return (
    <div className='min-h-screen bg-[#FAFBFD]'>
      <Editor />
    </div>
  );
}
