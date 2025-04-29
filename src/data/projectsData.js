export const webProjects = [
    {
        id: "java-migration",
        src: "java-migration.png",
        alt: "Java Migration",
        text: "Java Migration from 8 to 17 version",
        link: null,
        description: `
        📚 I was tasked with migrating a legacy project from Java 8 to Java 17. The goal was to ensure compatibility with the latest features while maintaining stability in the application.
        
        🎬 I started by analyzing the codebase and identifying deprecated methods, libraries, and features that would no longer be supported in Java 17. 
        The migration process required updating configurations and dependencies, along with rewriting certain sections of the code to adhere to the new language syntax and best practices. 
        
        👉 First, I upgraded the project's build system to support Java 17, ensuring that all dependencies were compatible with the new version. 
        I worked closely with the development team to identify any potential issues related to the upgrade, such as API changes and compatibility with third-party libraries. 
        
        👉 Next, I focused on refactoring parts of the application that used deprecated methods and replaced them with their Java 17 equivalents. 
        This included updating the use of Streams, modifying how classes were loaded dynamically, and refactoring error handling to match Java 17's new exception handling structure. 
        
        💡 As part of the migration, I also utilized the new features introduced in Java 17, such as the enhanced switch expressions and sealed classes, which allowed for cleaner, more efficient code. 
        These features provided a better structure and performance for the application, enhancing its maintainability. 
        
        🏁 Finally, after completing the migration, I thoroughly tested the application to ensure it ran smoothly on Java 17, making sure all existing features were still functional and the performance was optimized. 
        The migration not only made the app more future-proof but also took advantage of the performance improvements and new language features in Java 17 🚀.`,

        usage: "In this project, I successfully migrated a legacy Java application from version 8 to 17, addressing deprecated features, ensuring compatibility with newer versions, and leveraging advanced language features for better performance and maintainability.",
        skills: "Through this migration, I sharpened my skills in upgrading legacy applications, refactoring code for newer versions of Java, and utilizing the latest Java 17 features for enhanced performance and maintainability. I also gained experience in managing dependencies and resolving compatibility issues between old and new code.",
        technologies: ["Java", "Spring Boot", "Maven", "Java 17", "Spring Security", "Spring Data", "JPA", "SQL", "REST API"]
    },
    
    {
        id: "Pizza-API",
        src: "pizza.jpg",
        alt: "Pizza Project",
        text: "Pizza API",
        link: "https://github.com/paulfloresdevs/platzi-pizzeria",
        description: `
        🍕 I developed a robust backend for a pizza store using Java Spring and connected it to a relational database with Spring Data JPA,
        the project involved creating entities for customers, pizzas, invoices, and promotions. 
        
        👨‍💻 I set up the relationships between these entities, ensuring that each part of the application was seamlessly integrated.
        I also built advanced query methods to allow filtering by pizza types, promotions, and orders.
        
        🗝️ One key challenge was implementing pagination for pizza listings. I used Spring Data's pagination features to ensure that large datasets could be efficiently retrieved and displayed. 
        this was essential for a smooth user experience as the menu expanded and
        in addition, I focused on customizing queries with @Query for more precise filtering 🔍 and querying the database efficiently. 
        
        🙌 I also implemented @Modifying with @Query to support custom update operations, such as changing pizza prices or applying promotional discounts. 
        To make sure the data was consistent, I utilized @Transactional to ensure that database changes are atomic and follow the ACID principles for transaction safety 🔒.
        
        📊 For audit tracking, I incorporated auditing features using Spring Data to monitor changes to critical records, such as orders and invoices. 
        this helps ensure that any modifications to sensitive data are properly tracked, providing transparency and accountability.`,
        usage: "This project showcases how to build a backend for a pizza store with an API that can manage pizza orders, promotions, customer data, and invoices. It covers everything from entity relationships to advanced filtering, pagination, and audit management 📈.",
        skills: "I honed my skills in database management with Spring Data JPA, specifically in handling complex entity relationships and writing advanced queries 🔧. I also strengthened my knowledge of database transactions, pagination, and audit tracking, which are essential for large-scale applications that need data integrity and efficient query handling 💡.",
        technologies: ["Java", "Spring Boot", "Spring Data JPA", "SQL", "REST API", "Pagination", "Query Methods", "Transactions", "Auditing", "Database Management"]
    },    
    {
        id: "Softelligent-Webpage",
        src: "softelligent-webpage.png",
        alt: "Softelligent Webpage",
        text: "Softelligent Webpage",
        link: "https://www.softelligent-business.com.mx",
        description: `
        🌐 I designed and developed the official website for Softelligent Business, a company specializing in IT solutions. The goal was to create a professional and responsive platform to showcase their services and expertise.
        
        🎨 The design focused on a modern, user-friendly interface with smooth navigation and an appealing aesthetic. I ensured consistency across different sections while keeping the branding intact.
        
        📱 The website was built with a fully responsive layout, guaranteeing an optimal experience across mobile, tablet, and desktop devices.
        
        🔍 SEO techniques were applied to enhance search engine visibility and attract more potential clients to the platform.
        
        📧 A dynamic contact form was implemented, allowing potential customers to reach out seamlessly and facilitating better engagement.`,
        usage: "This project demonstrates how to develop a corporate website with a clean UI, intuitive navigation, and modern web development practices.",
        skills: "I strengthened my front-end development skills, improved UI/UX design capabilities, and gained experience in SEO optimization and responsive web design.",
        technologies: ["HTML", "CSS", "JavaScript", "React", "SEO", "Responsive Design", "UI/UX Design", "PHP", "Laravel"]
    },
    {
    id: "Bank-App",
    src: "bank-application-logo.jpg",
    alt: "Bank Application",
    text: "Bank Full Application",
    link: "https://github.com/paulfloresdevs/bank-application",
    description: 
    `🏦 I designed and developed a full-fledged banking application leveraging microservices architecture with Spring Boot. 
    
    🚀 The project started by carefully structuring independent services such as customer management, transaction processing, and authentication, ensuring each microservice operated independently while communicating efficiently through REST APIs.
    
    🔐 Security was a key focus, implementing OAuth2 with Keycloak for authentication and authorization. The API Gateway was configured to manage and secure API requests seamlessly.
    
    🛠️ Docker was utilized to containerize all microservices, ensuring smooth deployment and orchestration using Docker Compose. This allowed for efficient environment management and scalability.
    
    📡 The system integrated PostgreSQL for persistent data storage and leveraged Spring Cloud components such as Eureka for service discovery, Spring Config for centralized configuration, and Spring Admin for monitoring.
    
    📊 Swagger was implemented to document the APIs, making it easier for developers to interact with the system and test endpoints efficiently.`,

    usage: "This project showcases how to build a secure, scalable, and modular banking system using modern microservices architecture and best industry practices.",
    skills: "I honed my expertise in Spring Boot microservices, API security, Dockerization, service discovery, API gateway configuration, and database management with PostgreSQL.",
    technologies: ["Spring Boot", "Spring Cloud", "Spring Security","OAuth2", "Keycloak", "Docker", "PostgreSQL", "Swagger", "API Gateway", "Microservices", "REST API"]
}
];

