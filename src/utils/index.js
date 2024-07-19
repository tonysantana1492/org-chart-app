export function transformDataToHierarchy(data) {
  const hierarchy = {
    id: "1",
    name: "Office Puzzle",
    image: "https://s3.amazonaws.com/cdn.officepuzzle.com/signature-logo.png",
    type: "COMPANY",
    gender: null,
    color: "blue",
    children: [],
  };

  function transformClient(client) {
    const transformedClient = {
      id: client.id,
      gender: client.gender,
      name: client.name,
      type: client.type.name,
      image: client.image,
      color: "green",
      children: [],
    };

    // Check if client has accesses
    if (client.accesses && client.accesses.length > 0) {
      client.accesses.forEach((access) => {
        const transformedUser = {
          id: access.id,
          gender: null,
          name: access.user.name,
          type: access.role.name,
          image: access.user.image,
          color: "violet",
          children: [], // Users typically don't have further children
        };

        transformedClient.children.push(transformedUser);
      });
    }

    return transformedClient;
  }

  function recursiveTransform(data) {
    data.forEach((item) => {
      const transformedClient = transformClient(item);
      hierarchy.children.push(transformedClient);

      // Recursively transform nested clients if any
      if (item.clients && item.clients.length > 0) {
        transformedClient.children = recursiveTransform(item.clients);
      }
    });

    return hierarchy.children;
  }

  recursiveTransform(data);

  return hierarchy;
}
