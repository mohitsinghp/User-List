import UserTable from "./UserTable";
import CreateUser from "./CreateUser";
import DeleteAll from "./DeleteAll"
import { UserProvider } from "./UserContext";

function App() {
  return (
    <div className="container-fluid p-0">
      <UserProvider>
      <nav className="header h2 bg-primary text-white px-2">User List</nav>
      <UserTable />
      <div className="btn-container d-flex justify-content-around">
        <CreateUser />
        <DeleteAll />
      </div>
      </UserProvider>
    </div>
  );
}

export default App;
