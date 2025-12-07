import React from 'react';

const SyncStatus: React.FC<{ isSyncing: boolean; error: string | null }> = ({ isSyncing, error }) => {
    return (
        <div className="sync-status">
            {isSyncing ? (
                <p>Syncing flight data to the cloud...</p>
            ) : (
                <p>Data synced successfully!</p>
            )}
            {error && <p className="error">Error: {error}</p>}
        </div>
    );
};

export default SyncStatus;