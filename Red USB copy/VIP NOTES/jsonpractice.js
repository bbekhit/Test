import React, { Component } from "react";

class Metro extends Component {
  render() {
    const data = {
      coverageOptions: [
        {
          name: "compDeductible",
          title: "Comprehensive Deductible",
          type: "optionBar",
          options: [
            {
              name: "$250",
              value: "250"
            },
            {
              name: "$500",
              value: "500"
            },
            {
              name: "$1K",
              value: "1000"
            },
            {
              name: "No Coverage",
              value: "9999"
            }
          ]
        },
        {
          name: "collDeductible",
          title: "Collision Deductible",
          type: "optionBar",
          options: [
            {
              name: "$250",
              value: "250"
            },
            {
              name: "$500",
              value: "500"
            },
            {
              name: "$1K",
              value: "1000"
            },
            {
              name: "No Coverage",
              value: "9999"
            }
          ]
        },
        {
          name: "rentalCar",
          title: "Rental Car Reimbursement",
          type: "optionBar",
          options: [
            {
              name: "No",
              value: "false"
            },
            {
              name: "Yes",
              value: "true"
            }
          ]
        },
        {
          name: "roadside",
          title: "Roadside Assistance",
          type: "optionBar",
          options: [
            {
              name: "No",
              value: "false"
            },
            {
              name: "Yes",
              value: "true"
            }
          ]
        }
      ]
    };

    return (
      <div className="wrapper">
        <div className="title">Car Type: Ford</div>
        <div className="content">
          {data.coverageOptions.map((item, i) => (
            <div className="item-wrapper" key={i}>
              <p className="title-name">{item.title}</p>
              <div className="options">
                {item.options.map((subItem, i) => (
                  <table key={i}>
                    <tbody>
                      <tr>
                        <td>{subItem.name}</td>
                      </tr>
                    </tbody>
                  </table>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Metro;
// *********************************************************************************************************
import React, { Component } from "react";

class Metro2 extends Component {
  render() {
    const data = {
      coverageOptions: [
        {
          name: "compDeductible",
          title: "Comprehensive Deductible",
          type: "optionBar",
          options: [
            {
              name: "$250",
              value: "250"
            },
            {
              name: "$500",
              value: "500"
            },
            {
              name: "$1K",
              value: "1000"
            },
            {
              name: "No Coverage",
              value: "9999"
            }
          ]
        },
        {
          name: "collDeductible",
          title: "Collision Deductible",
          type: "optionBar",
          options: [
            {
              name: "$250",
              value: "250"
            },
            {
              name: "$500",
              value: "500"
            },
            {
              name: "$1K",
              value: "1000"
            },
            {
              name: "No Coverage",
              value: "9999"
            }
          ]
        },
        {
          name: "rentalCar",
          title: "Rental Car Reimbursement",
          type: "optionBar",
          options: [
            {
              name: "No",
              value: "false"
            },
            {
              name: "Yes",
              value: "true"
            }
          ]
        },
        {
          name: "roadside",
          title: "Roadside Assistance",
          type: "optionBar",
          options: [
            {
              name: "No",
              value: "false"
            },
            {
              name: "Yes",
              value: "true"
            }
          ]
        }
      ]
    };

    let options = data.coverageOptions
      .filter(item => item.name === "compDeductible")[0]
      .options.map((subItem, i) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{subItem.name}</td>
          <td>{subItem.value}</td>
        </tr>
      ));
    return (
      <div className="wrapper2">
        {data.coverageOptions.map((item, i) =>
          item.name === "compDeductible" ? (
            <table key={i}>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>{item.title}</th>
                  <th>{item.name}</th>
                </tr>
              </thead>
              <tbody>{options}</tbody>
            </table>
          ) : null
        )}
      </div>
    );
  }
}

export default Metro2;
// *************************************************************************************************
import React, { Component } from "react";

class Metro3 extends Component {
  render() {
    const data = {
      coverageOptions: [
        {
          name: "compDeductible",
          title: "Comprehensive Deductible",
          type: "optionBar",
          options: [
            {
              name: "$250",
              value: "250"
            },
            {
              name: "$500",
              value: "500"
            },
            {
              name: "$1K",
              value: "1000"
            },
            {
              name: "No Coverage",
              value: "9999"
            }
          ]
        },
        {
          name: "collDeductible",
          title: "Collision Deductible",
          type: "optionBar",
          options: [
            {
              name: "$250",
              value: "250"
            },
            {
              name: "$500",
              value: "500"
            },
            {
              name: "$1K",
              value: "1000"
            },
            {
              name: "No Coverage",
              value: "9999"
            }
          ]
        },
        {
          name: "rentalCar",
          title: "Rental Car Reimbursement",
          type: "optionBar",
          options: [
            {
              name: "No",
              value: "false"
            },
            {
              name: "Yes",
              value: "true"
            }
          ]
        },
        {
          name: "roadside",
          title: "Roadside Assistance",
          type: "optionBar",
          options: [
            {
              name: "No",
              value: "false"
            },
            {
              name: "Yes",
              value: "true"
            }
          ]
        }
      ]
    };
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.coverageOptions.map((item, i) => (
          <div key={i} className="card">
            <p>{item.title}</p>
            <div>
              {item.options.map((subItem, i) => (
                <div>
                  <p>{subItem.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Metro3;
// **********************************************************************************************
import React, { Component } from "react";

export default class Metro4 extends Component {
  render() {
    const data = [
      {
        id: 1,
        name: "Hello Kitty",
        items: [
          {
            id: 2,
            name: "Kitty Muu Muu"
          },
          {
            id: 3,
            name: "Kitty smack"
          }
        ]
      },
      {
        id: 4,
        name: "Hello Pussy",
        items: [
          {
            id: 5,
            name: "World",
            items: [
              {
                id: 6,
                name: "Hello Pussy world"
              }
            ]
          }
        ]
      }
    ];
    const data2 = [
      {
        continent: "Africa",
        countries: [
          {
            name: "Nigeria",
            flag: "NG"
          },
          {
            name: "Ethiopia",
            flag: "ET"
          },
          {
            name: "Egypt",
            flag: "EG"
          },
          {
            name: "DR Congo",
            flag: "CD"
          },
          {
            name: "South Africa",
            flag: "ZA"
          }
        ]
      },
      {
        continent: "America",
        countries: [
          {
            name: "USA",
            flag: "US"
          },
          {
            name: "Brazil",
            flag: "BR"
          },
          {
            name: "Mexico",
            flag: "MX"
          },
          {
            name: "Colombia",
            flag: "CO"
          },
          {
            name: "Argentina",
            flag: "AR"
          }
        ]
      },
      {
        continent: "Asia",
        countries: [
          {
            name: "China",
            flag: "CN"
          },
          {
            name: "India",
            flag: "IN"
          },
          {
            name: "Indonesia",
            flag: "ID"
          },
          {
            name: "Pakistan",
            flag: "PK"
          },
          {
            name: "Bangladesh",
            flag: "BD"
          }
        ]
      },
      {
        continent: "Europe",
        countries: [
          {
            name: "Russia",
            flag: "RU"
          },
          {
            name: "Germany",
            flag: "DE"
          },
          {
            name: "UK",
            flag: "GB"
          },
          {
            name: "France",
            flag: "FR"
          },
          {
            name: "Italy",
            flag: "IT"
          }
        ]
      },
      {
        continent: "Oceania",
        countries: [
          {
            name: "Australia",
            flag: "AU"
          },
          {
            name: "Papua New Guinea",
            flag: "PG"
          },
          {
            name: "New Zealand",
            flag: "NZ"
          },
          {
            name: "Fiji",
            flag: "FJ"
          },
          {
            name: "Solomon Islands",
            flag: "SB"
          }
        ]
      }
    ];

    return (
      <div>
        {data.map((item, i) => (
          <ul key={i}>
            <li className="first">{item.name}</li>
            {item.items.map((subItem, i) => (
              <ul key={i}>
                <li>{subItem.name}</li>
                {subItem.items
                  ? subItem.items.map((sItem, i) => (
                      <ul key={i}>
                        <li>{sItem.name}</li>
                      </ul>
                    ))
                  : null}
              </ul>
            ))}
          </ul>
        ))}
        <div style={{ border: "2px solid lightgray" }}>
          {data2
            .filter(item => item.continent === "Africa")[0]
            .countries.map((item, i) => (
              <div key={i} style={{ display: "flex", marginBottom: "10px" }}>
                <input
                  style={{ alignSelf: "center", width: "15px" }}
                  type="checkbox"
                />
                <p>{item.name}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
