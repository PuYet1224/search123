const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

searchButton.addEventListener('click', function() {
  const searchTerm = searchInput.value.trim();

  if (searchTerm !== '') { // Kiểm tra searchTerm có khác rỗng

  // Gửi yêu cầu tìm kiếm đến máy chủ
  fetch(`/search?query=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      displaySearchResults(data);
    })
    .catch(error => {
      console.error('Lỗi khi tìm kiếm:', error);
    });
}

function displaySearchResults(results) {
  // Xóa kết quả tìm kiếm hiện tại
  searchResults.innerHTML = '';

  // Hiển thị kết quả tìm kiếm
  if (results.length === 0) {
    searchResults.innerHTML = 'Không tìm thấy kết quả nào.';
  } else {
    results.forEach(product => {
      const productElement = document.createElement('div');
      productElement.textContent = product.name;
      searchResults.appendChild(productElement);
    });
  }
}

const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của form

  const searchTerm = searchInput.value.trim();
  searchInput.value = '';

  // Gửi yêu cầu tìm kiếm đến máy chủ
  fetch(`/search?query=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      displaySearchResults(data);
    })
    .catch(error => {
      console.error('Lỗi khi tìm kiếm:', error);
    });
  });
});
