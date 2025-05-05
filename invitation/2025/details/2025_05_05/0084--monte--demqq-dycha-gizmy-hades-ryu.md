### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, dycha, Gizmy, hades, ryu<br />
Global Rank: [84](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [51]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  789.3<br />
<br />
Final Rank Value (789.3) = Starting Rank Value (747.6) + Head To Head Adjustments (41.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.304[<sup>1</sup>](#table2)
- Bounty Collected: 0.354[<sup>2</sup>](#table1)
- Opponent Network: 0.108[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.192<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 747.6
- 400 + ( ( 0.192 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 747.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1865 | 2025-02-15 | fnatic        | W   | 0.674      | 0.435        | 0.026 (0.008)    | 0.787 (0.231)    | 0 (0.000) |    14.36 | DemQQ, dycha, Gizmy, hades, ryu   |
|           14 |     1927 | 2025-02-13 | NAVI Junior   | W   | 0.661      | 0.435        | 0.456 (0.131)    | 1.000 (0.287)    | 0 (0.000) |    17.59 | DemQQ, dycha, Gizmy, hades, ryu   |
|           13 |     1986 | 2025-02-11 | CYBERSHOKE    | W   | 0.645      | 0.435        | 0.005 (0.001)    | 0.884 (0.248)    | 0 (0.000) |    11.07 | DemQQ, dycha, Gizmy, hades, ryu   |
|           12 |     2145 | 2025-02-07 | SINNERS       | L   | 0.619      | -            | -                | -                | -         |    -4.79 | DemQQ, dycha, Gizmy, hades, ryu   |
|           11 |     2171 | 2025-02-06 | Betclic       | L   | 0.612      | -            | -                | -                | -         |    -3.03 | DemQQ, dycha, Gizmy, hades, ryu   |
|           10 |     2231 | 2025-02-03 | Sashi         | W   | 0.594      | 0.435        | 0.005 (0.001)    | 0.705 (0.182)    | 0 (0.000) |    13.41 | DemQQ, dycha, Gizmy, hades, ryu   |
|            9 |     2255 | 2025-02-01 | moneyF        | L   | 0.581      | -            | -                | -                | -         |   -13.84 | DemQQ, dycha, Gizmy, hades, ryu   |
|            8 |     2554 | 2024-12-16 | ECLOT         | L   | 0.267      | -            | -                | -                | -         |    -1.25 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            7 |     2627 | 2024-12-13 | Metizport     | L   | 0.246      | -            | -                | -                | -         |    -2.05 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            6 |     2666 | 2024-12-10 | Aurora        | W   | 0.227      | 0.435        | 0.040 (0.004)    | 0.613 (0.061)    | 0 (0.000) |     4.51 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            5 |     2675 | 2024-12-09 | GUN5          | W   | 0.220      | 0.435        | 0.059 (0.006)    | 0.737 (0.071)    | 0 (0.000) |     4.88 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            4 |     2989 | 2024-11-24 | ENCE          | L   | 0.120      | -            | -                | -                | -         |    -0.72 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            3 |     3018 | 2024-11-23 | Johnny Speeds | W   | 0.113      | 0.354        | 0.004 (0.000)    | 0.012 (0.000)    | 0 (0.000) |     1.27 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            2 |     3350 | 2024-11-10 | FAVBET        | W   | 0.027      | 0.354        | 0.007 (0.000)    | 0.241 (0.002)    | 0 (0.000) |     0.34 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            1 |     3408 | 2024-11-07 | 500           | L   | 0.006      | -            | -                | -                | -         |    -0.05 | DemQQ, dycha, hades, KEi, kRaSnaL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,851.34)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-17 |      0.275 | $5,000.00      | $1,372.55       |
| 2024-11-24 |      0.120 | $4,000.00      | $478.80         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
