// Example data, you might replace this with a real API call
const fakeNewsData = [
    {
        title: "New Discovery on Mars!",
        description: "Scientists have discovered water in the form of ice on Mars.",
        imageUrl: "https://th.bing.com/th/id/OIP.WAtyU6gE3sJ_04mNEEMUmQHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        articleUrl: "https://example.com/new-discovery-on-mars"
    },
    {
        title: "Economic Growth Forecasted to Spike",
        description: "Economists predict a sharp increase in global economic growth following recent technological advances.",
        imageUrl: "https://th.bing.com/th/id/OIP.agR5xizai4vggYtZia6lcgHaE7?w=255&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        articleUrl: "https://example.com/economic-growth"
    },
    {
        title: "Health Innovations Lead to Longer Lifespans",
        description: "Recent breakthroughs in medical science could mean longer lives for millions.",
        imageUrl: "https://th.bing.com/th/id/OIP.MrZJxjSbC6ZZzevIRSYQiwHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        articleUrl: "https://example.com/health-innovations"
    },
    {
        title: "Global Tech Giants Embrace Renewable Energy",
        description: "Major technology firms worldwide are switching to 100% renewable energy sources.",
        imageUrl: "https://th.bing.com/th/id/OIP.F7M9RVeV95VfN0cD7F237AHaEo?w=301&h=187&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        articleUrl: "https://example.com/tech-renewable"
    },
    {
        title: "Education Reforms Promise Brighter Futures",
        description: "New education policies aim to improve learning outcomes across schools.",
        imageUrl: "https://th.bing.com/th/id/OIP.ixNmU3DmhGlJX7aol_TjwQHaE7?w=261&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        articleUrl: "https://example.com/education-reforms"
    },
    {
        title: "Local Wildlife Conservation Efforts See Success",
        description: "Efforts to protect and restore local wildlife populations are proving effective, with species numbers on the rise.",
        imageUrl: "https://th.bing.com/th/id/OIP.nZdSqH47L_oKkZSPholNHAHaE7?w=288&h=191&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        articleUrl: "https://example.com/wildlife-success"
    }
];

function createNewsCard(news) {
    const newsCard = document.createElement('div');
    newsCard.className = 'news-card';

    const image = document.createElement('img');
    image.src = news.imageUrl;
    image.alt = news.title;
    image.className = 'news-image';

    const title = document.createElement('h3');
    title.textContent = news.title;
    title.className = 'news-title';

    const description = document.createElement('p');
    description.textContent = news.description;
    description.className = 'news-desc';

    const readMore = document.createElement('a');
    readMore.href = news.articleUrl;
    readMore.textContent = 'Read More';
    readMore.className = 'read-more';

    newsCard.appendChild(image);
    newsCard.appendChild(title);
    newsCard.appendChild(description);
    newsCard.appendChild(readMore);

    return newsCard;
}

function displayNews(newsArray) {
    const container = document.querySelector('.news-container');
    newsArray.forEach(news => {
        const newsCard = createNewsCard(news);
        container.appendChild(newsCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayNews(fakeNewsData);
});
