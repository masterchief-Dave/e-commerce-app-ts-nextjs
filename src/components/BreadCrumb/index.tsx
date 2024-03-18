import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import formatString from "@/lib/utils/formatString"

type Props = {
  breadcrumbs: { title: string, path: string }[]
}

const BreadCrumb = (props: Props) => {

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {props.breadcrumbs.map((breadcrumb, index, arr) => {
          return (
            <section key={`${breadcrumb} + ${index}`} className="flex items-center">
              <BreadcrumbItem>
                <BreadcrumbLink href={breadcrumb.path}> {formatString(breadcrumb.title)}</BreadcrumbLink>
              </BreadcrumbItem>
              {index === arr.length - 1 ? null : (<BreadcrumbSeparator />)}
            </section>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadCrumb
