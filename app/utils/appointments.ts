
const getAppointments = () => {
  return [
      {
          "name": "Dr. Emily Carter",
          "specialization": "Cardiologist",
          "review_count": 145,
          "score": 4.8,
          "city": "New York",
          "city_location": "Downtown Medical Plaza",
          "availableSlots": [
              {"date": "2024-10-29", "time": "10:00 AM"},
              {"date": "2024-10-31", "time": "11:00 AM"},
              {"date": "2024-11-02", "time": "1:00 PM"}
          ]
      },
      {
          "name": "Dr. James Wilson",
          "specialization": "Orthopedic Surgeon",
          "review_count": 97,
          "score": 4.6,
          "city": "Los Angeles",
          "city_location": "Sunset Health Center",
          "availableSlots": [
              {"date": "2024-10-29", "time": "10:00 AM"},
              {"date": "2024-10-31", "time": "11:00 AM"},
              {"date": "2024-11-02", "time": "1:00 PM"}
          ]
      },
      {
          "name": "Dr. Sarah Nguyen",
          "specialization": "Pediatrician",
          "review_count": 210,
          "score": 4.9,
          "city": "Chicago",
          "city_location": "Lakeshore Children's Clinic",
          "availableSlots": [
              {"date": "2024-10-29", "time": "10:00 AM"},
              {"date": "2024-10-31", "time": "11:00 AM"},
              {"date": "2024-11-02", "time": "1:00 PM"}
          ]
      },
      {
          "name": "Dr. Michael Johnson",
          "specialization": "Dermatologist",
          "review_count": 56,
          "score": 4.4,
          "city": "Houston",
          "city_location": "Bay Area Dermatology Center",
          "availableSlots": [
              {"date": "2024-10-29", "time": "10:00 AM"},
              {"date": "2024-10-31", "time": "11:00 AM"},
              {"date": "2024-11-02", "time": "1:00 PM"}
          ]
      },
      {
          "name": "Dr. Maria Lopez",
          "specialization": "Neurologist",
          "review_count": 132,
          "score": 4.7,
          "city": "Phoenix",
          "city_location": "Desert Neuro Center",
          "availableSlots": [
              {"date": "2024-10-29", "time": "10:00 AM"},
              {"date": "2024-10-31", "time": "11:00 AM"},
              {"date": "2024-11-02", "time": "1:00 PM"}
          ]
      }
  ]
};

export { getAppointments };
