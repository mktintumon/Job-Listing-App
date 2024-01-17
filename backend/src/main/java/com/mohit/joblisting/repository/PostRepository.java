package com.mohit.joblisting.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.mohit.joblisting.model.Post;

public interface PostRepository extends MongoRepository<Post, String> {

}
