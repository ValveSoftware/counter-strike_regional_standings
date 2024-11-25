### Roster Details<br />
Team Name: Chinggis Warriors<br />
Roster: fury5k, NEUZ, sergelen19k, xerolte, Zilkenberg<br />
Global Rank: [135](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_11_25.md)<br />
Regional Rank: [9]( ../../standings_asia_2024_11_25.md)<br />
<br />
Final Rank Value:  777.9<br />
<br />
Final Rank Value (777.9) = Starting Rank Value (774.9) + Head To Head Adjustments (3.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.187[<sup>2</sup>](#table1)

The average of these factors is 0.187<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 774.9
- 400 + ( ( 0.187 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 774.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     1402 | 2024-09-27 | Chinggis Warriors | L   | 0.807      | -            | -                | -                | -         |    -6.83 | fury5k, NEUZ, sergelen19k, xerolte, Zilkenberg |
|           12 |     1409 | 2024-09-27 | ATOX              | W   | 0.806      | 0.143        | 0.034 (0.004)    | 0.273 (0.031)    | 1 (0.806) |    18.01 | fury5k, NEUZ, sergelen19k, xerolte, Zilkenberg |
|           11 |     2266 | 2024-08-30 | ATOX              | L   | 0.619      | -            | -                | -                | -         |    -5.54 | fury5k, NEUZ, sergelen19k, xerolte, Zilkenberg |
|           10 |     2314 | 2024-08-29 | GR                | L   | 0.612      | -            | -                | -                | -         |   -10.65 | fury5k, NEUZ, sergelen19k, xerolte, Zilkenberg |
|            9 |     2366 | 2024-08-28 | THE               | W   | 0.606      | 0.143        | 0.000 (0.000)    | 0.065 (0.006)    | 0 (0.000) |     3.94 | fury5k, NEUZ, sergelen19k, xerolte, Zilkenberg |
|            8 |     3141 | 2024-08-06 | TYLOO             | L   | 0.460      | -            | -                | -                | -         |    -3.61 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            7 |     3174 | 2024-08-05 | Lynn Vision       | W   | 0.453      | 0.380        | 0.033 (0.006)    | 0.254 (0.044)    | 1 (0.453) |    11.83 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            6 |     3246 | 2024-08-03 | Steel Helmet      | W   | 0.439      | 0.380        | 0.000 (0.000)    | 0.021 (0.004)    | 1 (0.439) |     1.50 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            5 |     4021 | 2024-07-12 | Alter Ego         | L   | 0.293      | -            | -                | -                | -         |    -7.43 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            4 |     4025 | 2024-07-12 | TYLOO             | L   | 0.293      | -            | -                | -                | -         |    -2.36 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            3 |     4026 | 2024-07-12 | GR                | W   | 0.292      | 0.143        | 0.022 (0.001)    | 0.167 (0.007)    | 0 (0.000) |     4.21 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            2 |     4805 | 2024-06-01 | Aurora            | L   | 0.019      | -            | -                | -                | -         |    -0.07 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            1 |     4854 | 2024-05-30 | OG                | W   | 0.007      | 0.500        | 0.006 (0.000)    | 0.000 (0.000)    | 1 (0.007) |     0.05 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,898.56)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
