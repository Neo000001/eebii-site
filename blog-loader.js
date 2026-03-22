fetch('blog-data.json')
  .then(res => res.json())
  .then(posts => {
    const blogGrid = document.getElementById('blog-grid');
    if (!blogGrid) return;
    blogGrid.innerHTML = ''; // Clear existing cards to prevent duplicates

    posts.reverse().slice(0, 5).forEach(post => {
      const card = document.createElement('div');
      card.className = 'card post';
      card.style.cssText = 'text-align: left; cursor: pointer; height: 100%; justify-content: space-between;';
      card.onclick = () => window.location.href = post.slug;
      card.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.8rem;">
          <span style="background: #00d4ff22; color: #00d4ff; font-size: 0.75rem; font-weight: bold; padding: 0.2rem 0.6rem; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.5px;">${post.category || 'general'}</span>
          <span style="color: #666; font-size: 0.8rem;">${post.date || ''}</span>
        </div>
        <h3 style="color: #fff; font-size: 1.05rem; margin: 0 0 0.6rem; line-height: 1.4;">${post.title}</h3>
        <p style="color: #aaa; font-size: 0.9rem; line-height: 1.6; margin: 0 0 1rem;">${post.summary}</p>
        <a href="${post.slug}" style="display: inline-block; padding: 0.5rem 1.1rem; background-color: #00d4ff; color: #0f2027; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 0.85rem;">
          Read More →
        </a>
      `;
      blogGrid.appendChild(card);
    });
  })
  .catch(err => console.error("Blog loader failed:", err));

