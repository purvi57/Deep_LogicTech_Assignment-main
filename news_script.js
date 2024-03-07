async function getNewsData() {
    try {
      const response = await fetch('http://localhost:8000/getTimeStories');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching news data:', error);
      return [];
    }
  }
  
  async function displayNews() {
    const newsList = document.getElementById('news-list');
    const newsData = await getNewsData();
  
    newsData.forEach((article) => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = article.link;
      link.textContent = article.title;
      listItem.appendChild(link);
      newsList.appendChild(listItem);
    });
  }
  
  displayNews();
  