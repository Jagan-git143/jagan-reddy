let c = 0;
const para = document.getElementById('count')
function incr()
{
c++
para.textContent = c;
}
function decr()
{
c--
para.textContent = c;
}
function reset()
{
c=0
para.textContent = c;
}