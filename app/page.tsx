import { getUsers } from '../_actions/userAction';

export default async function Home() {
  const { data, errMsg } = await getUsers();

  if (errMsg) {
    return <h1>{errMsg}</h1>;
  }

  return (
    <div>
      {data && data.length > 0 ? (
        data.map((item: any) => (
          <h1 key={item._id}>{item.name}, {item.email}</h1>
        ))
      ) : (
        <h1>No users found</h1>
      )}
    </div>
  );
  
}
