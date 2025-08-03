# Use an official Maven image to build the project
FROM maven:3.9.5-eclipse-temurin-21 AS build

# Set working directory
WORKDIR /app

# Copy the pom.xml and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the entire project and build it
COPY . .
RUN mvn clean package -DskipTests

# Use a smaller image to run the app
FROM eclipse-temurin:21-jdk

# Set working directory
WORKDIR /app

# Copy the built jar from previous stage
COPY --from=build /app/target/intern_portal_backend-0.0.1-SNAPSHOT.jar app.jar

# Expose the default port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
