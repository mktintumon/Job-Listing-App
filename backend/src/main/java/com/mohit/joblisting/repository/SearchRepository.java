package com.mohit.joblisting.repository;

import java.util.List;

import com.mohit.joblisting.model.Post;

public interface SearchRepository {

    List<Post> findByText(String text);

}
