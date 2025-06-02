
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import WorkspaceLayout from '@/components/workspace/v2/WorkspaceLayout';

const WorkspaceNew: React.FC = () => {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get('tab') || 'guides';

  return (
    <WorkspaceLayout />
  );
};

export default WorkspaceNew;
