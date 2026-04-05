export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
        <div
          className="absolute inset-0 rounded-full border-4 border-moduwood border-t-transparent animate-spin"
          style={{ animationDuration: '0.8s' }}
        ></div>
      </div>
    </div>
  );
}
