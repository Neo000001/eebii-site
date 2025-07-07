fetch('blog-data.json')
  .then(res => res.json())
  .then(posts => {
    const blogGrid = document.getElementById('blog-grid');

    posts.slice(0, 3).forEach(post => {
      const card = document.createElement('div');
      card.className = 'post';
      card.innerHTML = `
        <img src="https://img.icons8.com/fluency/48/blog.png" alt="Blog icon" style="width: 48px; margin-bottom: 1rem;" />
        <h3 style="color: #00d4ff;">${post.title}</h3>
        <p style="color: #aaa;">${post.snippet}</p>
        <a href="${post.url}" style="display: inline-block; margin-top: 1rem; padding: 0.6rem 1.4rem; background-color: #00d4ff; color: #0f2027; border-radius: 6px; text-decoration: none; font-weight: bold;">
          Read More →
        </a>
      `;
      blogGrid.appendChild(card);
    });
  });
