### Roster Details<br />
Team Name: Betera<br />
Roster: El1an, MaSvAl, OWNER, sh1nejezzz, tENZY<br />
Global Rank: [275](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [151]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  405.6<br />
<br />
Final Rank Value (405.6) = Starting Rank Value (401.0) + Head To Head Adjustments (4.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.0
- 400 + ( ( 0.001 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 401.0


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
|            5 |     1768 | 2024-12-19 | Monte            | L   | 0.474      | -            | -                | -                | -         |    -1.04 | El1an, MaSvAl, OWNER, sh1nejezzz, tENZY |
|            4 |     1815 | 2024-12-15 | FAVBET           | L   | 0.448      | -            | -                | -                | -         |    -1.84 | El1an, MaSvAl, OWNER, sh1nejezzz, supra |
|            3 |     1839 | 2024-12-14 | JiJieHao         | W   | 0.441      | 0.143        | 0.000 (0.000)    | 0.353 (0.022)    | 0 (0.000) |    11.01 | El1an, MaSvAl, OWNER, sh1nejezzz, supra |
|            2 |     1864 | 2024-12-13 | Fire Flux        | L   | 0.435      | -            | -                | -                | -         |    -1.32 | El1an, MaSvAl, OWNER, sh1nejezzz, supra |
|            1 |     2090 | 2024-12-02 | FLuffy Gangsters | L   | 0.361      | -            | -                | -                | -         |    -2.21 | El1an, MaSvAl, OWNER, sh1nejezzz, tENZY |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
