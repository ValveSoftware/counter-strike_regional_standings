### Roster Details<br />
Team Name: FORZE Reload<br />
Roster: KusMe, rexxie, shady, Something, spirit<br />
Global Rank: [143](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [91]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  669.6<br />
<br />
Final Rank Value (669.6) = Starting Rank Value (667.2) + Head To Head Adjustments (2.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.340[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 667.2
- 400 + ( ( 0.145 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 667.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      431 | 2025-03-17 | Roler Coaster | L   | 1.000      | -            | -                | -                | -         |   -18.58 | KusMe, rexxie, shady, Something, spirit   |
|            7 |      443 | 2025-03-17 | Chimera       | W   | 1.000      | 0.143        | 0.012 (0.002)    | 0.429 (0.061)    | 0 (0.000) |    16.77 | KusMe, rexxie, shady, Something, spirit   |
|            6 |     1757 | 2024-12-20 | AMKAL         | L   | 0.480      | -            | -                | -                | -         |    -7.30 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            5 |     1771 | 2024-12-19 | K27           | W   | 0.473      | 0.333        | 0.004 (0.001)    | 0.150 (0.024)    | 0 (0.000) |     7.49 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            4 |     1819 | 2024-12-15 | RUSH B        | L   | 0.447      | -            | -                | -                | -         |    -4.03 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            3 |     2052 | 2024-12-04 | Monte         | L   | 0.374      | -            | -                | -                | -         |    -3.04 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            2 |     2072 | 2024-12-03 | Viperio       | W   | 0.366      | 0.333        | 0.001 (0.000)    | 0.034 (0.004)    | 0 (0.000) |     4.52 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            1 |     2097 | 2024-12-02 | BC.Game       | W   | 0.359      | 0.333        | 0.016 (0.002)    | 0.142 (0.017)    | 0 (0.000) |     6.54 | dwushka, KusMe, shady, spirit, xdENiSZERA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,172.55)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      0.486 | $1,000.00      | $486.50         |
| 2024-12-15 |      0.447 | $3,500.00      | $1,564.59       |
| 2024-12-04 |      0.374 | $3,000.00      | $1,121.46       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
