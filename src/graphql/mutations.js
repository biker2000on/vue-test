/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createActivities = `mutation CreateActivities($input: [CreateActivityInput]) {
  createActivities(input: $input) {
    id
    activity_type
    strava_id
    achievement_count
    athlete_count
    average_heartrate
    average_speed
    average_temp
    average_watts
    comment_count
    commute
    description
    device_watts
    display_hide_heartrate_option
    distance
    elapsed_time
    elev_high
    elev_low
    end_latlng
    flagged
    gear_id
    has_heartrate
    has_kudoed
    heartrate_opt_out
    kilojoules
    kudos_count
    location_city
    location_country
    location_state
    manual
    summary_polyline
    max_heartrate
    max_speed
    moving_time
    name
    photo_count
    pr_count
    private
    resource_state
    start_date
    start_date_local
    start_latitude
    start_longitude
    start_latlng
    timezone
    total_elevation_gain
    total_photo_count
    trainer
    type
    upload_id
    utc_offset
    visibility
    workout_type
    tour {
      id
      name
      description
      start_date
      end_date
      isPublic
      owner
      activities {
        nextToken
      }
    }
    owner
  }
}
`;
export const createTour = `mutation CreateTour($input: CreateTourInput!) {
  createTour(input: $input) {
    id
    name
    description
    start_date
    end_date
    isPublic
    owner
    activities {
      items {
        id
        activity_type
        strava_id
        achievement_count
        athlete_count
        average_heartrate
        average_speed
        average_temp
        average_watts
        comment_count
        commute
        description
        device_watts
        display_hide_heartrate_option
        distance
        elapsed_time
        elev_high
        elev_low
        end_latlng
        flagged
        gear_id
        has_heartrate
        has_kudoed
        heartrate_opt_out
        kilojoules
        kudos_count
        location_city
        location_country
        location_state
        manual
        summary_polyline
        max_heartrate
        max_speed
        moving_time
        name
        photo_count
        pr_count
        private
        resource_state
        start_date
        start_date_local
        start_latitude
        start_longitude
        start_latlng
        timezone
        total_elevation_gain
        total_photo_count
        trainer
        type
        upload_id
        utc_offset
        visibility
        workout_type
        owner
      }
      nextToken
    }
  }
}
`;
export const updateTour = `mutation UpdateTour($input: UpdateTourInput!) {
  updateTour(input: $input) {
    id
    name
    description
    start_date
    end_date
    isPublic
    owner
    activities {
      items {
        id
        activity_type
        strava_id
        achievement_count
        athlete_count
        average_heartrate
        average_speed
        average_temp
        average_watts
        comment_count
        commute
        description
        device_watts
        display_hide_heartrate_option
        distance
        elapsed_time
        elev_high
        elev_low
        end_latlng
        flagged
        gear_id
        has_heartrate
        has_kudoed
        heartrate_opt_out
        kilojoules
        kudos_count
        location_city
        location_country
        location_state
        manual
        summary_polyline
        max_heartrate
        max_speed
        moving_time
        name
        photo_count
        pr_count
        private
        resource_state
        start_date
        start_date_local
        start_latitude
        start_longitude
        start_latlng
        timezone
        total_elevation_gain
        total_photo_count
        trainer
        type
        upload_id
        utc_offset
        visibility
        workout_type
        owner
      }
      nextToken
    }
  }
}
`;
export const deleteTour = `mutation DeleteTour($input: DeleteTourInput!) {
  deleteTour(input: $input) {
    id
    name
    description
    start_date
    end_date
    isPublic
    owner
    activities {
      items {
        id
        activity_type
        strava_id
        achievement_count
        athlete_count
        average_heartrate
        average_speed
        average_temp
        average_watts
        comment_count
        commute
        description
        device_watts
        display_hide_heartrate_option
        distance
        elapsed_time
        elev_high
        elev_low
        end_latlng
        flagged
        gear_id
        has_heartrate
        has_kudoed
        heartrate_opt_out
        kilojoules
        kudos_count
        location_city
        location_country
        location_state
        manual
        summary_polyline
        max_heartrate
        max_speed
        moving_time
        name
        photo_count
        pr_count
        private
        resource_state
        start_date
        start_date_local
        start_latitude
        start_longitude
        start_latlng
        timezone
        total_elevation_gain
        total_photo_count
        trainer
        type
        upload_id
        utc_offset
        visibility
        workout_type
        owner
      }
      nextToken
    }
  }
}
`;
export const createActivity = `mutation CreateActivity($input: CreateActivityInput!) {
  createActivity(input: $input) {
    id
    activity_type
    strava_id
    achievement_count
    athlete_count
    average_heartrate
    average_speed
    average_temp
    average_watts
    comment_count
    commute
    description
    device_watts
    display_hide_heartrate_option
    distance
    elapsed_time
    elev_high
    elev_low
    end_latlng
    flagged
    gear_id
    has_heartrate
    has_kudoed
    heartrate_opt_out
    kilojoules
    kudos_count
    location_city
    location_country
    location_state
    manual
    summary_polyline
    max_heartrate
    max_speed
    moving_time
    name
    photo_count
    pr_count
    private
    resource_state
    start_date
    start_date_local
    start_latitude
    start_longitude
    start_latlng
    timezone
    total_elevation_gain
    total_photo_count
    trainer
    type
    upload_id
    utc_offset
    visibility
    workout_type
    tour {
      id
      name
      description
      start_date
      end_date
      isPublic
      owner
      activities {
        nextToken
      }
    }
    owner
  }
}
`;
export const updateActivity = `mutation UpdateActivity($input: UpdateActivityInput!) {
  updateActivity(input: $input) {
    id
    activity_type
    strava_id
    achievement_count
    athlete_count
    average_heartrate
    average_speed
    average_temp
    average_watts
    comment_count
    commute
    description
    device_watts
    display_hide_heartrate_option
    distance
    elapsed_time
    elev_high
    elev_low
    end_latlng
    flagged
    gear_id
    has_heartrate
    has_kudoed
    heartrate_opt_out
    kilojoules
    kudos_count
    location_city
    location_country
    location_state
    manual
    summary_polyline
    max_heartrate
    max_speed
    moving_time
    name
    photo_count
    pr_count
    private
    resource_state
    start_date
    start_date_local
    start_latitude
    start_longitude
    start_latlng
    timezone
    total_elevation_gain
    total_photo_count
    trainer
    type
    upload_id
    utc_offset
    visibility
    workout_type
    tour {
      id
      name
      description
      start_date
      end_date
      isPublic
      owner
      activities {
        nextToken
      }
    }
    owner
  }
}
`;
export const deleteActivity = `mutation DeleteActivity($input: DeleteActivityInput!) {
  deleteActivity(input: $input) {
    id
    activity_type
    strava_id
    achievement_count
    athlete_count
    average_heartrate
    average_speed
    average_temp
    average_watts
    comment_count
    commute
    description
    device_watts
    display_hide_heartrate_option
    distance
    elapsed_time
    elev_high
    elev_low
    end_latlng
    flagged
    gear_id
    has_heartrate
    has_kudoed
    heartrate_opt_out
    kilojoules
    kudos_count
    location_city
    location_country
    location_state
    manual
    summary_polyline
    max_heartrate
    max_speed
    moving_time
    name
    photo_count
    pr_count
    private
    resource_state
    start_date
    start_date_local
    start_latitude
    start_longitude
    start_latlng
    timezone
    total_elevation_gain
    total_photo_count
    trainer
    type
    upload_id
    utc_offset
    visibility
    workout_type
    tour {
      id
      name
      description
      start_date
      end_date
      isPublic
      owner
      activities {
        nextToken
      }
    }
    owner
  }
}
`;
export const createAthlete = `mutation CreateAthlete($input: CreateAthleteInput!) {
  createAthlete(input: $input) {
    id
    strava_id
    firstname
    lastname
    profile
    profile_medium
    sex
    city
    state
    country
    date_preference
    measurement_preference
    weight
    tours {
      items {
        id
        name
        description
        start_date
        end_date
        isPublic
        owner
      }
      nextToken
    }
    owner
    auth {
      id
      access_token
      expires_at
      refresh_token
      token_type
      strava_scope
      owner
    }
  }
}
`;
export const updateAthlete = `mutation UpdateAthlete($input: UpdateAthleteInput!) {
  updateAthlete(input: $input) {
    id
    strava_id
    firstname
    lastname
    profile
    profile_medium
    sex
    city
    state
    country
    date_preference
    measurement_preference
    weight
    tours {
      items {
        id
        name
        description
        start_date
        end_date
        isPublic
        owner
      }
      nextToken
    }
    owner
    auth {
      id
      access_token
      expires_at
      refresh_token
      token_type
      strava_scope
      owner
    }
  }
}
`;
export const deleteAthlete = `mutation DeleteAthlete($input: DeleteAthleteInput!) {
  deleteAthlete(input: $input) {
    id
    strava_id
    firstname
    lastname
    profile
    profile_medium
    sex
    city
    state
    country
    date_preference
    measurement_preference
    weight
    tours {
      items {
        id
        name
        description
        start_date
        end_date
        isPublic
        owner
      }
      nextToken
    }
    owner
    auth {
      id
      access_token
      expires_at
      refresh_token
      token_type
      strava_scope
      owner
    }
  }
}
`;
export const createAuth = `mutation CreateAuth($input: CreateAuthInput!) {
  createAuth(input: $input) {
    id
    access_token
    expires_at
    refresh_token
    token_type
    strava_scope
    owner
  }
}
`;
export const updateAuth = `mutation UpdateAuth($input: UpdateAuthInput!) {
  updateAuth(input: $input) {
    id
    access_token
    expires_at
    refresh_token
    token_type
    strava_scope
    owner
  }
}
`;
export const deleteAuth = `mutation DeleteAuth($input: DeleteAuthInput!) {
  deleteAuth(input: $input) {
    id
    access_token
    expires_at
    refresh_token
    token_type
    strava_scope
    owner
  }
}
`;
