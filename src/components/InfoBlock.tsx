interface InfoBlockProps {
  title: string;
  content: string;
}

export default function InfoBlock({ title, content }: InfoBlockProps) {
  return (
    <article className="info-block">
      <h6>{title}</h6>
      <p>{content}</p>
    </article>
  );
}
