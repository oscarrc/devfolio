const studio = () => (
  {
    name: 'studio',
    apply: () => true, // Correctly typed as a function returning a boolean
    resolveId(id: string) {
      if (id === 'studio') {
        return { id: 'studio', external: true };
      }
    },
  }
);

export default studio;