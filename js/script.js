
console.log(spark)

function myFunction() {
}

function sparkPick() {
  const spark = document.getElementById('spark');
  spark.classList = 'main-heading';
  const animation = document.getElementById('animation');
  spark.classList += ` ${animation.options[animation.selectedIndex].text}`
  console.log(document.getElementById('spark').value)
}