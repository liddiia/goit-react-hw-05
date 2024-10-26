import { Navigate, Route, Routes } from "react-router-dom"


const NotFoundPage = () => {
  return (
    <Routes>
        <Route path="*" element={<Navigate to={'/'} />} />
  </Routes>
  )
}
export default NotFoundPage;