import React from "react";

export default function TeamClient({ data }: { data: any[] }) {
  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <div className="space-y-6 m-50">
      <p>Team</p>
      {data.map((item, idx) => (
        <div key={item.id || idx}>
          {item.content ? (
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          ) : (
            <div className="">Content coming soon</div>
          )}
        </div>
      ))}
    </div>
  );
}
