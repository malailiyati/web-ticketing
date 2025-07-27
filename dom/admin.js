const ctx = document.getElementById("salesChart");
const salesChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "",
        data: [500, 400, 500, 600, 800, 700],
        borderWidth: 1,
        borderColor: "blue",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return "$" + value;
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

const dataMap = {
  spiderman: {
    monthly: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      data: [500, 400, 500, 600, 800, 700],
      title: "Spiderman - Monthly",
    },
    weekly: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      data: [70, 50, 105, 60],
      title: "Spiderman - weekly",
    },
  },
  blackwidow: {
    monthly: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      data: [500, 600, 700, 500, 200, 400],
      title: "Black Widow - Monthly",
    },
    weekly: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      data: [90, 50, 45, 70],
      title: "Black Widow - weekly",
    },
  },
};

const movieNameSelect = document.getElementById("movieName");
const timeFilterSelect = document.getElementById("timeFilter");
const salesChartTitle = document.querySelector(".salesChartTitle");

function updateSalesChart() {
  const movie = movieNameSelect.value;
  const time = timeFilterSelect.value;
  const selected = dataMap[movie][time];

  salesChart.data.labels = selected.labels;
  salesChart.data.datasets[0].data = selected.data;
  salesChart.update();

  salesChartTitle.textContent = selected.title;
}

const btnSalesChart = document.querySelector(".btnSalesChart");
btnSalesChart.addEventListener("click", updateSalesChart);

// ticket sales chart

const ctxTicket = document.getElementById("ticketChart");
const ticketSalesChart = new Chart(ctxTicket, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "",
        data: [800, 700, 400, 500, 650, 470],
        borderWidth: 1,
        borderColor: "blue",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return "$" + value;
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

const ticketMap = {
  adventure: {
    purwokerto: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      data: [800, 700, 400, 500, 650, 470],
      title: "Adventure - Purwokerto",
    },
    bogor: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      data: [80, 60, 105, 90],
      title: "Adventure, Bogor",
    },
  },
  action: {
    purwokerto: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      data: [300, 400, 700, 500, 400, 800],
      title: "Action - Purwokerto",
    },
    bogor: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      data: [60, 50, 45, 70],
      title: "Action - Bogor",
    },
  },
};

const categorySelect = document.getElementById("category");
const locationSelect = document.getElementById("locationFilter");
const ticketSalesTitle = document.querySelector(".ticketSalesTitle");

function updateTicketSalesChart() {
  const category = categorySelect.value;
  const location = locationSelect.value;
  const ticketSelected = ticketMap[category][location];

  ticketSalesChart.data.labels = ticketSelected.labels;
  ticketSalesChart.data.datasets[0].data = ticketSelected.data;
  ticketSalesChart.update();

  ticketSalesTitle.textContent = ticketSelected.title;
}

const btnTicketSalesChart = document.querySelector(".btnTicketSalesChart");
btnTicketSalesChart.addEventListener("click", updateTicketSalesChart);
