import { FormData } from '../pages/register';

export const API = 'https://sabbersoltani.hasura.app/v1/graphql';

export const registerMutation = async (items: FormData) => {
  const response = await fetch("http://nolosaz.com:8080/v1/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `
      mutation MyMutation($activity: String , $age: String , $gender: String, $height: String, $name: String, $phone: String , $weight: String, $special: String) {
        insert_users(objects: {activity: $activity,special:$special ,age: $age, gender: $gender, height: $height, name: $name, phone: $phone, weight: $weight}) {
          returning {
            activity
            age
            gender
            id
            height
            name
            phone
            weight
            img
          }
        }
      }

      `,
      variables: {
        activity: items.activity,
        age: items.age,
        gender: items.gender,
        height: items.height,
        name: items.name,
        phone: items.phone,
        weight: items.weight,
        special: items.special,
      },
    }),
  });
  const { data } = await response.json();
  return data;
};
export const loginMutation = async (phone: string) => {
  const response = await fetch("http://nolosaz.com:8080/v1/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `
      query MyQuery($phone: String ) {
        users(where: {phone: {_eq: $phone}}) {
          activity
          age
          gender
          height
          id
          img
          name
          special
          phone
          weight
        }
      }
        
      `,
      variables: {
        phone: phone,
      },
    }),
  });
  const { data } = await response.json();
  return data.users;
};
export const fetchMessages = async (receiver: number) => {
  const response = await fetch("http://nolosaz.com:8080/v1/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `
      query MyQuery($receiver: Int) {
        user_messages(where: {receiver: {_eq: $receiver}}) {
          chat {
            id
          }
          text
          sender
          id
        }
      }       
      `,
      variables: {
        receiver,
      },
    }),
  });
  const { data } = await response.json();
  return data.user_messages;
};
export const deleteLikes = async (user_id: number) => {
  const response = await fetch("http://nolosaz.com:8080/v1/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `
      mutation MyMutation($user_id: Int ) {
        delete_likes(where: {user_id: {_eq: $user_id}}) {
          returning {
            id
          }
        }
      }       
      `,
      variables: {
        user_id,
      },
    }),
  });
  const { data } = await response.json();
  return data;
};
export const addLikes = async (user_id: number, post_id: number) => {
  const response = await fetch("http://nolosaz.com:8080/v1/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `
      mutation MyMutation($post_id: Int , $user_id: Int ) {
        insert_likes(objects: {post_id: $post_id, user_id: $user_id}) {
          returning {
            id
          }
        }
      }       
      `,
      variables: {
        user_id,
        post_id,
      },
    }),
  });
  const { data } = await response.json();
  return data;
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
