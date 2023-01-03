export const API = 'https://sabbersoltani.hasura.app/v1/graphql';

export const fetchMagazine = async () => {
  const query = `
  query MyQuery {
    magazine(order_by: {id: desc}, limit: 10) {
      content1
      content2
      id
      likes
      media1
      media2
      title
    }
  }
  
  `;
  const response = await fetch("http://nolosaz.com:8080/v1/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();

  return data.magazine;
};

export const fetchPosts = async (id: number) => {
  const response = await fetch("http://nolosaz.com:8080/v1/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `
      query MyQuery($id: Int ) {
        posts(where: {owner: {id: {_eq: $id}}}) {
          body
          id
          img
          like
          owner {
            name
            img
          }
          title
          user_id
        }
      }
      `,
      variables: {
        id,
      },
    }),
  });

  const { data } = await response.json();

  return data.posts;
};

export const fetchChat = async (userId: number) => {
  const response = await fetch("http://nolosaz.com:8080/v1/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `
        query MyQuery($userId: Int) {
        chat(where: {userId: {_eq: $userId}}) {
          text
          id
        }
      }
      
      `,
      variables: {
        userId,
      },
    }),
  });
  const { data } = await response.json();
  return data.chat;
};

export const searchMutation = async (name: string) => {
  const response = await fetch("http://nolosaz.com:8080/v1/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `
      query MyQuery($name: String ) {
        nutrition(where: {name: {_ilike: $name}}) {
          cal
          carbo
          fat
          fibr
          id
          name
          pro
          type
          unit
        }
      }
          
      `,
      variables: {
        name: `%${name}%`,
      },
    }),
  });
  const result = await response.json();
  return result?.data?.nutrition;
};

export const fetchPublicPosts = async () => {
  const response = await fetch("http://nolosaz.com:8080/v1/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `
      query MyQuery {
        posts(limit: 20, order_by: {id: desc}) {
          body
          id
          img
          like
          owner {
            img
            name
            id
          }
          title
          user_id
        }
      }
      
      `,
    }),
  });

  const { data } = await response.json();

  return data.posts;
};

export const fetchCategories = async () => {
  const query = `
  query MyQuery {
    home(where: {id: {_eq: 5}}) {
      info
    }
  }  
  `;
  const response = await fetch("http://nolosaz.com:8080/v1/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();

  return data.home[0].info;
};

export const fetchCategoriesByType = async (slug: string) => {
  const request = await fetch("http://nolosaz.com:8080/v1/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `
      query MyQuery($type: String ) {
        nutrition(where: {type: {_eq: $type}}) {
          cal
          carbo
          fat
          fibr
          id
          name
          pro
          unit
          type
        }
      }          
      `,
      variables: {
        type: slug,
      },
    }),
  });
  const result = await request.json();
  return result.data.nutrition;
};

export const fetchWorkout = async () => {
  const query = `
  query MyQuery {
    workout {
      day
      desc
      id
      img
      title
      url
    }
  }
  
  `;
  const response = await fetch("http://nolosaz.com:8080/v1/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();

  return data.workout;
};

export const fetchCook = async () => {
  const response = await fetch("http://nolosaz.com:8080/v1/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `
      query MyQuery {
        cook {
          content1
          content2
          id
          media
          title
        }
      }
      
      `,
    }),
  });
  const { data } = await response.json();
  return data.cook;
};

export const userProfile = async (id: number) => {
  const response = await fetch("http://nolosaz.com:8080/v1/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `
      query MyQuery($id: Int) {
        posts(where: {owner: {id: {_eq: $id}}}) {
          body
          id
          img
          like
          owner(where: {id: {_eq: $id}}) {
            id
            img
            name
          }
          title
          user_id
        }
      }
        
      `,
      variables: {
        id,
      },
    }),
  });

  const { data } = await response.json();

  return data.posts;
};

export const fetchLikes = async (post_id: number) => {
  const response = await fetch("http://nolosaz.com:8080/v1/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `
      query MyQuery($post_id: Int) {
        likes(where: {post_id: {_eq: $post_id}}) {
          id
          user_id
          post_id
        }
      }
      
      `,
      variables: {
        post_id,
      },
    }),
  });

  const { data } = await response.json();

  return data;
};
