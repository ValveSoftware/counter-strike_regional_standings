### Roster Details<br />
Team Name: Betclic<br />
Roster: Demho, hfah, hypex, jcobbb, Prism<br />
Global Rank: [153](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [95]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  700.3<br />
<br />
Final Rank Value (700.3) = Starting Rank Value (697.6) + Head To Head Adjustments (2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.264[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 697.6
- 400 + ( ( 0.152 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 697.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      504 | 2025-09-17 | Monte          | L   | 1.000      | -            | -                | -                | -         |    -1.80 | Demho, hypex, Prism, wizzhehe, Xydoo |
|            9 |      588 | 2025-09-14 | Spirit Academy | L   | 1.000      | -            | -                | -                | -         |    -4.74 | adex, Demho, hypex, Prism, wizzhehe  |
|            8 |     2426 | 2025-06-21 | Inner Circle   | L   | 0.485      | -            | -                | -                | -         |    -0.77 | Demho, hfah, hypex, jcobbb, Prism    |
|            7 |     2433 | 2025-06-20 | CPH Wolves     | L   | 0.480      | -            | -                | -                | -         |    -4.49 | Demho, hfah, hypex, jcobbb, Prism    |
|            6 |     2440 | 2025-06-20 | ECLOT          | L   | 0.479      | -            | -                | -                | -         |    -2.63 | Demho, hfah, hypex, jcobbb, Prism    |
|            5 |     2458 | 2025-06-19 | CYBERSHOKE     | W   | 0.472      | 0.480        | 0.069 (0.016)    | 0.850 (0.192)    | 0 (0.000) |    12.87 | Demho, hfah, hypex, jcobbb, Prism    |
|            4 |     2783 | 2025-05-31 | Partizan       | L   | 0.345      | -            | -                | -                | -         |    -0.68 | Demho, hfah, hypex, jcobbb, Prism    |
|            3 |     2799 | 2025-05-29 | Fire Flux      | W   | 0.333      | 0.435        | 0.004 (0.001)    | 0.262 (0.038)    | 0 (0.000) |     6.20 | Demho, hfah, hypex, jcobbb, Prism    |
|            2 |     2811 | 2025-05-27 | Nexus          | L   | 0.322      | -            | -                | -                | -         |    -1.31 | Demho, hfah, hypex, jcobbb, Prism    |
|            1 |     3853 | 2025-04-10 | FaZe           | L   | 0.005      | -            | -                | -                | -         |    -0.00 | Demho, hfah, hypex, jcobbb, Prism    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,911.78)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-22 |      0.494 | $2,750.00      | $1,357.85       |
| 2025-06-01 |      0.354 | $2,000.00      | $707.59         |
| 2025-04-13 |      0.027 | $31,250.00     | $846.34         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
