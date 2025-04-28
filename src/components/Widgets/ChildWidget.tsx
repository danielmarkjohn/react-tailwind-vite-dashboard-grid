// ChildWidget Component
import React, { useState } from 'react'

const ChildWidget = ({ title, metadata }) => {
  return (
    <div className="space-y-4">
      <div className="border-b pb-2">
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        {metadata && (
          <div className="text-sm text-gray-500">
            {Object.entries(metadata).map(([key, value]) => (
              <div key={key}>
                <span className="font-semibold">{key}:</span> {value}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ChildWidget
