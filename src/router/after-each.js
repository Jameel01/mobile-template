import setTitle from '@/utils/setTitle'
function afterEachHandler (to, from) {
  let { title } = to.meta
  title || (title = to.name)
  if (title) {
    setTitle(title)
  }
}

export default afterEachHandler
