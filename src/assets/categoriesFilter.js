export default {
  Status: {
    name: "Status",
    type: ["Is", "Is not"],
    value: {
      active: false,
      done: false,
    }
    
  },
  Tags: {
    name: "Tags",
    type: ["Is", "Is not", "Is set", "Is not set"],
    value: ["Active", "Closed"]
    
  },
  Priority: {
    name: "Priority",
    type: ["Is", "Is not", "Is set", "Is not set"],
    value: {
      urgent: false,
      high: false,
      normal: false,
      low: false,
      "no priority": false,
    }
    
  },
  "Due Date": {
    name: "Due Date",
    type: ["Is", "Is not", "Is set", "Is not set"],
    value: ["Next", "Last","Today", "Yestarday", "Tomorrow","Next 7 days", "Last 7 days", "This Week", "Next Week", "Last Month", "This Month", "Today & Earlier", "Last quarter", "This Quarter", "Next Quarter", "Overdue", "Later Than Today"],
    input: 1,
    extra: ["days", "weeks", "months", "years"]
    
  },
  Assignee: {
    name: "Assignee",
    type: ["Is", "Is not", "Is set", "Is not set"],
    value: ["Unassigned", "Me"]
    
  },
  Archived: {
    name: "Archived",
    type: ["Is archived", "Is not archived"], 
  },
  "Assigned comment": {
    name: "Assigned comment",
    type: ["Has assigned comments", "Doesn't have assigned comments"], 
  },
  "Created by": {
    name: "Created by",
    type: ["Is", "Is not"],
    value: ["Unassigned", "Me"],
  },
  "Date closed": {
    name: "Date closed",
    type: ["Is", "Is not", "Is set", "Is not set"],
    value: ["Next", "Last","Today", "Yestarday", "Tomorrow","Next 7 days", "Last 7 days", "This Week", "Next Week", "Last Month", "This Month", "Today & Earlier", "Last quarter", "This Quarter", "Next Quarter", "Overdue", "Later Than Today"],
    input: 1,
    extra: ["days", "weeks", "months", "years"]
  },
  "Date created": {
    name: "Date created",
    type: ["Is", "Is not", "Is set", "Is not set"],
    value: ["Next", "Last","Today", "Yestarday", "Tomorrow","Next 7 days", "Last 7 days", "This Week", "Next Week", "Last Month", "This Month", "Today & Earlier", "Last quarter", "This Quarter", "Next Quarter", "Overdue", "Later Than Today"],
    input: 1,
    extra: ["days", "weeks", "months", "years"]
  },
  "Date updated": {
    name: "Date updated",
    type: ["Is", "Is not", "Is set", "Is not set"],
    value: ["Next", "Last","Today", "Yestarday", "Tomorrow","Next 7 days", "Last 7 days", "This Week", "Next Week", "Last Month", "This Month", "Today & Earlier", "Last quarter", "This Quarter", "Next Quarter", "Overdue", "Later Than Today"],
    input: 1,
    extra: ["days", "weeks", "months", "years"]
  },
  Watcher: {
    name: "Watcher",
    type: ["Is", "Is not", "Is set", "Is not set"],
    value: ["Unassigned", "Me"]
  },


  
}