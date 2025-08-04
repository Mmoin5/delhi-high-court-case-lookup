package com.courtdata.court_data_fetcher.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.courtdata.court_data_fetcher.entity.CaseDetails;

@Repository
public interface QueryLogRepository extends JpaRepository<CaseDetails, Long> {

}
