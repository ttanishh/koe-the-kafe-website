function showSidebar()
{
  const sidebar=document.querySelector('.sidebar');
  sidebar.style.display='flex';
  const show=document.getElementById('show')
  show.style.display=('none');
  const hide=document.getElementById('hide');
  hide.style.display=('block')
}


function hideSidebar()
{
  const sidebar=document.querySelector('.sidebar');
  sidebar.style.display='none';
  const show=document.getElementById('show')
  show.style.display=('block');
  const hide=document.getElementById("hide")
  hide.style.display=('none')
  
}