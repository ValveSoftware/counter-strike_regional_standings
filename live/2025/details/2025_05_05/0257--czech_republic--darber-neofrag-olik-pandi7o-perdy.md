### Roster Details<br />
Team Name: Czech Republic<br />
Roster: darber, NEOFRAG, olik, pandi7o, PerdY<br />
Global Rank: [257](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [145]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  507.6<br />
<br />
Final Rank Value (507.6) = Starting Rank Value (504.9) + Head To Head Adjustments (2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.016[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 504.9
- 400 + ( ( 0.058 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 504.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3186 | 2024-11-15 | The Huns        | W   | 0.059      | 0.617        | 0.053 (0.002)    | 0.714 (0.026)    | 1 (0.059) |     1.82 | darber, NEOFRAG, olik, pandi7o, PerdY |
|            4 |     3197 | 2024-11-15 | Dusty Roots     | L   | 0.059      | -            | -                | -                | -         |    -0.53 | darber, NEOFRAG, olik, pandi7o, PerdY |
|            3 |     3205 | 2024-11-14 | Partizan        | L   | 0.055      | -            | -                | -                | -         |    -0.11 | darber, NEOFRAG, olik, pandi7o, PerdY |
|            2 |     3251 | 2024-11-13 | SINNERS Academy | W   | 0.047      | 0.617        | 0.000 (0.000)    | 0.006 (0.000)    | 1 (0.047) |     0.95 | darber, NEOFRAG, olik, pandi7o, PerdY |
|            1 |     3253 | 2024-11-13 | Kitsune         | W   | 0.047      | 0.617        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.047) |     0.53 | darber, NEOFRAG, olik, pandi7o, PerdY |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
