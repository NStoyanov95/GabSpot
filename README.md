<h1 align="center">GabSpot</h1>

<h2>Features</h2>
<ul>
  <li><strong>Post Creation:</strong> Registered users can create posts with text and images, sharing their thoughts and experiences with others.</li>
  <li><strong>Comments:</strong> Registered users can engage in discussions by commenting on posts.</li>
  <li><strong>Likes:</strong> Registered users can show appreciation for posts by liking them.</li>
  <li><strong>Profile Page:</strong> Users can view their profile with a list of their posts and liked posts.</li>
  <li><strong>Post Management:</strong> As a post author, you can edit and delete your posts and delete comments on your posts.</li>
  <li><strong>Guest Access:</strong> Guests can view posts but cannot interact with them.</li>
  <li><strong>Responsive Design:</strong> Enjoy a seamless experience across all devices.</li>
</ul>


<h2>Technologies Used</h2>
<ul>
  <li><strong>Frontend:</strong> React.js, CSS Modules, HTML5</li>
  <li><strong>Backend:</strong> Node.js, Express.js</li>
  <li><strong>Database:</strong> MongoDB</li>
  <li><strong>Authentication:</strong> JWT (JSON Web Tokens)</li>
  <li><strong>Routing:</strong> React Router</li>
</ul>

<h2>Installation</h2>
<ol>
  <li><strong>Clone the repository:</strong>
cd gabspot
    </code></pre>
  </li>
  <li><strong>Install dependencies for the client:</strong>
npm install
    </code></pre>
  </li>
  <li><strong>Install dependencies for the server:</strong>
npm install
    </code></pre>
  </li>
  <li><strong>Set up environment variables:</strong>
    <p>Create a <code>.env</code> file in the <code>server</code> directory and add the following variables:</p>
    <pre><code>PORT=3030
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
    </code></pre>
  </li>
  <li><strong>Run the application:</strong>
    <ul>
      <li><strong>Client:</strong>
        <pre><code>cd gabSpot
npm start
        </code></pre>
      </li>
      <li><strong>Server:</strong>
        <pre><code>cd ../server
npm start
        </code></pre>
      </li>
    </ul>
    <p>The client will run on <code>http://localhost:5173</code> and the server will run on <code>http://localhost:3030</code>.</p>
  </li>
</ol>

<h2>Usage</h2>
<ol>
  <li><strong>Sign Up:</strong> Create a new account using your email address.</li>
  <li><strong>Log In:</strong> Access your account using your credentials.</li>
  <li><strong>Create Posts:</strong> Write and share posts with the community.</li>
  <li><strong>Comment:</strong> Engage with others by commenting on their posts.</li>
  <li><strong>Like:</strong> Show appreciation by liking posts you enjoy.</li>
  <li><strong>Edit and Delete Posts:</strong> As a post author, edit or delete your posts.</li>
  <li><strong>Delete Comments:</strong> As a post author, delete comments on your posts.</li>
  <li><strong>Profile Page:</strong> View your profile to see your posts and liked posts.</li>
  <li><strong>Guest Access:</strong> View posts without an account, but you cannot like, comment, or create posts.</li>
</ol>
