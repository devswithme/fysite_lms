export const handleTakeOver = (id, collectionSlug, globalSlug, user, isWithinDoc, updateDocumentEditor, setCurrentEditor, documentLockStateRef, isLockingEnabled, setIsReadOnlyForIncomingUser) => {
  if (!isLockingEnabled) {
    return;
  }
  try {
    // Call updateDocumentEditor to update the document's owner to the current user
    void updateDocumentEditor(id, collectionSlug ?? globalSlug, user);
    if (!isWithinDoc) {
      documentLockStateRef.current.hasShownLockedModal = true;
    }
    // Update the locked state to reflect the current user as the owner
    documentLockStateRef.current = {
      hasShownLockedModal: documentLockStateRef.current?.hasShownLockedModal,
      isLocked: true,
      user
    };
    setCurrentEditor(user);
    // If this is a takeover within the document, ensure the document is editable
    if (isWithinDoc && setIsReadOnlyForIncomingUser) {
      setIsReadOnlyForIncomingUser(false);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error during document takeover:', error);
  }
};
//# sourceMappingURL=handleTakeOver.js.map