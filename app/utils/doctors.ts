const getDoctors = () => {
  return [
    [
      {
        name: "Dr. Emily Carter",
        specialization: "Cardiologist",
        review_count: 145,
        score: 4.8,
        city: "New York",
        city_location: "Downtown Medical Plaza",
        availableSlots: [
          { date: "2024-10-29", time: "10:00 AM" },
          { date: "2024-10-31", time: "11:00 AM" },
          { date: "2024-11-02", time: "1:00 PM" },
        ],
      },
      {
        name: "Dr. James Wilson",
        specialization: "Orthopedic Surgeon",
        review_count: 97,
        score: 4.6,
        city: "Los Angeles",
        city_location: "Sunset Health Center",
        availableSlots: [
          { date: "2024-10-29", time: "10:00 AM" },
          { date: "2024-10-31", time: "11:00 AM" },
          { date: "2024-11-02", time: "1:00 PM" },
        ],
      },
      {
        name: "Dr. Sarah Nguyen",
        specialization: "Pediatrician",
        review_count: 210,
        score: 4.9,
        city: "Chicago",
        city_location: "Lakeshore Children's Clinic",
        availableSlots: [
          { date: "2024-10-29", time: "10:00 AM" },
          { date: "2024-10-31", time: "11:00 AM" },
          { date: "2024-11-02", time: "1:00 PM" },
        ],
      },
      {
        name: "Dr. Michael Johnson",
        specialization: "Dermatologist",
        review_count: 56,
        score: 4.4,
        city: "Houston",
        city_location: "Bay Area Dermatology Center",
        availableSlots: [
          { date: "2024-10-29", time: "10:00 AM" },
          { date: "2024-10-31", time: "11:00 AM" },
          { date: "2024-11-02", time: "1:00 PM" },
        ],
      },
      {
        name: "Dr. Maria Lopez",
        specialization: "Neurologist",
        review_count: 132,
        score: 4.7,
        city: "Phoenix",
        city_location: "Desert Neuro Center",
        availableSlots: [
          { date: "2024-10-29", time: "10:00 AM" },
          { date: "2024-10-31", time: "11:00 AM" },
          { date: "2024-11-02", time: "1:00 PM" },
        ],
      },
      {
        name: "Dr. Hannah Kim",
        specialization: "Ophthalmologist",
        review_count: 84,
        score: 4.5,
        city: "San Francisco",
        city_location: "Golden Gate Eye Clinic",
        availableSlots: [
          { date: "2024-10-30", time: "9:00 AM" },
          { date: "2024-11-01", time: "2:00 PM" },
          { date: "2024-11-03", time: "10:30 AM" },
        ],
      },
      {
        name: "Dr. Robert Evans",
        specialization: "Gastroenterologist",
        review_count: 65,
        score: 4.6,
        city: "Miami",
        city_location: "Sunshine Gastro Clinic",
        availableSlots: [
          { date: "2024-10-30", time: "1:00 PM" },
          { date: "2024-11-01", time: "3:00 PM" },
          { date: "2024-11-04", time: "11:30 AM" },
        ],
      },
      {
        name: "Dr. William Patel",
        specialization: "Endocrinologist",
        review_count: 98,
        score: 4.8,
        city: "Seattle",
        city_location: "Pacific Endocrine Center",
        availableSlots: [
          { date: "2024-10-30", time: "11:00 AM" },
          { date: "2024-11-02", time: "9:00 AM" },
          { date: "2024-11-05", time: "2:30 PM" },
        ],
      },
      {
        name: "Dr. Laura Thompson",
        specialization: "Psychiatrist",
        review_count: 120,
        score: 4.7,
        city: "Boston",
        city_location: "Harbor Psychiatry Group",
        availableSlots: [
          { date: "2024-10-30", time: "12:00 PM" },
          { date: "2024-11-01", time: "10:00 AM" },
          { date: "2024-11-03", time: "3:00 PM" },
        ],
      },
      {
        name: "Dr. Sophia Green",
        specialization: "Oncologist",
        review_count: 87,
        score: 4.8,
        city: "Philadelphia",
        city_location: "Liberty Oncology Center",
        availableSlots: [
          { date: "2024-10-29", time: "2:00 PM" },
          { date: "2024-11-01", time: "1:00 PM" },
          { date: "2024-11-04", time: "9:30 AM" },
        ],
      },
    ],
  ];
};

export { getDoctors };
