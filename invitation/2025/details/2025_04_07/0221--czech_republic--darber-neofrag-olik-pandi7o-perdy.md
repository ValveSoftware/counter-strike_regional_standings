### Roster Details<br />
Team Name: Czech Republic<br />
Roster: darber, NEOFRAG, olik, pandi7o, PerdY<br />
Global Rank: [221](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [130]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  565.3<br />
<br />
Final Rank Value (565.3) = Starting Rank Value (553.5) + Head To Head Adjustments (11.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.076[<sup>2</sup>](#table1)

The average of these factors is 0.083<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 553.5
- 400 + ( ( 0.083 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 553.5


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
|            5 |     2434 | 2024-11-15 | The Huns        | W   | 0.246      | 0.617        | 0.064 (0.010)    | 0.479 (0.073)    | 1 (0.246) |     7.41 | darber, NEOFRAG, olik, pandi7o, PerdY |
|            4 |     2445 | 2024-11-15 | Dusty Roots     | L   | 0.245      | -            | -                | -                | -         |    -2.09 | darber, NEOFRAG, olik, pandi7o, PerdY |
|            3 |     2453 | 2024-11-14 | Partizan        | L   | 0.242      | -            | -                | -                | -         |    -0.50 | darber, NEOFRAG, olik, pandi7o, PerdY |
|            2 |     2499 | 2024-11-13 | SINNERS Academy | W   | 0.234      | 0.617        | 0.001 (0.000)    | 0.026 (0.004)    | 1 (0.234) |     4.74 | darber, NEOFRAG, olik, pandi7o, PerdY |
|            1 |     2501 | 2024-11-13 | Kitsune         | W   | 0.234      | 0.617        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.234) |     2.18 | darber, NEOFRAG, olik, pandi7o, PerdY |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
