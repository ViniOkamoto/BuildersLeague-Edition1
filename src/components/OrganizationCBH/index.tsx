import React from 'react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { OrganizationType } from './type'

type Props = {
  org: OrganizationType
}

export default function OrganizationCBH({ org }: Props) {
  return (
    <div key={org.id} className="mb-4 grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3 content-center rounded border text-center text-lg">
        {org.name}
      </div>
      <div className="flex flex-col gap-2">
        <Link
          href={`/cbh/organization-dashboard/edit/${org.id}`}
          className={buttonVariants({ variant: 'default' })}
        >
          Edit Org
        </Link>
        <Link
          href="/cbh/employee"
          className={buttonVariants({ variant: 'secondary' })}
        >
          Edit Members
        </Link>
      </div>
    </div>
  )
}
