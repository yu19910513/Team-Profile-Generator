`<div class="col-6">
<div class="card mb-3 bg-danger text-light shadow-lg" style="width: 100%;">
    <div class="card-body">
      <h5 class="card-title">${ans.name}</h5>
      <h6 class="card-subtitle mb-2">${ans.role}</h6>
      <p class="card-text">${ans.description}</p>
      <a href="${ans.email}" class="card-link">${ans.email}</a>
      <a href="https://github.com/${ans.github}" class="card-link">GitHub: ${ans.github}</a>
    </div>
  </div>
</div>
`
module.exports = Manager;
