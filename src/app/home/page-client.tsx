import React from "react";

export default function HomeClient({ data }: { data: any[] }) {
  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <div className="space-y-6">
      {data.map((item, idx) => (
        <div key={item.id || idx}>
          {item.content ? (
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          ) : (
            <div className="m-50">Content coming soon</div>
          )}
        </div>
      ))}
    </div>
  );
}
