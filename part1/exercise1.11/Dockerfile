FROM openjdk:8
COPY ./spring-example-project/ /usr/src/myapp/
WORKDIR /usr/src/myapp
EXPOSE 8080
RUN ./mvnw package
CMD ["java", "-jar" ,"./target/docker-example-1.1.3.jar"]
