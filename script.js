// JavaScript (script.js)

// Sample data (replace with your actual data)
const blogs = [
    { title: 'MuZero', tags: ['Artificial-Intelligence', 'Reinforcement-Learning'], club: 'AI Club', date: 'September 10th, 2023', views: 379 },
    { title: 'Getting Started with Cloud Computing', tags: ['Cloud computing'], club: 'WebOps and Blockchain Club', date: 'September 10th, 2023', views: 362 }
    // Add more blog data here
];

// Function to filter and display blogs
function displayBlogs() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const tagFilter = document.getElementById('tag-filter').value.toLowerCase();
    const clubFilter = document.getElementById('club-filter').value.toLowerCase();

    const filteredBlogs = blogs.filter(blog => {
        return (
            blog.title.toLowerCase().includes(searchInput) &&
            (tagFilter === '' || blog.tags.some(tag => tag.toLowerCase().includes(tagFilter))) &&
            (clubFilter === '' || blog.club.toLowerCase().includes(clubFilter))
        );
    });

    const blogResults = document.querySelector('.blog-results');
    blogResults.innerHTML = '';

    if (filteredBlogs.length === 0) {
        blogResults.innerHTML = '<p>No matching blogs found.</p>';
        return;
    }

    filteredBlogs.forEach(blog => {
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');
        // Create and append HTML elements for each blog card
        // Customize the card layout as needed
        blogCard.innerHTML = `
            <h2>${blog.title}</h2>
            <p>Tags: ${blog.tags.join(', ')}</p>
            <p>Club: ${blog.club}</p>
            <p>Date: ${blog.date}</p>
            <p>Views: ${blog.views}</p>
        `;
        blogResults.appendChild(blogCard);
    });
}

// Attach an event listener to the filter inputs
document.getElementById('search').addEventListener('input', displayBlogs);
document.getElementById('tag-filter').addEventListener('input', displayBlogs);
document.getElementById('club-filter').addEventListener('input', displayBlogs);

// Initial display of blogs
displayBlogs();
