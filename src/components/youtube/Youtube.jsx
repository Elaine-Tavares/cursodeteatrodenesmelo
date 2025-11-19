import styles from './Youtube.module.css'

export default function Youtube({src, title, descrição}) {

  return (
   <div className={styles.container_youtube}>
    <h2>{descrição}</h2>
      <iframe
        title={title}
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

