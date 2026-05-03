import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../../context/AdminContext'

const AllContacts = () => {

  const { contacts, getAllContacts, markContactRead, deleteContact } = useContext(AdminContext)
  const [selectedContact, setSelectedContact] = useState(null)

  useEffect(() => {
    getAllContacts()
  }, [])

  const handleView = (contact) => {
    setSelectedContact(contact)
    if (!contact.read) {
      markContactRead(contact._id)
    }
  }

  const handleDelete = async (contactId) => {
    await deleteContact(contactId)
    if (selectedContact?._id === contactId) {
      setSelectedContact(null)
    }
  }

  return (
    <div className='m-5 w-full'>

      <p className='mb-3 text-lg font-medium'>All Contact Messages</p>

      <div className='bg-white border rounded w-full max-w-4xl'>

        {/* Table Header */}
        <div className='hidden sm:grid grid-cols-[1fr_2fr_1fr_1fr] gap-4 px-6 py-3 border-b bg-gray-50 text-sm font-medium text-gray-500'>
          <p>Name</p>
          <p>Email & Subject</p>
          <p>Date</p>
          <p>Action</p>
        </div>

        {/* Rows */}
        {contacts.length === 0 ? (
          <p className='text-center text-gray-400 py-10'>No contact messages found.</p>
        ) : (
          contacts.map((contact) => (
            <div
              key={contact._id}
              className={`grid grid-cols-[1fr_2fr_1fr_1fr] gap-4 px-6 py-4 border-b hover:bg-gray-50 transition-colors text-sm items-center ${!contact.read ? 'bg-blue-50' : ''}`}
            >
              {/* Name + unread dot */}
              <div className='flex items-center gap-2'>
                {!contact.read && (
                  <span className='w-2 h-2 rounded-full bg-blue-500 flex-shrink-0'></span>
                )}
                <p className='font-medium text-gray-700 truncate'>{contact.name}</p>
              </div>

              {/* Email + Subject */}
              <div>
                <p className='text-gray-500 truncate'>{contact.email}</p>
                <p className='text-gray-400 text-xs truncate mt-0.5'>{contact.subject || 'No subject'}</p>
              </div>

              {/* Date */}
              <p className='text-gray-400'>
                {contact.createdAt
                  ? new Date(contact.createdAt).toLocaleDateString('en-GB', {
                      day: '2-digit', month: 'short', year: 'numeric'
                    })
                  : '—'}
              </p>

              {/* Actions */}
              <div className='flex items-center gap-3'>
                <button
                  onClick={() => handleView(contact)}
                  className='text-blue-500 hover:text-blue-700 font-medium transition-colors'
                >
                  View
                </button>
                <button
                  onClick={() => handleDelete(contact._id)}
                  className='text-red-400 hover:text-red-600 font-medium transition-colors'
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Detail Modal */}
      {selectedContact && (
        <div className='fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4'>
          <div className='bg-white rounded-xl shadow-xl w-full max-w-lg p-6'>

            <div className='flex items-start justify-between mb-4'>
              <div>
                <p className='text-lg font-semibold text-gray-800'>{selectedContact.name}</p>
                <p className='text-sm text-gray-500'>{selectedContact.email}</p>
              </div>
              <button
                onClick={() => setSelectedContact(null)}
                className='text-gray-400 hover:text-gray-600 text-xl font-bold leading-none'
              >
                ×
              </button>
            </div>

            {selectedContact.subject && (
              <div className='mb-3'>
                <p className='text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1'>Subject</p>
                <p className='text-sm text-gray-700'>{selectedContact.subject}</p>
              </div>
            )}

            <div className='mb-4'>
              <p className='text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1'>Message</p>
              <p className='text-sm text-gray-700 whitespace-pre-wrap leading-relaxed bg-gray-50 rounded-lg p-3'>
                {selectedContact.message}
              </p>
            </div>

            <div className='flex items-center justify-between'>
              <p className='text-xs text-gray-400'>
                {selectedContact.createdAt
                  ? new Date(selectedContact.createdAt).toLocaleString('en-GB', {
                      day: '2-digit', month: 'short', year: 'numeric',
                      hour: '2-digit', minute: '2-digit'
                    })
                  : ''}
              </p>
              <div className='flex gap-3'>
                <button
                  onClick={() => handleDelete(selectedContact._id)}
                  className='px-4 py-2 text-sm text-red-500 border border-red-200 rounded-lg hover:bg-red-50 transition-colors'
                >
                  Delete
                </button>
                <button
                  onClick={() => setSelectedContact(null)}
                  className='px-4 py-2 text-sm bg-primary text-white rounded-lg hover:opacity-90 transition-opacity'
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default AllContacts