export default function StudioApp() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Content</h2>
        <p className="mb-4">Manage your projects and blog posts.</p>
        <button className="btn btn-accent" disabled>
          Manage Content
        </button>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Configuration</h2>
        <p className="mb-4">Edit site configuration files.</p>
        <button className="btn btn-accent" disabled>
          Edit Config
        </button>
      </div>
    </div>
  );
}
