export default function ChatbotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-gray-100">
      <header className="bg-white p-4 shadow font-bold flex items-center gap-4">
        💬 Chat
        <div className="flex gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="24"
            viewBox="0 0 48 24"
          >
            <rect
              data-name="사각형 926"
              width="48"
              height="24"
              rx="12"
              style={{ fill: "#5662f3" }}
            />
            <circle
              data-name="타원 84"
              cx="10"
              cy="10"
              r="10"
              transform="translate(26 2)"
              style={{ fill: "#fff" }}
            />
            <text
              transform="translate(10 16)"
              style={{
                fontSize: "11px",
                fontFamily: "'Nanum Pen Script', cursive",
                fill: "#fff",
              }}
            >
              <tspan x="0" y="0">
                AI
              </tspan>
            </text>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="24"
            viewBox="0 0 48 24"
          >
            <rect
              data-name="사각형 926"
              width="48"
              height="24"
              rx="12"
              style={{ fill: "#5662f3" }}
            />
            <circle
              data-name="타원 84"
              cx="10"
              cy="10"
              r="10"
              transform="translate(26 2)"
              style={{ fill: "#fff" }}
            />
            <text
              transform="translate(10 16)"
              style={{
                fontSize: "11px",
                fontFamily: "'Nanum Pen Script', cursive",
                fill: "#fff",
              }}
            >
              AI
            </text>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="24"
            viewBox="0 0 48 24"
          >
            <rect
              data-name="사각형 926"
              width="48"
              height="24"
              rx="12"
              style={{ fill: "#5662f3" }}
            />
            <circle
              data-name="타원 84"
              cx="10"
              cy="10"
              r="10"
              transform="translate(26 2)"
              style={{ fill: "#fff" }}
            />
            <text
              transform="translate(10 16)"
              style={{
                fontSize: "11px",
                fontFamily: "'Nanum Pen Script', cursive",
                fill: "#fff",
              }}
            >
              <tspan x="0" y="0">
                AI
              </tspan>
            </text>
          </svg>
        </div>
      </header>
      <main>{children}</main>
    </section>
  );
}
