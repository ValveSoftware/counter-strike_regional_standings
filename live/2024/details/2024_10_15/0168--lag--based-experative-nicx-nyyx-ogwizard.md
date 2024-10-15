### Roster Details<br />
Team Name: LAG<br />
Roster: based, Experative, nicx, Nyyx, ogwizard<br />
Global Rank: [168](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_15.md)<br />
Regional Rank: [47]( ../../standings_americas_2024_10_15.md)<br />
<br />
Final Rank Value:  658.3<br />
<br />
Final Rank Value (658.3) = Starting Rank Value (643.2) + Head To Head Adjustments (15.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.288[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.125<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 643.2
- 400 + ( ( 0.125 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 643.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     3396 | 2024-06-13 | Mythic           | L   | 0.377      | -            | -                | -                | -         |    -4.31 | based, Experative, nicx, Nyyx, ogwizard |
|           18 |     3568 | 2024-06-08 | Homyno           | W   | 0.343      | 0.371        | 0.005 (0.001)    | 0.116 (0.015)    | 0 (0.000) |     5.45 | based, Experative, nicx, Nyyx, ogwizard |
|           17 |     3624 | 2024-06-07 | Wildcard         | L   | 0.337      | -            | -                | -                | -         |    -0.79 | based, Experative, nicx, Nyyx, ogwizard |
|           16 |     3708 | 2024-06-06 | Vibe             | W   | 0.328      | 0.371        | 0.000 (0.000)    | 0.023 (0.003)    | 0 (0.000) |     3.13 | based, Experative, nicx, Nyyx, ogwizard |
|           15 |     3749 | 2024-06-05 | NRG              | L   | 0.323      | -            | -                | -                | -         |    -2.05 | based, Experative, nicx, Nyyx, ogwizard |
|           14 |     3758 | 2024-06-05 | Carpe Diem       | W   | 0.322      | 0.384        | 0.002 (0.000)    | 0.034 (0.004)    | 0 (0.000) |     5.56 | based, Experative, nicx, Nyyx, ogwizard |
|           13 |     3801 | 2024-06-04 | Carpe Diem       | W   | 0.317      | 0.477        | 0.002 (0.000)    | 0.034 (0.005)    | 0 (0.000) |     5.62 | based, Experative, nicx, Nyyx, ogwizard |
|           12 |     3810 | 2024-06-04 | Retirement Home  | W   | 0.316      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.02 | based, Experative, nicx, Nyyx, ogwizard |
|           11 |     4115 | 2024-05-22 | Limitless        | W   | 0.230      | 0.477        | 0.000 (0.000)    | 0.039 (0.004)    | 0 (0.000) |     3.07 | based, Experative, nicx, Nyyx, ogwizard |
|           10 |     4118 | 2024-05-22 | Limitless        | W   | 0.230      | 0.477        | 0.000 (0.000)    | 0.039 (0.004)    | 0 (0.000) |     3.13 | based, Experative, nicx, Nyyx, ogwizard |
|            9 |     4121 | 2024-05-22 | Wildcard         | L   | 0.229      | -            | -                | -                | -         |    -0.47 | based, Experative, nicx, Nyyx, ogwizard |
|            8 |     4365 | 2024-05-15 | NRG              | L   | 0.183      | -            | -                | -                | -         |    -1.06 | based, Experative, nicx, Nyyx, ogwizard |
|            7 |     4373 | 2024-05-15 | NRG              | L   | 0.183      | -            | -                | -                | -         |    -1.07 | based, Experative, nicx, Nyyx, ogwizard |
|            6 |     4419 | 2024-05-14 | Carpe Diem       | W   | 0.176      | 0.477        | 0.002 (0.000)    | 0.034 (0.003)    | 0 (0.000) |     3.05 | based, Experative, nicx, Nyyx, ogwizard |
|            5 |     4426 | 2024-05-14 | Carpe Diem       | L   | 0.176      | -            | -                | -                | -         |    -2.53 | based, Experative, nicx, Nyyx, ogwizard |
|            4 |     4561 | 2024-05-09 | M80              | L   | 0.143      | -            | -                | -                | -         |    -0.10 | based, Experative, nicx, Nyyx, ogwizard |
|            3 |     4566 | 2024-05-09 | M80              | L   | 0.143      | -            | -                | -                | -         |    -0.10 | based, Experative, nicx, Nyyx, ogwizard |
|            2 |     4580 | 2024-05-08 | Party Astronauts | L   | 0.137      | -            | -                | -                | -         |    -1.74 | based, Experative, nicx, Nyyx, ogwizard |
|            1 |     4585 | 2024-05-08 | Party Astronauts | L   | 0.136      | -            | -                | -                | -         |    -1.75 | based, Experative, nicx, Nyyx, ogwizard |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,050.02)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
