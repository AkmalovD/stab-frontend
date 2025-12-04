import ProtectedRoute from '@/components/ProtectedRoute';
import ProfilePage from '@/pages/ProfilePage';

export default function Profile() {
  return (
    <ProtectedRoute>
      <ProfilePage />
    </ProtectedRoute>
  )
}
