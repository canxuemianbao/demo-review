你需要改造这个项目，使它能够

<!-- 两个 entry 引入同一个 js bundle -->

1. 同时支持 company console view 和 normal view，通过路由区分 (company.html, index.html)

<!-- isCompany =  window.location.path.startsWith('/company.html') -->
<!-- or 标识用途的 props -->
<!-- index router or company router -->

2. 在 company console 中, 不需要 billing 的数据就可以使用
3. 在 company console 中, 不需要 rbac 控制，都可以使用
<!--
rbac 支持设置 disabled, 忽视权限控制
<RBACProvider disabled={isCompany}>
每个组件内都可能用了 useFeatureCode，和写一个新的 hook 批量替换，加一层新逻辑？proxy function return true
-->

4. 在 company console 中, 没有 add shipment button

5. 其余的功能， company console 和 normal view 是一样的

<!-- 打包两个 bundle 分别对应两个 entry, shipments 只是 UI -->
<!--
```
() => {
const {data,refetch} = useFetch()
const onReFetch = () => {
  refetch()
}
const onClick = () => {}

reutn <OnlyUI data onClick onReFetch />

}
```
-->
