// Dashboard Parent Component
import React from 'react'
import GridLayout from 'react-grid-layout'
import ChildWidget from './Widgets/ChildWidget'

const Dashboard = () => {
  const layoutConfig = [
    {
      i: 'a',
      x: 0,
      y: 0,
      w: 3,
      h: 3,
      title: 'Sales Overview',
      metadata: { category: 'Finance', priority: 'High' },
    },
    {
      i: 'b',
      x: 3,
      y: 2,
      w: 3,
      h: 3,
      title: 'User Activity',
      metadata: { source: 'Analytics', refreshRate: '5s' },
    },
    {
      i: 'c',
      x: 6,
      y: 4,
      w: 3,
      h: 3,
      title: 'System Status',
      metadata: { environment: 'Production', uptime: '99.9%' },
    },
  ]

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Grid Dashboard</h1>
      <GridLayout className="layout" layout={layoutConfig} cols={12} rowHeight={30} width={1200}>
        {layoutConfig.map(item => (
          <div key={item.i} className="bg-white p-4 rounded-lg shadow-md">
            <ChildWidget title={item.title} metadata={item.metadata} />
          </div>
        ))}
      </GridLayout>
    </div>
  )
}

export default Dashboard
