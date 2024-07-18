<div align="center">
  <br />
      <img width="100%" src="thumbnail.png?raw=true" alt="Project Banner">
  <br />
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logoColor=white&logo=react&color=357da1" alt="react" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Jitsi-black?style=for-the-badge&logoColor=white&logo=jitsi&color=412991" alt="jitsi" />
 </div>
    <h1>Video Chat Application</h1>
  </div>


This repository contains the source code for a video chat application developed using React for the frontend, NodeJS for the backend, and Jitsi as the video conferencing service.

### 🚀 [simple-video-chat-app.vercel.app](https://simple-video-chat-app.vercel.app)

## Features

- 🎥👥 **Video Chat Rooms**: Users can create and join video chat rooms by entering a room name.

- 📹 **Participant Video Streams**: Display video streams of all participants in the video chat room.

- ⚛️ **Functional Components**: Utilize React functional components and hooks for efficient development.

- 🎨 **Clear UI Design**: Implement a basic UI with clear and intuitive design for a seamless user experience.

- 🚀 **NodeJS Server**: Set up a NodeJS server using Express to serve the React application.

- 🌐 **API Endpoints**: Implement necessary API endpoints to support room management and interactions.

- 📞 **Jitsi Integration**: Integrate Jitsi Meet API to handle video conferencing functionalities.

- 🔒 **User Authentication (Bonus)**: Optionally implement user authentication for added security.

- 💬 **Chat Functionality (Bonus)**: Add chat functionality within the video chat room for communication.

- 📝 **TypeScript Usage (Bonus)**: Use TypeScript for both the frontend and backend for type safety.

- 📄 **Documentation**: Provide clear instructions on setting up and running the application.

- 🌟 **User Experience**: Focus on creating a seamless user experience and interface design.

- 👨‍💻 **Code Quality**: Ensure code quality and organization for maintainability and readability.

- 🎤👋 **Event Handling**: Properly handle video chat events like user joining, leaving, and audio/video toggling.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/kaleabo/video-chat-app.git

cd video-chat-app
```

**Installation**

Install the project dependencies using npm:

```bash
npm install

npm run dev
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
# Your Jitsi app id
VITE_JITSI_APP_ID=""
```

Replace the placeholder values with your domain & meeting room name.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## Acknowledgements

- [Jitsi](https://jitsi.github.io/handbook/docs/intro) for making this project possible

## License

[MIT](https://choosealicense.com/licenses/mit/)
