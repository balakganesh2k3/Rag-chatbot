import DocumentUpload from "../components/document-uploader";
import AiChat from "../components/ai-chat";


export default function Home() {
  return (
    <main className="container mx-auto p-6 min-h-screen flex flex-col bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">Document Analysis with AI</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        <div className="flex flex-col h-full bg-white shadow-lg p-6 rounded-lg">
          <DocumentUpload />
        </div>
        <div className="flex flex-col h-full bg-white shadow-lg p-6 rounded-lg">
          <AiChat />
        </div>
      </div>
    </main>
  );
}
