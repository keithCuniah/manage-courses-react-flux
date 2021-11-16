import { Dispatcher } from "flux";
// The dispatcher is a singleton => there is only one dispatcher by app
const dispatcher = new Dispatcher();

export default dispatcher;
