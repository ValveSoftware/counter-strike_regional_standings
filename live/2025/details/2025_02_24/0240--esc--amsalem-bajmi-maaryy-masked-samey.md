### Roster Details<br />
Team Name: ESC<br />
Roster: AMSALEM, bajmi, maaryy, mASKED, SaMey<br />
Global Rank: [240](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [141]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  566.9<br />
<br />
Final Rank Value (566.9) = Starting Rank Value (531.4) + Head To Head Adjustments (35.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.069<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 531.4
- 400 + ( ( 0.069 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 531.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |       14 | 2025-02-23 | RUSH B          | L   | 1.000      | -            | -                | -                | -         |    -6.43 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            6 |       36 | 2025-02-22 | Fire Flux       | L   | 1.000      | -            | -                | -                | -         |    -4.64 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            5 |       55 | 2025-02-21 | Rebels          | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.334 (0.048)    | 0 (0.000) |    21.78 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            4 |      703 | 2024-12-23 | WOPA            | L   | 0.777      | -            | -                | -                | -         |    -4.79 | AMSALEM, maaryy, mASKED, mhL, tomiko     |
|            3 |      716 | 2024-12-22 | Astralis Talent | W   | 0.771      | 0.333        | 0.002 (0.001)    | 0.438 (0.113)    | 0 (0.000) |    16.39 | AMSALEM, maaryy, mASKED, shushan, tomiko |
|            2 |      754 | 2024-12-19 | ENCE Academy    | L   | 0.750      | -            | -                | -                | -         |    -5.40 | AMSALEM, maaryy, mASKED, mhL, tomiko     |
|            1 |      764 | 2024-12-18 | WOPA            | W   | 0.744      | 0.333        | 0.027 (0.007)    | 0.549 (0.136)    | 0 (0.000) |    18.63 | AMSALEM, maaryy, mASKED, mhL, tomiko     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
