package com.jobsphere.joblisting.controller;

import com.jobsphere.joblisting.repository.PostRepository;
import com.jobsphere.joblisting.model.Post;
import com.jobsphere.joblisting.repository.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.Hidden;

import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"})
public class PostController
{

    @Autowired
    PostRepository repo;

    @Autowired
    SearchRepository srepo;

    @Hidden
    @RequestMapping(value="/")
    public void redirect(HttpServletResponse response) throws IOException {
        response.sendRedirect("/swagger-ui/index.html");
    }

    @GetMapping("/allPosts")
    @CrossOrigin
    public List<Post> getAllPosts()
    {
        return repo.findAll();
    }
    // posts/java
    @GetMapping("/posts/{text}")
    @CrossOrigin
    public List<Post> search(@PathVariable String text)
    {
        return srepo.findByText(text);
    }
    
    @Autowired
    org.springframework.data.mongodb.core.MongoTemplate mongoTemplate;

    @GetMapping("/raw")
    @CrossOrigin
    public java.util.List<org.bson.Document> getRaw() {
        return mongoTemplate.findAll(org.bson.Document.class, "JobPost");
    }

    @PostMapping("/post")
    @CrossOrigin
    public Post addPost(@RequestBody Post post)
    {
        return repo.save(post);
    }

    @PutMapping("/post")
    @CrossOrigin
    public Post updatePost(@RequestBody Post post) {
        // save() acts as update if the ID is present and exists
        return repo.save(post);
    }

    @DeleteMapping("/post/{id}")
    @CrossOrigin
    public void deletePost(@PathVariable String id) {
        repo.deleteById(id);
    }


}