export const iosProjects = [
    {
        id: "ToDos-App",
        src: "todos-app.png",
        alt: "ToDos App",
        text: "ToDos App",
        link: "https://github.com/iAlessDev/mvvm-swift",
        description: 
        `🧠 The goal? Learn to build scalable, maintainable apps with clear separation of concerns.

        📦 I began by structuring the app using MVVM, splitting the responsibilities across Models, Views, and ViewModels. This allowed for better testing, scalability, and clean, modular code.

        📋 The project consisted of building a fully functional to-do list. I implemented CRUD operations using Core Data, allowing users to create, read, update, delete, archive, and restore tasks seamlessly—all following Clean Architecture principles.

        🖼️ I focused heavily on UI design with SwiftUI, crafting smooth, reactive views using stacks, toolbars, and interactive animations. Every screen was built to feel natural and intuitive.

        🔄 I integrated Combine for reactive programming, ensuring that the app’s state was always in sync with user interactions. ViewModels were enhanced with observable properties, creating a seamless data flow across the app.

        🧱 This project wasn’t just about making a to-do list—it was about mastering the foundations of professional iOS development through a real-world application.`,
        usage: "This app showcases the application of MVVM and Clean Architecture in iOS using SwiftUI, Core Data, and Combine to manage tasks in a scalable and reactive way.",
        skills: "I gained hands-on experience in MVVM, Clean Architecture, Core Data integration, and state management with Combine. I also learned how to structure SwiftUI apps with layered architecture for long-term maintainability.",
        technologies: ["SwiftUI", "MVVM", "Core Data", "Combine", "Clean Architecture", "Swift", "CRUD Operations", "Animations", "State Management"]
    },
    {
        id: "Notes-App",
        src: "notes-app.png",
        alt: "Notes App",
        text: "Notes App",
        link: "https://github.com/iAlessDev/Notes-App",
        description: 
        `📝 I built NotesApp as part of my SwiftUI development journey, focusing on creating a sleek and efficient note-taking application. The goal was to master SwiftUI fundamentals, state management, and UI architecture while developing a practical app.
    
        🎨 The UI was crafted using Stacks, Modifiers, and Custom Views, ensuring a clean and modern look. I integrated ScrollView and List to enable smooth navigation and dynamic content presentation.
    
        🛠 To manage data efficiently, I implemented MVVM architecture, utilizing ViewModels and @ObservedObject to separate logic from UI. This approach made the app modular, scalable, and easy to maintain.
    
        🔗 Navigation was handled through NavigationStack, ensuring seamless transitions between screens. I also added modals, alerts, and interactive elements to enhance user experience.
    
        ✨ Animations and gestures played a key role in making the app feel more dynamic. By leveraging ProgressView, Custom Transitions, and Gestures, I improved usability and interaction.
    
        📡 The final step involved performance optimization and testing across multiple simulators to ensure a flawless experience. This project was a crucial step in consolidating my skills as an iOS developer, allowing me to explore the full potential of SwiftUI. 🚀`,
    
        usage: "This project demonstrates how to build a fully functional SwiftUI app with a structured architecture, dynamic UI elements, and seamless navigation.",
        skills: "I enhanced my proficiency in SwiftUI, improved my understanding of MVVM architecture, state management, animations, and gesture handling.",
        technologies: ["SwiftUI", "MVVM", "@State", "@Binding", "@ObservedObject", "NavigationStack", "Modifiers", "Animations", "Gestures", "List", "ScrollView"]
    },
    { 
        id: "TweetsApp", 
        src: "tweets.png", 
        alt: "Tweets App", 
        text: "Tweets Application", 
        link: "https://github.com/iAlessDev/TweetsApp",
        description: ` 💡 The journey of building this app was a full-stack challenge that pushed my iOS development skills to the next level! 

        📕 I started by designing the entire architecture from scratch, ensuring a seamless experience between frontend and backend. I structured the app using Swift and UIKit, following the MVC pattern for maintainability.

        🧠 The backend was a crucial part of the project, which I personally developed using Java and Spring Boot. I built a RESTful API to handle authentication, tweet creation, user management, and data persistence.

        👌 Next, I integrated the backend with the iOS app using S3 for networking, ensuring smooth API communication and real-time data retrieval.

        💪 The UI was designed with Auto Layout to support different screen sizes, making sure the app looked great on all iPhones.

        👉 For user interaction, I implemented features like tweet posting, image and video uploads with AWS S3, and real-time updates.

        👉 The final steps included integrating MapsKit to display tweets with location data and implementing TestFlight for distribution and testing before deploying to the App Store!

        👉 This project was an incredible way to consolidate my iOS knowledge while also leveraging my backend development expertise!`,

        usage: "This project serves as a full-stack learning experience, demonstrating how to build an iOS app with a custom backend. It showcases API integration, user authentication, real-time data handling, and multimedia uploads.",
        skills: "I deepened my knowledge of UIKit, networking with S3, AWS services, user authentication, media handling, and location services in iOS.",
        technologies: ["Swift", "UIKit", "Storyboard", "Auto Layout", "Networking", "S3", "AWS", "AWS S3", "MapKit", "MVC Pattern", "JSON Parsing", "Codable", "TestFlight"]
    },
    { 
        id: "who-is-that-pokemon", 
        src: "pokemon.png", 
        alt: "Pokemon Project", 
        text: "Who is that pokemon?", 
        link: "https://github.com/iAlessDev/who-is-that-pokemon",
        description: `
        🚀 I created an engaging iOS application using Swift and Storyboards, where users can test their Pokémon knowledge in a fun and interactive way.

        🎨 First, I meticulously designed the UI using Storyboard, ensuring an intuitive and visually appealing interface with Auto Layout for a responsive experience.

        📦 Then, I structured the app using the MVC pattern, separating the logic to make the codebase scalable and maintainable.

        🔄 One of the core features was integrating the PokeAPI, allowing the app to fetch and display Pokémon images dynamically.

        🎮 The game logic was implemented to generate random Pokémon, prompt the user for guesses, validate responses, and update scores accordingly.

        🏆 Finally, I added a restart feature to give players the opportunity to retry and improve their scores, enhancing the overall user engagement.
        `,
        usage: "This course serves as a comprehensive guide to learning Swift and Storyboard-based UI development. It teaches how to build interactive iOS applications, structure clean code using the MVC pattern, and implement network calls to fetch and display dynamic data.",
        skills: "I refined my teaching abilities, strengthened my knowledge of UIKit components, improved my API integration skills, and gained deeper expertise in structuring iOS applications for beginners and intermediate learners.",
        technologies: ["Swift", "UIKit", "Storyboard", "Auto Layout", "Networking", "MVC Pattern", "PokeAPI", "Game Development", "User Interface"]
    },
    { 
        id: "calculator", 
        src: "calculatorPhone.png", 
        alt: "Calculator Project", 
        text: "iOS calculator", 
        link: null,
        description: "I built a fully functional iOS calculator using UIKit and Storyboard, closely replicating the iPhone's default calculator UI.",
        usage: "This project demonstrates how to create a calculator app with custom UI elements and logic handling for arithmetic operations.",
        skills: "I improved my understanding of UIButton customization, Auto Layout constraints, and number formatting in Swift.",
        technologies: ["Swift", "UIKit", "Storyboard", "Auto Layout", "Calculator Logic", "UI Design"]
    },
    { 
        id: "sample-project", 
        src: "husky.png", 
        alt: "Storyboard Project", 
        text: "Sample Storyboard", 
        link: null,
        description: "I developed an interactive iOS app using UIKit and Storyboard to introduce a playful husky with a welcoming UI.",
        usage: "This project serves as a demonstration of how to structure and design an intuitive onboarding screen for an iOS application.",
        skills: "I improved my Auto Layout skills, enhanced my ability to design clean UI, and gained deeper knowledge of UIKit components.",
        technologies: ["Swift", "UIKit", "Auto Layout", "Xcode", "Storyboard", "UI Design", "Animations"]
    }
];

export const allProjects = [...iosProjects, ...webProjects];