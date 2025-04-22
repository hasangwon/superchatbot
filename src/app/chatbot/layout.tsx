export default function ChatbotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-gray-100">
      <header className="bg-white p-4 shadow font-bold">💬 Chat</header>
      <main>{children}</main>
    </section>
  );
}
