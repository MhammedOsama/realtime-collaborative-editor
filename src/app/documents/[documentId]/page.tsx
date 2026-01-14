interface DocumentIdProps {
  params: Promise<{ documentId: string }>;
}

export default async function DocumentId({ params }: DocumentIdProps) {
  const { documentId } = await params;

  return <div>DocumentId : {documentId}</div>;
}
