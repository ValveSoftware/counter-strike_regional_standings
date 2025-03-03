### Roster Details<br />
Team Name: Latvia<br />
Roster: Frip, keen, prelideN, rud, shadiy<br />
Global Rank: [210](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [129]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  616.6<br />
<br />
Final Rank Value (616.6) = Starting Rank Value (600.8) + Head To Head Adjustments (15.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.167[<sup>2</sup>](#table1)

The average of these factors is 0.104<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 600.8
- 400 + ( ( 0.104 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 600.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1491 | 2024-11-15 | Tunisia  | W   | 0.480      | 0.617        | 0.000 (0.000)    | 0.028 (0.008)    | 1 (0.480) |     3.98 | Frip, keen, prelideN, rud, shadiy |
|            4 |     1495 | 2024-11-15 | Nexus    | L   | 0.479      | -            | -                | -                | -         |    -0.98 | Frip, keen, prelideN, rud, shadiy |
|            3 |     1528 | 2024-11-14 | kONO     | W   | 0.474      | 0.617        | 0.020 (0.006)    | 0.425 (0.124)    | 1 (0.474) |    11.16 | Frip, keen, prelideN, rud, shadiy |
|            2 |     1531 | 2024-11-14 | Novaq    | L   | 0.473      | -            | -                | -                | -         |    -1.94 | Frip, keen, prelideN, rud, shadiy |
|            1 |     1537 | 2024-11-14 | USA      | W   | 0.473      | 0.617        | 0.000 (0.000)    | 0.004 (0.001)    | 1 (0.473) |     3.57 | Frip, keen, prelideN, rud, shadiy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
