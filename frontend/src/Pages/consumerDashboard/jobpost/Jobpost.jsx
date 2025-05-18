
import axios from "axios";
import React, { useState, useEffect } from "react";

const JobPost = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [location, setLocation] = useState("");
  const [aboutus, setAboutus] = useState("");
  const [category, setCategory] = useState("");
  const [age, setAge] = useState("");
  const [selectedDays, setSelectedDays] = useState([]); // each object: { day, start, end }
  const [gender, setGender] = useState("");
  const [startDate, setStartDate] = useState("");
  const [cat , setCat] = useState([])
  const [subcat , setSubcat] = useState([])
  const [subcategory , setSubcategory] = useState("")
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Updates time (start or end) for a given day
  const handleScheduleChange = (day, key, value) => {
    setSelectedDays((prev) => {
      const updatedDays = [...prev];
      const existingDayIndex = updatedDays.findIndex((entry) => entry.day === day);
      if (existingDayIndex !== -1) {
        updatedDays[existingDayIndex][key] = value;
      } else {
        updatedDays.push({ day, [key]: value });
      }
      return updatedDays;
    });
  };

  // Toggles a day on/off in the schedule
  const toggleDay = (day) => {
    if (selectedDays.some((entry) => entry.day === day)) {
      setSelectedDays((prev) => prev.filter((entry) => entry.day !== day));
    } else {
      setSelectedDays((prev) => [...prev, { day }]);
    }
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const postingJob = (e) => {
    e.preventDefault();

    const data = {
      jobTitle,
      jobDescription,
      location,
      aboutus,
      category,
      subcategory,
      age,
      gender,
      startDate,
      schedule: selectedDays, // Each day includes { day, start, end }
    };

    console.log("Posting job data:", data);

    axios
      .post("http://localhost:8000/user/jobpost", data)
      .then((res) => {
        console.log("Data saved to database:", res);
        alert("Job posted successfully!");
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        alert("Failed to post the job. Please try again.");
      });
  };

  const categoryOptions = ()=>{
    console.log("Fetching categories...");
      axios.get("http://localhost:8000/user/getcategory")
      .then((res) => {
        console.log("Data fetched from database:", res.data);
        setCat(res.data);
      }).catch((error) => {
        console.error("Error fetching data:", error);
      } );
  }

  console.log("Selected category:", category); 
  
  const subcategoryOptions = () => {
    const data = { category: category };
    axios.post("http://localhost:8000/user/getsubcategory", data)
      .then((res) => {
        console.log("Data fetched from database:", res.data);
        setSubcat(res.data); // setSubcat, not setSubcategory
        // subcategoryOptions();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    
  };
   console.log("Selected subcat:", subcat);
useEffect(() => {
    categoryOptions()
  },[]);
  
  useEffect(() => {
    if (category) {
      subcategoryOptions();
    }
  }, [category]); 
  
  

  return (
    <div>
    
    
      <form onSubmit={postingJob}>

    <input
          type="text"
          placeholder="Enter your job title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter your job description"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter about us"
          value={aboutus}
          onChange={(e) => setAboutus(e.target.value)}
          required
        />
     <select
  name="category"
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
<option value="">Select a category</option>
  {cat.map((catItem) => (
    <option key={catItem._id} value={catItem.category}>
      {catItem.category}
    </option>
  ))}
</select>
{ console.log("Selected category:", category) } 
{ console.log("Selected category:", subcat) } 
{category && category.length > 0 ? (
        <select
          name="subcategory"
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
        >
         <option value="">Select a Subcategory</option>
         
         {subcat.map(sub =>
  sub.subcategories.map(a => (
    <option key={a.name} value={a.name}>
      {a.name}
    </option>
  ))
)}
{console.log("Selected subcat:", subcat)}
 
        </select>
      ) : (
        <p>No categories available.</p>
      )}

        <div>
          <h3>Gender</h3>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={handleGenderChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={handleGenderChange}
            />
            Female
          </label>
        </div>

        <div>
          <label>Select Job Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <h2>Post a Job</h2>
        <div className="days-container">
          {weekDays.map((day) => {
            const isSelected = selectedDays.some((entry) => entry.day === day);
            const daySchedule = selectedDays.find((entry) => entry.day === day) || {};
            return (
              <div
                key={day}
                className="day-option"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                {/* Icon indicating selection status */}
                <span
                  style={{
                    marginRight: "8px",
                    color: isSelected ? "green" : "red",
                    fontSize: "20px",
                  }}
                >
                  {isSelected ? "✔" : "✖"}
                </span>
                <input
                  type="checkbox"
                  id={day}
                  checked={isSelected}
                  onChange={() => toggleDay(day)}
                  style={{display:"none"}}
                />
                <label htmlFor={day} style={{ marginRight: "8px" }}>
                  {day}
                </label>
                {/* When day is selected, show time inputs */}
                {isSelected && (
                  <div
                    className="schedule-inputs"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <input
                      type="time"
                      placeholder="Start Time"
                      value={daySchedule.start || ""}
                      onChange={(e) =>
                        handleScheduleChange(day, "start", e.target.value)
                      }
                      required
                    />
                    <span style={{ margin: "0 4px" }}>to</span>
                    <input
                      type="time"
                      placeholder="End Time"
                      value={daySchedule.end || ""}
                      onChange={(e) =>
                        handleScheduleChange(day, "end", e.target.value)
                      }
                      required
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default JobPost;

