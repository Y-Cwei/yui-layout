import Layout from './layout'

const components = [Layout]

const install = (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default install
