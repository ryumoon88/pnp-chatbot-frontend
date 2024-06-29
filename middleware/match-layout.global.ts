export default defineNuxtRouteMiddleware((to) => {
    if(to.fullPath.startsWith('/admin'))
        setPageLayout('admin')
})